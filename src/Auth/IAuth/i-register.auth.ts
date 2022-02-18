import { UserRecord } from "firebase-admin/lib/auth/user-record";

export interface IRegisterAuth
{
    signUpWithEmailPassword(
        email: string,
        password: string) : Promise<UserRecord | null>;
}