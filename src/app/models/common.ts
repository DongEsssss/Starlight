import {ObjectLoader} from "../utils/objectloader";
import {asset} from "./asset_post";
import {UserProfile} from "./user-profile";

export class Keyword {
  id?: string;
  name?: string;
}

export class FormField extends ObjectLoader {
  name?: string;
  text?: string;
  placeholder?: string = " ";
  require?: boolean;
  readonly?: boolean;
  type?: string;
  regex?: string = '[^"~#$%]+';
  min?: string = "0";
  max?: string = "30";
}

export class CommonCD extends ObjectLoader {
  baseCd?: string;
  commCd?: string;
  commNm?: string;
  item1?: string;
  item2?: string;
  item3?: string;
  item4?: string;
}
