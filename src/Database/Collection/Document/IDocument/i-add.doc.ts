export interface IAddDocument<T> {
  addDocument(models: T): Promise<T>;
  addDocumentWithUid(id: string, models: T): Promise<T>;
}
