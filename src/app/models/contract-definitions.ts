import { ObjectLoader } from "../utils/objectloader"

export class definitions extends ObjectLoader {
  createdAt : number;
  validity: number;
  id: string
  accessPolicyId: string
  contractPolicyId: string
  criteria: [
    {
      operandLeft: string
      operandRight: string
      operator: string
    }
  ]
}

