
import {ICollection} from "./ICollection/i-collection";
import {IDocument} from "./Document/IDocument/i-document";
import {Document} from "./Document/document";

export class Collection<T> implements ICollection<T> {
    private collection = "";
    Documents: IDocument<T>;

    constructor() {
      this.resetCollecion(this.collection);
      this.Documents = new Document<T>(this.collection);
    }

    setCollection(paths: string[]) : string {
      let collectionString = "";

      for (let i = 0; i < paths.length; i++) {
        i !== paths.length ? collectionString +=
          `${paths[i]}/` : collectionString += `${paths[i]}`;
      }
      this.collection = collectionString;
      return this.resetCollecion(this.collection);
    }

    getCollection() : string {
      return this.collection;
    }

    resetCollecion(newCollection: string): string {
      this.Documents = new Document(newCollection);

      return newCollection;
    }
}