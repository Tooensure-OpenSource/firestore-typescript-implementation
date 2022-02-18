export interface IDeleteDocument<T> {
  deleteDocument(ids: string): Promise<T | null>;
}
