import { ObjectLoader } from "../utils/objectloader"

export class definitions extends ObjectLoader {
  createdAt : string;
  validity: string;
  id ?: string;
  accessPolicyId ?: string;
  contractPolicyId ?: string;
  criteria ?: 
    {
      operandLeft ?: string,
      operandRight ?: string,
      operator ?: string
    }
}

