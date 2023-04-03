import { ObjectLoader } from "../utils/objectloader";

export class asset_post extends ObjectLoader {
  id : string;
  path : string;
  filename : string;
  type : string;
  contentNo?: number;
  contentNM?: string;
  createdAt : number;
  assetNo ?: any;
}

export class contentList extends ObjectLoader {
  contentNo?: number;
  contentNM?: string;
  assetList?: Array<asset_post>;
}

