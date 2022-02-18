import {IAuth} from "./IAuth/i-auth";
import * as admin from "firebase-admin";
import {UserRecord} from "firebase-functions/v1/auth";
import {RegisterAuth} from "./register.auth";

export class Auth extends RegisterAuth implements IAuth {
  async getUidByToken(token: string): Promise<UserRecord> {
    try {
      const decodedJwt = await admin.auth().verifyIdToken(token);
      return await admin.auth().getUser(decodedJwt.uid);
    } catch (error) {
      return error;
    }
  }
}