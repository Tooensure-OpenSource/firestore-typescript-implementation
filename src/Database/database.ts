import { Collection } from './Collection/collection';
import { IDatabase } from './IDatabase/i-database';

export class Database<T> extends Collection<T> implements IDatabase<T> {}
