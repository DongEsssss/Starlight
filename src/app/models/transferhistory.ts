import { ObjectLoader } from "../utils/objectloader";

export class Transferhistory extends ObjectLoader{
  "createdAt": string
  "updatedAt": string
  "id": string
  "type": string
  "state": string
  "stateTimestamp": string
  "errorDetail": string
  "dataRequest": {
      "id": string
      "assetId": string
      "contractId": string
      "connectorId": string
  }
  "dataDestination": {
      "properties": {
          "authKey": string
          "baseUrl": string
          "authCode": string
          "type": string
      }
  }
}
