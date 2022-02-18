import * as admin from "firebase-admin";
import {UserRecord} from "firebase-functions/v1/auth";
import {IRegisterAuth} from "./IAuth/i-register.auth";

export class RegisterAuth implements IRegisterAuth {
  async signUpWithEmailPassword(
      email: string, password: string): Promise<UserRecord> {
    try {
      console.log("Registering user...");
      const registeredUser = await admin.auth().createUser({
        displayName: email,
        email: email,
        emailVerified: true,
        password: password,
      });

      return registeredUser;
    } catch (error) {
      return error;
    }
  }
}