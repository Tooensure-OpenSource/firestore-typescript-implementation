import {IDeleteDocument} from "./IDocument/i-delete-doc";
import * as admin from "firebase-admin";

export class DeleteDocument<T> implements IDeleteDocument<T> {
    public _response : T[] | null = null;

    constructor(public collection: string) { }

    async deleteDocument(id: string): Promise<T> {
      const snapshot = await admin.firestore()
          .collection(this.collection)
          .listDocuments();

      const doc = snapshot.find((x) => x.id == id);
      const userToDelete = typeof doc !== "undefined" ?
        await doc.get() : null;
      const deleteUser = userToDelete?.data() as T;

      await doc?.delete();

      return deleteUser;
    }
}