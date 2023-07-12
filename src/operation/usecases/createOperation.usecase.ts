import { Injectable } from '@nestjs/common';
import { OperationEntity } from '../entities/Operation';
import { OperationCreateDTO } from '../infra/http/dtos/createOperation';
import { QueuePublishDirectUseCase } from './queuePublishDirect.usecase';

@Injectable()
export class CreateOperationUseCase {
  constructor(
    private readonly queuePublishDirectUseCase: QueuePublishDirectUseCase,
  ) {}

  public async execute(operationCreateDTO: OperationCreateDTO) {
    const { minibankId, taxRate } = operationCreateDTO;

    const operation = new OperationEntity({ minibankId, taxRate });

    await this.queuePublishDirectUseCase.execute(operation);

    // return this.operationRepository.save(operationCreateDTO);

    return { success: true };
  }
}
