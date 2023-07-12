import { QueuePublishDirectUseCase } from './queuePublishDirect.usecase';
import { RabbitMQPublishEntity } from '../entities/RabbitMQPublish';
import { QueueService } from '../infra/queue/queue.service';

class MockQueueService implements QueueService {
  publish = jest.fn();

  consume(queue: string, callback: (message: any) => void): Promise<void> {
    return Promise.resolve();
  }
}

describe('QueuePublishDirectUseCase', () => {
  let queuePublishDirectUseCase: QueuePublishDirectUseCase;
  let queueService: MockQueueService;

  beforeEach(() => {
    queueService = new MockQueueService();
    queuePublishDirectUseCase = new QueuePublishDirectUseCase(queueService);
  });

  it('should publish a message to the queue', async () => {
    const message = { key: 'value' };

    const rabbitMQPublishEntity = new RabbitMQPublishEntity({
      exchange: 'exchange_operation',
      message,
      route_key: 'create_operation',
      type: 'direct',
    });

    jest.spyOn(queueService, 'publish').mockResolvedValue(undefined);

    await queuePublishDirectUseCase.execute(message);

    expect(queueService.publish).toHaveBeenCalledWith(rabbitMQPublishEntity);
  });
});
