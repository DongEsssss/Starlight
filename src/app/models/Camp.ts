import { ObjectLoader } from '../utils/objectloader';

export class camp extends ObjectLoader {
  reserveDate: Date;
  reserveID: string;
  id: string;
  campname: string;
  position: string;
  theme: string;
  text: string;
  detailposition: string;
  phonename1: string;
  phone1: string;
  phonename2: string;
  phone2: string;
  phonename3: string;
  phone3: string;
  way_bus: string;
  way_drive: string;
  startDate: string;
  endDate: string;
  value: string;
  image: string;
  car: string;
}

export const area = [
  {
    id: '1',
    area: '서울',
  },
  {
    id: '2',
    area: '경기도',
  },
  {
    id: '3',
    area: '강원도',
  },
  {
    id: '4',
    area: '충청남도',
  },
  {
    id: '5',
    area: '충청북도',
  },
  {
    id: '6',
    area: '전라북도',
  },
  {
    id: '7',
    area: '전라남도',
  },
  {
    id: '8',
    area: '경상북도',
  },
  {
    id: '9',
    area: '경상남도',
  },
];

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
