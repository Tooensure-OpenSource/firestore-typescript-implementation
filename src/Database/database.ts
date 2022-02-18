import { Collection } from './Collection/collection';
import { IDatabase } from './IDatabase/i-database';

export class Database<T> extends Collection<T> implements IDatabase<T> {
  /**
   *
   */
  constructor(private _defaultCollection: string) {
    super(_defaultCollection);
    this.resetCollecion(_defaultCollection);
    _defaultCollection = this._defaultCollection;
  }
}
