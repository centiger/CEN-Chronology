
// CEN Bible Chronology Data v8
// 핵심 원칙: 시대(era)와 사건(event)을 분리한다.
// CEN Bible 2.0 통합 시에는 이 파일을 data/chronology.js 또는 data/chronology.json으로 옮기면 된다.

const CHRONOLOGY_VERSION = "v8-creation-origin-prototype";

const ERA_ORDER = [
  "창조와 원역사", "족장 시대", "출애굽과 광야", "가나안 정복", "사사 시대",
  "통일왕국", "분열왕국", "유다 멸망과 포로", "포로귀환", "신구약 중간기",
  "예수 시대", "초대교회", "종말과 새창조"
];

const ERAS = [
  {
    id:"era-origin",
    title:"창조와 원역사",
    year:"BC 4000경 ~ BC 2200경",
    scripture:"창세기 1~11장",
    summary:"창조, 인간의 타락, 죄의 확산, 심판과 구원, 민족의 흩어짐을 다루는 성경 역사의 출발점입니다.",
    people:"하나님, 아담, 하와, 가인, 아벨, 노아",
    tone:"origin",
    eventIds:["creation","adam-eve","eden-exile","cain-abel","noah-ark","babel-tower"]
  },
  {
    id:"era-patriarch",
    title:"족장 시대",
    year:"BC 2000경 ~ BC 1800경",
    scripture:"창세기 12~50장",
    summary:"하나님께서 아브라함과 그의 후손을 부르시고 언약 백성의 뿌리를 세우신 시대입니다.",
    people:"아브라함, 이삭, 야곱, 요셉",
    tone:"patriarch",
    eventIds:["abraham-call","lot-sodom","isaac-offering","jacob-ladder","jabbok-wrestling","joseph-dream","joseph-governor"]
  },
  {
    id:"era-exodus",
    title:"출애굽과 광야",
    year:"BC 1446경 ~ BC 1406경",
    scripture:"출애굽기 ~ 신명기",
    summary:"이스라엘이 애굽에서 해방되어 언약 백성으로 세워지고 광야에서 훈련받은 시대입니다.",
    people:"모세, 아론, 여호수아",
    tone:"exodus",
    eventIds:["moses-birth","burning-bush","ten-plagues","passover","red-sea","manna-quail","sinai-commandments","golden-calf","tabernacle","wilderness-40","bronze-serpent"]
  },
  {
    id:"era-conquest",
    title:"가나안 정복",
    year:"BC 1406경 ~ BC 1375경",
    scripture:"여호수아",
    summary:"이스라엘이 요단강을 건너 약속의 땅에 들어가고 가나안 땅을 분배받은 시대입니다.",
    people:"여호수아, 갈렙",
    tone:"conquest",
    eventIds:["jordan-crossing","jericho","ai-battle","sun-moon","land-allotment"]
  },
  {
    id:"era-judges",
    title:"사사 시대",
    year:"BC 1375경 ~ BC 1050경",
    scripture:"사사기, 룻기",
    summary:"왕이 없던 시대에 죄, 압제, 부르짖음, 구원이 반복된 혼란의 시기입니다.",
    people:"드보라, 바락, 기드온, 삼손, 룻, 보아스",
    tone:"judges",
    eventIds:["deborah-barak","gideon-300","samson","ruth-boaz"]
  },
  {
    id:"era-united",
    title:"통일왕국",
    year:"BC 1050경 ~ BC 931경",
    scripture:"사무엘상·하, 열왕기상 1~11장",
    summary:"사울, 다윗, 솔로몬으로 이어지는 이스라엘 왕국의 전성기입니다.",
    people:"사울, 다윗, 솔로몬",
    tone:"kingdom",
    eventIds:["saul-king","david-goliath","ark-move","david-kingdom","bathsheba","solomon-wisdom","temple-build","temple-dedication"]
  },
  {
    id:"era-divided",
    title:"분열왕국",
    year:"BC 931경 ~ BC 586경",
    scripture:"열왕기상 12장 ~ 열왕기하",
    summary:"북이스라엘과 남유다로 나뉘고, 왕들과 선지자들이 복잡하게 얽힌 시대입니다.",
    people:"엘리야, 엘리사, 이사야, 예레미야, 히스기야, 요시야",
    tone:"divided",
    eventIds:["kingdom-divide","golden-calves","carmel","naboth","elisha-miracles","jonah-nineveh","north-fall","hezekiah-reform","assyria-invasion","josiah-reform","jeremiah-tears","judah-fall"]
  },
  {
    id:"era-exile",
    title:"유다 멸망과 포로",
    year:"BC 605경 ~ BC 538경",
    scripture:"열왕기하 24~25장, 다니엘, 에스겔, 에스더",
    summary:"예루살렘과 성전이 무너지고, 포로지에서 하나님 신앙이 새롭게 붙들린 시대입니다.",
    people:"다니엘, 세 친구, 에스겔, 에스더",
    tone:"exile",
    eventIds:["daniel-friends","furnace","nebuchadnezzar-dream","lion-den","ezekiel-vision","esther-purim"]
  },
  {
    id:"era-return",
    title:"포로귀환",
    year:"BC 538경 ~ BC 430경",
    scripture:"에스라, 느헤미야, 학개, 스가랴, 말라기",
    summary:"포로에서 돌아온 유다 공동체가 성전, 율법, 성벽을 다시 세운 재건의 시대입니다.",
    people:"스룹바벨, 에스라, 느헤미야",
    tone:"return",
    eventIds:["zerubbabel-return","temple-rebuild","ezra-reform","nehemiah-wall"]
  },
  {
    id:"era-intertestamental",
    title:"신구약 중간기",
    year:"BC 400경 ~ BC 4경",
    scripture:"말라기 이후 ~ 마태복음 이전",
    summary:"기록 선지자의 활동은 멈췄지만, 헬라 문화와 로마 지배 속에서 신약의 무대가 준비된 400년 침묵기입니다.",
    people:"알렉산더 대왕, 마카비 가문, 헤롯 가문",
    tone:"silent",
    eventIds:["hellenism","alexander","maccabees","hanukkah","rome"]
  },
  {
    id:"era-jesus",
    title:"예수 시대",
    year:"BC 4경 ~ AD 30경",
    scripture:"복음서",
    summary:"예수 그리스도의 탄생, 공생애, 십자가, 부활을 통해 구약의 약속이 성취된 시대입니다.",
    people:"예수님, 세례요한, 제자들",
    tone:"jesus",
    eventIds:["jesus-birth","magi","john-baptist","jesus-baptism","temptation","calling-disciples","sermon-mount","five-loaves","walk-water","transfiguration","lazarus","triumphal-entry","last-supper","gethsemane","cross","resurrection","pentecost-promise","ascension"]
  },
  {
    id:"era-church",
    title:"초대교회",
    year:"AD 30경 ~ AD 100경",
    scripture:"사도행전, 서신서",
    summary:"성령강림 이후 복음이 예루살렘에서 로마까지 확장된 시대입니다.",
    people:"베드로, 스데반, 바울, 요한",
    tone:"church",
    eventIds:["pentecost","stephen","paul-conversion","paul-1st","jerusalem-council","paul-2nd","paul-3rd","rome-transfer","john-patmos"]
  },
  {
    id:"era-newcreation",
    title:"종말과 새창조",
    year:"미래",
    scripture:"요한계시록",
    summary:"하나님의 최종 심판과 새 하늘과 새 땅의 완성을 바라보는 성경의 결말입니다.",
    people:"요한",
    tone:"newcreation",
    eventIds:["seven-churches","seven-seals","beast-tribulation","armageddon","new-jerusalem","new-heaven-earth"]
  }
];

