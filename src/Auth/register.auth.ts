import * as admin from "firebase-admin";
import { UserRecord } from "firebase-admin/lib/auth/user-record";
import {IRegisterAuth} from "./IAuth/i-register.auth";

export class RegisterAuth implements IRegisterAuth {
  async signUpWithEmailPassword(
    email: string, password: string): Promise<UserRecord> {
      return await admin.auth().createUser({
        displayName: email,
        email: email,
        emailVerified: true,
        password: password,
    });
  }
}