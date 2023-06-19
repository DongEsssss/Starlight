// back-end연결 시 필요한 코드
export interface event {
  id: string;
  title: string;
  content?: string;
  File?: string;
  writer?: string;
  create?: string;
  subtitle?: string;
  text?: string;
}

export const events: event[] = [
  {
    id: '1',
    title: '(사전 예약)',
    content: '캠핑가서 불멍 때리자!',
    File: 'https://64.media.tumblr.com/f7397be193221f7cafb4b3c365fee3ef/tumblr_nt0k19rt8Q1sytpalo1_1280.jpg',
    writer: 'Starlight',
    create: '2023-05-19',
    subtitle: `캠핑하면 머니머니해도 불멍이지 불멍에 필요한 아이템 불멍 필수 아이템! 사전예약 할사람 여기 여기 모여라~~~~~~ 아이템이 뭐냐구요...? 이벤트 들어와서 확인하시죠!`,
    text: '터질 것 같던 내 머릿속 여기선 배고픈 나부터 우선은 챙길 거야 난 이제야 숨을 쉬네 숨 같은 숨을 쉬어보네 엉킨 내 생각 어쩌겠어 불 피워 볼까 뚫어져라 바라보면 자꾸 떠오르고 지나간 날들이 생각이 나 요즘 난 잘 하고 있는 건지 겨우 한 모금 퍼지는 취기 온도는 나를 더 다독이고 있어 잘 하고 있다고 그냥 난 나일뿐이라고 타들어가는 땔감들 속에 무책임하게 내 걱정도 우겨 넣어 오늘 밤은 태워 버릴래 밤하늘로 꺼지지 마 계속 타줘 애써 살리고픈 서글픈 재 만이 남은 그게 싫어서 마치 나인 것 같아서 두 모금 살짝 풀리는 마음 향기는 나를 더 위로하고 있어 그럴 수 있다고 누구든 그랬을 거라고 타들어가는 기억들 중에 너와 나 유난히 남겨 놓고 싶지만 이제는 다 태워 버릴래 저 하늘로 다 타버릴 그때까지 난 참 괜찮은 땔감이었길 바라면서 불멍 때리자',
  },
  {
    id: '2',
    title: '(글램핑)',
    content: '와이 글램핑 가격이 와이!라누!',
    File: 'https://pensiongaja.com/_data/ykpension/info/elpark130_0.jpg',
    writer: 'Starlight',
    create: '2023-05-15',
    subtitle: `주노 글램핑장 사장님이 여러분을 위한 파격적인 할인을 해주신데요~ 곧 종강하는 대학생 여러분, 글램핑으로 힐링하면서 좋은 추억을 얻고 싶은 사람들 빨리 확인해주세요!`,
    text: "Blow blow blow blowin' up Blow blow blow blowin' up Blow blow blow blowin' up Blow blow blow blowin' up 얼씨구나 좋다 좋아 한바탕해볼까 옆 동네 젊은 처자 친구들 다 불러 모아 할 일은 내일로 (할 일은 내일로) 모여 다 여기로 (모여 다 여기로)",
  },
];
