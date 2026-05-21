v77 노아의 방주 언약 허브 표시 하드픽스

업로드 파일:
- index.html
- sw.js
- css/style.css
- js/app.js
- js/chronology-data.js

수정 내용:
1. renderExploreRows가 EVENT_EXPLORE 존재 여부와 무관하게 허브 카드를 먼저 렌더링하도록 수정
2. noah-ark 사건은 app.js에서도 covenant 허브를 안전장치로 강제 표시
3. chronology-data.js에서도 noah-ark → covenant 연결을 마지막에 다시 병합
4. 캐시명 v77로 변경

확인:
- 노아의 방주 상세화면 > 8. 연결탐험
- '📜 언약의 흐름' 카드가 보여야 정상입니다.
