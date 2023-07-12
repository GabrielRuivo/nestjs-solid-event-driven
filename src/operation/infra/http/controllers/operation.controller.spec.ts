import { Test, TestingModule } from '@nestjs/testing';
import { OperationController } from './operation.controller';
import { CreateOperationUseCase } from '../../../usecases/createOperation.usecase';
import { QueueService } from '../../queue/queue.service';
import { OperationCreateDTO } from '../dtos/createOperation';

describe('OperationController', () => {
  let controller: OperationController;
  let createOperation: CreateOperationUseCase;
  let queueService: QueueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OperationController],
      providers: [
        {
          provide: CreateOperationUseCase,
          useValue: {
            execute: jest.fn(),
          },
        },
        {
          provide: QueueService,
          useValue: {
            consume: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<OperationController>(OperationController);
    createOperation = module.get<CreateOperationUseCase>(
      CreateOperationUseCase,
    );
    queueService = module.get<QueueService>(QueueService);
  });

  describe('create', () => {
    it('should create an operation', async () => {
      const operationCreateDTO: OperationCreateDTO = {
        minibankId: 1,
        taxRate: 1.11,
      };
      const expectedResult = { success: true };

      jest.spyOn(createOperation, 'execute').mockResolvedValue(expectedResult);

      const result = await controller.create(operationCreateDTO);

      expect(result).toEqual(expectedResult);
      expect(createOperation.execute).toHaveBeenCalledWith(operationCreateDTO);
    });
  });
});
