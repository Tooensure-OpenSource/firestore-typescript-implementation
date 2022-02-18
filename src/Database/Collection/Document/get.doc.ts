import {IGetDocument} from "./IDocument/i-get-doc";
import * as admin from "firebase-admin";

export class GetDocument<T> implements IGetDocument<T> {
  constructor(public collection: string) {
  }

  async documentById(id: string): Promise<T | null> {
    const snapshot = await admin.firestore()
        .collection(this.collection)
        .listDocuments();
    const doc = snapshot.find((x) => x.id == id);
    const data = typeof doc == "undefined" ?
    null : await doc.get();

    return typeof data == "undefined" ?
      null : data?.data() as T;
  }
  async getDocuments(): Promise<T[]> {
    const docs : T[] = [];
    const snapshot = await admin.firestore()
        .collection(this.collection)
        .get();
    const data = snapshot.docs;
    for (let i = 0; i < data.length; i++) {
      const docData = data[i].data() as T;
      const doc = docData;
      docs !== null ? docs.push(doc) : new Array(doc);
    }
    return docs;
  }
}