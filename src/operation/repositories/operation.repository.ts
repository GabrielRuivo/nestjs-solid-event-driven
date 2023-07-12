import { OperationCreateDTO } from '../infra/http/dtos/createOperation';

export abstract class OperationRepository {
  abstract save(
    operationCreateDTO: OperationCreateDTO,
  ): Promise<OperationCreateDTO>;
}
