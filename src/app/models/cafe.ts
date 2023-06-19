import { ObjectLoader } from '../utils/objectloader';

export class cafe extends ObjectLoader {
  id: string;
  snstitle: string;
  File: string;
  snstheme: string;
  snswriter: string;
  snscontent: string;
  like: number;
  snscreatedate: string;
}
export const intype = [
  {
    id: '1',
    type: '캠핑',
  },
  {
    id: '2',
    type: '글램핑',
  },
];
