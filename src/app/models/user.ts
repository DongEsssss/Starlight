import {ObjectLoader} from "../utils/objectloader";

export class SignInCredential extends ObjectLoader {
  userId?: string;
  password?: string;
}

export class User extends ObjectLoader {
  userNo?: number;
  userId?: string;
  password?: string;
  userNm?: string;
  email?: string;
  phone?: string;
  brith? : string;
  npassword?:string;
}
export const user=[{
  name : "별빛이닿을때",
  email : "abrerop@naver.com",
  phone : "010-4148-5316",
  address: "서울 동작구 흑석동",
  birth : "98-09-06",
  tag: "탐험가"
}
]

