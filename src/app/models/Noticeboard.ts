// back-end연결 시 필요한 코드
export class noticeas {
  id: string;
  title: string;
  content: string;
  File: string;
  eventtitle: string;
  eventtext: string;
  writer: string;
  create: string;
}

export interface Noticeboard {
  id?: string;
  title?: string;
  content?: string;
  File?: string;
  eventtitle?: string;
  eventtext: string;
  writer?: string;
  create?: string;
}

export const notices: Noticeboard[] = [
  {
    id: '1',
    title: '(공지)',
    content: '서버 업데이트 내용 (새로운 캠핑장)',
    File: 'https://www.5gcamp.com/files/camping/2018/02/27/156005c5baf40ff51a327f1c34f2975b201117.jpg',
    writer: 'Starlight',
    eventtitle: '서동군 캠핑장이 추가되었습니다. ',
    eventtext:
      '서동군 캠핑장은 서해안 바닷가 언덕에 자리한 캠핑장으로 호수같은 아름다운 바닷가풍경과 편리하고 깨끗한 시설을 자랑으로 삼고있습니다. 씨사이드힐 캠핑장에서는 바다를 향해 계단형식으로 배치되어있기 때문에 모든 자리에서 바다가 보입니다. 늘 한결같은 마음으로 좋은추억만을 드릴수 있도록 노력하겠습니다.',
    create: '23-05-09',
  },
  {
    id: '2',
    title: '(긴급 점검)',
    content: '이벤트 유저 몰림으로 인한 서버 다운',
    File: 'https://jjalbang.today/jjvF9.gif',
    eventtitle: '',
    eventtext:
      '안녕하세요, 스캠 입니다. 접속 불가 현상이 모두 정상화되어 현재 정상적으로 서비스 이용이 가능합니다서비스 이용에 불편을 드린 점 대단히 죄송합니다.2023년 5월 12일 (화) 약 18시 52분 경, 갑작스러운 서버 다운이 발생하였습니다. 현재 서비스 이용이 가능하며,이용에 불편을 드린 점 대단히 죄송합니다. 접속이 되지 않는 서버에 대해서도 최대한 빠르게 해결될 수 있도록 최선을 다하겠습니다. 고맙습니다.',
    writer: 'Starlight',
    create: '23-05-15',
  },
  {
    id: '3',
    title: '(알림)',
    content: '여름 탁 시원한 동해 서해 바다 캠핑 떠나요~',
    File: 'https://blog.kakaocdn.net/dn/ll3eR/btrl4RhylFH/kgdY3bkgQSkIQOWRMR18DK/img.png',
    eventtitle: '겨울 탁 트인 동해바다 캠핑장 <캠프 오슬로> ',
    eventtext:
      "첫번째로 제가 직접 다녀온 캠핑장은 넓은 동해 바다가 보이는  ‘캠프오슬로' 라는 곳입니다. 이 곳은 동해바다가 보이는 바다 뷰 캠핑장으로 강원도 삼척시 원덕읍 에 위치해 있습니다. 서울에서 출발하면 약 3시간 30분 정도 걸리는 곳이라 아주 가깝다고 하긴 어렵습니다. 하지만 가보면 탁 트인 바다 뷰 때문에 자꾸만 생각나고 또 가고 싶고 그런 캠핑 스팟인데요! ",
    writer: 'Starlight',
    create: '23-05-11',
  },
  {
    id: '4',
    title: '(점검)',
    content: '서버 업데이트 내용 (서버 점검)',
    File: null,
    eventtitle: '',
    eventtext: '',
    writer: 'Starlight',
    create: '23-05-12',
  },
  {
    id: '5',
    title: '(공지)',
    content: '서버 업데이트 내용',
    File: null,
    eventtitle: '',
    eventtext: '',
    writer: 'Starlight',
    create: '23-05-13',
  },
  {
    id: '6',
    title: '(공지)',
    content: '스캠 유저 여러분 사과드립니다.',
    File: null,
    eventtitle: '',
    eventtext: '',
    writer: 'Starlight',
    create: '23-05-14',
  },
  {
    id: '7',
    title: '(긴급 점검)',
    content: '이벤트 유저 몰림으로 인한 서버 다운',
    File: null,
    eventtitle: '',
    eventtext: '',
    writer: 'Starlight',
    create: '23-05-15',
  },
];
