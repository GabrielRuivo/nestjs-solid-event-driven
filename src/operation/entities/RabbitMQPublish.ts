export interface RabbitMQPublishProps {
  exchange: string;
  message: any;
  route_key: string;
  type: string;
}

export class RabbitMQPublishEntity {
  private props: RabbitMQPublishProps;

  constructor(props: RabbitMQPublishProps) {
    this.props = props;
  }

  get exchange(): string {
    return this.props.exchange;
  }

  set exchange(exchange: string) {
    this.props.exchange = exchange;
  }

  get message(): any {
    return this.props.message;
  }

  set message(message: any) {
    this.props.message = message;
  }

  get route_key(): string {
    return this.props.route_key;
  }

  set route_key(route_key: string) {
    this.props.route_key = route_key;
  }

  get type(): string {
    return this.props.type;
  }

  set type(type: string) {
    this.props.type = type;
  }
}
