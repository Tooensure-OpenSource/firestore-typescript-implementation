import { Database } from './Database/database';
import { IFirestore } from './IFirestore/i-firestore';

export class Firestore<T> extends Database<T> implements IFirestore<T> {}
