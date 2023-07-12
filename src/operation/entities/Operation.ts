export interface OperationProps {
  id?: string;
  minibankId: number;
  taxRate: number;
}

export class OperationEntity {
  private props: OperationProps;

  constructor(props: OperationProps) {
    this.props = props;
  }

  get id(): string | undefined {
    return this.props?.id;
  }

  set id(id: string | undefined) {
    this.props.id = id;
  }

  get minibankId(): number {
    return this.props.minibankId;
  }

  set minibankId(minibankId: number) {
    this.props.minibankId = minibankId;
  }

  get taxRate(): number {
    return this.props.taxRate;
  }

  set taxRate(tax: number) {
    this.props.taxRate = tax;
  }
}
