import { IAuth } from './IAuth/i-auth';
import * as admin from 'firebase-admin';
import { RegisterAuth } from './register.auth';
import { UserRecord } from 'firebase-admin/lib/auth/user-record';

export class Auth extends RegisterAuth implements IAuth {
  async getUidByToken(token: string): Promise<UserRecord> {
    const decodedJwt = await admin.auth().verifyIdToken(token);
    return await admin.auth().getUser(decodedJwt.uid);
  }
}
