import { IAddDocument } from './IDocument/i-add.doc';
import * as admin from 'firebase-admin';

export class AddDocument<T> implements IAddDocument<T> {
  constructor(public collection: string) {}

  async addDocument(model: T): Promise<T> {
    const data = await admin
      .firestore()
      .collection(this.collection)
      .add(model);

    console.log(JSON.parse(JSON.stringify(model)));
    return (await data.get()).data() as T;
  }

  async addDocumentWithUid(id: string, model: T): Promise<T> {
    const data = await admin
      .firestore()
      .doc(id)
      .collection(this.collection)
      .add(model);

    console.log(JSON.parse(JSON.stringify(model)));
    return (await data.get()).data() as T;
  }
}
