import { UserRecord } from 'firebase-admin/lib/auth/user-record';
import { IRegisterAuth } from './i-register.auth';

export interface IAuth extends IRegisterAuth {
  getUidByToken(token: string): Promise<UserRecord | null>;
}
