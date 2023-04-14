import { ObjectLoader } from "../utils/objectloader";

export class policyList extends ObjectLoader {
    createdAt: number
    id: string
    policy: {
        permissions:
        {
            edctype: string
            uid: string
            target: string
            action: {
                type: string
                includedIn: string
                constraint: string
            },
            assignee: string
            assigner: string
            constraints: []
            duties: []
        }
        prohibitions: []
        obligations: []
        extensibleProperties: {}
        inheritsFrom: string
        assigner: string
        assignee: string
        target: string
        '@type': {
            '@policytype': string
        }
    }
}
