import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOperationUseCase } from '../../../usecases/createOperation.usecase';
import { QueueService } from '../../queue/queue.service';
import { OperationCreateDTO } from '../dtos/createOperation';

@Controller('operation')
export class OperationController {
  constructor(
    private readonly createOperation: CreateOperationUseCase,
    private readonly queueService: QueueService,
  ) {}

  @Post()
  async create(
    @Body() operationCreateDTO: OperationCreateDTO,
  ): Promise<{ success: boolean }> {
    return this.createOperation.execute(operationCreateDTO);
  }

  @Get()
  async consumeMessage() {
    const messages = [];

    await this.queueService.consume('queue_operation', (message) => {
      console.log('Received message:', message);
      messages.push(message);
    });

    return messages;
  }
}
