import { ObjectLoader } from "../utils/objectloader";

export class policyList extends ObjectLoader {
    createdAt: Date;
    id?: any;
    policy : {
        uid: any,
        permissions:
        {
            edctype : string;
            uid : any;
            target : any;
            action : {
                type : any;
                includedIn : any;
                constraint : any;
            },
            assignee : any
            assigner : any
            constraints : any
            duties : any
        }
    }
}