// v87 safe patch - 이삭과 리브가의 결혼만 추가 수정
(function(){
  if(typeof EVENT_ENRICH === "undefined") return;

  EVENT_ENRICH["isaac-rebekah-marriage"] = Object.assign(
    {},
    EVENT_ENRICH["isaac-rebekah-marriage"] || {},
    {
      flowTitle:"6. 핵심사건 흐름",
      flow:[
        ["배우자 찾기","아브라함이 종을 하란으로 보내 이삭의 아내를 찾게 함",""],
        ["종의 기도","아브라함의 종이 하나님의 인도를 구하며 기도함",""],
        ["리브가 만남","리브가가 우물가에서 종을 만나고 하나님의 응답으로 확인됨",""],
        ["가족의 동의","리브가와 가족이 하나님의 뜻을 인정하고 길을 떠남",""],
        ["언약 가정 형성","이삭과 리브가가 결혼하여 언약 가문의 계승이 이어짐",""]
      ]
    }
  );

  if(typeof EVENTS !== "undefined" && EVENTS["isaac-rebekah-marriage"]){
    EVENTS["isaac-rebekah-marriage"].core = [
      "배우자 찾기",
      "종의 기도",
      "리브가 만남",
      "가족의 동의",
      "언약 가정 형성"
    ];
  }
})();
