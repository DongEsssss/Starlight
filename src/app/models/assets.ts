import { ObjectLoader } from "../utils/objectloader";

export class Asset extends ObjectLoader{
  asset_id ?: any;
  content_type ?: any;
  id ?: string;
  path ?: string;
  filename ?: string;
  endpoint ?: any;
}

// export class asset_prop extends ObjectLoader{
//   id ?: string;
//   path ?: string;
//   filename  ?: string;
//   assetList ?: Array<Asset>
// }
// export class data_prop extends ObjectLoader{
//   endpoint ?: any;
//   assetList ?: Array<Asset>
// }
export const dataList =[
  {
    createdAts : "test",
    properties : "test",
    id : "test"
  }
]
