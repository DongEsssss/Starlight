import { ObjectLoader } from "../utils/objectloader";

export class catalog extends ObjectLoader {
    id: string
    contractOffers: {
        id: string
        policy: {
            permissions: {
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
                constraints: string
                duties: string
            },
            prohibitions: string
            obligations: string
            extensibleProperties: string
            inheritsFrom: string
            assigner: string
            assignee: string
            target: string,
            "@type": {
                "@policytype": string
            }
        },
        asset: {
            id: string
            createdAt: string
            properties: {
                "asset:prop:id": string
            }
        },
        provider: string
        consumer: string
        offerStart: string
        offerEnd: string
        contractStart: string
        contractEnd: string
    }
}