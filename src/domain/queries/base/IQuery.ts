
export interface IQuery {}

export interface IQueryHandler<T> {
  handle(query: IQuery): Promise<T>;
}
