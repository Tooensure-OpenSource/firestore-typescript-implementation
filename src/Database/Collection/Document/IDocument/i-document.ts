export interface IDocument<T> {
  add(model: T): Promise<T>;
  add(id: string, model: T): Promise<T>;
  get(id: string): Promise<T>;
  get(): Promise<T[]>;
  update(id: string, model: T): Promise<T | null>;
  delete(id: string): Promise<T | null>;
}
