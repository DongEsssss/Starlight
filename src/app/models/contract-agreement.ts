import { ObjectLoader } from "../utils/objectloader";

export class agreement extends ObjectLoader{
    createdAt: number
    updatedAt: number
    contractAgreementId : string
    counterPartyAddress : string
    errorDetail : string
    id : string
    protocol : string
    state : string
    type : string
}