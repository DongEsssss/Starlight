import { ObjectLoader } from "../utils/objectloader";

export class asset_post extends ObjectLoader{
  "createdAt" ?: number;
  "properties" ?:
    {
      "asset:prop:id" ?: string
    }
  "id" ?: string
}