const EVENTS = {
  "creation":{
    title:"창조", era:"창조와 원역사", year:"태초, 기원전 약 4000년 이상", scripture:"창세기 1~2장",
    place:"천지, 하늘과 땅, 우주와 지구 전체",
    people:["하나님","아담","하와","천사들","동물들"],
    summary:"하나님이 태초에 천지와 만물을 창조하시고, 6일 동안 창조를 이루신 뒤 7일째 안식하신 사건입니다.",
    core:["1일: 빛과 어둠을 나누심","2일: 궁창, 하늘과 물을 나누심","3일: 땅과 바다, 식물을 창조하심","4일: 해와 달과 별을 만드심","5일: 바다 생물과 하늘의 새를 창조하심","6일: 동물과 사람을 창조하시고 복 주심","7일: 하나님이 안식하시고 그 날을 복되게 하심"],
    meaning:["하나님은 창조주이시며 모든 것의 주권자이심","모든 존재는 하나님의 말씀으로 창조됨","사람은 하나님의 형상대로 창조되어 특별한 가치를 가짐","창조는 선하며 하나님께 영광을 돌리기 위한 것임"],
    connect:["유월절","성막","십자가","성찬","새창조"],
    visual:"우주, 지구, 하늘, 바다, 육지, 생명체",
    image:"assets/infographics/01_creation.png"
  },
  "adam-eve":{
    title:"아담과 하와", era:"창조와 원역사", year:"태초, 창조 직후", scripture:"창세기 2장",
    place:"에덴동산",
    people:["하나님","아담","하와"],
    summary:"하나님께서 사람을 흙으로 지으시고 생기를 불어넣으시며, 아담과 하와를 통해 인류와 가정의 시작을 세우신 사건입니다.",
    core:["아담이 흙으로 지음받음","하나님이 생기를 불어넣으심","에덴동산을 맡기심","하와가 아담의 돕는 배필로 지음받음","부부와 가정의 기원이 세워짐"],
    meaning:["인간은 하나님의 형상으로 창조된 존귀한 존재","노동과 돌봄은 창조 질서 안에 있음","남자와 여자는 하나님 앞에서 함께 부름받은 존재","가정과 관계의 시작을 보여줌"],
    connect:["창조","에덴동산 추방","가정","그리스도와 교회"],
    visual:"에덴동산, 생명나무, 아담과 하와",
    image:"assets/infographics/02_adam_eve.png"
  },
  "eden-exile":{
    title:"에덴동산 추방", era:"창조와 원역사", year:"태초 이후", scripture:"창세기 3장",
    place:"에덴동산, 동산 동쪽",
    people:["하나님","아담","하와","뱀"],
    summary:"아담과 하와가 하나님의 명령을 어기고 선악과를 먹음으로 죄가 세상에 들어오고, 인간이 에덴동산에서 추방된 사건입니다.",
    core:["뱀이 하와를 유혹함","아담과 하와가 선악과를 먹음","죄와 두려움과 숨음이 시작됨","하나님이 심판을 선언하심","가죽옷과 여자의 후손 약속이 주어짐","에덴동산에서 추방됨"],
    meaning:["죄는 하나님과 인간, 인간과 인간, 인간과 자연의 관계를 깨뜨림","심판 중에도 구원의 약속이 주어짐","여자의 후손 약속은 복음의 첫 실마리로 이해됨","인간은 스스로 생명에 이를 수 없음을 보여줌"],
    connect:["창조","가인과 아벨","십자가","새예루살렘"],
    visual:"에덴동산, 선악과, 추방, 그룹과 불칼",
    image:"assets/infographics/03_eden_exile.png"
  },
  "cain-abel":{
    title:"가인과 아벨", era:"창조와 원역사", year:"타락 이후 초기 인류 시대", scripture:"창세기 4장",
    place:"에덴 동쪽, 놋 땅",
    people:["가인","아벨","하나님"],
    summary:"가인이 동생 아벨을 죽인 인류 최초의 살인 사건으로, 죄가 인간관계 안으로 확산되는 모습을 보여줍니다.",
    core:["가인과 아벨이 제물을 드림","하나님이 아벨과 그의 제물은 받으심","가인이 분노함","가인이 아벨을 죽임","하나님이 가인에게 죄를 물으심","가인이 땅에서 떠돌게 됨"],
    meaning:["죄는 예배와 관계 안에서도 드러남","질투와 분노가 살인으로 이어질 수 있음","하나님은 억울한 피의 소리를 들으심","심판 중에도 보호의 표가 주어짐"],
    connect:["에덴동산 추방","제사","피","의인 아벨","십자가"],
    visual:"두 형제, 제단, 들판, 놋 땅",
    image:"assets/infographics/04_cain_abel.png"
  },
  "noah-ark":{
    title:"노아의 방주", era:"창조와 원역사", year:"홍수 시대, 기원전 약 2500년경 전후", scripture:"창세기 6~9장",
    place:"온 땅, 방주, 아라랏 산",
    people:["하나님","노아","노아의 가족","셈","함","야벳"],
    summary:"세상의 죄악이 가득한 가운데 하나님이 홍수로 심판하시되, 노아와 그의 가족을 방주로 구원하신 사건입니다.",
    core:["세상의 죄악이 가득함","노아가 하나님의 명령을 따라 방주를 지음","홍수가 온 땅을 덮음","방주 안의 노아 가족과 생명들이 보존됨","물이 줄고 방주가 아라랏에 머묾","하나님이 무지개 언약을 주심"],
    meaning:["하나님은 죄를 심판하시는 분","심판 중에도 구원의 길을 예비하심","믿음과 순종은 생명을 보존하는 길이 됨","무지개는 하나님의 언약과 긍휼의 표징"],
    connect:["창조","심판","언약","세례","구원"],
    visual:"방주, 홍수, 아라랏 산, 무지개",
    image:"assets/infographics/05_noah_ark.png"
  },
  "babel-tower":{
    title:"바벨탑", era:"창조와 원역사", year:"홍수 이후, 기원전 약 2200년경 전후", scripture:"창세기 11장",
    place:"시날 평지, 바벨",
    people:["시날 사람들","하나님"],
    summary:"사람들이 자기 이름을 내고 흩어짐을 피하려고 탑을 쌓았으나, 하나님이 언어를 혼잡하게 하셔서 온 땅에 흩으신 사건입니다.",
    core:["사람들이 시날 평지에 모임","성읍과 탑을 쌓으려 함","자기 이름을 내고 흩어짐을 피하려 함","하나님이 내려오셔서 보심","언어가 혼잡해짐","사람들이 온 땅에 흩어짐"],
    meaning:["인간의 교만과 자기중심적 문명을 보여줌","하나님 없이 하나가 되려는 시도는 무너짐","언어와 민족의 흩어짐 배경을 설명함","오순절 성령강림과 복음의 회복 흐름으로 연결됨"],
    connect:["노아의 방주","아브라함의 부르심","오순절","열방","복음"],
    visual:"시날 평지, 탑, 흩어진 사람들, 언어",
    image:"assets/infographics/06_babel_tower.png"
  }
};

