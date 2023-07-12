import { Injectable } from '@nestjs/common';
import { RabbitMQPublishEntity } from '../entities/RabbitMQPublish';
import { QueueService } from '../infra/queue/queue.service';

@Injectable()
export class QueuePublishDirectUseCase {
  constructor(private readonly queueService: QueueService) {}

  public async execute(message: any) {
    const rabbitmqPublish = new RabbitMQPublishEntity({
      exchange: 'exchange_operation',
      message,
      route_key: 'create_operation',
      type: 'direct',
    });

    await this.queueService.publish(rabbitmqPublish);
  }
}
