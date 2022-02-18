import * as admin from 'firebase-admin';
import { Database } from './Database/database';
import { IFirestore } from './IFirestore/i-firestore';

admin.initializeApp();
export class Firestore<T> extends Database<T> implements IFirestore<T> {
  /**
   * Firestore instance will set your collections in local storage and data,
   * This data is stile overiden by the database collection instance as a defalut value
   */
  constructor(private readonly _storeCollection: string[]) {
    super(_storeCollection[0]);
    this._storeCollection = _storeCollection;
    this._storeCollection[0] = this.setCollection(_storeCollection);
    console.log(
      `Init ==> firestore instance will set your collection first ${this._storeCollection[0]}`
    );
  }
}