const EVENT_SUMMARIES = {
  "창조":"하나님이 태초에 천지와 만물을 창조하신 사건입니다.",
  "아담과 하와":"인류 최초의 남자와 여자가 창조되고, 사람과 가정의 시작이 세워진 사건입니다.",
  "에덴동산 추방":"죄로 인해 인간이 에덴에서 쫓겨나지만, 구원의 약속이 처음 암시된 사건입니다.",
  "가인과 아벨":"가인이 아벨을 죽이며 죄가 인간관계 안으로 확산된 사건입니다.",
  "노아의 방주":"홍수 심판 가운데 노아와 그의 가족을 방주로 구원하신 사건입니다.",
  "바벨탑":"인간의 교만으로 언어가 혼잡해지고 민족들이 흩어진 사건입니다.",
};

// 나머지 시대 사건은 먼저 칩과 미리보기용으로 유지한다.
// 상세 탭카드는 인포그래픽이 확보되는 순서대로 EVENTS에 추가하면 된다.
const ALL_EVENT_TITLES = {
  "abraham-call":"아브라함의 부르심","lot-sodom":"롯과 소돔","isaac-offering":"이삭 번제","jacob-ladder":"야곱의 사닥다리","jabbok-wrestling":"얍복강 씨름","joseph-dream":"요셉의 꿈","joseph-governor":"요셉의 애굽 총리 등극",
  "moses-birth":"모세의 탄생","burning-bush":"떨기나무 소명","ten-plagues":"10재앙","passover":"유월절","red-sea":"홍해 도하","manna-quail":"만나와 메추라기","sinai-commandments":"시내산 십계명","golden-calf":"금송아지 사건","tabernacle":"성막 건축","wilderness-40":"광야 40년","bronze-serpent":"놋뱀 사건",
  "jordan-crossing":"요단강 도하","jericho":"여리고 함락","ai-battle":"아이성 전투","sun-moon":"해와 달이 멈춤","land-allotment":"가나안 땅 분배",
  "deborah-barak":"드보라와 바락","gideon-300":"기드온 300용사","samson":"삼손","ruth-boaz":"룻과 보아스",
  "saul-king":"사울 왕 즉위","david-goliath":"다윗과 골리앗","ark-move":"언약궤 이동","david-kingdom":"다윗 왕국","bathsheba":"밧세바 사건","solomon-wisdom":"솔로몬의 지혜","temple-build":"성전 건축","temple-dedication":"성전 봉헌",
  "kingdom-divide":"왕국 분열","golden-calves":"금송아지 우상","carmel":"엘리야 갈멜산 대결","naboth":"나봇의 포도원","elisha-miracles":"엘리사의 기적","jonah-nineveh":"요나와 니느웨","north-fall":"북이스라엘 멸망","hezekiah-reform":"히스기야 개혁","assyria-invasion":"앗수르 침공","josiah-reform":"요시야 개혁","jeremiah-tears":"예레미야의 눈물","judah-fall":"남유다 멸망",
  "daniel-friends":"다니엘과 세 친구","furnace":"풀무불 사건","nebuchadnezzar-dream":"느부갓네살의 꿈","lion-den":"사자굴 사건","ezekiel-vision":"에스겔 환상","esther-purim":"에스더와 부림절",
  "zerubbabel-return":"스룹바벨 귀환","temple-rebuild":"성전 재건","ezra-reform":"에스라 율법개혁","nehemiah-wall":"느헤미야 성벽 재건",
  "hellenism":"헬라 제국 등장","alexander":"알렉산더 대왕","maccabees":"마카비 혁명","hanukkah":"하누카 절기","rome":"로마 제국 등장",
  "jesus-birth":"예수 탄생","magi":"동방박사","john-baptist":"세례요한","jesus-baptism":"예수 세례","temptation":"광야 시험","calling-disciples":"제자 부르심","sermon-mount":"산상수훈","five-loaves":"오병이어","walk-water":"물 위를 걸으심","transfiguration":"변화산 사건","lazarus":"나사로 부활","triumphal-entry":"예루살렘 입성","last-supper":"최후의 만찬","gethsemane":"겟세마네 기도","cross":"십자가","resurrection":"부활","pentecost-promise":"오순절 약속","ascension":"승천",
  "pentecost":"오순절 성령강림","stephen":"스데반 순교","paul-conversion":"바울 회심","paul-1st":"1차 선교여행","jerusalem-council":"예루살렘 공의회","paul-2nd":"2차 선교여행","paul-3rd":"3차 선교여행","rome-transfer":"로마 압송","john-patmos":"밧모섬 요한",
  "seven-churches":"일곱 교회","seven-seals":"일곱 인","beast-tribulation":"짐승과 환난","armageddon":"아마겟돈","new-jerusalem":"새예루살렘","new-heaven-earth":"새 하늘과 새 땅"
};


