import { Module } from '@nestjs/common';
import { OperationInMemoryRepository } from './infra/database/in-memory/operation-in-memory.repository';
import { OperationController } from './infra/http/controllers/operation.controller';
import { QueueService } from './infra/queue/queue.service';
import { RabbitMQProviderService } from './providers/RabbitMQ/rabbitmq.provider.service';
import { OperationRepository } from './repositories/operation.repository';
import { CreateOperationUseCase } from './usecases/createOperation.usecase';
import { QueuePublishDirectUseCase } from './usecases/queuePublishDirect.usecase';

@Module({
  imports: [],
  controllers: [OperationController],
  providers: [
    CreateOperationUseCase,
    QueuePublishDirectUseCase,
    RabbitMQProviderService,
    {
      provide: OperationRepository,
      useClass: OperationInMemoryRepository,
    },
    {
      provide: QueueService,
      useClass: RabbitMQProviderService,
    },
  ],
})
export class OperationModule {}
