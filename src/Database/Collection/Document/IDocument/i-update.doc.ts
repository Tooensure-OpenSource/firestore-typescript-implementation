export interface IUpdateDocument<T> {
  updateDocument(id: string, model: T): Promise<T | null>;
}
