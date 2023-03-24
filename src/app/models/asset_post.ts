import { FormGroup } from "@angular/forms";
import { ObjectLoader } from "../utils/objectloader";

export interface AssetAdvancedFormModel{
  assetdata: FormGroup<AssetAdvancedFormModel>;
}

export class asset_post extends ObjectLoader{
  createdAt ?: number;
  properties ?:
    {
      "asset:prop:id" ?: string
    }
  id ?: string;
  type ?: string;
  path ?: string;
  filename ?: string
  endpoint ?: string
 }
 export class dataasset extends ObjectLoader{
  id ?: string;
  type ?: string;
  path ?: string;
  filename ?: string
 }
