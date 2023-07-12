export abstract class QueueService {
  abstract publish({
    ...rest
  }: {
    exchange: string;
    type: string;
    route_key: string;
    message: any;
  }): Promise<void>;
  abstract consume(
    queue: string,
    callback: (message: any) => void,
  ): Promise<void>;
}
