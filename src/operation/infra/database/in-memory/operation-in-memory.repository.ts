import { randomUUID } from 'crypto';
import { OperationRepository } from 'src/operation/repositories/operation.repository';
import { OperationCreateDTO } from '../../http/dtos/createOperation';

export class OperationInMemoryRepository implements OperationRepository {
  save(operationCreateDTO: OperationCreateDTO): Promise<OperationCreateDTO> {
    const operationInMemory: OperationCreateDTO[] = [];

    operationInMemory.push({ id: randomUUID(), ...operationCreateDTO });

    return Promise.resolve(operationInMemory[0]);
  }
}
