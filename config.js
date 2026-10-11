// =====================================================================
//  정수깡 시뮬레이터 설정 파일 — 여기만 고치면 됩니다.
//  이미지 경로가 비어 있거나 틀리면 빈 칸으로 표시돼요.
// =====================================================================

// 아이템 형식: { name: "이름", image: "경로", shape: "card" | "square", limited: true }
//  - shape: "card" = 의상(스킨) 카드, "square" = 그래피티·초상화·감정표현 등 정사각
//  - 의상 카드는 처음 얻으면 '제 N 스킨 획득' 화면이 나옵니다
//  - limited: true 면 '한정' 표시
const season37Items = {
  legend: [   // 희대
    { name: "희대 의상", image: "", limited: true },
  ],
  rare: [     // 진귀
    { name: "진귀 의상 1", image: "" },
    { name: "진귀 의상 2", image: "" },
  ],
  unique: [   // 독특
    { name: "독특 의상 1", image: "" },
    { name: "독특 의상 2", image: "" },
    { name: "독특 액세서리", image: "", shape: "square" },
  ],
  uncommon: [ // 드문
    { name: "드문 의상", image: "" },
    { name: "드문 초상화", image: "", shape: "square" },
    { name: "드문 그래피티", image: "", shape: "square" },
    { name: "드문 감정표현", image: "", shape: "square" },
  ],
  common: [   // 일반
    { name: "일반 초상화", image: "", shape: "square" },
    { name: "일반 그래피티", image: "", shape: "square" },
    { name: "일반 음성", image: "", shape: "square" },
  ],
};

window.ESSENCE_CONFIG = {
  background: "",                 // 메인 배경 (선택)
  openCharacter: "",              // 버튼 사이에 서 있다가 열 때 등장하는 캐릭터 (선택, 투명 PNG)

  // 등급별 스킨 카드 테두리
  frames: {
    legend: "assets/frames/legend.png",
    rare:   "assets/frames/rare.png",
    unique: "assets/frames/unique.png",
  },

  // 중복 획득 시 바뀌는 조각 개수 (임의 값이니 원하는 대로 수정)
  dupShards: { common: 6, uncommon: 12, unique: 36, rare: 200, legend: 600 },

  skinCountStart: 0,              // '제 N 스킨 획득'의 시작 번호 (보유 스킨 수)

  sounds: {                       // 효과음 (선택)
    open: "assets/sfx/open.mp3",
    line: "assets/sfx/line.mp3",
    burst: "assets/sfx/burst.mp3",
    deal: "assets/sfx/deal.mp3",
    rare: "assets/sfx/rare.mp3",
    legend: "assets/sfx/legend.mp3",
  },

  // 정수 목록 (여러 개 넣으면 좌우로 넘길 수 있어요)
  essences: [
    { id: "s37-1", name: "시즌37 · 정수1", period: "2025.4 – 2025.7",
      image: "assets/essence.png", color: "#2d9fe8", startCount: 999, items: season37Items },
  ],
  startIndex: 0,
};
