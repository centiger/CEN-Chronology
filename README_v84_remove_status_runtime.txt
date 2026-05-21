v84 구성 현황 런타임 제거

업로드 파일:
- index.html
- sw.js
- css/style.css
- js/app.js
- js/chronology-data.js

수정 방식:
- index.html에서 구성 현황 section을 직접 삭제하지 않음
- CSS 숨김도 사용하지 않음
- 앱 로드 시 #home 안의 section.card 중 h2가 '구성 현황'인 카드만 찾아 remove()
- eraCount/eventCount/readyCount가 없어도 오류 나지 않도록 renderHome 보호 처리
- 캐시명 v84로 변경

확인:
- 첫 화면에서 구성 현황 카드가 없어야 함
- 현재 프로토타입 / 시대 바로가기 / 시대별 연대기 보기 버튼은 그대로 작동해야 함
