import {IDocument} from "../Document/IDocument/i-document";

export interface ICollection<T>
{
    Documents : IDocument<T>;

    setCollection(paths : string[]) : string;
    getCollection() : string;
    resetCollecion(newCollection : string): string;
}