import { RabbitMQPublishEntity, RabbitMQPublishProps } from './RabbitMQPublish';

describe('RabbitMQPublishEntity', () => {
  const rabbitMQPublishProps: RabbitMQPublishProps = {
    exchange: 'test_exchange',
    message: { key: 'value' },
    route_key: 'test_route_key',
    type: 'test_type',
  };

  let rabbitMQPublishEntity: RabbitMQPublishEntity;

  beforeEach(() => {
    rabbitMQPublishEntity = new RabbitMQPublishEntity(rabbitMQPublishProps);
  });

  it('should create an instance of RabbitMQPublishEntity', () => {
    expect(rabbitMQPublishEntity).toBeInstanceOf(RabbitMQPublishEntity);
  });

  it('should have the correct properties', () => {
    expect(rabbitMQPublishEntity.exchange).toBe(rabbitMQPublishProps.exchange);
    expect(rabbitMQPublishEntity.message).toBe(rabbitMQPublishProps.message);
    expect(rabbitMQPublishEntity.route_key).toBe(
      rabbitMQPublishProps.route_key,
    );
    expect(rabbitMQPublishEntity.type).toBe(rabbitMQPublishProps.type);
  });

  it('should set and get the exchange', () => {
    const exchange = 'new_exchange';
    rabbitMQPublishEntity.exchange = exchange;
    expect(rabbitMQPublishEntity.exchange).toBe(exchange);
  });

  it('should set and get the message', () => {
    const message = { newKey: 'newValue' };
    rabbitMQPublishEntity.message = message;
    expect(rabbitMQPublishEntity.message).toBe(message);
  });

  it('should set and get the route_key', () => {
    const routeKey = 'new_route_key';
    rabbitMQPublishEntity.route_key = routeKey;
    expect(rabbitMQPublishEntity.route_key).toBe(routeKey);
  });

  it('should set and get the type', () => {
    const type = 'new_type';
    rabbitMQPublishEntity.type = type;
    expect(rabbitMQPublishEntity.type).toBe(type);
  });
});
