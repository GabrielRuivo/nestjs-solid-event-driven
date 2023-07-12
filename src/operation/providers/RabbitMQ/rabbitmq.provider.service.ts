import { Injectable } from '@nestjs/common';
import { connect, Channel } from 'amqplib';
import { QueueService } from 'src/operation/infra/queue/queue.service';
import { rabbitMQConfig } from './config';

@Injectable()
export class RabbitMQProviderService implements QueueService {
  private connection: Promise<Channel>;

  constructor() {
    this.connection = this.createConnection();
  }

  private async createConnection(): Promise<Channel> {
    const { hostname, port, username, password } = rabbitMQConfig;
    const connectionString = `amqp://${username}:${password}@${hostname}:${port}`;
    const connection = await connect(connectionString);
    const channel = await connection.createChannel();

    const dlqName = 'dlq';
    await channel.assertQueue(dlqName, { durable: true });

    await channel.assertExchange(dlqName + '-exchange', 'direct');
    await channel.bindQueue(dlqName, dlqName + '-exchange', '');

    return channel;
  }

  // rabbitMQProviderService.consumeDLQ((message) => {
  //    Lógica para tratar a mensagem da DLQ
  //    Pode ser registro de log, envio de notificação, reprocessamento, etc.
  // });

  // Exemplo de reprocessamento de todas as mensagens da DLQ
  // rabbitMQProviderService.consumeDLQ(async (message) => {
  //   // Lógica para reprocessar a mensagem (por exemplo, validar e publicar novamente)
  //   await rabbitMQProviderService.publish({
  //     exchange: 'nome_da_exchange',
  //     type: 'tipo_da_exchange',
  //     route_key: 'chave_de_rota',
  //     message,
  //   });
  // });

  public async publish({
    exchange,
    message,
    route_key,
    type,
  }: {
    exchange: string;
    type: string;
    route_key: string;
    message: any;
  }): Promise<void> {
    const channel = await this.connection;
    channel.assertExchange(exchange, type);

    const published = channel.publish(
      exchange,
      route_key,
      Buffer.from(JSON.stringify(message)),
    );

    if (!published) {
      // A publicação falhou, envie a mensagem para a DLQ
      const dlqExchange = 'dlq-exchange';
      channel.publish(dlqExchange, '', Buffer.from(JSON.stringify(message)));
    }
  }

  public async consume(
    queue: string,
    callback: (message: any) => void,
  ): Promise<void> {
    const channel = await this.connection;
    channel.assertQueue(queue, { durable: true });
    channel.consume(queue, (msg) => {
      if (msg !== null) {
        const message = JSON.parse(msg.content.toString());
        callback(message);
        channel.ack(msg);
      }
    });
  }

  public async consumeDLQ(callback: (message: any) => void): Promise<void> {
    const dlqName = 'dlq'; // Nome da fila de DLQ
    const channel = await this.connection;
    channel.assertQueue(dlqName, { durable: true });

    channel.consume(dlqName, (msg) => {
      if (msg !== null) {
        const message = JSON.parse(msg.content.toString());
        callback(message);
        channel.ack(msg);
      }
    });
  }
}
