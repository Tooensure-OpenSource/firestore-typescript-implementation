import {IAddDocument} from "./IDocument/i-add.doc";
import {AddDocument} from "./add.doc";

import {IDocument} from "./IDocument/i-document";
import {IGetDocument} from "./IDocument/i-get-doc";
import {GetDocument} from "./get.doc";
import { IUpdateDocument } from "./IDocument/i-update.doc";
import { UpdateDocument } from "./update.doc";
import { IDeleteDocument } from "./IDocument/i-delete-doc";
import { DeleteDocument } from "./delete.doc";

export class Document<T> implements IDocument<T> {
    private addDoc: IAddDocument<T>;
    private deleteDoc: IDeleteDocument<T>;
    private getDoc: IGetDocument<T>;
    private updateDoc: IUpdateDocument<T>;

    constructor(public collection: string) {
      this.addDoc = new AddDocument(this.collection);
      this.getDoc = new GetDocument<T>(this.collection);
      this.updateDoc = new UpdateDocument<T>(this.collection);
      this.deleteDoc = new DeleteDocument<T>(this.collection);

    }

    async update(id:string,model: T): Promise<T | null> {
      return await this.updateDoc.updateDocument(id, model);
    }
    async delete(id: string): Promise<T | null> {
      return await this.deleteDoc.deleteDocument(id);
    }
    async add(model: T): Promise<T>;
    async add(id: string, model: T): Promise<T>;

    async add(id: any, model?: any): Promise<T> {
      return id !== null || typeof id !== "undefined" ?
        await this.addDoc.addDocumentWithUid(id, model) :
        await this.addDoc.addDocument(model);
    }

    async get(id: string): Promise<T>;
    async get(): Promise<T[]>;

    async get(id?: any): Promise<T | T[] | null> {
      return id !== null || typeof id !== "undefined" ?
        await this.getDoc.documentById(id) :
        await this.getDoc.getDocuments();
    }
}