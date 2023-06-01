// back-end연결 시 필요한 코드
export class Noticeboard {
  noTitle?: string;
  noContent?: string;
  noFile?: File;
  noWriter?: string;
  createDte?: Date;
}

export const notices = [
  {
    title: "(공지)",
    content: "서버 업데이트 내용 (새로운 캠핑장)",
    File : null,
    writer: "Starlight",
    create: "23-05-09"
  },
  {
    title: "(공지)",
    content: "서버 업데이트 내용 (새로운 글램핑)",
    File : null,
    writer: "Starlight",
    create: "23-05-10"
  }
  ,
  {
    title: "(공지)",
    content: "서버 업데이트 내용 (새로운 이벤트)",
    File : null,
    writer: "Starlight",
    create: "23-05-11"
  }
  ,
  {
    title: "(점검)",
    content: "서버 업데이트 내용 (서버 점검)",
    File : null,
    writer: "Starlight",
    create: "23-05-12"
  }
  ,
  {
    title: "(공지)",
    content: "서버 업데이트 내용",
    File : null,
    writer: "Starlight",
    create: "23-05-13"
  },
  {
    title: "(공지)",
    content: "스캠 유저 여러분 사과드립니다.",
    File : null,
    writer: "Starlight",
    create: "23-05-14"
  },
  {
    title: "(긴급 점검)",
    content: "이벤트 유저 몰림으로 인한 서버 다운",
    File : null,
    writer: "Starlight",
    create: "23-05-15"
  }
]
