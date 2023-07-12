import { CreateOperationUseCase } from './createOperation.usecase';
import { OperationEntity } from '../entities/Operation';
import { OperationCreateDTO } from '../infra/http/dtos/createOperation';
import { QueuePublishDirectUseCase } from './queuePublishDirect.usecase';
import { QueueService } from '../infra/queue/queue.service';

class MockQueuePublishDirectUseCase extends QueuePublishDirectUseCase {
  constructor(queueService: QueueService) {
    super(queueService);
  }
}

describe('CreateOperationUseCase', () => {
  let createOperationUseCase: CreateOperationUseCase;
  let queuePublishDirectUseCase: MockQueuePublishDirectUseCase;
  let mockQueueService: QueueService;

  beforeEach(() => {
    mockQueueService = {} as QueueService;
    queuePublishDirectUseCase = new MockQueuePublishDirectUseCase(
      mockQueueService,
    );
    createOperationUseCase = new CreateOperationUseCase(
      queuePublishDirectUseCase,
    );
  });

  it('should create an operation and publish it to the queue', async () => {
    const operationCreateDTO: OperationCreateDTO = {
      minibankId: 1,
      taxRate: 0.1,
    };

    const operationEntity = new OperationEntity({
      minibankId: operationCreateDTO.minibankId,
      taxRate: operationCreateDTO.taxRate,
    });

    const expectedResult = { success: true };

    jest
      .spyOn(queuePublishDirectUseCase, 'execute')
      .mockResolvedValue(undefined);

    const result = await createOperationUseCase.execute(operationCreateDTO);

    expect(queuePublishDirectUseCase.execute).toHaveBeenCalledWith(
      operationEntity,
    );
    expect(result).toEqual(expectedResult);
  });
});
