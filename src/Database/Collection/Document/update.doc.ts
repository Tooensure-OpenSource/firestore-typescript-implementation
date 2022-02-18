import { IUpdateDocument } from './IDocument/i-update.doc';
import * as admin from 'firebase-admin';

export class UpdateDocument<T> implements IUpdateDocument<T> {
  constructor(public collection: string) {}

  async updateDocument(id: string, model: T): Promise<T | null> {
    const snapshot = await admin
      .firestore()
      .collection(this.collection)
      .listDocuments();

    const doc = snapshot.find(x => x.id === id);

    const data = typeof doc !== 'undefined' ? await doc.update(model) : null;

    return typeof data == null ? null : (model as T);
  }
}
