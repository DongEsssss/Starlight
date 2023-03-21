import { ObjectLoader } from "../utils/objectloader";

export class asset_post extends ObjectLoader{
  static id(id: any) {
    throw new Error('Method not implemented.');
  }
  "createdAt" ?: number;
  "properties" ?:
    {
      "asset:prop:id" ?: string
    }
  "id" ?: string;
  "type" ?: string;
  "path" ?: string;
  "content_type" ?: string
  "endpoint" ?: string
 }