// v9 보강 데이터: 인포그래픽의 6.핵심사건(흐름), 7.관련성경, 9.지도/시각자료를 상세 화면 중심축으로 사용
const EVENT_ENRICH = {
  "creation": {
    flowTitle: "6일 창조의 기록",
    flow: [
      ["1일째", "빛을 창조하시고 빛과 어둠을 나누심 (낮과 밤)", ""],
      ["2일째", "궁창을 만드시고 하늘과 물을 나누심", ""],
      ["3일째", "땅과 바다를 나누시고 식물과 나무를 창조하심", ""],
      ["4일째", "해와 달과 별을 만드심", ""],
      ["5일째", "바다의 생물과 하늘의 새를 창조하심", ""],
      ["6일째", "땅의 동물과 사람을 창조하시고 복 주심", ""],
      ["7일째", "하나님이 안식하시고 그 날을 복되게 하심", ""]
    ],
    scriptureRefs: [
      ["창세기 1:1", "태초에 하나님이 천지를 창조하시니라"],
      ["창세기 1:31", "하나님이 지으신 모든 것이 심히 좋았더라"],
      ["창세기 2:2", "하나님이 자기의 일을 일곱째 날에 마치시니라"]
    ],
    visualItems: ["우주", "지구", "하늘", "바다", "육지", "생명체"]
  },

  "adam-eve": {
    flowTitle: "핵심사건 흐름",
    flow: [
      ["1 창조", "하나님이 아담을 흙으로 지으시고 생기를 불어넣어 생명이 되게 하심 (창 2:7)", ""],
      ["2 하와의 창조", "하나님이 아담의 갈비뼈로 하와를 만들어 주심 (창 2:21-22)", ""],
      ["3 에덴동산과 명령", "에덴동산에 살게 하시고, 선악을 알게 하는 나무 열매는 먹지 말라고 명령하심 (창 2:16-17)", ""],
      ["4 유혹과 불순종", "뱀이 하와를 유혹하고, 하와가 열매를 따 먹고 아담에게도 주어 함께 먹음 (창 3:1-6)", ""],
      ["5 죄의 결과", "두 사람이 부끄러워 숨고, 하나님은 죄의 결과를 선언하심 (창 3:7-19)", ""],
      ["6 에덴동산에서 추방", "하나님이 두 사람을 에덴동산에서 내보내고 그 길을 지키게 하심 (추방 명령) (창 3:22-24)", ""],
      ["7 구원의 약속", "여자의 후손이 뱀의 머리를 상하게 할 것이라는 구원의 약속을 주심 (창 3:15)", ""]
    ],
    scriptureRefs: [
      ["창세기 2:16-31", "사람을 하나님의 형상으로 창조"],
      ["창세기 2:4-25", "아담과 하와의 창조와 에덴동산"],
      ["창세기 3:1-24", "타락과 심판, 에덴동산에서 추방"],
      ["로마서 5:12-19", "아담의 죄로 인한 인류의 타락"],
      ["고린도전서 15:21-22", "아담과 그리스도의 대조"]
    ],
    visualItems: ["에덴동산 추정 지도", "에덴동산 사건 흐름도"]
  },

  "eden-exile": {
    flowTitle: "핵심사건 흐름",
    flow: [
      ["1 죄의 발견", "하나님이 동산에 오셔서 그들의 죄를 아시고 물으심 (창 3:8-10)", ""],
      ["2 죄의 고백", "아담과 하와가 자신의 잘못을 변명하며 죄를 고백함 (창 3:11-13)", ""],
      ["3 심판 선언", "하나님이 뱀과 여자의 후손 사이의 원수를 선포하시고, 죄의 결과를 선언하심 (창 3:14-19)", ""],
      ["4 가죽옷을 입힘", "하나님이 가죽옷을 지어 아담과 하와에게 입히심 (은혜의 시작) (창 3:21)", ""],
      ["5 에덴동산에서 추방", "하나님이 아담을 에덴동산에서 내보내어 땅을 경작하게 하심 (추방 명령) (창 3:22-23)", ""],
      ["6 그룹과 두루 도는 칼", "동쪽에 그룹과 두루 도는 칼을 두어 생명나무의 길을 지키게 하심 (창 3:24)", ""],
      ["7 인간의 새로운 삶", "인간은 고통과 수고 속에서 삶을 살아가게 되며, 하나님과의 거리가 생김 (창 3:23-24)", ""]
    ],
    scriptureRefs: [
      ["창세기 2:8-17", "에덴동산과 명령"],
      ["창세기 3:1-24", "선악과 사건과 추방"],
      ["로마서 5:12-19", "한 사람의 범죄로 모든 사람이 죄인 됨"],
      ["고린도전서 15:21-22", "아담 안에서 죽음, 그리스도 안에서 생명"]
    ],
    visualItems: ["에덴동산 추정 지도", "에덴동산 추방 개념도"]
  },

  "cain-abel": {
    flowTitle: "핵심사건 흐름",
    flow: [
      ["1 제사 준비", "가인과 아벨이 각각 제물을 준비하였다. (창 4:3)", ""],
      ["2 제사 드림", "둘이 하나님께 제사를 드렸다. (창 4:3-4)", ""],
      ["3 제사 받으심", "하나님은 아벨과 그의 제사는 받으시고, 가인과 그의 제사는 받지 않으셨다. (창 4:4-5)", ""],
      ["4 가인의 분노", "가인이 심히 분하여 낙심하였다. (창 4:5)", ""],
      ["5 하나님의 경고", "하나님이 가인에게 경고하시고 회개할 기회를 주셨다. (창 4:6-7)", ""],
      ["6 아벨 살해", "가인이 아벨을 들로 데리고 가서 그를 쳐 죽였다. (창 4:8)", ""],
      ["7 심판과 표", "하나님이 가인을 꾸짖으시고, 그에게 표를 주사 누구든지 그를 죽이지 못하게 하셨다. (창 4:9-16)", ""]
    ],
    scriptureRefs: [
      ["창세기 4:1-16", "가인과 아벨 이야기"],
      ["히브리서 11:4", "아벨의 믿음"],
      ["요한일서 3:12", "형제 사랑의 교훈"],
      ["마태복음 23:35", "아벨의 의로운 피"]
    ],
    visualItems: ["에덴동산과 주변 지역 개념도", "사건 흐름 요약도"]
  },

  "noah-ark": {
    flowTitle: "핵심사건 흐름",
    flow: [
      ["1 방주 건축 명령", "하나님이 노아에게 방주를 만들라고 명령하심 (창 6:13-22)", ""],
      ["2 방주로 들어감", "노아와 그의 가족, 각 종류의 동물들이 방주로 들어감 (창 7:1-9)", ""],
      ["3 홍수 시작", "40일 동안 비가 내리고, 샘들이 터져 온 세상이 물로 덮임 (창 7:10-24)", ""],
      ["4 물이 점점 줄어듦", "150일 후 물이 줄어들기 시작하고, 방주가 아라랏 산에 머물게 됨 (창 8:1-5)", ""],
      ["5 새를 보내 살핌", "까마귀와 비둘기를 보내어 땅이 드러났는지 살핌 (창 8:6-12)", ""],
      ["6 방주에서 나옴", "하나님이 문을 열게 하시고, 노아 가족과 동물들이 방주에서 나옴 (창 8:13-19)", ""],
      ["7 무지개 언약", "하나님이 무지개를 보이며 다시는 홍수로 세상을 멸하지 않겠다고 약속하심 (창 9:8-17)", ""]
    ],
    scriptureRefs: [
      ["창세기 6:5-9:17", "노아의 방주 전체 이야기"],
      ["베드로전서 3:20-21", "노아의 방주를 통한 구원의 예표"],
      ["이사야 54:9", "무지개 언약의 상징성"],
      ["마태복음 24:37-39", "말세에 노아 때와 같을 것"]
    ],
    visualItems: ["전 지구적 홍수 개념도", "아라랏 산 추정 지도"]
  },

  "babel-tower": {
    flowTitle: "핵심사건 흐름",
    flow: [
      ["1 한 곳에 모임", "노아의 후손들이 온 땅에 퍼지지 않고 시날 땅에 모였다. (창 11:1)", ""],
      ["2 탑 건축 계획", "그들은 벽돌을 만들고, 역청으로 굳게 하여 하늘에 닿을 탑을 쌓고 자신들의 이름을 내기로 하였다. (창 11:2-4)", ""],
      ["3 하나님이 내려가심", "여호와께서 내려가서 그 성과 탑을 건축하는 자들의 일을 보셨다. (창 11:5)", ""],
      ["4 언어 혼잡", "하나님이 그들의 언어를 혼잡하게 하사 서로 알아듣지 못하게 하셨다. (창 11:7)", ""],
      ["5 탑 쌓는 일 중단", "그들이 탑 쌓는 일을 그치고, 성읍 건축하기를 그쳤더라. (창 11:8)", ""],
      ["6 온 땅으로 흩어짐", "여호와께서 그들을 거기서 온 땅 위로 흩으셨더라. (창 11:9)", ""],
      ["7 열국의 시작", "이러므로 그 이름을 바벨이라 하니 이는 여호와께서 온 천하의 언어를 거기서 혼잡하게 하셨음이더라. (창 11:9)", ""]
    ],
    scriptureRefs: [
      ["창세기 10:8-10", "니므롯의 등장과 바벨 건축"],
      ["창세기 11:1-9", "바벨탑 사건"],
      ["신명기 32:8", "지극히 높으신 이가 민족들을 나누실 때 언어의 경계 설정"],
      ["사도행전 2:1-11", "성령 강림으로 언어가 통함"]
    ],
    visualItems: ["바벨탑 위치 지도", "바벨탑 모습 상상도"]
  }
};

// v11 crop 지도/시각자료 이미지
const EVENT_MAP_CROPS = {
  "creation": "assets/maps/01_creation_map.png",
  "adam-eve": "assets/maps/02_adam_eve_map.png",
  "eden-exile": "assets/maps/03_eden_exile_map.png",
  "cain-abel": "assets/maps/04_cain_abel_map.png",
  "noah-ark": "assets/maps/05_noah_ark_map.png",
  "babel-tower": "assets/maps/06_babel_tower_map.png"
};
