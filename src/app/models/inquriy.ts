import { ObjectLoader } from '../utils/objectloader';

export class inquiry extends ObjectLoader {
  id: string;
  intype: string;
  intitle: string;
  snsemail: string;
  incontent: string;
  inwriter: string;
  increatedate: Date;
}

export const themes = [
  {
    id: '1',
    theme: '글램핑',
  },
  {
    id: '2',
    theme: '바다',
  },
  {
    id: '3',
    theme: '산',
  },
  {
    id: '4',
    theme: '도시',
  },
];
