
export interface IGetDocument<T>
{
    documentById(id : string) : Promise<T | null>;
    getDocuments() : Promise<T[] | null>;

}