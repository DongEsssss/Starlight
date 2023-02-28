import { ObjectLoader } from "../utils/objectloader";

export class SignInCredential extends ObjectLoader{
    userId?:string;
    password?:string
}

export class User extends ObjectLoader{
    userNo?:number;
    userId?:string;
    password?:string;
    userNm?:string;
    email?:string;
    phone?:string;
    auth?:string;
    apiKey?:string;
}