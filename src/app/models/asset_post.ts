import { ObjectLoader } from "../utils/objectloader";

export class asset_post extends ObjectLoader {
  createdAt: string;
  id: string;
  asset?: {
    properties?: {
      'asset:prop:id': string
    }
  };
  dataaddress?: {
    properties?: {
      type?: string,
      path?: string,
      filename?: string
    }
  }
  contentNo?: number;
  contentNM?: string;
}

export class contentList extends ObjectLoader {
  contentNo?: number;
  contentNM?: string;
  assetList?: Array<asset_post>;
}


export class asset_type extends ObjectLoader{
  properties: {
      path: string
      filename: string
      type: string
  }
}