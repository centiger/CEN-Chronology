// 야곱과 에서의 팥죽 장자권 핵심사건 오류 수정
(function(){
  if(typeof EVENT_ENRICH === "undefined") return;

  EVENT_ENRICH["jacob-esau-birthright"] = Object.assign(
    {},
    EVENT_ENRICH["jacob-esau-birthright"] || {},
    {
      flowTitle:"6. 핵심사건 흐름",
      flow:[
        ["에서의 사냥 후 귀환","에서가 사냥에서 돌아와 몹시 피곤하고 배고픈 상태가 됨",""],
        ["붉은 죽 요청","에서가 야곱에게 붉은 죽을 달라고 요청함",""],
        ["야곱의 제안","야곱이 먼저 장자권을 맹세로 넘기라고 제안함",""],
        ["장자권을 경시한 에서","에서가 장자권을 가볍게 여기며 팥죽 한 그릇과 맞바꿈",""],
        ["장자권의 이전","에서가 맹세하고 자기 장자권을 야곱에게 팔아넘김",""],
        ["팥죽을 먹은 에서","야곱이 팥죽을 주자 에서가 먹고 마시고 일어나 감",""]
      ]
    }
  );

  if(typeof EVENTS !== "undefined" && EVENTS["jacob-esau-birthright"]){
    EVENTS["jacob-esau-birthright"].core = [
      "에서의 사냥 후 귀환",
      "붉은 죽 요청",
      "야곱의 제안",
      "장자권을 경시한 에서",
      "장자권의 이전",
      "팥죽을 먹은 에서"
    ];
  }
})();
