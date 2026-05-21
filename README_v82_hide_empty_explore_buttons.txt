v82 빈 연결탐험 버튼 숨김

업로드 파일:
- index.html
- sw.js
- css/style.css
- js/app.js
- js/chronology-data.js

수정 내용:
1. 핵심사건 칩을 눌렀을 때 미리보기 영역에 나오는 '연결탐험' 버튼을 실제 허브가 있는 사건에만 표시
2. EVENT_HUB_LINKS가 없거나 EXPLORE_HUBS에 실제 허브가 없는 경우 연결탐험 버튼 자체를 숨김
3. 기존 상세보기 버튼은 그대로 유지
4. 캐시명 v82로 변경

검증:
- 문법검사 통과
- 실제 허브 연결 사건만 버튼 표시 조건 통과
