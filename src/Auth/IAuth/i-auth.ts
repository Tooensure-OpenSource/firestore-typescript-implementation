import {UserRecord} from "firebase-functions/v1/auth";
import {IRegisterAuth} from "./i-register.auth";

export interface IAuth extends IRegisterAuth
{
    getUidByToken(token : string) : Promise<UserRecord | null>;
}