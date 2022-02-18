import {UserRecord} from "firebase-functions/v1/auth";

export interface IRegisterAuth
{
    signUpWithEmailPassword(
        email: string,
        password: string) : Promise<UserRecord | null>;
}