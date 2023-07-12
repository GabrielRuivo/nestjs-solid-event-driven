import { OperationEntity, OperationProps } from './Operation';

describe('OperationEntity', () => {
  const operationProps: OperationProps = {
    minibankId: 1,
    taxRate: 0.1,
  };

  let operationEntity: OperationEntity;

  beforeEach(() => {
    operationEntity = new OperationEntity(operationProps);
  });

  it('should create an instance of OperationEntity', () => {
    expect(operationEntity).toBeInstanceOf(OperationEntity);
  });

  it('should have the correct properties', () => {
    expect(operationEntity.minibankId).toBe(operationProps.minibankId);
    expect(operationEntity.taxRate).toBe(operationProps.taxRate);
  });

  it('should set and get the id', () => {
    const id = '123';
    operationEntity.id = id;
    expect(operationEntity.id).toBe(id);
  });

  it('should set and get the minibankId', () => {
    const minibankId = 2;
    operationEntity.minibankId = minibankId;
    expect(operationEntity.minibankId).toBe(minibankId);
  });

  it('should set and get the taxRate', () => {
    const taxRate = 0.2;
    operationEntity.taxRate = taxRate;
    expect(operationEntity.taxRate).toBe(taxRate);
  });
});
