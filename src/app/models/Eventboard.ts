// back-end연결 시 필요한 코드
export class Eventboard {
  EvTitle?: string;
  EvContent?: string;
  EvFile?: File;
  EvWriter?: string;
  createDte?: Date;
}

export const events = [
 {
    title: "(사전 예약)",
    content: "캠핑가서 불멍 때리자!",
    File : null,
    writer: "Starlight",
    create: Date
  },
  {
    title: "(사전 예약)",
    content: "사전예약하고 캠핑아이템 얻자",
    File : null,
    writer: "Starlight",
    create: "2022-12-13"
  },
  {
    title: "(글램핑)",
    content: "와이 글램핑 가격이 와이!라누!",
    File : null,
    writer: "Starlight",
    create: Date
  }
  ,{
    title: "(경품)",
    content: "스캠이 쏘는 파격적인 이벤트! ...",
    File : null,
    writer: "Starlight",
    create: Date
  }
  ,{
    title: "(캠핑)",
    content: "슬슬 더워지는 여름... 필수 아이템",
    File : null,
    writer: "Starlight",
    create: Date
  },{
    title: "(추첨 이벤트)",
    content: "사장님이 미쳤나보다 스캠 서버 닫아!",
    File : null,
    writer: "Starlight",
    create: Date
  },{
    title: "(글램핑)",
    content: "너만 모르는 글램핑 필수 아이템",
    File : null,
    writer: "Starlight",
    create: Date
  }
]
