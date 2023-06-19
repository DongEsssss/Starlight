import {ObjectLoader} from "../utils/objectloader";

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

