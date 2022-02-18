import { ICollection } from './ICollection/i-collection';
import { IDocument } from './Document/IDocument/i-document';
import { Document } from './Document/document';

export class Collection<T> implements ICollection<T> {
  private collection = this._default;
  Documents: IDocument<T>;
  constructor(private _default: string) {
    console.log(`Default Collection : ${_default}`);
    console.log(`1 ==> Init doc set collection ${_default}`);
    this.Documents = new Document<T>(_default);
    console.log(`2 ==> Reset doc collection set collection ${_default}`);
    this.resetCollecion(_default);
    console.log(`3 ==> Set this database global collection ${this._default}`);
    console.log(`${this._default}`);
    console.log(`to += ${_default}`);
    this._default = _default;
  }

  setCollection(paths: string[]): string {
    let collectionString = '';

    for (let i = 0; i < paths.length; i++) {
      i !== paths.length
        ? (collectionString += `${paths[i]}/`)
        : (collectionString += `${paths[i]}`);
    }
    this.collection = collectionString;
    return this.resetCollecion(this.collection);
  }

  getCollection(): string {
    return this.collection;
  }

  resetCollecion(newCollection: string): string {
    this.Documents = new Document(newCollection);

    return newCollection;
  }
}
