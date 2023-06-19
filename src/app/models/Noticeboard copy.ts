// back-end연결 시 필요한 코드
export interface Noticeboard2 {
  id ?: string
  title ?: string;
  content?: string;
  File?: File;
  eventtitle ?: string;
  eventtext
  writer?: string;
  create?: string;
}

export const notices2 : Noticeboard2[] = [
    {
      id: "1",
      title: "(공지)",
      content: "서버 업데이트 내용 (새로운 캠핑장)",
      File : null,
      writer: "Starlight",
      eventtitle : "동군 캠핑장과 서동군 캠핑장이 추가되었습니다. ",
      eventtext :"동해안이 보이는 동군 캠핑장과 서해안이 보이는 서동군 캠핑장이 추가되었어요 동해안이 땡긴다면 동군 ",
      create: "23-05-09"
    },
]
