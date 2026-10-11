정수깡 시뮬레이터 사용법
========================

1. 이 폴더째로 컴퓨터에 두고 index.html 을 더블클릭하면 브라우저(크롬 권장)에서 열립니다.
2. 이미지/소리는 assets 폴더에 넣고 config.js 에 경로를 적으면 됩니다.

들어 있는 이미지
  assets/essence.png        시즌37·정수1 엠블럼
  assets/frames/legend.png  희대 스킨 카드 테두리
  assets/frames/rare.png    진귀 스킨 카드 테두리
  assets/frames/unique.png  독특 스킨 카드 테두리

config.js 에서 채울 것
  - items           등급별 아이템 { name, image, shape: "card" | "square", limited: true }
                     image 에 스킨 일러스트 경로를 넣으면 카드 테두리 안에 들어갑니다
                     (카드 안쪽 비율 약 2:3, 투명 배경 PNG 아니어도 됨)
  - openCharacter   버튼 사이에 서 있다가 열 때 줄에 맞는 캐릭터 (투명 PNG)
  - background      메인 배경
  - sounds          효과음 (open / line / burst / deal / rare / legend)
  - dupShards       중복 시 바뀌는 조각 개수

연출 순서 (영상 기준)
  어두워짐 → 캐릭터가 뜀 → 오른쪽에서 줄이 날아와 관통(진귀·희대 금줄 / 나머지 파란 줄)
  → 정수가 떨어짐 → 원형 조명 + 반짝이(금줄이면 금빛 후광) → 번쩍 → 하얀 방사선 + 정수 파편
  → 카드가 가운데서 날아와 자리에 꽂힘 → 새 의상은 '제 N 스킨 획득' 화면 → 중복은 조각으로 변환
  연출 중 클릭/아무 키 = 건너뛰기

확률은 게임 내 안내문 기준 (종합 0.7 / 2.5 / 15.3 / 49.8 / 31.7%로 검증됨)
