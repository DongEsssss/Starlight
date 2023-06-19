// back-end연결 시 필요한 코드
export interface Noticeboard {
  id ?: string
  title ?: string;
  content?: string;
  File?: File;
  eventtitle ?: string;
  eventtext
  writer?: string;
  create?: string;
}

export const notices : Noticeboard[] = [
    {
      id: "1",
      title: "(공지)",
      content: "서버 업데이트 내용 (새로운 캠핑장)",
      File : null,
      writer: "Starlight",
      eventtitle : "동군 캠핑장과 서동군 캠핑장이 추가되었습니다. ",
      eventtext :"동해안이 보이는 동군 캠핑장과 서해안이 보이는 서동군 캠핑장이 추가되었어요 동해안이 땡긴다면 동군 캠핑장 서해안이 땡긴다면 서동군 캠핑장을 이용해주세요",
      create: "23-05-09"
    },
  {
    id: "2",
    title: "(긴급 점검)",
    content: "이벤트 유저 몰림으로 인한 서버 다운",
    File : null,
    eventtitle : "",
    eventtext : "",
    writer: "Starlight",
    create: "23-05-15"
  }
  ,
  {
    id: "3",
    title: "(공지)",
    content: "서버 업데이트 내용 (새로운 이벤트)",
    File : null,
    eventtitle : "",
    eventtext : "",
    writer: "Starlight",
    create: "23-05-11"
  }
  ,
  {
    id: "4",
    title: "(점검)",
    content: "서버 업데이트 내용 (서버 점검)",
    File : null,
    eventtitle : "",
    eventtext : "",
    writer: "Starlight",
    create: "23-05-12"
  }
  ,
  {
    id: "5",
    title: "(공지)",
    content: "서버 업데이트 내용",
    File : null,
    eventtitle : "",
    eventtext : "",
    writer: "Starlight",
    create: "23-05-13"
  },
  {
    id: "6",
    title: "(공지)",
    content: "스캠 유저 여러분 사과드립니다.",
    File : null,
    eventtitle : "",
    eventtext : "",
    writer: "Starlight",
    create: "23-05-14"
  },
  {
    id: "7",
    title: "(긴급 점검)",
    content: "이벤트 유저 몰림으로 인한 서버 다운",
    File : null,
    eventtitle : "",
    eventtext : "",
    writer: "Starlight",
    create: "23-05-15"
  }
]
