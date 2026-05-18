
// CEN Bible Chronology Data v8
// 핵심 원칙: 시대(era)와 사건(event)을 분리한다.
// CEN Bible 2.0 통합 시에는 이 파일을 data/chronology.js 또는 data/chronology.json으로 옮기면 된다.

const CHRONOLOGY_VERSION = "v70-exile-return-added";

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
    people:"아브라함, 사라, 이삭, 리브가, 야곱, 요셉",
    tone:"patriarch",
    eventIds:["abraham-call","isaac-birth","isaac-rebekah","birthright-stew","lot-sodom","jacob-ladder","jabbok-wrestling","joseph-dream","joseph-governor","jacob-egypt"]
  },
  {
    id:"era-exodus",
    title:"출애굽과 광야",
    year:"BC 1446경 ~ BC 1406경",
    scripture:"출애굽기 ~ 신명기",
    summary:"이스라엘이 애굽에서 해방되어 언약 백성으로 세워지고 광야에서 훈련받은 시대입니다.",
    people:"모세, 아론, 여호수아",
    tone:"exodus",
    eventIds:["moses-birth","moses-midian","burning-bush","ten-plagues","passover","red-sea","manna-quail","aaron-hur-prayer","sinai-commandments","golden-calf","tabernacle","kadesh-spies","wilderness-40","korah-rebellion","bronze-serpent","balaam-donkey","moses-farewell-death"]
  },
  {
    id:"era-conquest",
    title:"가나안 정복",
    year:"BC 1406경 ~ BC 1375경",
    scripture:"여호수아",
    summary:"이스라엘이 요단강을 건너 약속의 땅에 들어가고 가나안 땅을 분배받은 시대입니다.",
    people:"여호수아, 갈렙",
    tone:"conquest",
    eventIds:["jordan-crossing","circumcision-gilgal-passover","jericho","ai-battle","sun-moon","land-allotment","joshua-shechem-covenant"]
  },
  {
    id:"era-judges",
    title:"사사 시대",
    year:"BC 1375경 ~ BC 1050경",
    scripture:"사사기, 룻기",
    summary:"왕이 없던 시대에 죄, 압제, 부르짖음, 구원이 반복된 혼란의 시기입니다.",
    people:"드보라, 바락, 기드온, 삼손, 룻, 보아스",
    tone:"judges",
    eventIds:["judges-cycle","deborah-barak","gideon-300","jephthah","samson","micah-idol-levite","gibeah-atrocity","eli-samuel-birth","ruth-boaz"]
  },
  {
    id:"era-united",
    title:"통일왕국",
    year:"BC 1050경 ~ BC 931경",
    scripture:"사무엘상·하, 열왕기상 1~11장",
    summary:"사울, 다윗, 솔로몬으로 이어지는 이스라엘 왕국의 전성기입니다.",
    people:"사울, 다윗, 솔로몬",
    tone:"kingdom",
    eventIds:["saul-king","saul-disobedience","david-goliath","david-fugitive-life","ark-move","david-kingdom","bathsheba","absalom-rebellion","solomon-wisdom","temple-build","temple-dedication"]
  },
  {
    id:"era-divided",
    title:"분열왕국",
    year:"BC 931경 ~ BC 586경",
    scripture:"열왕기상 12장 ~ 열왕기하",
    summary:"북이스라엘과 남유다로 나뉘고, 왕들과 선지자들이 복잡하게 얽힌 시대입니다.",
    people:"엘리야, 엘리사, 이사야, 예레미야, 히스기야, 요시야",
    tone:"divided",
    eventIds:["kingdom-divide","golden-calves","ahab-jezebel-idolatry","carmel","naboth","elisha-miracles","naaman-healing","jonah-nineveh","north-fall","hezekiah-reform","assyria-invasion","josiah-reform","jeremiah-tears","judah-fall"]
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
  },
"moses-midian": {
    title:"모세의 미디안 광야 도피", era:"출애굽과 광야", year:"출애굽 이전, BC 1486년경", scripture:"출애굽기 2:11~25",
    place:"애굽 왕궁 → 미디안 광야", people:["모세","이스라엘 동족","미디안 제사장 이드로","십보라","바로"],
    summary:"모세가 애굽 사람을 친 뒤 바로의 위협을 피해 미디안 광야로 도피하고, 그곳에서 긴 준비의 시간을 보내게 된 사건입니다.",
    core:["동족의 고통을 봄","애굽 사람을 침","바로의 위협","미디안으로 도피","이드로의 집에 머묾","십보라와 결혼","광야에서 지도자로 준비됨"],
    meaning:["하나님의 사람은 실패와 광야의 시간을 통해 준비됨","인간적 열심만으로는 구원을 이룰 수 없음","광야는 도피처이면서 동시에 소명의 준비 장소임","하나님은 보이지 않는 시간에도 구원의 계획을 진행하심"],
    connect:["모세의 탄생","떨기나무 소명","출애굽","광야 훈련","하나님의 준비"],
    visual:"애굽에서 미디안으로 이동한 도피 경로, 미디안 광야", image:"assets/infographics/105_moses_midian.png"
  },
  "aaron-hur-prayer": {
    title:"시내산 앞 아론과 훌의 기도", era:"출애굽과 광야", year:"BC 1446년경", scripture:"출애굽기 17:8~16",
    place:"르비딤, 아말렉과의 전투 현장", people:["모세","아론","훌","여호수아","아말렉"],
    summary:"아말렉과의 전투에서 모세가 손을 들면 이스라엘이 이기고 손을 내리면 밀리자, 아론과 훌이 모세의 손을 붙들어 승리하게 한 사건입니다.",
    core:["아말렉의 공격","여호수아의 전투 지휘","모세가 산 위에서 손을 듦","아론과 훌이 손을 붙듦","이스라엘의 승리","여호와 닛시 고백"],
    meaning:["승리는 군사력보다 하나님의 도우심에 달려 있음","지도자는 공동체의 협력과 중보가 필요함","기도와 순종은 전쟁의 보이지 않는 중심임","하나님은 자기 백성을 위해 싸우시는 분임"],
    connect:["홍해의 기적","광야 훈련","여호수아의 등장","기도","여호와 닛시"],
    visual:"르비딤 위치, 모세·아론·훌의 산 위 장면", image:"assets/infographics/107_aaron_hur_prayer.png"
  },
  "kadesh-spies": {
    title:"가데스 바네아의 정탐꾼", era:"출애굽과 광야", year:"출애굽 후 2년째, BC 1445년경", scripture:"민수기 13~14장",
    place:"가데스 바네아, 가나안 남부", people:["모세","여호수아","갈렙","열 정탐꾼","이스라엘 백성"],
    summary:"가나안을 정탐한 열두 명 중 열 명은 두려움의 보고를 하고, 여호수아와 갈렙은 믿음의 보고를 했으나 백성이 불신앙으로 반응하여 광야 40년이 확정된 사건입니다.",
    core:["12정탐꾼 파송","가나안 정탐","풍성한 땅 확인","열 명의 부정적 보고","여호수아와 갈렙의 믿음","백성의 원망","광야 40년 심판"],
    meaning:["믿음은 현실을 부정하는 것이 아니라 하나님의 약속을 더 크게 보는 것임","불신앙은 공동체 전체의 방향을 무너뜨릴 수 있음","약속의 땅은 순종과 믿음으로 들어감","광야 40년은 심판이면서 새 세대 훈련의 시간이 됨"],
    connect:["출애굽","광야 40년","여호수아와 갈렙","요단강 도하","가나안 정복"],
    visual:"가데스 바네아 위치, 정탐 경로, 가나안 포도송이", image:"assets/infographics/109_kadesh_spies.png"
  },
  "korah-rebellion": {
    title:"고라 자손의 반역", era:"출애굽과 광야", year:"광야 생활 중, BC 1440년경", scripture:"민수기 16장",
    place:"광야 진영, 성막 주변", people:["고라","다단","아비람","모세","아론"],
    summary:"고라와 동조자들이 모세와 아론의 권위에 도전하자 하나님께서 그 반역을 심판하시고, 하나님이 세우신 질서와 거룩을 드러내신 사건입니다.",
    core:["고라 무리의 반역","모세와 아론 권위 도전","향로 시험","땅이 갈라짐","반역자 심판","아론의 제사장 직분 확인"],
    meaning:["하나님이 세우신 영적 질서를 인간의 욕망으로 흔들 수 없음","거룩한 직분은 권력 쟁취의 대상이 아님","공동체의 불평과 교만은 심판을 부름","참된 중보자는 하나님의 뜻 앞에 엎드림"],
    connect:["성막","제사장 직분","중보","광야의 원망","그리스도의 참 제사장직"],
    visual:"성막 주변 진영, 고라 반역 심판 장면", image:"assets/infographics/106_korah_rebellion.png"
  },
  "balaam-donkey": {
    title:"발람 선지자와 말하는 나귀", era:"출애굽과 광야", year:"가나안 입성 직전, BC 1407년경", scripture:"민수기 22~24장",
    place:"모압 평지, 아르논과 여리고 맞은편 지역", people:["발람","발락","말하는 나귀","여호와의 사자","이스라엘"],
    summary:"모압 왕 발락이 발람을 불러 이스라엘을 저주하게 하려 했지만, 하나님께서 나귀와 천사를 통해 발람을 막으시고 오히려 이스라엘을 축복하게 하신 사건입니다.",
    core:["발락의 초청","발람의 길","나귀가 천사를 봄","나귀가 말함","발람의 눈이 열림","저주 대신 축복","야곱의 별 예언"],
    meaning:["하나님은 자기 백성을 향한 저주를 축복으로 바꾸심","영적 눈이 어두워지면 나귀보다 못 볼 수 있음","하나님의 말씀은 인간의 욕심보다 강함","메시아를 향한 예언의 빛이 광야에서도 드러남"],
    connect:["아브라함 언약","광야 보호","메시아 예언","동방박사","그리스도의 왕권"],
    visual:"모압 평지, 발람의 길, 말하는 나귀 장면", image:"assets/infographics/108_balaam_donkey.png"
  },
  "moses-farewell-death": {
    title:"모세의 고별설교와 죽음", era:"출애굽과 광야", year:"BC 1406년경", scripture:"신명기 1~34장",
    place:"모압 평지, 느보산", people:["모세","여호수아","이스라엘 백성","하나님","갈렙"],
    summary:"모세가 가나안 입성을 앞둔 새 세대에게 율법과 언약을 다시 선포하고, 여호수아에게 리더십을 넘긴 뒤 느보산에서 죽은 사건입니다.",
    core:["광야 여정 회고","율법 재선포","축복과 저주 제시","여호수아 임명","느보산에서 가나안을 봄","모세의 죽음","여호수아 시대 준비"],
    meaning:["신앙 공동체는 다음 세대에게 말씀을 전수해야 함","지도자의 사명은 하나님의 뜻 안에서 완성됨","약속의 땅은 말씀과 순종으로 살아갈 자리임","모세의 죽음은 여호수아를 통한 새 단계의 시작임"],
    connect:["출애굽","신명기 언약","여호수아","요단강 도하","가나안 정복"],
    visual:"모압 평지, 느보산, 가나안 조망 지도", image:"assets/infographics/110_moses_farewell_death.png"
  }
,
  "judges-cycle":{
    title:"사사기의 악순환 시작", era:"사사 시대", year:"BC 1375경 이후", scripture:"사사기 2장",
    place:"가나안 전역",
    people:["이스라엘 백성","여호와의 사자","사사들"],
    summary:"여호수아 세대 이후 이스라엘이 하나님을 잊고 우상숭배에 빠지며, 죄·압제·부르짖음·구원이 반복되기 시작한 사건입니다.",
    core:["여호수아 세대 이후 신앙 약화","바알과 아스다롯을 섬김","하나님이 이방 민족의 압제를 허락하심","백성이 부르짖음","하나님이 사사를 세워 구원하심","다시 타락하는 악순환이 반복됨"],
    meaning:["왕이 없던 시대의 영적 혼란을 보여줌","죄와 구원의 반복 속에서도 하나님의 긍휼이 드러남","참된 왕과 구원자의 필요를 보여줌"],
    connect:["왕 없음","사사","회개","구원","그리스도 왕권"],
    visual:"사사 시대 악순환 도식",
    image:"assets/infographics/113_judges_cycle.png"
  },
  "jephthah":{
    title:"사사 입다", era:"사사 시대", year:"BC 1100경", scripture:"사사기 10~12장",
    place:"길르앗, 암몬 전쟁 지역",
    people:["입다","길르앗 장로들","암몬 왕","입다의 딸"],
    summary:"길르앗 출신 입다가 암몬과의 전쟁에서 이스라엘을 구원하지만, 성급한 서원으로 비극을 겪은 사건입니다.",
    core:["이스라엘이 암몬의 압제를 받음","길르앗 장로들이 입다를 지도자로 세움","입다가 암몬 왕과 논쟁함","입다가 서원하고 전쟁에 나감","하나님이 승리를 주심","입다의 서원이 비극적 결과를 낳음"],
    meaning:["하나님은 약한 자도 사용하심","무지하고 성급한 서원의 위험을 보여줌","승리보다 순종과 분별이 중요함"],
    connect:["사사","서원","순종","분별","참된 구원자"],
    visual:"길르앗과 암몬 전쟁 개념도",
    image:"assets/infographics/115_jephthah.png"
  },
  "micah-idol-levite":{
    title:"미가의 신상과 레위인의 타락", era:"사사 시대", year:"사사 시대 말기", scripture:"사사기 17~18장",
    place:"에브라임 산지, 단 지파 이동 지역",
    people:["미가","미가의 어머니","레위인","단 지파"],
    summary:"미가가 개인 신상을 만들고 레위인을 사적 제사장으로 고용하며, 단 지파가 그 우상을 빼앗아 자기들의 종교로 삼은 사건입니다.",
    core:["미가가 은으로 신상을 만듦","개인 신당을 세움","레위인을 제사장으로 고용함","단 지파가 정착지를 찾음","단 지파가 신상과 레위인을 빼앗음","우상숭배가 공동체적으로 확산됨"],
    meaning:["자기 소견에 옳은 대로 행한 사사 시대의 영적 타락을 보여줌","참된 예배가 무너질 때 신앙이 사유화됨","하나님의 말씀보다 편의와 욕망을 따른 결과를 경고함"],
    connect:["우상숭배","레위인","예배 타락","왕 없음","참된 예배"],
    visual:"에브라임 산지와 단 지파 이동",
    image:"assets/infographics/114_micah_idol_levite.png"
  },
  "gibeah-atrocity":{
    title:"기브아의 만행", era:"사사 시대", year:"사사 시대 말기", scripture:"사사기 19~21장",
    place:"기브아, 미스바, 베냐민 지역",
    people:["레위인","첩","기브아 사람들","이스라엘 지파들","베냐민 지파"],
    summary:"기브아에서 벌어진 참혹한 죄악으로 이스라엘 지파들이 베냐민 지파와 내전을 벌이게 된 사건입니다.",
    core:["레위인이 첩과 함께 길을 떠남","기브아에서 악한 일이 벌어짐","레위인이 사건을 이스라엘 전체에 알림","이스라엘 지파들이 미스바에 모임","베냐민 지파와 내전이 벌어짐","공동체 전체가 깊은 상처를 입음"],
    meaning:["왕이 없던 시대의 도덕적 붕괴를 보여줌","죄가 개인을 넘어 공동체 전체를 무너뜨림","하나님의 질서와 회복의 필요를 강하게 드러냄"],
    connect:["왕 없음","도덕 붕괴","공동체 심판","회복 필요","참된 왕"],
    visual:"기브아와 베냐민 지역 지도",
    image:"assets/infographics/116_gibeah_atrocity.png"
  },
  "eli-samuel-birth":{
    title:"엘리 제사장과 사무엘의 출생", era:"사사 시대", year:"BC 1100경 ~ BC 1050경", scripture:"사무엘상 1~3장",
    place:"실로 성소",
    people:["엘리","한나","엘가나","사무엘","홉니와 비느하스"],
    summary:"영적으로 어두운 시대에 한나의 기도로 사무엘이 태어나고, 하나님이 사무엘을 부르셔서 새로운 영적 전환을 준비하신 사건입니다.",
    core:["한나가 자녀를 위해 기도함","하나님이 사무엘을 주심","한나가 사무엘을 하나님께 드림","엘리 집안의 타락이 드러남","하나님이 사무엘을 부르심","사사 시대에서 왕정 시대로 넘어가는 전환이 시작됨"],
    meaning:["기도와 헌신을 통해 하나님이 새 시대를 여심","타락한 제사장 시대 속에서도 하나님의 말씀이 다시 임함","사무엘은 사사 시대와 왕정 시대를 잇는 전환 인물임"],
    connect:["기도","성소","말씀 회복","사무엘","왕정 시대"],
    visual:"실로 성소와 사무엘의 부르심",
    image:"assets/infographics/117_eli_samuel_birth.png"
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
  "abraham-call":"아브라함의 부르심","isaac-birth":"이삭의 출생","isaac-rebekah":"이삭과 리브가의 결혼","birthright-stew":"야곱과 에서의 팥죽 장자권","lot-sodom":"롯과 소돔","isaac-offering":"이삭 번제","jacob-ladder":"야곱의 사닥다리","jabbok-wrestling":"얍복강 씨름","joseph-dream":"요셉의 꿈","joseph-governor":"요셉의 애굽 총리 등극","jacob-egypt":"야곱 가족의 애굽 이주",
  "moses-birth":"모세의 탄생","moses-midian":"모세의 미디안 광야 도피","burning-bush":"떨기나무 소명","ten-plagues":"10재앙","passover":"유월절","red-sea":"홍해 도하","manna-quail":"만나와 메추라기","aaron-hur-prayer":"시내산 앞 아론과 훌의 기도","sinai-commandments":"시내산 십계명","golden-calf":"금송아지 사건","tabernacle":"성막 건축","kadesh-spies":"가데스 바네아의 정탐꾼","wilderness-40":"광야 40년","korah-rebellion":"고라 자손의 반역","bronze-serpent":"놋뱀 사건","balaam-donkey":"발람 선지자와 말하는 나귀","moses-farewell-death":"모세의 고별설교와 죽음",
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
      ["빛을 창조하시고 빛과 어둠을 나누심 (낮과 밤)","빛을 창조하시고 빛과 어둠을 나누심 (낮과 밤)",""],
      ["궁창을 만드시고 하늘과 물을 나누심","궁창을 만드시고 하늘과 물을 나누심",""],
      ["땅과 바다를 나누시고 식물과 나무를 창조하심","땅과 바다를 나누시고 식물과 나무를 창조하심",""],
      ["해와 달과 별을 만드심","해와 달과 별을 만드심",""],
      ["바다의 생물과 하늘의 새를 창조하심","바다의 생물과 하늘의 새를 창조하심",""],
      ["땅의 동물과 사람을 창조하시고 복 주심","땅의 동물과 사람을 창조하시고 복 주심",""],
      ["하나님이 안식하시고 그 날을 복되게 하심","하나님이 안식하시고 그 날을 복되게 하심",""]
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
      ["창조", "하나님이 아담을 흙으로 지으시고 생기를 불어넣어 생명이 되게 하심 (창 2:7)", ""],
      ["하와의 창조", "하나님이 아담의 갈비뼈로 하와를 만들어 주심 (창 2:21-22)", ""],
      ["에덴동산과 명령", "에덴동산에 살게 하시고, 선악을 알게 하는 나무 열매는 먹지 말라고 명령하심 (창 2:16-17)", ""],
      ["유혹과 불순종", "뱀이 하와를 유혹하고, 하와가 열매를 따 먹고 아담에게도 주어 함께 먹음 (창 3:1-6)", ""],
      ["죄의 결과", "두 사람이 부끄러워 숨고, 하나님은 죄의 결과를 선언하심 (창 3:7-19)", ""],
      ["에덴동산에서 추방", "하나님이 두 사람을 에덴동산에서 내보내고 그 길을 지키게 하심 (추방 명령) (창 3:22-24)", ""],
      ["구원의 약속", "여자의 후손이 뱀의 머리를 상하게 할 것이라는 구원의 약속을 주심 (창 3:15)", ""]
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
      ["죄의 발견", "하나님이 동산에 오셔서 그들의 죄를 아시고 물으심 (창 3:8-10)", ""],
      ["죄의 고백", "아담과 하와가 자신의 잘못을 변명하며 죄를 고백함 (창 3:11-13)", ""],
      ["심판 선언", "하나님이 뱀과 여자의 후손 사이의 원수를 선포하시고, 죄의 결과를 선언하심 (창 3:14-19)", ""],
      ["가죽옷을 입힘", "하나님이 가죽옷을 지어 아담과 하와에게 입히심 (은혜의 시작) (창 3:21)", ""],
      ["에덴동산에서 추방", "하나님이 아담을 에덴동산에서 내보내어 땅을 경작하게 하심 (추방 명령) (창 3:22-23)", ""],
      ["그룹과 두루 도는 칼", "동쪽에 그룹과 두루 도는 칼을 두어 생명나무의 길을 지키게 하심 (창 3:24)", ""],
      ["인간의 새로운 삶", "인간은 고통과 수고 속에서 삶을 살아가게 되며, 하나님과의 거리가 생김 (창 3:23-24)", ""]
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
      ["제사 준비", "가인과 아벨이 각각 제물을 준비하였다. (창 4:3)", ""],
      ["제사 드림", "둘이 하나님께 제사를 드렸다. (창 4:3-4)", ""],
      ["제사 받으심", "하나님은 아벨과 그의 제사는 받으시고, 가인과 그의 제사는 받지 않으셨다. (창 4:4-5)", ""],
      ["가인의 분노", "가인이 심히 분하여 낙심하였다. (창 4:5)", ""],
      ["하나님의 경고", "하나님이 가인에게 경고하시고 회개할 기회를 주셨다. (창 4:6-7)", ""],
      ["아벨 살해", "가인이 아벨을 들로 데리고 가서 그를 쳐 죽였다. (창 4:8)", ""],
      ["심판과 표", "하나님이 가인을 꾸짖으시고, 그에게 표를 주사 누구든지 그를 죽이지 못하게 하셨다. (창 4:9-16)", ""]
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
      ["방주 건축 명령", "하나님이 노아에게 방주를 만들라고 명령하심 (창 6:13-22)", ""],
      ["방주로 들어감", "노아와 그의 가족, 각 종류의 동물들이 방주로 들어감 (창 7:1-9)", ""],
      ["홍수 시작", "40일 동안 비가 내리고, 샘들이 터져 온 세상이 물로 덮임 (창 7:10-24)", ""],
      ["물이 점점 줄어듦", "150일 후 물이 줄어들기 시작하고, 방주가 아라랏 산에 머물게 됨 (창 8:1-5)", ""],
      ["새를 보내 살핌", "까마귀와 비둘기를 보내어 땅이 드러났는지 살핌 (창 8:6-12)", ""],
      ["방주에서 나옴", "하나님이 문을 열게 하시고, 노아 가족과 동물들이 방주에서 나옴 (창 8:13-19)", ""],
      ["무지개 언약", "하나님이 무지개를 보이며 다시는 홍수로 세상을 멸하지 않겠다고 약속하심 (창 9:8-17)", ""]
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
      ["한 곳에 모임", "노아의 후손들이 온 땅에 퍼지지 않고 시날 땅에 모였다. (창 11:1)", ""],
      ["탑 건축 계획", "그들은 벽돌을 만들고, 역청으로 굳게 하여 하늘에 닿을 탑을 쌓고 자신들의 이름을 내기로 하였다. (창 11:2-4)", ""],
      ["하나님이 내려가심", "여호와께서 내려가서 그 성과 탑을 건축하는 자들의 일을 보셨다. (창 11:5)", ""],
      ["언어 혼잡", "하나님이 그들의 언어를 혼잡하게 하사 서로 알아듣지 못하게 하셨다. (창 11:7)", ""],
      ["탑 쌓는 일 중단", "그들이 탑 쌓는 일을 그치고, 성읍 건축하기를 그쳤더라. (창 11:8)", ""],
      ["온 땅으로 흩어짐", "여호와께서 그들을 거기서 온 땅 위로 흩으셨더라. (창 11:9)", ""],
      ["열국의 시작", "이러므로 그 이름을 바벨이라 하니 이는 여호와께서 온 천하의 언어를 거기서 혼잡하게 하셨음이더라. (창 11:9)", ""]
    ],
    scriptureRefs: [
      ["창세기 10:8-10", "니므롯의 등장과 바벨 건축"],
      ["창세기 11:1-9", "바벨탑 사건"],
      ["신명기 32:8", "지극히 높으신 이가 민족들을 나누실 때 언어의 경계 설정"],
      ["사도행전 2:1-11", "성령 강림으로 언어가 통함"]
    ],
    visualItems: ["바벨탑 위치 지도", "바벨탑 모습 상상도"]
  },
"moses-midian": {
    flowTitle:"애굽 왕궁에서 미디안 광야로",
    flow:[["동족의 고통을 본 모세","동족의 고통을 본 모세",""],["애굽 사람을 치고 도망자가 됨","애굽 사람을 치고 도망자가 됨",""],["미디안 광야로 피신","미디안 광야로 피신",""],["이드로의 가족과 연결","이드로의 가족과 연결",""],["광야에서 긴 준비의 시간을 보냄","광야에서 긴 준비의 시간을 보냄",""]],
    scriptureRefs:[["출애굽기 2:11~15","모세가 동족을 돕다가 애굽 사람을 치고 미디안으로 도망함"],["출애굽기 2:16~22","미디안에서 이드로의 집에 머물며 십보라와 결혼함"]],
    visualItems:["애굽","미디안 광야","도피 경로","이드로의 집"]
  },
  "aaron-hur-prayer": {
    flowTitle:"손을 들 때 승리한 전투",
    flow:[["아말렉이 이스라엘을 공격","아말렉이 이스라엘을 공격",""],["여호수아가 전투를 지휘","여호수아가 전투를 지휘",""],["모세가 산 위에서 손을 듦","모세가 산 위에서 손을 듦",""],["아론과 훌이 모세의 손을 붙듦","아론과 훌이 모세의 손을 붙듦",""],["이스라엘이 승리하고 여호와 닛시를 고백","이스라엘이 승리하고 여호와 닛시를 고백",""]],
    scriptureRefs:[["출애굽기 17:8~16","모세의 손이 올라가면 이스라엘이 이기고 내려가면 아말렉이 이김"]],
    visualItems:["르비딤","아말렉 전투","모세의 손","여호와 닛시"]
  },
  "kadesh-spies": {
    flowTitle:"믿음의 보고와 불신앙의 보고",
    flow:[["가나안 정탐꾼 12명 파송","가나안 정탐꾼 12명 파송",""],["가나안 땅의 풍성함 확인","가나안 땅의 풍성함 확인",""],["열 정탐꾼의 두려움 보고","열 정탐꾼의 두려움 보고",""],["여호수아와 갈렙의 믿음 보고","여호수아와 갈렙의 믿음 보고",""],["백성의 원망과 불신앙","백성의 원망과 불신앙",""],["광야 40년 심판 확정","광야 40년 심판 확정",""]],
    scriptureRefs:[["민수기 13~14장","가데스 바네아 정탐과 불신앙으로 광야 40년이 확정됨"],["민수기 14:6~9","여호수아와 갈렙이 여호와를 거역하지 말라고 권면함"]],
    visualItems:["가데스 바네아","가나안 정탐 경로","포도송이","여호수아와 갈렙"]
  },
  "korah-rebellion": {
    flowTitle:"권위 도전과 하나님의 심판",
    flow:[["고라 무리가 모세와 아론에게 반역","고라 무리가 모세와 아론에게 반역",""],["향로를 들고 하나님 앞에 섬","향로를 들고 하나님 앞에 섬",""],["하나님께서 거룩한 직분을 판정","하나님께서 거룩한 직분을 판정",""],["땅이 갈라져 반역자들을 삼킴","땅이 갈라져 반역자들을 삼킴",""],["아론의 제사장 직분이 확인됨","아론의 제사장 직분이 확인됨",""]],
    scriptureRefs:[["민수기 16장","고라와 동조자들이 반역하고 하나님의 심판을 받음"]],
    visualItems:["광야 진영","성막","향로","고라의 반역"]
  },
  "balaam-donkey": {
    flowTitle:"저주를 축복으로 바꾸신 하나님",
    flow:[["발락이 발람을 초청","발락이 발람을 초청",""],["발람이 나귀를 타고 감","발람이 나귀를 타고 감",""],["나귀가 여호와의 사자를 봄","나귀가 여호와의 사자를 봄",""],["나귀가 말하고 발람의 눈이 열림","나귀가 말하고 발람의 눈이 열림",""],["발람이 이스라엘을 저주하지 못하고 축복","발람이 이스라엘을 저주하지 못하고 축복",""],["야곱의 별 예언","야곱의 별 예언",""]],
    scriptureRefs:[["민수기 22~24장","발람이 저주 대신 축복을 선포함"],["민수기 24:17","한 별이 야곱에게서 나오며 한 규가 이스라엘에게서 일어남"]],
    visualItems:["모압 평지","발락","발람","말하는 나귀","야곱의 별"]
  },
  "moses-farewell-death": {
    flowTitle:"모세의 마지막 설교와 리더십 이양",
    flow:[["광야 여정을 회고","광야 여정을 회고",""],["율법과 언약을 다시 선포","율법과 언약을 다시 선포",""],["축복과 저주의 길을 제시","축복과 저주의 길을 제시",""],["여호수아를 후계자로 세움","여호수아를 후계자로 세움",""],["느보산에서 가나안을 바라봄","느보산에서 가나안을 바라봄",""],["모세의 죽음과 여호수아 시대 준비","모세의 죽음과 여호수아 시대 준비",""]],
    scriptureRefs:[["신명기 1~34장","모세의 고별설교와 죽음"],["신명기 34장","모세가 느보산에서 죽고 여호수아가 뒤를 이음"]],
    visualItems:["모압 평지","느보산","가나안 조망","여호수아"]
  }
};

// v11 crop 지도/시각자료 이미지
const EVENT_MAP_CROPS = {
  "creation": "assets/maps/01_creation_map.png",
  "adam-eve": "assets/maps/02_adam_eve_map.png",
  "eden-exile": "assets/maps/03_eden_exile_map.png",
  "cain-abel": "assets/maps/04_cain_abel_map.png",
  "noah-ark": "assets/maps/05_noah_ark_map.png",
  "babel-tower": "assets/maps/06_babel_tower_map.png",
"moses-midian": "assets/maps/105_moses_midian_map.png",
  "korah-rebellion": "assets/maps/106_korah_rebellion_map.png",
  "aaron-hur-prayer": "assets/maps/107_aaron_hur_prayer_map.png",
  "balaam-donkey": "assets/maps/108_balaam_donkey_map.png",
  "kadesh-spies": "assets/maps/109_kadesh_spies_map.png",
  "moses-farewell-death": "assets/maps/110_moses_farewell_death_map.png"
};


// v17: 인포그래픽 8. 연결탐험 원문 기반 데이터
// 원칙: 앱의 8. 연결탐험은 인포그래픽 8번 영역에 있는 항목만 사용한다.



// v59 원본 인포그래픽 마스터 연결표: 각 시대 원본 ZIP의 실제 PNG 기준
const ORIGINAL_INFOGRAPHICS = {
  "creation": "assets/infographics/01_creation.png",
  "adam-eve": "assets/infographics/02_adam_eve.png",
  "eden-exile": "assets/infographics/03_eden_exile.png",
  "cain-abel": "assets/infographics/04_cain_abel.png",
  "noah-ark": "assets/infographics/05_noah_ark.png",
  "babel-tower": "assets/infographics/06_babel_tower.png",
  "abraham-call": "assets/infographics/07_abraham_call.png",
  "lot-sodom": "assets/infographics/08_lot_sodom.png",
  "jacob-ladder": "assets/infographics/09_jacob_ladder.png",
  "jabbok-wrestling": "assets/infographics/10_jabbok_wrestling.png",
  "joseph-dream": "assets/infographics/11_joseph_dream.png",
  "joseph-governor": "assets/infographics/12_joseph_governor.png",
  "moses-birth": "assets/infographics/13_moses_birth.png",
  "burning-bush": "assets/infographics/14_burning_bush.png",
  "ten-plagues": "assets/infographics/15_ten_plagues.png",
  "passover": "assets/infographics/16_passover.png",
  "red-sea": "assets/infographics/17_red_sea.png",
  "manna-quail": "assets/infographics/18_manna_quail.png",
  "sinai-commandments": "assets/infographics/19_sinai_commandments.png",
  "golden-calf": "assets/infographics/20_golden_calf.png",
  "tabernacle": "assets/infographics/21_tabernacle.png",
  "wilderness-40": "assets/infographics/21_wilderness_40.png",
  "bronze-serpent": "assets/infographics/22_bronze_serpent.png",
  "jordan-crossing": "assets/infographics/23_jordan_crossing.png",
  "jericho": "assets/infographics/24_jericho.png",
  "ai-battle": "assets/infographics/25_ai_battle.png",
  "sun-moon": "assets/infographics/26_sun_moon.png",
  "land-allotment": "assets/infographics/27_land_allotment.png",
  "deborah-barak": "assets/infographics/28_deborah_barak.png",
  "gideon-300": "assets/infographics/29_gideon_300.png",
  "samson": "assets/infographics/30_samson.png",
  "ruth-boaz": "assets/infographics/31_ruth_boaz.png",
  "saul-king": "assets/infographics/32_saul_king.png",
  "david-goliath": "assets/infographics/33_david_goliath.png",
  "ark-move": "assets/infographics/34_ark_move.png",
  "david-kingdom": "assets/infographics/35_david_kingdom.png",
  "bathsheba": "assets/infographics/36_bathsheba.png",
  "solomon-wisdom": "assets/infographics/37_solomon_wisdom.png",
  "temple-build": "assets/infographics/38_temple_build.png",
  "temple-dedication": "assets/infographics/39_temple_dedication.png",
  "kingdom-divide": "assets/infographics/40_kingdom_divide.png",
  "golden-calves": "assets/infographics/41_golden_calves.png",
  "carmel": "assets/infographics/42_carmel.png",
  "naboth": "assets/infographics/43_naboth.png",
  "elisha-miracles": "assets/infographics/44_elisha_miracles.png",
  "jonah-nineveh": "assets/infographics/45_jonah_nineveh.png",
  "north-fall": "assets/infographics/46_north_fall.png",
  "hezekiah-reform": "assets/infographics/47_hezekiah_reform.png",
  "assyria-invasion": "assets/infographics/48_assyria_invasion.png",
  "josiah-reform": "assets/infographics/49_josiah_reform.png",
  "jeremiah-tears": "assets/infographics/50_jeremiah_tears.png",
  "judah-fall": "assets/infographics/51_judah_fall.png",
  "daniel-friends": "assets/infographics/52_daniel_friends.png",
  "furnace": "assets/infographics/54_furnace.png",
  "nebuchadnezzar-dream": "assets/infographics/55_nebuchadnezzar_dream.png",
  "lion-den": "assets/infographics/56_lion_den.png",
  "ezekiel-vision": "assets/infographics/57_ezekiel_vision.png",
  "esther-purim": "assets/infographics/58_esther_purim.png",
  "zerubbabel-return": "assets/infographics/59_zerubbabel_return.png",
  "temple-rebuild": "assets/infographics/60_temple_rebuild.png",
  "ezra-reform": "assets/infographics/61_ezra_reform.png",
  "nehemiah-wall": "assets/infographics/62_nehemiah_wall.png",
  "hellenism": "assets/infographics/63_hellenism.png",
  "alexander": "assets/infographics/64_alexander.png",
  "maccabees": "assets/infographics/65_maccabees.png",
  "hanukkah": "assets/infographics/66_hanukkah.png",
  "rome": "assets/infographics/67_rome.png",
  "jesus-birth": "assets/infographics/68_jesus_birth.png",
  "magi": "assets/infographics/69_magi.png",
  "john-baptist": "assets/infographics/70_john_baptist.png",
  "jesus-baptism": "assets/infographics/71_jesus_baptism.png",
  "temptation": "assets/infographics/72_temptation.png",
  "calling-disciples": "assets/infographics/73_calling_disciples.png",
  "sermon-mount": "assets/infographics/74_sermon_mount.png",
  "five-loaves": "assets/infographics/75_five_loaves.png",
  "walk-water": "assets/infographics/76_walk_water.png",
  "transfiguration": "assets/infographics/77_transfiguration.png",
  "lazarus": "assets/infographics/78_lazarus.png",
  "triumphal-entry": "assets/infographics/79_triumphal_entry.png",
  "last-supper": "assets/infographics/80_last_supper.png",
  "gethsemane": "assets/infographics/81_gethsemane.png",
  "cross": "assets/infographics/82_cross.png",
  "resurrection": "assets/infographics/83_resurrection.png",
  "pentecost-promise": "assets/infographics/84_pentecost_promise.png",
  "ascension": "assets/infographics/85_ascension.png",
  "pentecost": "assets/infographics/86_pentecost.png",
  "stephen": "assets/infographics/87_stephen.png",
  "paul-conversion": "assets/infographics/88_paul_conversion.png",
  "paul-1st": "assets/infographics/89_paul_1st.png",
  "jerusalem-council": "assets/infographics/90_jerusalem_council.png",
  "paul-2nd": "assets/infographics/91_paul_2nd.png",
  "paul-3rd": "assets/infographics/92_paul_3rd.png",
  "rome-transfer": "assets/infographics/93_rome_transfer.png",
  "john-patmos": "assets/infographics/94_john_patmos.png",
  "seven-churches": "assets/infographics/95_seven_churches.png",
  "seven-seals": "assets/infographics/96_seven_seals.png",
  "beast-tribulation": "assets/infographics/97_beast_tribulation.png",
  "armageddon": "assets/infographics/98_armageddon.png",
  "new-jerusalem": "assets/infographics/99_new_jerusalem.png",
  "new-heaven-earth": "assets/infographics/100_new_heaven_earth.png",
"moses-midian": "assets/infographics/105_moses_midian.png",
  "korah-rebellion": "assets/infographics/106_korah_rebellion.png",
  "aaron-hur-prayer": "assets/infographics/107_aaron_hur_prayer.png",
  "balaam-donkey": "assets/infographics/108_balaam_donkey.png",
  "kadesh-spies": "assets/infographics/109_kadesh_spies.png",
  "moses-farewell-death": "assets/infographics/110_moses_farewell_death.png"
,
  "judges-cycle": {
    flowTitle:"사사기 악순환 흐름",
    flow:[
      ["죄", "이스라엘이 여호와를 버리고 바알과 아스다롯을 섬김", ""],
      ["압제", "하나님이 이방 민족의 압제를 허락하심", ""],
      ["부르짖음", "고통 속에서 이스라엘이 하나님께 부르짖음", ""],
      ["구원", "하나님이 사사를 세워 구원하심", ""],
      ["반복", "평안 후 다시 타락하는 악순환이 반복됨", ""]
    ],
    scriptureRefs:[
      ["사사기 2:11~19", "이스라엘의 타락과 사사 시대 악순환"],
      ["사사기 21:25", "각기 자기의 소견에 옳은 대로 행함"]
    ],
    visualItems:["악순환 도식", "가나안 전역 지도", "사사 시대 흐름표"]
  },
  "jephthah": {
    flowTitle:"입다 사건 흐름",
    flow:[
      ["압제", "암몬이 이스라엘을 압제함", ""],
      ["지도자", "길르앗 장로들이 입다를 지도자로 세움", ""],
      ["논쟁", "입다가 암몬 왕과 역사적 권리를 논함", ""],
      ["서원", "입다가 하나님께 서원함", ""],
      ["승리", "하나님이 암몬에 대한 승리를 주심", ""],
      ["비극", "성급한 서원이 고통스러운 결과를 낳음", ""]
    ],
    scriptureRefs:[
      ["사사기 10~12장", "입다의 등장, 암몬 전쟁, 서원 사건"],
      ["히브리서 11:32", "믿음의 인물 가운데 입다가 언급됨"]
    ],
    visualItems:["길르앗 지도", "암몬 전쟁", "서원 경고"]
  },
  "micah-idol-levite": {
    flowTitle:"영적 타락의 확산",
    flow:[
      ["신상 제작", "미가가 은으로 우상을 만듦", ""],
      ["사적 예배", "개인 신당과 제사장을 세움", ""],
      ["레위인 고용", "레위인이 말씀보다 생계를 따라 움직임", ""],
      ["단 지파 이동", "단 지파가 정착지를 찾다가 미가의 신상을 발견함", ""],
      ["우상 탈취", "단 지파가 신상과 레위인을 빼앗음", ""],
      ["타락 확산", "개인의 우상숭배가 지파 공동체로 확산됨", ""]
    ],
    scriptureRefs:[
      ["사사기 17~18장", "미가의 신상, 레위인, 단 지파의 우상숭배"],
      ["사사기 17:6", "각기 자기의 소견에 옳은 대로 행함"]
    ],
    visualItems:["에브라임 산지", "단 지파 이동", "우상숭배 도식"]
  },
  "gibeah-atrocity": {
    flowTitle:"공동체 붕괴의 흐름",
    flow:[
      ["기브아 도착", "레위인과 첩이 기브아에 머묾", ""],
      ["만행", "기브아 사람들의 죄악이 드러남", ""],
      ["고발", "레위인이 사건을 이스라엘 전체에 알림", ""],
      ["집결", "이스라엘 지파들이 미스바에 모임", ""],
      ["내전", "베냐민 지파와 전쟁이 벌어짐", ""],
      ["상처", "공동체 전체가 큰 상처와 위기를 겪음", ""]
    ],
    scriptureRefs:[
      ["사사기 19~21장", "기브아의 만행과 베냐민 전쟁"],
      ["사사기 21:25", "왕이 없으므로 각기 자기 소견에 옳은 대로 행함"]
    ],
    visualItems:["기브아 위치", "미스바 집결", "베냐민 내전"]
  },
  "eli-samuel-birth": {
    flowTitle:"사무엘 출생과 부르심",
    flow:[
      ["한나의 기도", "한나가 실로에서 간절히 기도함", ""],
      ["사무엘 출생", "하나님이 한나에게 사무엘을 주심", ""],
      ["헌신", "한나가 사무엘을 성소에 드림", ""],
      ["엘리 집안 타락", "홉니와 비느하스의 죄가 드러남", ""],
      ["사무엘 부르심", "하나님이 밤에 사무엘을 부르심", ""],
      ["새 시대 준비", "말씀의 회복과 왕정 전환이 시작됨", ""]
    ],
    scriptureRefs:[
      ["사무엘상 1~3장", "한나의 기도, 사무엘 출생, 사무엘의 부르심"],
      ["사무엘상 3:19~21", "여호와께서 사무엘과 함께 하심"]
    ],
    visualItems:["실로 성소", "한나의 기도", "사무엘의 부르심"]
  }

};

const EVENT_EXPLORE = {
  "creation": {
    title: "8. 연결탐험 (구속사적 연결)",
    items: [
      { title:"유월절", desc:"피 흘린 어린양으로 구원을 예표", ref:"출애굽기 12장" },
      { title:"성막", desc:"하나님의 임재가 함께 하심", ref:"출애굽기 25~40장" },
      { title:"십자가", desc:"창조주 하나님이 구속을 이루심", ref:"요한복음 3:16" },
      { title:"성찬", desc:"새 언약의 시작과 하나님의 나라", ref:"누가복음 22:19~20" }
    ]
  },
  "adam-eve": {
    title: "8. 연결탐험 (구속사적 연결)",
    items: [
      { title:"창조", desc:"아담과 하와", ref:"" },
      { title:"타락", desc:"죄의 시작", ref:"" },
      { title:"속죄의 시작", desc:"가죽옷을 입힘", ref:"창 3:21" },
      { title:"구속의 완성", desc:"예수 그리스도", ref:"롬 5:18-19" },
      { title:"새 창조", desc:"영원한 생명", ref:"계 21:1-4" }
    ]
  },
  "eden-exile": {
    title: "8. 연결탐험 (구속사적 연결)",
    items: [
      { title:"창조", desc:"하나님의 나라", ref:"" },
      { title:"타락", desc:"죄의 시작", ref:"" },
      { title:"가죽옷", desc:"은혜의 시작", ref:"" },
      { title:"구속의 약속", desc:"여자의 후손", ref:"" },
      { title:"예수 그리스도", desc:"최종 구속", ref:"" }
    ]
  },
  "cain-abel": {
    title: "8. 연결탐험 (구속사적 연결)",
    items: [
      { title:"죄의 시작", desc:"가인의 살인", ref:"" },
      { title:"피 흘림의 필요성", desc:"", ref:"" },
      { title:"희생 제사", desc:"제도의 시작", ref:"" },
      { title:"예수 그리스도의 보혈", desc:"최후 심판과 구원", ref:"" },
      { title:"용서와 화해의 길 열림", desc:"", ref:"" }
    ]
  },
  "noah-ark": {
    title: "8. 연결탐험 (구속사적 연결)",
    items: [
      { title:"노아의 방주", desc:"구원과 보호", ref:"" },
      { title:"무지개 언약", desc:"하나님의 신실하심", ref:"" },
      { title:"아브라함 언약", desc:"하나님의 약속 확장", ref:"" },
      { title:"율법 언약", desc:"삶의 기준", ref:"" },
      { title:"그리스도의 구원", desc:"최종 구원과 새 언약", ref:"" }
    ]
  },
  "babel-tower": {
    title: "8. 연결탐험 (구속사적 연결)",
    items: [
      { title:"교만과 불순종", desc:"바벨탑", ref:"" },
      { title:"언어 혼란과 분열", desc:"", ref:"" },
      { title:"이스라엘 민족 선택", desc:"아브라함", ref:"" },
      { title:"성막과 언약", desc:"하나님과 동행", ref:"" },
      { title:"예수 그리스도", desc:"십자가로 하나되게 하심", ref:"" },
      { title:"성령으로 하나된 교회", desc:"모든 언어의 사람들", ref:"" }
    ]
  },
"moses-midian": { title:"8. 연결탐험", items:[
    {title:"광야", desc:"준비의 장소", ref:"출 2장"}, {title:"소명", desc:"떨기나무로 이어짐", ref:"출 3장"}, {title:"출애굽", desc:"지도자 준비", ref:"출 12장"}, {title:"하나님의 섭리", desc:"실패 속 준비", ref:"롬 8:28"}
  ]},
  "aaron-hur-prayer": { title:"8. 연결탐험", items:[
    {title:"기도", desc:"보이지 않는 전투", ref:"출 17장"}, {title:"동역", desc:"아론과 훌", ref:"출 17장"}, {title:"여호와 닛시", desc:"승리의 깃발", ref:"출 17:15"}, {title:"중보", desc:"공동체를 세움", ref:"히 7:25"}
  ]},
  "kadesh-spies": { title:"8. 연결탐험", items:[
    {title:"믿음", desc:"여호수아와 갈렙", ref:"민 14장"}, {title:"불신앙", desc:"광야 40년", ref:"민 14장"}, {title:"가나안", desc:"약속의 땅", ref:"수 1장"}, {title:"요단강 도하", desc:"새 세대의 입성", ref:"수 3장"}
  ]},
  "korah-rebellion": { title:"8. 연결탐험", items:[
    {title:"성막", desc:"거룩한 질서", ref:"출 25~40장"}, {title:"제사장", desc:"아론의 직분", ref:"민 16장"}, {title:"반역", desc:"교만과 불평", ref:"유 1:11"}, {title:"참 제사장", desc:"그리스도", ref:"히 4:14"}
  ]},
  "balaam-donkey": { title:"8. 연결탐험", items:[
    {title:"축복", desc:"저주를 바꿈", ref:"민 23장"}, {title:"야곱의 별", desc:"메시아 예언", ref:"민 24:17"}, {title:"동방박사", desc:"별을 보고 옴", ref:"마 2장"}, {title:"하나님의 보호", desc:"언약 백성", ref:"창 12:3"}
  ]},
  "moses-farewell-death": { title:"8. 연결탐험", items:[
    {title:"신명기", desc:"말씀 재선포", ref:"신 1~34장"}, {title:"여호수아", desc:"리더십 이양", ref:"신 31장"}, {title:"요단강", desc:"새 시대 시작", ref:"수 3장"}, {title:"언약", desc:"순종의 길", ref:"신 30장"}
  ]}
,
  "judges-cycle": {
    title:"8. 연결탐험",
    items:[
      { title:"왕 없음", desc:"하나님의 통치 거부", ref:"삿 21:25" },
      { title:"죄의 반복", desc:"타락과 압제의 악순환", ref:"삿 2장" },
      { title:"사사", desc:"하나님이 세우신 구원자", ref:"삿 2:16" },
      { title:"참된 왕", desc:"그리스도의 통치 필요", ref:"마 1:1" }
    ]
  },
  "jephthah": {
    title:"8. 연결탐험",
    items:[
      { title:"연약한 지도자", desc:"하나님이 사용하시는 사람", ref:"삿 11장" },
      { title:"성급한 서원", desc:"분별 없는 말의 위험", ref:"삿 11:30~40" },
      { title:"믿음의 명단", desc:"입다의 복합적 평가", ref:"히 11:32" },
      { title:"참된 구원자", desc:"완전한 구원은 그리스도께", ref:"히 12:2" }
    ]
  },
  "micah-idol-levite": {
    title:"8. 연결탐험",
    items:[
      { title:"우상숭배", desc:"하나님 대신 만든 종교", ref:"삿 17장" },
      { title:"레위인의 타락", desc:"소명보다 이익을 좇음", ref:"삿 17:10" },
      { title:"단 지파", desc:"타락의 공동체 확산", ref:"삿 18장" },
      { title:"참된 예배", desc:"영과 진리로 드리는 예배", ref:"요 4:24" }
    ]
  },
  "gibeah-atrocity": {
    title:"8. 연결탐험",
    items:[
      { title:"도덕 붕괴", desc:"죄가 공동체를 무너뜨림", ref:"삿 19장" },
      { title:"내전", desc:"이스라엘 안의 심판", ref:"삿 20장" },
      { title:"왕 없음", desc:"질서 없는 시대의 결론", ref:"삿 21:25" },
      { title:"회복 필요", desc:"하나님의 질서와 구원", ref:"롬 8:21" }
    ]
  },
  "eli-samuel-birth": {
    title:"8. 연결탐험",
    items:[
      { title:"한나의 기도", desc:"고통 속의 믿음", ref:"삼상 1장" },
      { title:"실로 성소", desc:"말씀과 예배의 중심", ref:"삼상 1:3" },
      { title:"사무엘", desc:"사사와 선지자의 전환 인물", ref:"삼상 3장" },
      { title:"왕정 준비", desc:"사울과 다윗 시대로 연결", ref:"삼상 8장" }
    ]
  }

};


// v35 족장시대 핵심사건 데이터
Object.assign(EVENTS, {
  "abraham-call": {
    title:"아브라함을 부르심",
    era:"족장 시대",
    year:"기원전 약 2000년경",
    scripture:"창세기 12장",
    place:"우르에서 가나안 땅까지",
    people:["아브라함","사라","데라","롯"],
    summary:"하나님께서 아브라함을 부르시고 고향과 친척과 아버지의 집을 떠나 약속의 땅으로 가게 하신 사건입니다.",
    core:["하나님의 부르심","약속의 언약","아브람의 순종","가나안 도착","제단을 쌓음","언약의 확인","이름의 변화"],
    meaning:["하나님의 주권적 선택과 은혜의 시작","믿음과 순종의 모범","이스라엘 민족과 구속사의 뿌리","예수 그리스도께 이르는 구원의 역사 시작"],
    connect:["아브라함 언약","이스라엘 민족","시내산 언약","성막과 출발","그리스도 언약"],
    visual:"아브라함의 이동 경로, 우르와 가나안 지도",
    image:"assets/infographics/07_abraham_call.png"
  },
  "lot-sodom": {
    title:"롯과 소돔",
    era:"족장 시대",
    year:"기원전 약 2000년경",
    scripture:"창세기 19장",
    place:"요단 평지, 소돔과 고모라",
    people:["롯","두 천사","롯의 아내","롯의 두 딸","소돔 사람들"],
    summary:"소돔과 고모라의 죄악이 심판받는 가운데, 롯과 그의 가족이 하나님의 은혜로 구원받은 사건입니다.",
    core:["롯의 거주","소돔의 죄악","심판 예고와 구원 명령","소돔 탈출","롯의 아내의 최후","소돔과 고모라 멸망","롯의 구원"],
    meaning:["하나님의 공의와 심판","하나님의 은혜와 구원","세상과 구별된 삶의 중요성","뒤돌아보지 않는 믿음의 전진"],
    connect:["홍수 심판","하나님의 심판과 구원의 계속","아브라함 언약","율법과 거룩한 삶","예수 그리스도의 심판과 구원"],
    visual:"요단 평지, 소돔과 고모라 추정 지역",
    image:"assets/infographics/08_lot_sodom.png"
  },
  "jacob-ladder": {
    title:"야곱의 사다리",
    era:"족장 시대",
    year:"대략 BC 2000년경",
    scripture:"창세기 28장",
    place:"벧엘",
    people:["야곱","이삭","에서","하나님","하나님의 천사들"],
    summary:"야곱이 벧엘에서 하늘에 닿은 사다리 환상을 보고, 하나님께서 함께하실 것과 언약을 이루실 것을 약속하신 사건입니다.",
    core:["야곱의 출발","돌판에서 유숙","사다리를 봄","하나님이 나타나심","깨어나 경외함","벧엘이라 이름함","서원과 결단"],
    meaning:["하나님은 언제 어디서나 함께하심","하늘과 땅이 연결되어 하나님과 인간이 만나는 통로가 열림","하나님의 언약은 세대와 상황을 넘어 신실하게 이어짐","인생의 여정 속에서도 하나님의 인도하심이 지속됨"],
    connect:["야곱의 사다리","성막","성전","십자가","부활과 승천"],
    visual:"야곱의 이동 경로, 벧엘 위치, 사다리 환상",
    image:"assets/infographics/09_jacob_ladder.png"
  },
  "jabbok-wrestling": {
    title:"야곱의 얍복강 씨름",
    era:"족장 시대",
    year:"대략 BC 2000년경",
    scripture:"창세기 32장",
    place:"얍복강 나루터",
    people:["야곱","하나님","에서","야곱의 가족","야곱의 종들"],
    summary:"야곱이 얍복강에서 밤새 하나님과 씨름하고, 이스라엘이라는 새 이름을 받으며 변화된 사건입니다.",
    core:["얍복강에 이르다","가족과 재산을 먼저 보냄","한 사람과 씨름함","허벅지 관절을 치심","축복을 간구함","이름을 이스라엘로 바꾸심","하나님을 만난 후 변화"],
    meaning:["하나님과의 인격적 만남","항복과 의지의 신앙","정체성의 변화","하나님의 언약 확인"],
    connect:["야곱의 사다리","하나님과 씨름","이스라엘 민족의 시작","언약과 복의 계속","그리스도 안의 새 이스라엘"],
    visual:"얍복강 위치 지도, 야곱의 이동 경로",
    image:"assets/infographics/10_jabbok_wrestling.png"
  },
  "joseph-dream": {
    title:"요셉의 꿈",
    era:"족장 시대",
    year:"기원전 약 1900년경",
    scripture:"창세기 37장",
    place:"가나안 헤브론 지역",
    people:["요셉","야곱","요셉의 형들","애굽의 보디발"],
    summary:"요셉이 하나님께서 주신 꿈을 꾸고 형들에게 미움을 받아 애굽으로 팔려가지만, 하나님의 계획이 시작되는 사건입니다.",
    core:["첫 번째 꿈","두 번째 꿈","꿈을 말함","형들의 모의","애굽으로 팔림","연단의 시작","하나님의 계획 성취"],
    meaning:["하나님의 주권적 계획","꿈은 하나님의 메시지","연단과 성숙의 시작"],
    connect:["요셉의 꿈","연단과 고난","높임 받음","기근 가운데 구원과 공급","이스라엘 민족의 보존과 시작"],
    visual:"요셉의 이동 경로, 요셉의 두 꿈",
    image:"assets/infographics/11_joseph_dream.png"
  },
  "joseph-governor": {
    title:"요셉의 애굽 총리 등극",
    era:"족장 시대",
    year:"기원전 약 1900년경",
    scripture:"창세기 41장",
    place:"애굽 멤피스 또는 헬리오폴리스 일대",
    people:["요셉","바로","술관원장","야곱","요셉의 형들"],
    summary:"요셉이 바로의 꿈을 해석하고 지혜로운 대책을 제안하여 애굽의 총리가 되고, 많은 생명을 살리는 하나님의 구원 계획에 쓰임받은 사건입니다.",
    core:["바로의 꿈","요셉을 부름","꿈의 해석","지혜로운 제안","총리로 세움","곡식 저장","기근과 구원"],
    meaning:["하나님의 주권과 인도","지혜와 충성의 결실","회복과 구원의 통로","위기 속의 준비"],
    connect:["기근의 위기","요셉의 지혜와 하나님의 인도","이스라엘 가족의 보존","애굽과 열방의 구원","그리스도의 구속 사역"],
    visual:"요셉의 이동 경로, 애굽 곡식 저장 모습",
    image:"assets/infographics/12_joseph_governor.png"
  }
});


Object.assign(EVENT_ENRICH, {
  "abraham-call": {
    flowTitle:"핵심사건",
    flow:[
      ["하나님의 부르심","하나님이 아브람에게 나타나셔서 떠나라고 명령하심",""],
      ["약속의 언약","큰 민족, 복, 땅, 그리고 모든 족속의 복이 될 것을 약속하심",""],
      ["아브람의 순종","아브람이 믿음으로 고향과 친척과 아버지의 집을 떠남",""],
      ["가나안 도착","아브람이 하나님의 지시대로 가나안 땅에 이르러 거주함",""],
      ["제단을 쌓음","아브람이 여호와께 제단을 쌓아 예배함",""],
      ["언약의 확인","하나님이 다시 언약을 확인하시고 그 땅을 아브람의 자손에게 주겠다고 하심",""],
      ["이름의 변화","하나님이 아브람의 이름을 아브라함이라 하심",""]
    ],
    scriptureRefs:[
      ["창세기 11:27-32","데라의 족보와 우르에서 하란으로"],
      ["창세기 12:1-9","아브라함의 부르심과 가나안 도착"],
      ["창세기 15장","횃불 언약"],
      ["창세기 17장","언약 갱신과 이름의 변화"]
    ],
    visualItems:["아브라함의 이동 경로","우르의 위치"]
  },
  "lot-sodom": {
    flowTitle:"핵심사건",
    flow:[
      ["롯의 거주","롯이 요단 평지의 소돔에 거주하며 그 성의 번영을 누림",""],
      ["소돔의 죄악","소돔 사람들의 죄악이 매우 심해져 하나님께서 그 땅의 상태를 살피심",""],
      ["심판 예고와 구원 명령","두 천사가 롯을 찾아 소돔의 멸망을 알리고 가족과 함께 도망가라고 명령함",""],
      ["소돔 탈출","롯과 그의 가족이 급히 소돔을 떠나 산으로 도망함",""],
      ["롯의 아내의 최후","롯의 아내가 뒤를 돌아보다가 소금기둥이 됨",""],
      ["소돔과 고모라 멸망","하나님께서 유황과 불을 내려 소돔과 고모라를 멸하심",""],
      ["롯의 구원","롯과 두 딸만이 구원받아 산에서 새 삶을 시작함",""]
    ],
    scriptureRefs:[
      ["창세기 13:10-13","롯의 선택과 소돔 거주"],
      ["창세기 18:16-33","소돔 성의 죄악과 심판 예고"],
      ["창세기 19:1-29","소돔과 고모라의 멸망"],
      ["신명기 29:22-23","하나님의 심판의 경고"],
      ["이사야 1:9-10","소돔과 고모라의 교만 심판"]
    ],
    visualItems:["지역 지도","사건 흐름 요약도"]
  },
  "jacob-ladder": {
    flowTitle:"핵심사건",
    flow:[
      ["야곱의 출발","야곱이 브엘세바에서 형 에서를 피해 하란으로 가기 위해 길을 떠남",""],
      ["돌판에서 유숙","해가 지자 야곱이 한 곳에 이르러 돌을 베개 삼아 잠이 듦",""],
      ["사다리를 봄","꿈에 하늘에 닿은 사다리를 보았고 하나님의 천사들이 오르락내리락 함",""],
      ["하나님이 나타나심","하나님이 사다리 위에 서서 야곱에게 나타나 언약과 축복을 선포하심",""],
      ["깨어나 경외함","야곱이 잠에서 깨어 여호와께서 과연 여기 계시거늘 내가 알지 못하였도다 고백함",""],
      ["벧엘이라 이름함","그 자리를 벧엘이라 부르고 돌을 세워 기름을 붓고 서원함",""],
      ["서원과 결단","하나님이 함께 하시면 반드시 돌아와 십일조를 드리겠다고 서원함",""]
    ],
    scriptureRefs:[
      ["창세기 28:10-22","야곱의 사다리 사건"],
      ["창세기 31:13","하나님이 야곱에게 보여주신 벧엘"],
      ["민수기 22:22","발람의 나귀가 본 여호와의 사자"],
      ["요한복음 1:51","하늘이 열린 것과 하나님의 천사들이 인자 위에 오르락내리락 하는 것을 보리라"],
      ["히브리서 4:16","은혜의 보좌 앞에 담대히 나아가라"]
    ],
    visualItems:["야곱의 이동 경로","야곱의 사다리 상상도"]
  },
  "jabbok-wrestling": {
    flowTitle:"핵심사건",
    flow:[
      ["얍복강에 이르다","야곱이 가족과 모든 소유를 이끌고 얍복강에 이르러 건너려 함",""],
      ["가족과 재산을 먼저 보냄","야곱은 가족과 재산을 먼저 건너게 하고 자신도 홀로 남게 됨",""],
      ["한 사람과 씨름함","야곱이 한 사람과 날이 새도록 씨름을 함",""],
      ["허벅지 관절을 치심","그 사람이 야곱의 허벅지 관절을 쳐서 야곱이 절게 됨",""],
      ["축복을 간구함","야곱이 놓아 달라 하지 않고 축복해 주지 아니하면 보내지 않겠다고 간구함",""],
      ["이름을 이스라엘로 바꾸심","그 사람이 네 이름을 야곱이라 하지 않고 더 이상 이스라엘이라 하라 하심",""],
      ["하나님을 만난 후 변화","야곱이 하나님을 만나 변화되고, 절뚝거리며 나아가 형 에서를 만날 준비를 함",""]
    ],
    scriptureRefs:[
      ["창세기 32:22-32","야곱의 얍복강 씨름"],
      ["창세기 28:10-22","야곱의 벧엘에서의 꿈"],
      ["창세기 27:41-45","야곱의 도피"],
      ["창세기 33장","야곱과 에서의 화해"],
      ["호세아 12:3-4","하나님과 씨름한 이스라엘"]
    ],
    visualItems:["얍복강 위치 지도","야곱의 이동 경로"]
  },
  "joseph-dream": {
    flowTitle:"핵심사건",
    flow:[
      ["첫 번째 꿈","요셉이 꿈을 꾸니 곡식 단이 그의 단에게 절하는 꿈을 꾼다",""],
      ["두 번째 꿈","또 다른 꿈을 꾸니 해와 달과 열한 별이 그에게 절하는 꿈을 꾼다",""],
      ["꿈을 말함","요셉이 두 꿈을 형들에게 말하자 형들이 더욱 미워한다",""],
      ["형들의 모의","형들이 요셉을 죽이려 모의하고 마침내 애굽 상인에게 판다",""],
      ["애굽으로 팔림","요셉이 애굽으로 끌려가 보디발의 종이 된다",""],
      ["연단의 시작","하나님의 계획 안에서 요셉의 연단과 사랑의 여정이 시작된다",""],
      ["하나님의 계획 성취","요셉은 애굽의 총리가 되어 하나님의 계획을 이루고 많은 생명을 구원한다",""]
    ],
    scriptureRefs:[
      ["창세기 37장","요셉의 꿈과 형들의 시기"],
      ["창세기 39장","애굽에서의 연단"],
      ["창세기 41장","꿈 해석과 총리의 자리"],
      ["로마서 8:28","하나님을 사랑하는 자에게 모든 것이 합력하여 선을 이룸"]
    ],
    visualItems:["요셉의 이동 경로","요셉의 두 꿈"]
  },
  "joseph-governor": {
    flowTitle:"핵심사건",
    flow:[
      ["바로의 꿈","바로가 살찐 소 일곱과 마른 소 일곱, 잘 익은 이삭 일곱과 마른 이삭 일곱의 꿈을 꿈",""],
      ["요셉을 부름","술관원장의 추천으로 옥중에 있던 요셉이 바로에게 불려감",""],
      ["꿈의 해석","요셉이 꿈을 해석하여 7년 풍년과 7년 기근이 오며 그 후에 다시 흉년이 있을 것을 말함",""],
      ["지혜로운 제안","기근 전에 곡식을 저장하여 나라와 백성을 살릴 것을 지혜롭게 제안함",""],
      ["총리로 세움","바로가 요셉을 애굽의 총리로 세우고 모든 일을 그의 손에 맡김",""],
      ["곡식 저장","요셉이 7년 동안 곡식을 모아 저장하여 기근을 대비함",""],
      ["기근과 구원","7년 기근이 오자 애굽과 여러 나라가 요셉에게 와서 곡식을 얻어 생명을 보존함",""]
    ],
    scriptureRefs:[
      ["창세기 37장","요셉이 형들에게 팔려감"],
      ["창세기 39장","요셉의 애굽 생활과 옥에 갇힘"],
      ["창세기 40장","술 맡은 관원과 떡 맡은 관원의 꿈"],
      ["창세기 41장","바로의 꿈 해석과 총리 등극"],
      ["창세기 45~50장","형들과의 만남과 화해, 야곱 가족 구원"]
    ],
    visualItems:["요셉의 이동 경로","애굽 곡식 저장 모습"]
  }
});

const PATRIARCH_EXPLORE = {
  "abraham-call": [
    {title:"아브라함 언약", desc:"믿음과 언약의 시작"},
    {title:"이스라엘 민족", desc:"언약 백성의 뿌리"},
    {title:"시내산 언약", desc:"언약 공동체"},
    {title:"성막과 출발", desc:"하나님의 임재"},
    {title:"그리스도 언약", desc:"모든 민족의 복"}
  ],
  "lot-sodom": [
    {title:"홍수 심판", desc:"심판과 구원"},
    {title:"하나님의 심판과 구원의 계속", desc:""},
    {title:"아브라함 언약", desc:"창 12장"},
    {title:"율법과 거룩한 삶", desc:"출 20장"},
    {title:"예수 그리스도의 심판과 구원", desc:"최후 심판과 구원"}
  ],
  "jacob-ladder": [
    {title:"야곱의 사다리", desc:"하늘과 땅의 연결"},
    {title:"성막", desc:"하나님의 임재"},
    {title:"성전", desc:"거룩한 처소"},
    {title:"십자가", desc:"구속의 통로"},
    {title:"부활과 승천", desc:"영원한 연결"}
  ],
  "jabbok-wrestling": [
    {title:"야곱의 사다리", desc:"창 28장"},
    {title:"하나님과 씨름", desc:"창 32장"},
    {title:"이스라엘 민족의 시작", desc:"창 35장"},
    {title:"언약과 복의 계속", desc:"창 17장"},
    {title:"그리스도 안의 새 이스라엘", desc:"갈 6:16"}
  ],
  "joseph-dream": [
    {title:"요셉의 꿈", desc:"창 37장"},
    {title:"연단과 고난", desc:"창 39~40장"},
    {title:"높임 받음", desc:"창 41장"},
    {title:"기근 가운데 구원과 공급", desc:"창 45~50장"},
    {title:"이스라엘 민족의 보존과 시작", desc:""}
  ],
  "joseph-governor": [
    {title:"기근의 위기", desc:""},
    {title:"요셉의 지혜와 하나님의 인도", desc:""},
    {title:"이스라엘 가족의 보존", desc:""},
    {title:"애굽과 열방의 구원", desc:""},
    {title:"그리스도의 구속 사역", desc:""}
  ]
};

Object.assign(EVENT_EXPLORE, PATRIARCH_EXPLORE);

Object.assign(EVENT_MAP_CROPS, {
  "abraham-call":"assets/maps/07_abraham_call_map.png",
  "lot-sodom":"assets/maps/08_lot_sodom_map.png",
  "jacob-ladder":"assets/maps/09_jacob_ladder_map.png",
  "jabbok-wrestling":"assets/maps/10_jabbok_wrestling_map.png",
  "joseph-dream":"assets/maps/11_joseph_dream_map.png",
  "joseph-governor":"assets/maps/12_joseph_governor_map.png"
});


// v37: 족장시대 8. 연결탐험 - 인포그래픽 원문 기준 재정리
Object.assign(EVENT_EXPLORE, {
  "abraham-call": {
    title:"8. 연결탐험",
    items:[
      {title:"아브라함 언약", desc:"창 12, 15, 17장"},
      {title:"이스라엘 민족", desc:"언약 백성의 시작"},
      {title:"시내산 언약", desc:"출 19장"},
      {title:"성막과 출발", desc:"출 25~40장"},
      {title:"그리스도 언약", desc:"갈 3:8,16"}
    ]
  },
  "lot-sodom": {
    title:"8. 연결탐험",
    items:[
      {title:"홍수 심판", desc:"노아"},
      {title:"하나님의 심판", desc:"아브라함"},
      {title:"아브라함 언약", desc:"창 12장"},
      {title:"율법 계약", desc:"출 20장"},
      {title:"예수 그리스도", desc:"십자가"}
    ]
  },
  "jacob-ladder": {
    title:"8. 연결탐험",
    items:[
      {title:"야곱의 사다리", desc:"창 28:12"},
      {title:"성막", desc:"하늘과 땅을 연결하는 하나님의 임재"},
      {title:"성전", desc:"하나님의 영광이 임한 곳"},
      {title:"십자가", desc:"하늘과 땅을 잇는 유일한 길"},
      {title:"부활과 승천", desc:"하늘 문이 열리고 우리가 하나님께 나아감"}
    ]
  },
  "jabbok-wrestling": {
    title:"8. 연결탐험",
    items:[
      {title:"야곱의 사다리", desc:"창 28장"},
      {title:"하나님과 씨름", desc:"창 32장"},
      {title:"이스라엘 민족의 시작", desc:"창 35장"},
      {title:"언약과 복의 계속", desc:"창 17장"},
      {title:"그리스도 안의 새 이스라엘", desc:"갈 6:16"}
    ]
  },
  "joseph-dream": {
    title:"8. 연결탐험",
    items:[
      {title:"요셉의 꿈", desc:"창 37장"},
      {title:"연단과 고난", desc:"창 39~40장"},
      {title:"높임 받음", desc:"창 41장"},
      {title:"기근 가운데 구원과 공급", desc:"창 45~50장"},
      {title:"이스라엘 백성의 보존과 시작", desc:""}
    ]
  },
  "joseph-governor": {
    title:"8. 연결탐험",
    items:[
      {title:"기근의 위기", desc:""},
      {title:"요셉의 지혜와 하나님의 인도", desc:""},
      {title:"이스라엘 가족의 보존", desc:""},
      {title:"애굽과 열방의 구원", desc:""},
      {title:"그리스도의 구속 사역", desc:""}
    ]
  }
});

// v39: 출애굽과 광야 시대 핵심사건 상세 탭카드 데이터
Object.assign(EVENTS, {
  "moses-birth": {
    title:"모세의 탄생", era:"출애굽과 광야", year:"출애굽 이전, BC 1500년경", scripture:"출애굽기 1:8~2:10",
    place:"애굽, 나일 강 갈대 사이", people:["하나님","아기 모세","요게벳","미리암","바로의 딸"],
    summary:"바로가 히브리 남자아이를 죽이라고 명령한 위기 속에서, 하나님께서 모세를 보호하시고 이스라엘을 구원할 지도자로 준비하신 사건입니다.",
    core:["바로의 명령","아기 모세의 탄생","갈대 상자에 담김","바로의 딸이 발견","미리암의 제안","어머니가 돌봄","모세로 자라남"],
    meaning:["하나님은 약한 생명도 주권적으로 보호하심","구원자는 위기 속에서 미리 준비됨","믿음의 순종은 하나님의 섭리와 연결됨","물에서 건짐받은 모세는 출애굽 구원의 시작을 보여줌"],
    connect:["모세의 탄생","떨기나무 소명","출애굽","홍해의 기적","광야 인도"],
    visual:"애굽 지역 지도, 나일 강 갈대 사이 장면", image:"assets/infographics/13_moses_birth.png"
  },
  "burning-bush": {
    title:"떨기나무 소명", era:"출애굽과 광야", year:"출애굽 직전, BC 1446년경", scripture:"출애굽기 3~4장",
    place:"미디안 광야, 하나님의 산 호렙", people:["하나님","모세","아론","이스라엘 장로들","바로"],
    summary:"하나님께서 불타지만 사라지지 않는 떨기나무 가운데 모세를 부르시고, 이스라엘을 애굽에서 구원할 사명을 맡기신 사건입니다.",
    core:["미디안에서 양을 침","불붙은 떨기나무를 봄","거룩한 땅에 섬","하나님의 이름 계시","출애굽 사명 부여","모세의 두려움과 표징","아론을 동역자로 세움"],
    meaning:["하나님은 고난받는 백성의 부르짖음을 들으심","소명은 인간의 능력보다 하나님의 임재에 근거함","하나님의 이름은 구원의 주체가 하나님이심을 드러냄","거룩하신 하나님 앞에서 순종이 시작됨"],
    connect:["모세의 탄생","출애굽 사명","10가지 재앙","유월절","시내산 언약"],
    visual:"호렙산, 미디안 광야, 떨기나무 장면", image:"assets/infographics/14_burning_bush.png"
  },
  "ten-plagues": {
    title:"애굽의 10가지 재앙", era:"출애굽과 광야", year:"BC 1446년경", scripture:"출애굽기 7~12장",
    place:"애굽 전역, 나일 강과 바로의 궁전", people:["하나님","모세","아론","바로","애굽 백성"],
    summary:"하나님께서 완고한 바로와 애굽의 우상 체계를 심판하시고, 이스라엘을 해방하시기 위해 열 가지 재앙을 내리신 사건입니다.",
    core:["나일 강이 피가 됨","개구리·이·파리 재앙","가축 전염병과 악성 종기","우박과 메뚜기","흑암 재앙","장자의 죽음","바로가 이스라엘을 내보냄"],
    meaning:["여호와 하나님만이 참 하나님이심을 드러냄","인간 권력의 완고함은 하나님의 심판 앞에 무너짐","구원은 하나님의 능력과 심판을 통해 이루어짐","유월절 어린양의 피가 구원의 표지가 됨"],
    connect:["떨기나무 소명","유월절","출애굽","홍해의 기적","하나님의 심판과 구원"],
    visual:"애굽 지도, 10재앙 순서도", image:"assets/infographics/15_ten_plagues.png"
  },
  "passover": {
    title:"유월절", era:"출애굽과 광야", year:"BC 1446년경", scripture:"출애굽기 12장",
    place:"애굽, 이스라엘 백성의 집", people:["하나님","모세","아론","이스라엘 백성","바로"],
    summary:"이스라엘 백성이 어린양의 피를 문설주와 인방에 바름으로 장자의 죽음 재앙을 넘어가고, 애굽에서 해방되는 구원의 밤입니다.",
    core:["어린양을 준비함","피를 문설주에 바름","무교병과 쓴 나물을 먹음","장자의 죽음 재앙","피 있는 집은 넘어감","바로가 출애굽을 허락","유월절 절기로 기념"],
    meaning:["구원은 어린양의 피를 통한 하나님의 은혜임","심판과 구원이 한밤에 동시에 이루어짐","유월절은 이스라엘 정체성의 출발점임","예수 그리스도의 십자가와 성찬으로 연결됨"],
    connect:["10가지 재앙","출애굽","홍해의 기적","십자가","성찬"],
    visual:"유월절 식탁, 애굽 탈출 경로", image:"assets/infographics/16_passover.png"
  },
  "red-sea": {
    title:"홍해의 기적", era:"출애굽과 광야", year:"BC 1446년경", scripture:"출애굽기 13~15장",
    place:"홍해 또는 갈대바다 주변", people:["하나님","모세","이스라엘 백성","바로","애굽 군대"],
    summary:"하나님께서 홍해를 가르셔서 이스라엘을 마른 땅으로 건너게 하시고, 뒤쫓던 애굽 군대를 물로 심판하신 사건입니다.",
    core:["이스라엘이 광야 길로 나아감","바로의 군대가 추격","백성이 두려워함","모세가 지팡이를 듦","바다가 갈라짐","이스라엘이 건넘","애굽 군대가 수장됨"],
    meaning:["하나님은 막힌 길도 여시는 구원자이심","두려움 속에서도 믿음으로 전진해야 함","출애굽 구원이 결정적으로 확증됨","세례와 새 생명의 상징으로 연결됨"],
    connect:["유월절","홍해 도하","광야 훈련","세례","구원의 완성"],
    visual:"출애굽 경로, 홍해 도하 장면", image:"assets/infographics/17_red_sea.png"
  },
  "manna-quail": {
    title:"만나와 메추라기", era:"출애굽과 광야", year:"출애굽 이후 광야 여정", scripture:"출애굽기 16장, 민수기 11장",
    place:"신 광야와 광야 진영", people:["하나님","모세","아론","이스라엘 백성"],
    summary:"광야에서 먹을 것이 없다고 원망하는 이스라엘에게 하나님께서 만나와 메추라기를 공급하시며 날마다 의지하는 믿음을 훈련하신 사건입니다.",
    core:["백성이 먹을 것을 원망함","하나님이 양식을 약속하심","아침마다 만나가 내림","저녁에 메추라기가 옴","하루 분량만 거둠","안식일 전에는 두 배를 거둠","하나님의 공급을 배움"],
    meaning:["광야에서도 하나님은 필요한 것을 공급하심","믿음은 날마다 하나님을 의지하는 훈련임","원망은 하나님의 은혜를 잊을 때 생김","만나는 생명의 떡이신 그리스도와 연결됨"],
    connect:["홍해의 기적","광야 훈련","안식일","생명의 떡","성찬"],
    visual:"광야 진영, 만나와 메추라기 공급 장면", image:"assets/infographics/18_manna_quail.png"
  },
  "sinai-commandments": {
    title:"시내산 십계명", era:"출애굽과 광야", year:"BC 1446년경, 출애굽 후 시내산 체류", scripture:"출애굽기 19~20장",
    place:"시내산", people:["하나님","모세","아론","이스라엘 백성"],
    summary:"하나님께서 시내산에서 이스라엘과 언약을 맺으시고, 언약 백성의 삶의 기준으로 십계명을 주신 사건입니다.",
    core:["시내산에 도착","언약 백성으로 부르심","백성이 정결하게 준비","하나님이 강림하심","십계명을 주심","두려움 가운데 말씀을 들음","언약 공동체로 세워짐"],
    meaning:["구원받은 백성은 하나님의 말씀으로 살아야 함","율법은 하나님 사랑과 이웃 사랑의 기준임","시내산 언약은 이스라엘 공동체의 정체성을 세움","십계명은 성막과 예배 질서의 토대가 됨"],
    connect:["출애굽","시내산 언약","성막","율법","새 언약"],
    visual:"시내산 지도, 십계명 돌판", image:"assets/infographics/19_sinai_commandments.png"
  },
  "golden-calf": {
    title:"금송아지 사건", era:"출애굽과 광야", year:"시내산 언약 직후", scripture:"출애굽기 32장",
    place:"시내산 아래 이스라엘 진영", people:["하나님","모세","아론","이스라엘 백성","레위 자손"],
    summary:"모세가 시내산에 머무는 동안 이스라엘 백성이 금송아지를 만들어 섬기며 언약을 깨뜨렸고, 모세의 중보와 하나님의 긍휼로 회복의 길이 열린 사건입니다.",
    core:["모세가 산에 오래 머묾","백성이 우상을 요구","아론이 금송아지를 만듦","백성이 제사하며 즐김","하나님이 진노하심","모세가 중보함","언약 회복의 길이 열림"],
    meaning:["구원받은 백성도 쉽게 우상으로 돌아갈 수 있음","하나님은 우상숭배를 가볍게 여기지 않으심","중보자의 역할이 공동체 회복에 중요함","언약은 은혜 안에서 다시 붙들려야 함"],
    connect:["시내산 십계명","우상숭배","모세의 중보","성막","그리스도의 중보"],
    visual:"시내산 진영, 금송아지 장면", image:"assets/infographics/20_golden_calf.png"
  },
  "tabernacle": {
    title:"성막 건축", era:"출애굽과 광야", year:"시내산 체류 시기", scripture:"출애굽기 25~40장",
    place:"시내산 아래 이스라엘 진영", people:["하나님","모세","브살렐","오홀리압","이스라엘 백성"],
    summary:"하나님께서 이스라엘 가운데 거하시기 위해 성막 설계를 주시고, 백성이 예물과 기술로 참여하여 성막을 완성한 사건입니다.",
    core:["성막 설계 명령","자원하는 예물 드림","브살렐과 오홀리압을 세움","성막 기구 제작","제사장 의복 제작","성막을 세움","여호와의 영광이 충만함"],
    meaning:["하나님은 언약 백성 가운데 거하시는 분","예배는 하나님이 정하신 방식으로 드려야 함","성막은 임재와 속죄의 중심임","예수 그리스도의 성육신과 십자가로 연결됨"],
    connect:["시내산 언약","성막","제사","성전","예수 그리스도"],
    visual:"성막 배치도, 성막 기구와 진영 구조", image:"assets/infographics/21_tabernacle.png"
  },
  "wilderness-40": {
    title:"광야 40년", era:"출애굽과 광야", year:"BC 1446~1406년경", scripture:"민수기 13~14장, 신명기 8장",
    place:"시내 광야, 바란 광야, 가데스 바네아 일대", people:["하나님","모세","아론","여호수아","갈렙"],
    summary:"가나안 정탐 후 이스라엘이 불신앙으로 약속의 땅 진입을 거부하여, 한 세대가 광야에서 훈련받고 교체된 40년의 여정입니다.",
    core:["가나안 정탐","열 정탐꾼의 부정적 보고","여호수아와 갈렙의 믿음","백성의 원망과 불신앙","광야 40년 심판","새 세대의 훈련","가나안 입성 준비"],
    meaning:["불신앙은 약속의 성취를 지연시킴","광야는 징계이면서 훈련의 장소임","하나님은 새 세대를 준비시키심","순종과 믿음이 약속의 땅을 향한 길임"],
    connect:["홍해의 기적","만나와 메추라기","가데스 바네아","여호수아와 갈렙","가나안 정복"],
    visual:"광야 이동 경로, 가데스 바네아 위치", image:"assets/infographics/21_wilderness_40.png"
  },
  "bronze-serpent": {
    title:"놋뱀 사건", era:"출애굽과 광야", year:"광야 말기", scripture:"민수기 21:4~9",
    place:"에돔 길 주변 광야", people:["하나님","모세","이스라엘 백성"],
    summary:"이스라엘이 길과 양식 때문에 원망하자 불뱀이 백성을 물었고, 하나님께서 장대 위의 놋뱀을 바라보는 자를 살리신 사건입니다.",
    core:["백성이 길 때문에 원망함","불뱀이 백성을 물음","백성이 죄를 고백함","모세가 중보기도함","하나님이 놋뱀을 만들라 하심","놋뱀을 장대에 듦","바라본 자가 살아남"],
    meaning:["원망과 불신앙은 생명을 해침","회개와 중보를 통해 구원의 길이 열림","구원은 하나님이 제시하신 방법을 믿음으로 바라보는 것임","놋뱀은 십자가에 달리신 그리스도의 예표로 연결됨"],
    connect:["광야 40년","불뱀 심판","모세의 중보","십자가","믿음으로 얻는 생명"],
    visual:"광야 길, 놋뱀 장대 장면", image:"assets/infographics/22_bronze_serpent.png"
  }
});

Object.assign(EVENT_ENRICH, {
  "moses-birth": {flowTitle:"핵심사건", flow:[["바로의 명령","히브리 남자 아기를 모두 나일 강에 던지라는 명령이 내려짐", ""],["아기 모세 탄생","레위 가족의 아들이 태어나 3개월 동안 숨겨 보호됨", ""],["갈대 상자","어머니가 갈대 상자에 역청을 바르고 아기를 나일 강 갈대 사이에 둠", ""],["바로의 딸 발견","바로의 딸이 목욕하러 나왔다가 아기를 발견하고 불쌍히 여김", ""],["미리암의 제안","미리암이 히브리 여인을 불러 아기를 젖먹이게 하자고 제안함", ""],["어머니의 돌봄","어머니가 아기를 데려가 젖을 먹여 키움", ""],["모세로 자라남","바로의 딸이 아이를 모세라 이름 짓고 왕궁에서 자라게 함", ""]], scriptureRefs:[["출애굽기 1:8~2:10","모세의 탄생과 보호"],["출애굽기 2:11~22","모세의 도피"],["출애굽기 3:1~10","모세의 부르심"],["출애굽기 12:29~31","출애굽과 구원"]], visualItems:["애굽 지역 지도", "나일 강 갈대 사이"]},
  "burning-bush": {flowTitle:"핵심사건", flow:[["미디안 생활","모세가 미디안에서 양을 치며 지냄", ""],["떨기나무 발견","불이 붙었으나 사라지지 않는 떨기나무를 봄", ""],["거룩한 땅","하나님이 네 발에서 신을 벗으라 말씀하심", ""],["하나님의 이름","나는 스스로 있는 자라고 자신의 이름을 계시하심", ""],["구원 사명","애굽으로 가서 내 백성을 인도하라고 명령하심", ""],["표징을 주심","지팡이와 손의 표징을 통해 모세를 격려하심", ""],["아론 동역","아론을 말하는 동역자로 세워 사명을 감당하게 하심", ""]], scriptureRefs:[["출애굽기 3:1~12","떨기나무 가운데 모세를 부르심"],["출애굽기 3:13~22","하나님의 이름과 출애굽 약속"],["출애굽기 4:1~17","모세에게 표징과 동역자를 주심"]], visualItems:["미디안 광야", "호렙산", "떨기나무"]},
  "ten-plagues": {flowTitle:"핵심사건", flow:[["1 피","나일 강과 물이 피로 변함", ""],["2~4 재앙","개구리, 이, 파리 재앙이 애굽을 침", ""],["5~6 재앙","가축 전염병과 악성 종기가 내림", ""],["7~8 재앙","우박과 메뚜기가 애굽을 황폐하게 함", ""],["9 흑암","애굽 온 땅에 어둠이 임함", ""],["10 장자 죽음","애굽의 처음 난 것이 죽음", ""],["출애굽 허락","바로가 이스라엘을 내보냄", ""]], scriptureRefs:[["출애굽기 7~10장","아홉 가지 재앙"],["출애굽기 11장","장자의 죽음 예고"],["출애굽기 12장","열 번째 재앙과 유월절"]], visualItems:["10재앙 순서도", "애굽 지역 지도"]},
  "passover": {flowTitle:"핵심사건", flow:[["어린양 선택","흠 없는 어린양을 준비함", ""],["피를 바름","어린양의 피를 문설주와 인방에 바름", ""],["유월절 식사","무교병과 쓴 나물을 먹으며 급히 떠날 준비를 함", ""],["장자의 죽음","애굽의 장자가 죽는 심판이 임함", ""],["넘어감","피가 있는 집은 재앙이 넘어감", ""],["출애굽 허락","바로가 이스라엘을 내보냄", ""],["절기 제정","유월절을 대대로 기념하게 하심", ""]], scriptureRefs:[["출애굽기 12:1~14","유월절 어린양과 피"],["출애굽기 12:21~28","이스라엘의 순종"],["고린도전서 5:7","그리스도께서 유월절 양이 되심"],["누가복음 22:19~20","새 언약의 성찬"]], visualItems:["유월절 식탁", "문설주의 피", "출애굽 경로"]},
  "red-sea": {flowTitle:"핵심사건", flow:[["광야 길","이스라엘이 구름기둥과 불기둥의 인도를 따라 나아감", ""],["애굽 추격","바로와 군대가 마음을 바꾸어 추격함", ""],["백성의 두려움","백성이 바다 앞에서 두려워하며 원망함", ""],["모세의 선포","너희는 가만히 서서 여호와의 구원을 보라", ""],["바다가 갈라짐","동풍으로 바다가 갈라져 마른 땅이 됨", ""],["이스라엘 통과","이스라엘이 바다 가운데로 지나감", ""],["애굽 심판","물이 다시 합쳐져 애굽 군대가 수장됨", ""]], scriptureRefs:[["출애굽기 13:17~22","구름기둥과 불기둥"],["출애굽기 14장","홍해 도하"],["출애굽기 15장","모세와 미리암의 노래"],["고린도전서 10:1~2","홍해와 세례의 연결"]], visualItems:["홍해 도하 지도", "바다가 갈라진 장면"]},
  "manna-quail": {flowTitle:"핵심사건", flow:[["먹을 것 부족","광야에서 백성이 배고픔 때문에 원망함", ""],["하나님의 약속","하나님이 하늘에서 양식을 비처럼 내리겠다고 하심", ""],["만나 공급","아침마다 만나가 땅 위에 내림", ""],["메추라기 공급","저녁에는 메추라기가 진영에 옴", ""],["하루 분량","각 사람이 하루 먹을 만큼만 거둠", ""],["안식일 훈련","여섯째 날에는 두 배를 거두고 일곱째 날에는 쉬게 하심", ""],["공급의 기억","항아리에 만나를 보관하여 후대가 기억하게 함", ""]], scriptureRefs:[["출애굽기 16장","만나와 메추라기 공급"],["민수기 11장","백성의 원망과 메추라기"],["신명기 8:3","사람이 떡으로만 살 것이 아님"],["요한복음 6장","생명의 떡이신 예수님"]], visualItems:["광야 진영", "만나와 메추라기"]},
  "sinai-commandments": {flowTitle:"핵심사건", flow:[["시내산 도착","이스라엘이 시내 광야에 도착함", ""],["언약 제안","하나님이 제사장 나라와 거룩한 백성으로 부르심", ""],["정결 준비","백성이 몸과 마음을 준비함", ""],["하나님 강림","우레와 번개와 나팔 소리 가운데 하나님이 임하심", ""],["십계명 선포","하나님이 십계명을 말씀하심", ""],["백성의 두려움","백성이 두려워 모세를 중보자로 세움", ""],["언약 백성","이스라엘이 하나님의 말씀을 따라 사는 공동체로 세워짐", ""]], scriptureRefs:[["출애굽기 19장","시내산 언약 준비"],["출애굽기 20장","십계명"],["신명기 5장","십계명의 재선포"],["마태복음 22:37~40","하나님 사랑과 이웃 사랑"]], visualItems:["시내산", "십계명 돌판"]},
  "golden-calf": {flowTitle:"핵심사건", flow:[["모세의 지체","모세가 산에서 내려오지 않자 백성이 불안해함", ""],["우상 요구","백성이 우리를 인도할 신을 만들라고 요구함", ""],["금송아지 제작","아론이 금을 모아 송아지 형상을 만듦", ""],["우상 숭배","백성이 제사를 드리고 먹고 마시며 뛰놂", ""],["하나님의 진노","하나님이 백성의 타락을 모세에게 알리심", ""],["모세의 중보","모세가 백성을 위해 하나님께 간구함", ""],["회복의 길","죄에 대한 징계 후 언약 회복의 길이 열림", ""]], scriptureRefs:[["출애굽기 32장","금송아지 사건"],["출애굽기 33장","하나님의 임재를 구하는 모세"],["출애굽기 34장","언약의 회복"],["고린도전서 10:7","우상숭배에 대한 경고"]], visualItems:["시내산 진영", "금송아지"]},
  "tabernacle": {flowTitle:"핵심사건", flow:[["설계 명령","하나님이 성막의 구조와 기구를 자세히 명령하심", ""],["예물 드림","백성이 자원하여 금, 은, 청색·자색·홍색 실과 재료를 드림", ""],["기술자 세움","브살렐과 오홀리압이 성령의 지혜로 일을 맡음", ""],["기구 제작","언약궤, 등잔대, 분향단, 번제단 등을 제작함", ""],["제사장 의복","아론과 제사장을 위한 거룩한 옷을 만듦", ""],["성막 완성","명령하신 대로 성막을 세움", ""],["영광 충만","여호와의 영광이 성막에 충만함", ""]], scriptureRefs:[["출애굽기 25~31장","성막 설계와 명령"],["출애굽기 35~39장","성막 제작"],["출애굽기 40장","성막 봉헌과 하나님의 영광"],["요한복음 1:14","말씀이 육신이 되어 우리 가운데 거하심"]], visualItems:["성막 배치도", "성막 기구", "이스라엘 진영"]},
  "wilderness-40": {flowTitle:"핵심사건", flow:[["정탐꾼 파견","가나안 땅을 살피기 위해 열두 정탐꾼을 보냄", ""],["보고의 갈림","열 명은 두려움의 보고를, 여호수아와 갈렙은 믿음의 보고를 함", ""],["백성의 원망","백성이 애굽으로 돌아가자고 불평함", ""],["하나님의 판결","불신앙의 세대가 광야에서 죽을 것을 선언하심", ""],["40년 방황","이스라엘이 광야에서 40년 동안 훈련받음", ""],["새 세대 준비","여호수아와 갈렙, 새 세대가 가나안 입성을 준비함", ""],["약속의 땅 앞","모압 평지에서 신명기의 말씀을 들음", ""]], scriptureRefs:[["민수기 13~14장","가나안 정탐과 광야 40년 판결"],["신명기 8장","광야 훈련의 의미"],["히브리서 3:16~19","불신앙에 대한 경고"],["고린도전서 10:1~13","광야 사건의 교훈"]], visualItems:["광야 이동 경로", "가데스 바네아", "모압 평지"]},
  "bronze-serpent": {flowTitle:"핵심사건", flow:[["길의 고단함","백성이 에돔을 우회하는 길에서 마음이 상함", ""],["원망","하나님과 모세를 향해 먹을 것과 길을 원망함", ""],["불뱀 심판","불뱀이 백성을 물어 많은 사람이 죽음", ""],["죄 고백","백성이 우리가 범죄했다고 고백하며 기도를 요청함", ""],["모세의 중보","모세가 백성을 위해 기도함", ""],["놋뱀 제작","하나님이 놋뱀을 만들어 장대 위에 달라 하심", ""],["바라본 자가 삶","놋뱀을 쳐다본 자가 살아남", ""]], scriptureRefs:[["민수기 21:4~9","놋뱀 사건"],["요한복음 3:14~16","인자도 들려야 하리니"],["열왕기하 18:4","놋뱀이 우상이 되었을 때 제거됨"],["고린도전서 10:9","주를 시험하지 말라는 경고"]], visualItems:["에돔 길", "불뱀", "놋뱀 장대"]}
});

Object.assign(EVENT_EXPLORE, {
  "moses-birth": {title:"8. 연결탐험", items:[{title:"모세의 탄생", desc:"구원자의 준비"},{title:"떨기나무 소명", desc:"출 3장"},{title:"출애굽", desc:"하나님의 구원"},{title:"홍해의 기적", desc:"물에서의 구원"},{title:"광야 인도", desc:"언약 백성의 시작"}]},
  "burning-bush": {title:"8. 연결탐험", items:[{title:"모세의 탄생", desc:"준비된 지도자"},{title:"하나님의 이름", desc:"나는 스스로 있는 자"},{title:"10가지 재앙", desc:"심판과 해방"},{title:"유월절", desc:"구원의 밤"},{title:"시내산 언약", desc:"언약 백성"}]},
  "ten-plagues": {title:"8. 연결탐험", items:[{title:"떨기나무 소명", desc:"출애굽 사명"},{title:"애굽의 우상 심판", desc:"여호와의 주권"},{title:"유월절", desc:"어린양의 피"},{title:"홍해의 기적", desc:"결정적 구원"},{title:"십자가", desc:"심판과 구원"}]},
  "passover": {title:"8. 연결탐험", items:[{title:"10가지 재앙", desc:"장자 심판"},{title:"어린양의 피", desc:"구원의 표"},{title:"출애굽", desc:"해방"},{title:"십자가", desc:"유월절 어린양"},{title:"성찬", desc:"새 언약"}]},
  "red-sea": {title:"8. 연결탐험", items:[{title:"유월절", desc:"피로 구원"},{title:"홍해 도하", desc:"물로 구원"},{title:"광야 훈련", desc:"믿음의 여정"},{title:"세례", desc:"새 생명"},{title:"가나안 입성", desc:"약속의 땅"}]},
  "manna-quail": {title:"8. 연결탐험", items:[{title:"홍해의 기적", desc:"구원 후 훈련"},{title:"만나", desc:"날마다 공급"},{title:"안식일", desc:"말씀에 순종"},{title:"생명의 떡", desc:"요 6장"},{title:"성찬", desc:"그리스도의 공급"}]},
  "sinai-commandments": {title:"8. 연결탐험", items:[{title:"출애굽", desc:"구원받은 백성"},{title:"시내산 언약", desc:"말씀의 기준"},{title:"성막", desc:"임재와 예배"},{title:"율법의 완성", desc:"사랑"},{title:"새 언약", desc:"마음에 새긴 말씀"}]},
  "golden-calf": {title:"8. 연결탐험", items:[{title:"시내산 십계명", desc:"우상 금지"},{title:"금송아지", desc:"언약 파괴"},{title:"모세의 중보", desc:"회복의 길"},{title:"성막", desc:"참된 임재"},{title:"그리스도의 중보", desc:"완전한 회복"}]},
  "tabernacle": {title:"8. 연결탐험", items:[{title:"시내산 언약", desc:"하나님의 명령"},{title:"성막", desc:"하나님의 임재"},{title:"제사", desc:"속죄의 길"},{title:"성전", desc:"임재의 확장"},{title:"예수 그리스도", desc:"참 성막"}]},
  "wilderness-40": {title:"8. 연결탐험", items:[{title:"광야 훈련", desc:"믿음의 시험"},{title:"가데스 바네아", desc:"불신앙"},{title:"여호수아와 갈렙", desc:"믿음의 보고"},{title:"새 세대", desc:"약속의 준비"},{title:"가나안 정복", desc:"다음 시대"}]},
  "bronze-serpent": {title:"8. 연결탐험", items:[{title:"광야 원망", desc:"죄의 결과"},{title:"불뱀 심판", desc:"죽음"},{title:"모세의 중보", desc:"기도"},{title:"놋뱀", desc:"믿음으로 바라봄"},{title:"십자가", desc:"요 3:14~16"}]}
});

Object.assign(EVENT_MAP_CROPS, {
  "moses-birth":"assets/maps/13_moses_birth_map.png",
  "burning-bush":"assets/maps/14_burning_bush_map.png",
  "ten-plagues":"assets/maps/15_ten_plagues_map.png",
  "passover":"assets/maps/16_passover_map.png",
  "red-sea":"assets/maps/17_red_sea_map.png",
  "manna-quail":"assets/maps/18_manna_quail_map.png",
  "sinai-commandments":"assets/maps/19_sinai_commandments_map.png",
  "golden-calf":"assets/maps/20_golden_calf_map.png",
  "tabernacle":"assets/maps/21_tabernacle_map.png",
  "wilderness-40":"assets/maps/21_wilderness_40_map.png",
  "bronze-serpent":"assets/maps/22_bronze_serpent_map.png"
});



// v43 가나안 정복 핵심사건 상세화면 데이터
Object.assign(EVENTS, {
  "jordan-crossing": {
    title:"요단강의 기적", era:"가나안 정복", year:"BC 1406년경", scripture:"여호수아 3~4장",
    place:"요단강, 길갈", people:["하나님","여호수아","제사장들","이스라엘 백성","열두 지파 대표"],
    summary:"이스라엘이 언약궤를 앞세우고 요단강을 건너 약속의 땅 가나안에 들어간 사건입니다.",
    core:["요단강 앞에 진을 침","백성이 자신을 성결하게 함","제사장들이 언약궤를 메고 앞서감","제사장들의 발이 물가에 닿음","요단강 물이 멈춤","이스라엘이 마른 땅으로 건넘","열두 돌을 세워 기념함"],
    meaning:["가나안 정복은 군사력이 아니라 하나님의 임재로 시작됨","언약궤는 하나님이 앞서가신다는 표징임","믿음의 순종은 물가에 발을 내딛는 결단으로 드러남","열두 돌은 다음 세대에게 구원의 기억을 전하는 신앙 교육의 표지임"],
    connect:["홍해 도하","언약궤","길갈","세례","가나안 입성"],
    visual:"요단강 도하 위치, 길갈의 열두 돌, 가나안 입성 경로", image:"assets/infographics/23_jordan_crossing.png"
  },
  "jericho": {
    title:"여리고 함락", era:"가나안 정복", year:"BC 1406년경", scripture:"여호수아 6장",
    place:"여리고", people:["하나님","여호수아","제사장들","이스라엘 백성","라합"],
    summary:"이스라엘이 하나님의 명령에 따라 여리고 성을 돌고 외치자 성벽이 무너진 가나안 첫 승리 사건입니다.",
    core:["여리고 성이 굳게 닫힘","하나님이 승리를 약속하심","제사장과 백성이 성을 돎","엿새 동안 하루 한 번 성을 돎","일곱째 날 일곱 번 돎","나팔 소리와 큰 외침","성벽이 무너지고 라합의 집은 구원받음"],
    meaning:["가나안 첫 전투는 하나님의 방식에 대한 순종으로 승리함","예배와 전쟁이 분리되지 않고 하나님 중심으로 연결됨","라합의 구원은 믿음과 언약 안에 들어온 이방인의 구원을 보여줌","겉으로는 이상해 보여도 하나님의 말씀에 순종하는 것이 승리의 길임"],
    connect:["요단강의 기적","언약궤","라합","순종의 전쟁","십자가의 구원"],
    visual:"여리고 위치, 성벽 붕괴, 정복 경로", image:"assets/infographics/24_jericho.png"
  },
  "ai-battle": {
    title:"아이성 전투", era:"가나안 정복", year:"BC 1406년경", scripture:"여호수아 7~8장",
    place:"아이 성, 아골 골짜기, 에발산과 그리심산", people:["하나님","여호수아","아간","이스라엘 백성","아이 사람들"],
    summary:"아간의 범죄로 첫 공격에 실패했으나 죄를 제거한 뒤 하나님의 지시에 따라 아이 성을 점령한 사건입니다.",
    core:["여리고 전리품 중 일부를 아간이 숨김","이스라엘이 아이 성 첫 공격에서 패배함","여호수아가 하나님께 엎드림","아간의 죄가 드러남","죄를 제거하고 공동체를 정결하게 함","매복 작전으로 아이 성을 점령함","에발산에 제단을 쌓고 율법을 낭독함"],
    meaning:["공동체의 죄는 전체 사명에 영향을 줌","승리 뒤의 방심과 교만은 패배를 부름","회개와 정결 없이는 다음 승리로 갈 수 없음","정복의 목적은 땅 차지가 아니라 말씀에 순종하는 언약 공동체 세움임"],
    connect:["여리고 함락","아간의 범죄","회개와 정결","율법 낭독","언약 갱신"],
    visual:"아이 성 위치, 매복 작전, 에발산과 그리심산", image:"assets/infographics/25_ai_battle.png"
  },
  "sun-moon": {
    title:"해와 달이 멈춤", era:"가나안 정복", year:"BC 1406년경", scripture:"여호수아 10장",
    place:"기브온, 아얄론 골짜기, 벧호론", people:["하나님","여호수아","기브온 사람들","아모리 다섯 왕","이스라엘 군대"],
    summary:"기브온을 공격한 아모리 연합군과의 전투에서 하나님이 우박과 기적으로 이스라엘에게 승리를 주신 사건입니다.",
    core:["기브온이 이스라엘과 화친함","아모리 다섯 왕이 기브온을 공격함","기브온이 여호수아에게 도움을 요청함","이스라엘이 밤새 올라가 기습함","하나님이 큰 우박으로 원수를 치심","여호수아가 해와 달이 멈추기를 구함","남부 가나안 정복의 길이 열림"],
    meaning:["하나님은 언약 백성의 전쟁에 주권적으로 개입하심","여호수아의 담대한 기도는 하나님의 약속을 붙든 믿음의 행동임","자연과 시간도 하나님의 통치 아래 있음","가나안 정복은 인간의 영웅담이 아니라 하나님의 구원 역사임"],
    connect:["기브온 화친","여호수아의 기도","하나님의 전쟁","가나안 남부 정복","최후 승리"],
    visual:"기브온, 아얄론 골짜기, 남부 정복 경로", image:"assets/infographics/26_sun_moon.png"
  },
  "land-allotment": {
    title:"가나안 땅 분배", era:"가나안 정복", year:"BC 1400년경 전후", scripture:"여호수아 13~21장",
    place:"길갈, 실로, 가나안 전역", people:["하나님","여호수아","엘르아살","갈렙","이스라엘 열두 지파"],
    summary:"가나안 정복 이후 하나님이 약속하신 땅을 이스라엘 지파들에게 기업으로 나누어 주신 사건입니다.",
    core:["정복한 땅과 남은 땅이 확인됨","요단 동편 지파의 기업이 정리됨","갈렙이 헤브론을 기업으로 받음","유다와 요셉 지파의 땅이 분배됨","실로에 회막을 세움","나머지 지파의 땅이 제비뽑기로 분배됨","레위 성읍과 도피성이 지정됨"],
    meaning:["하나님의 약속은 실제 삶의 자리와 기업으로 성취됨","땅 분배는 소유권보다 하나님께 받은 사명과 책임을 뜻함","제비뽑기는 땅의 주인이 하나님이심을 보여줌","레위 성읍과 도피성은 예배와 생명 보호의 질서를 세움"],
    connect:["아브라함 언약","가나안 정복","실로의 회막","도피성","하나님 나라의 기업"],
    visual:"열두 지파 분배 지도, 실로, 도피성", image:"assets/infographics/27_land_allotment.png"
  }
});

Object.assign(EVENT_ENRICH, {
  "jordan-crossing": {flowTitle:"핵심사건", flow:[["요단강 앞 도착","이스라엘이 싯딤을 떠나 요단강 앞에 머무름", ""],["성결 준비","여호수아가 백성에게 자신을 성결하게 하라고 명령함", ""],["언약궤 앞섬","제사장들이 언약궤를 메고 백성보다 앞서감", ""],["믿음의 발걸음","제사장들의 발이 요단 물가에 닿음", ""],["물이 멈춤","요단강 물이 위에서 멈추고 백성 앞에 길이 열림", ""],["마른 땅 통과","이스라엘 온 백성이 마른 땅으로 요단을 건넘", ""],["기념 돌","열두 돌을 세워 하나님이 행하신 일을 기억하게 함", ""]], scriptureRefs:[["여호수아 3장","요단강 도하"],["여호수아 4장","열두 돌 기념"],["출애굽기 14장","홍해 도하와의 연결"],["시편 114편","요단이 물러간 구원의 기억"]], visualItems:["요단강", "길갈", "열두 돌"]},
  "jericho": {flowTitle:"핵심사건", flow:[["승리 약속","하나님이 여리고와 왕과 용사들을 여호수아의 손에 넘기셨다고 말씀하심", ""],["행진 명령","무장한 자와 제사장과 언약궤가 성을 돌도록 명령받음", ""],["엿새 행진","엿새 동안 하루에 한 번씩 여리고 성을 돎", ""],["일곱째 날","일곱째 날에는 성을 일곱 번 돎", ""],["나팔과 외침","제사장의 나팔 소리 후 백성이 크게 외침", ""],["성벽 붕괴","여리고 성벽이 무너지고 성이 점령됨", ""],["라합 구원","정탐꾼을 숨겨 준 라합과 가족이 구원받음", ""]], scriptureRefs:[["여호수아 2장","라합과 정탐꾼"],["여호수아 6장","여리고 함락"],["히브리서 11:30~31","믿음으로 여리고 성이 무너지고 라합이 구원받음"],["야고보서 2:25","라합의 행함 있는 믿음"]], visualItems:["여리고 성", "언약궤", "나팔"]},
  "ai-battle": {flowTitle:"핵심사건", flow:[["아간의 범죄","아간이 하나님께 바친 물건을 숨김", ""],["첫 패배","이스라엘이 아이 성을 가볍게 보고 공격했다가 패배함", ""],["기도와 책망","여호수아가 엎드리자 하나님이 죄를 제거하라고 하심", ""],["죄의 발견","제비뽑기를 통해 아간의 죄가 드러남", ""],["공동체 정결","아간의 죄가 처리되고 이스라엘이 다시 준비됨", ""],["매복 작전","하나님의 지시에 따라 매복으로 아이 성을 점령함", ""],["언약 갱신","에발산에서 제단을 쌓고 율법을 낭독함", ""]], scriptureRefs:[["여호수아 7장","아간의 범죄와 아이 성 패배"],["여호수아 8장","아이 성 승리와 율법 낭독"],["신명기 27장","에발산과 그리심산의 언약 명령"],["고린도전서 10:12","선 줄로 생각하는 자는 넘어질까 조심하라"]], visualItems:["아이 성", "아골 골짜기", "에발산과 그리심산"]},
  "sun-moon": {flowTitle:"핵심사건", flow:[["기브온 화친","기브온 사람들이 이스라엘과 화친함", ""],["아모리 연합","예루살렘 왕을 중심으로 다섯 왕이 기브온을 공격함", ""],["도움 요청","기브온이 여호수아에게 구원을 요청함", ""],["밤샘 진군","여호수아가 길갈에서 밤새 올라가 적을 기습함", ""],["우박 심판","하나님이 큰 우박으로 많은 적을 치심", ""],["해와 달 멈춤","여호수아의 기도에 따라 해와 달이 멈춘 것으로 기록됨", ""],["남부 정복","가나안 남부 주요 성읍 정복의 길이 열림", ""]], scriptureRefs:[["여호수아 9장","기브온 화친"],["여호수아 10장","해와 달이 멈춘 전투"],["하박국 3:11","주의 화살과 창의 광채에 해와 달이 멈춤"],["시편 18편","하나님의 전쟁과 구원"]], visualItems:["기브온", "아얄론 골짜기", "벧호론"]},
  "land-allotment": {flowTitle:"핵심사건", flow:[["땅 분배 시작","정복한 땅과 아직 남은 땅을 기준으로 기업 분배가 시작됨", ""],["요단 동편 정리","르우벤, 갓, 므낫세 반 지파의 기업이 정리됨", ""],["갈렙의 기업","갈렙이 믿음으로 헤브론을 기업으로 받음", ""],["서편 지파 분배","유다와 요셉 지파를 비롯해 각 지파의 기업이 나뉨", ""],["실로 회막","실로에 회막을 세우고 공동체 중심을 마련함", ""],["제비뽑기","남은 지파들이 제비뽑기로 기업을 받음", ""],["도피성과 레위 성읍","생명 보호와 예배 질서를 위한 성읍이 지정됨", ""]], scriptureRefs:[["여호수아 13~19장","지파별 땅 분배"],["여호수아 14장","갈렙의 헤브론 기업"],["여호수아 20장","도피성 지정"],["여호수아 21장","레위 성읍과 약속 성취"]], visualItems:["열두 지파 분배 지도", "실로", "도피성"]}
});

Object.assign(EVENT_EXPLORE, {
  "jordan-crossing": {title:"8. 연결탐험", items:[{title:"홍해 도하", desc:"출애굽 구원"},{title:"요단강", desc:"약속의 땅 입성"},{title:"언약궤", desc:"하나님의 임재"},{title:"길갈", desc:"기념과 새 출발"},{title:"세례", desc:"새 생명으로 들어감"}]},
  "jericho": {title:"8. 연결탐험", items:[{title:"요단강의 기적", desc:"입성"},{title:"여리고", desc:"첫 승리"},{title:"라합", desc:"믿음의 구원"},{title:"순종", desc:"하나님의 방식"},{title:"십자가", desc:"심판 중 구원"}]},
  "ai-battle": {title:"8. 연결탐험", items:[{title:"여리고 승리", desc:"첫 승리 후 시험"},{title:"아간", desc:"숨은 죄"},{title:"회개", desc:"정결"},{title:"아이성 승리", desc:"회복"},{title:"언약 갱신", desc:"말씀으로 재정렬"}]},
  "sun-moon": {title:"8. 연결탐험", items:[{title:"기브온", desc:"화친과 보호"},{title:"아모리 전투", desc:"하나님의 전쟁"},{title:"해와 달", desc:"창조주의 주권"},{title:"여호수아", desc:"담대한 기도"},{title:"최후 승리", desc:"하나님 나라"}]},
  "land-allotment": {title:"8. 연결탐험", items:[{title:"아브라함 언약", desc:"땅의 약속"},{title:"가나안 정복", desc:"약속 성취"},{title:"실로", desc:"예배 중심"},{title:"도피성", desc:"생명 보호"},{title:"기업", desc:"하나님 나라 상속"}]}
});

Object.assign(EVENT_MAP_CROPS, {
  "jordan-crossing":"assets/maps/23_jordan_crossing_map.png",
  "jericho":"assets/maps/24_jericho_map.png",
  "ai-battle":"assets/maps/25_ai_battle_map.png",
  "sun-moon":"assets/maps/26_sun_moon_map.png",
  "land-allotment":"assets/maps/27_land_allotment_map.png"
});


// v44 사사 시대 핵심사건 상세화면 데이터
Object.assign(EVENTS, {
  "deborah-barak": {
    title:"드보라와 바락", era:"사사 시대", year:"사사 강가, 기원전 약 1200년경", scripture:"사사기 4~5장",
    place:"사사 강가, 기손 강, 갈릴리 남쪽 지역", people:["하나님","드보라","바락","시스라","야엘"],
    summary:"하나님께서 여선지자 드보라와 바락을 세우셔서 가나안 장수 시스라의 압제에서 이스라엘을 구원하신 사건입니다.",
    core:["이스라엘이 다시 악을 행함","가나안 왕 야빈과 장수 시스라가 이스라엘을 압제함","드보라가 하나님의 말씀으로 바락을 부름","바락이 만 명의 군사를 모아 출정함","하나님이 시스라의 군대를 혼란에 빠뜨리심","시스라가 도망하다가 야엘에게 죽임을 당함","드보라와 바락이 승리의 노래로 하나님께 영광을 돌림"],
    meaning:["하나님은 연약한 시대에도 구원자를 세우시는 분이심","믿음의 순종과 협력은 하나님의 승리에 쓰임받음","여성 지도자인 드보라와 야엘을 통해 하나님의 주권이 드러남","승리 후 영광은 사람의 공로가 아니라 하나님께 돌려야 함"],
    connect:["사사 시대의 구원","여성 지도자","하나님의 전쟁","찬양과 감사","그리스도의 승리"],
    visual:"이스라엘 북부 지역, 기손 강 전투, 시스라의 도망 경로", image:"assets/infographics/28_deborah_barak.png"
  },
  "gideon-300": {
    title:"기드온과 300용사", era:"사사 시대", year:"사사 시대, 기원전 약 12세기경", scripture:"사사기 6~8장",
    place:"오브라, 미디안 진영, 하롯 샘, 모레 산 주변", people:["하나님","기드온","미디안 사람들","300용사","이스라엘 백성"],
    summary:"하나님께서 두려움 많은 기드온을 부르시고 300명만으로 미디안의 큰 군대를 물리치게 하신 사건입니다.",
    core:["미디안의 압제로 이스라엘이 고통받음","하나님의 사자가 기드온을 큰 용사로 부름","기드온이 바알 제단을 헐고 하나님께 순종함","하나님이 군사의 수를 300명으로 줄이심","항아리와 횃불과 나팔로 미디안 진영을 혼란에 빠뜨림","이스라엘이 미디안을 물리침","승리 후 기드온의 에봇이 올무가 됨"],
    meaning:["하나님의 승리는 숫자와 힘이 아니라 하나님의 능력에 달려 있음","두려움 많은 사람도 부르심에 순종하면 쓰임받을 수 있음","하나님은 자기 백성이 승리를 자기 공로로 착각하지 않게 하심","승리 이후의 교만과 우상화도 경계해야 함"],
    connect:["미디안 압제","기드온의 부르심","300용사","하나님의 능력","겸손한 순종"],
    visual:"하롯 샘, 미디안 진영, 나팔·항아리·횃불 전술", image:"assets/infographics/29_gideon_300.png"
  },
  "samson": {
    title:"삼손", era:"사사 시대", year:"사사 시대 말기, 기원전 약 11세기경", scripture:"사사기 13~16장",
    place:"소라, 딤나, 가사, 소렉 골짜기, 블레셋 지역", people:["하나님","삼손","마노아","들릴라","블레셋 사람들"],
    summary:"나실인으로 태어난 삼손이 블레셋을 치는 도구로 쓰임받았으나, 욕망과 불순종으로 무너졌다가 마지막 순간 하나님께 부르짖은 사건입니다.",
    core:["삼손의 출생이 천사에 의해 예고됨","삼손이 나실인으로 구별됨","블레셋을 치는 여러 사건이 일어남","삼손이 들릴라의 유혹에 넘어감","머리털이 잘리고 힘을 잃어 포로가 됨","삼손이 마지막으로 하나님께 힘을 구함","블레셋 신전이 무너지며 원수들을 치게 됨"],
    meaning:["은사와 능력은 거룩한 순종 안에서 바르게 쓰여야 함","욕망과 방심은 하나님이 주신 사명을 무너뜨릴 수 있음","하나님은 실패한 사람의 마지막 부르짖음도 사용하실 수 있음","사사 시대의 영적 혼란이 삼손의 삶에 압축되어 나타남"],
    connect:["나실인","블레셋 압제","들릴라","무너진 신전","십자가의 역설적 승리"],
    visual:"소라와 딤나, 소렉 골짜기, 가사와 블레셋 도시들", image:"assets/infographics/30_samson.png"
  },
  "ruth-boaz": {
    title:"룻과 보아스", era:"사사 시대", year:"사사들이 다스리던 때", scripture:"룻기 1~4장",
    place:"모압, 베들레헴, 보아스의 밭", people:["하나님","룻","나오미","보아스","오벳"],
    summary:"모압 여인 룻이 나오미를 따라 베들레헴으로 돌아와 보아스를 만나고, 다윗과 예수 그리스도의 족보로 이어진 구속의 사건입니다.",
    core:["흉년으로 나오미 가족이 모압으로 이주함","남편과 두 아들이 죽고 나오미가 베들레헴으로 돌아감","룻이 나오미를 떠나지 않고 함께 감","룻이 보아스의 밭에서 이삭을 주움","보아스가 기업 무를 자로 룻을 보호함","룻과 보아스가 결혼함","오벳이 태어나 다윗 왕가의 계보로 이어짐"],
    meaning:["혼란한 사사 시대에도 하나님의 섭리는 조용히 흐름","룻의 신실함과 보아스의 책임 있는 사랑은 구속의 그림자를 보여줌","이방 여인 룻이 언약 백성의 계보 안에 들어옴","작은 가정의 이야기가 다윗과 그리스도의 족보로 확장됨"],
    connect:["기업 무를 자","베들레헴","다윗의 계보","이방인의 구원","그리스도의 구속"],
    visual:"모압에서 베들레헴으로 돌아오는 길, 보아스의 밭, 다윗 계보", image:"assets/infographics/31_ruth_boaz.png"
  }
});

Object.assign(EVENT_ENRICH, {
  "deborah-barak": {flowTitle:"핵심사건", flow:[["탄식","이스라엘이 가나안 왕 야빈과 시스라의 압제 아래 고통받음", ""],["부르심","드보라가 바락을 불러 하나님의 명령을 전함", ""],["출정","바락이 스불론과 납달리 지파의 군사를 모아 출정함", ""],["전투","하나님이 기손 강가에서 시스라의 군대를 무너뜨리심", ""],["도망","시스라가 병거를 버리고 야엘의 장막으로 도망함", ""],["승리","야엘이 시스라를 죽이고 이스라엘이 승리함", ""],["찬양","드보라와 바락이 승리의 노래로 하나님께 영광을 돌림", ""]], scriptureRefs:[["사사기 4장","드보라와 바락의 승리"],["사사기 5장","드보라와 바락의 노래"],["여호수아기","가나안 정복 시기의 연속된 역사"],["요한계시록 21:1~4","새 하늘과 새 땅의 영원한 승리"]], visualItems:["기손 강", "갈릴리 남쪽", "전투 위치"]},
  "gideon-300": {flowTitle:"핵심사건", flow:[["압제","미디안이 이스라엘을 약탈하고 백성이 부르짖음", ""],["부르심","하나님의 사자가 기드온을 큰 용사라 부름", ""],["제단 제거","기드온이 바알 제단을 헐고 하나님께 제단을 쌓음", ""],["군사 축소","하나님이 군사의 수를 300명으로 줄이심", ""],["전술","항아리, 횃불, 나팔로 미디안 진영을 둘러쌈", ""],["혼란","하나님이 미디안 군대 안에 큰 혼란을 일으키심", ""],["승리와 경계","이스라엘이 승리하지만 기드온의 에봇이 올무가 됨", ""]], scriptureRefs:[["사사기 6장","기드온의 부르심"],["사사기 7장","300용사의 승리"],["사사기 8장","승리 이후의 경계"],["고린도후서 12:9","약할 때 강함 되시는 하나님의 능력"]], visualItems:["하롯 샘", "미디안 진영", "300용사의 전술"]},
  "samson": {flowTitle:"핵심사건", flow:[["출생 예고","천사가 삼손의 출생과 나실인 사명을 알림", ""],["구별","삼손이 태어나 나실인으로 자라남", ""],["블레셋과 충돌","삼손이 여러 사건을 통해 블레셋을 침", ""],["유혹","들릴라가 삼손의 힘의 비밀을 캐냄", ""],["몰락","삼손의 머리털이 잘리고 힘을 잃어 포로가 됨", ""],["기도","삼손이 마지막 순간 하나님께 다시 힘을 구함", ""],["최후 승리","블레셋 신전이 무너지며 많은 블레셋 사람이 죽음", ""]], scriptureRefs:[["사사기 13장","삼손의 출생 예고"],["사사기 14~15장","삼손과 블레셋의 충돌"],["사사기 16장","들릴라와 삼손의 최후"],["히브리서 11:32","믿음의 사람들 가운데 언급된 삼손"]], visualItems:["소라", "소렉 골짜기", "블레셋 지역"]},
  "ruth-boaz": {flowTitle:"핵심사건", flow:[["흉년","나오미 가족이 베들레헴을 떠나 모압으로 감", ""],["상실","나오미의 남편과 두 아들이 죽음", ""],["동행","룻이 나오미를 따라 베들레헴으로 돌아감", ""],["이삭줍기","룻이 보아스의 밭에서 이삭을 주움", ""],["은혜","보아스가 룻을 보호하고 배려함", ""],["구속","보아스가 기업 무를 자로 책임을 감당함", ""],["계보","룻과 보아스의 가정이 다윗과 그리스도의 족보로 이어짐", ""]], scriptureRefs:[["룻기 1장","룻의 결단과 베들레헴 귀환"],["룻기 2장","보아스의 밭에서 만남"],["룻기 3~4장","기업 무를 자와 결혼"],["마태복음 1장","그리스도의 족보에 오른 룻"]], visualItems:["모압", "베들레헴", "보아스의 밭"]}
});

Object.assign(EVENT_EXPLORE, {
  "deborah-barak": {title:"8. 연결탐험", items:[{title:"사사 시대", desc:"반복되는 타락과 구원"},{title:"드보라", desc:"믿음의 지도자"},{title:"바락", desc:"순종의 동역자"},{title:"야엘", desc:"연약함을 통한 승리"},{title:"찬양", desc:"하나님께 영광"}]},
  "gideon-300": {title:"8. 연결탐험", items:[{title:"미디안 압제", desc:"부르짖음"},{title:"기드온", desc:"두려움에서 순종으로"},{title:"300용사", desc:"적은 수의 승리"},{title:"횃불과 나팔", desc:"하나님의 방식"},{title:"겸손", desc:"자랑 금지"}]},
  "samson": {title:"8. 연결탐험", items:[{title:"나실인", desc:"구별된 사명"},{title:"블레셋", desc:"압제 세력"},{title:"들릴라", desc:"유혹과 몰락"},{title:"마지막 기도", desc:"회복의 부르짖음"},{title:"십자가", desc:"죽음을 통한 승리"}]},
  "ruth-boaz": {title:"8. 연결탐험", items:[{title:"흉년", desc:"상실의 시작"},{title:"룻", desc:"신실한 사랑"},{title:"보아스", desc:"기업 무를 자"},{title:"베들레헴", desc:"구속사의 장소"},{title:"예수 그리스도", desc:"참 구속자"}]}
});

Object.assign(EVENT_MAP_CROPS, {
  "deborah-barak":"assets/maps/28_deborah_barak_map.png",
  "gideon-300":"assets/maps/29_gideon_300_map.png",
  "samson":"assets/maps/30_samson_map.png",
  "ruth-boaz":"assets/maps/31_ruth_boaz_map.png"
});


// v45 통일왕국 핵심사건 상세화면 데이터
Object.assign(EVENTS, {
  "saul-king": {
    title:"사울 왕 즉위", era:"통일왕국", year:"BC 1050년경", scripture:"사무엘상 8~12장",
    place:"미스바, 길갈, 이스라엘 전역", people:["하나님","사무엘","사울","이스라엘 백성"],
    summary:"이스라엘 백성이 주변 나라처럼 왕을 요구하자, 하나님께서 사무엘을 통해 사울을 이스라엘의 첫 왕으로 세우신 사건입니다.",
    core:["이스라엘 백성이 왕을 요구함","사무엘이 백성의 요구를 하나님께 아룀","하나님이 왕정의 위험을 경고하심","사울이 선택되어 기름부음을 받음","미스바에서 왕으로 제비뽑힘","길갈에서 왕권이 새롭게 확인됨","왕정 시대가 시작됨"],
    meaning:["왕정은 하나님의 허락 속에 시작되었지만 인간 왕권의 한계를 함께 드러냄","참된 왕은 하나님이시며 인간 왕은 그 통치 아래 있어야 함","백성의 요구가 항상 믿음의 선택은 아님","사울의 등장은 다윗 왕국과 메시아 왕권을 준비하는 출발점임"],
    connect:["사무엘","왕정의 시작","사울","다윗","참 왕이신 하나님"],
    visual:"미스바, 길갈, 사울의 즉위 장면", image:"assets/infographics/32_saul_king.png"
  },
  "david-goliath": {
    title:"다윗과 골리앗", era:"통일왕국", year:"BC 1020년경", scripture:"사무엘상 17장",
    place:"엘라 골짜기", people:["하나님","다윗","골리앗","사울","이스라엘 군대"],
    summary:"소년 다윗이 하나님의 이름을 의지하여 블레셋 장수 골리앗을 물리친 사건입니다.",
    core:["블레셋과 이스라엘이 엘라 골짜기에서 대치함","골리앗이 이스라엘을 모욕함","이스라엘 군대가 두려워함","다윗이 하나님의 이름으로 싸우겠다고 나섬","물맷돌로 골리앗을 쓰러뜨림","이스라엘이 블레셋을 추격함","다윗이 하나님의 구원을 드러냄"],
    meaning:["믿음은 상황의 크기보다 하나님의 이름을 더 크게 보는 것임","하나님의 전쟁은 힘과 무기가 아니라 하나님을 의지하는 믿음으로 승리함","다윗은 하나님 마음에 합한 왕의 모습을 미리 보여줌","작은 순종이 구속사의 큰 전환점이 될 수 있음"],
    connect:["엘라 골짜기","믿음의 전쟁","다윗","블레셋","그리스도의 승리"],
    visual:"엘라 골짜기, 블레셋과 이스라엘 진영, 물맷돌", image:"assets/infographics/33_david_goliath.png"
  },
  "ark-move": {
    title:"언약궤 이동", era:"통일왕국", year:"BC 1000년경", scripture:"사무엘하 6장, 역대상 13~16장",
    place:"기럇여아림, 오벧에돔의 집, 예루살렘", people:["하나님","다윗","웃사","오벧에돔","레위 사람들"],
    summary:"다윗이 하나님의 임재를 상징하는 언약궤를 예루살렘으로 옮기며 예배 중심을 세운 사건입니다.",
    core:["다윗이 언약궤를 예루살렘으로 옮기려 함","처음에는 새 수레에 싣고 옮김","웃사가 언약궤를 붙들다 죽음","다윗이 두려워하며 오벧에돔의 집에 둠","하나님이 오벧에돔의 집에 복을 주심","다윗이 말씀의 방식대로 다시 옮김","언약궤가 예루살렘에 안치되고 찬양이 회복됨"],
    meaning:["예배의 열심도 하나님의 말씀과 거룩함 안에서 드려져야 함","언약궤는 하나님의 임재와 통치를 상징함","예루살렘은 예배와 왕권의 중심으로 세워짐","다윗의 기쁨과 찬양은 하나님 중심 왕국의 모습을 보여줌"],
    connect:["언약궤","예루살렘","다윗의 장막","성전","임마누엘"],
    visual:"기럇여아림에서 예루살렘으로 이동하는 경로", image:"assets/infographics/34_ark_move.png"
  },
  "david-kingdom": {
    title:"다윗 왕국", era:"통일왕국", year:"BC 1000년경", scripture:"사무엘하 5~8장, 7장",
    place:"헤브론, 예루살렘, 이스라엘 전역", people:["하나님","다윗","나단","이스라엘 백성"],
    summary:"다윗이 온 이스라엘의 왕이 되고 예루살렘을 수도로 삼으며, 하나님께서 다윗 언약을 주신 사건입니다.",
    core:["다윗이 헤브론에서 유다 왕으로 다스림","온 이스라엘 장로들이 다윗을 왕으로 세움","예루살렘을 점령하여 수도로 삼음","주변 원수들을 물리치며 왕국을 안정시킴","다윗이 하나님을 위한 집을 짓고자 함","하나님이 나단을 통해 다윗 언약을 주심","다윗의 왕위가 메시아 약속으로 연결됨"],
    meaning:["다윗 왕국은 이스라엘 왕정의 기준점이 됨","다윗 언약은 영원한 왕권과 메시아 약속의 핵심임","하나님의 나라는 인간의 성취가 아니라 하나님의 언약 위에 세워짐","예루살렘은 구속사의 중심 무대로 자리 잡음"],
    connect:["예루살렘","다윗 언약","메시아 왕권","성전 준비","예수 그리스도"],
    visual:"헤브론, 예루살렘, 다윗 왕국의 확장", image:"assets/infographics/35_david_kingdom.png"
  },
  "bathsheba": {
    title:"밧세바 사건", era:"통일왕국", year:"BC 990년경", scripture:"사무엘하 11~12장, 시편 51편",
    place:"예루살렘 왕궁, 랍바 전쟁터", people:["하나님","다윗","밧세바","우리아","나단"],
    summary:"다윗이 밧세바와 간음하고 우리아를 죽게 한 죄를 범했으나, 나단의 책망을 통해 회개한 사건입니다.",
    core:["다윗이 전쟁터에 나가지 않고 예루살렘에 머묾","밧세바를 보고 데려옴","밧세바가 임신함","다윗이 죄를 숨기려 우리아를 불러들임","우리아가 충성스럽게 행동함","다윗이 우리아를 전쟁터에서 죽게 함","나단이 책망하고 다윗이 회개함"],
    meaning:["하나님 마음에 합한 사람도 죄 앞에서는 무너질 수 있음","권력과 욕망이 결합하면 깊은 죄로 이어질 수 있음","참된 회개는 죄를 인정하고 하나님께 돌아서는 것임","하나님의 용서는 값싼 면죄부가 아니라 죄의 결과를 직면하게 함"],
    connect:["다윗의 죄","나단의 책망","회개","시편 51편","그리스도의 은혜"],
    visual:"예루살렘 왕궁, 랍바 전쟁터, 나단의 책망", image:"assets/infographics/36_bathsheba.png"
  },
  "solomon-wisdom": {
    title:"솔로몬의 지혜", era:"통일왕국", year:"BC 970년경", scripture:"열왕기상 3~4장, 역대하 1장",
    place:"기브온 산당, 예루살렘", people:["하나님","솔로몬","두 여인","이스라엘 백성"],
    summary:"솔로몬이 하나님께 지혜를 구하고, 하나님께서 지혜와 부귀와 영광까지 더해 주신 사건입니다.",
    core:["솔로몬이 기브온에서 하나님께 제사를 드림","하나님이 무엇을 줄지 물으심","솔로몬이 백성을 재판할 지혜를 구함","하나님이 그 기도를 기뻐하심","지혜와 함께 부와 영광도 약속하심","두 여인의 아이 재판을 통해 지혜가 드러남","이스라엘이 솔로몬의 지혜를 두려워함"],
    meaning:["지도자의 참된 능력은 하나님을 경외하는 지혜에서 나옴","하나님은 자기 욕심보다 사명을 위한 기도를 기뻐하심","솔로몬의 지혜는 왕국의 번영을 이끌었지만 인간 지혜의 한계도 뒤따름","참 지혜는 결국 그리스도 안에서 완성됨"],
    connect:["기브온","지혜의 기도","공의로운 재판","잠언","그리스도는 하나님의 지혜"],
    visual:"기브온 산당, 솔로몬의 재판, 예루살렘 왕궁", image:"assets/infographics/37_solomon_wisdom.png"
  },
  "temple-build": {
    title:"성전 건축", era:"통일왕국", year:"BC 966년경", scripture:"열왕기상 5~7장, 역대하 2~4장",
    place:"예루살렘 모리아 산", people:["하나님","솔로몬","히람","이스라엘 백성"],
    summary:"솔로몬이 다윗이 준비한 뜻을 이어 예루살렘에 여호와의 성전을 건축한 사건입니다.",
    core:["다윗이 성전 건축을 준비함","솔로몬이 두로 왕 히람과 협력함","백향목과 돌과 금 등 재료가 준비됨","예루살렘 모리아 산에 성전이 세워짐","성소와 지성소와 기구들이 제작됨","언약궤를 모실 장소가 준비됨","이스라엘 예배의 중심이 세워짐"],
    meaning:["성전은 하나님이 자기 백성 가운데 거하심을 보여주는 표지임","다윗의 준비와 솔로몬의 실행은 세대 간 사명의 계승을 보여줌","성전은 예배의 중심이지만 하나님을 건물 안에 가둘 수는 없음","성전의 의미는 예수 그리스도와 교회로 확장됨"],
    connect:["성막","예루살렘","모리아 산","성전","그리스도의 몸"],
    visual:"예루살렘 성전산, 성전 구조, 지성소와 성전 기구", image:"assets/infographics/38_temple_build.png"
  },
  "temple-dedication": {
    title:"성전 봉헌", era:"통일왕국", year:"BC 959년경", scripture:"열왕기상 8장, 역대하 5~7장",
    place:"예루살렘 성전", people:["하나님","솔로몬","제사장들","레위 사람들","이스라엘 백성"],
    summary:"솔로몬이 완성된 성전을 하나님께 봉헌하고, 하나님의 영광이 성전에 가득했던 사건입니다.",
    core:["언약궤가 성전 지성소로 옮겨짐","제사장과 레위인이 찬양과 제사를 드림","여호와의 영광이 성전에 가득함","솔로몬이 백성을 축복함","솔로몬이 성전 봉헌 기도를 드림","하나님이 불로 제물을 받으심","성전이 기도와 회개의 중심으로 세워짐"],
    meaning:["성전의 핵심은 건물이 아니라 하나님의 임재임","하나님은 회개하며 부르짖는 백성의 기도를 들으시는 분임","봉헌은 완성의 자랑이 아니라 하나님께 돌려드리는 행위임","하나님의 영광은 결국 그리스도 안에서 충만히 나타남"],
    connect:["언약궤","성전","기도","하나님의 영광","새 예루살렘"],
    visual:"성전 봉헌식, 언약궤 안치, 하나님의 영광", image:"assets/infographics/39_temple_dedication.png"
  }
});

Object.assign(EVENT_ENRICH, {
  "saul-king": {flowTitle:"핵심사건", flow:[["왕 요구","이스라엘 백성이 다른 나라처럼 왕을 요구함", ""],["경고","사무엘이 왕정의 위험을 경고함", ""],["선택","사울이 하나님의 섭리 가운데 선택됨", ""],["기름부음","사무엘이 사울에게 기름을 부음", ""],["공적 선포","미스바에서 사울이 왕으로 드러남", ""],["왕권 확인","길갈에서 사울의 왕권이 새롭게 확인됨", ""],["왕정 시작","이스라엘에 왕정 시대가 열림", ""]], scriptureRefs:[["사무엘상 8장","이스라엘의 왕 요구"],["사무엘상 9~10장","사울의 선택과 기름부음"],["사무엘상 11~12장","왕권 확립과 사무엘의 권면"]], visualItems:["미스바", "길갈", "이스라엘 왕정 시작"]},
  "david-goliath": {flowTitle:"핵심사건", flow:[["대치","엘라 골짜기에서 이스라엘과 블레셋이 대치함", ""],["모욕","골리앗이 이스라엘과 하나님을 모욕함", ""],["두려움","사울과 군대가 두려워함", ""],["믿음","다윗이 하나님의 이름으로 나아감", ""],["승리","물맷돌로 골리앗을 쓰러뜨림", ""],["추격","이스라엘이 블레셋을 추격함", ""],["증거","전쟁은 하나님께 속했음을 드러냄", ""]], scriptureRefs:[["사무엘상 17장","다윗과 골리앗"],["시편 27편","두려움보다 큰 하나님 신뢰"],["고린도전서 1:27","약한 것을 통해 강한 것을 부끄럽게 하심"]], visualItems:["엘라 골짜기", "블레셋 진영", "물맷돌"]},
  "ark-move": {flowTitle:"핵심사건", flow:[["첫 시도","다윗이 언약궤를 새 수레에 싣고 옮기려 함", ""],["웃사의 죽음","웃사가 언약궤를 붙들다 죽음", ""],["멈춤","언약궤가 오벧에돔의 집에 머묾", ""],["복","하나님이 오벧에돔의 집에 복을 주심", ""],["재시도","다윗이 말씀의 방식대로 다시 옮김", ""],["찬양","다윗과 백성이 기쁨으로 찬양함", ""],["안치","언약궤가 예루살렘에 안치됨", ""]], scriptureRefs:[["사무엘하 6장","언약궤 이동"],["역대상 15~16장","레위인의 운반과 찬양"],["시편 24편","영광의 왕이 들어가심"]], visualItems:["기럇여아림", "오벧에돔의 집", "예루살렘"]},
  "david-kingdom": {flowTitle:"핵심사건", flow:[["헤브론 통치","다윗이 유다 왕으로 다스림", ""],["통일","온 이스라엘이 다윗을 왕으로 세움", ""],["예루살렘 점령","예루살렘을 수도로 삼음", ""],["왕국 안정","주변 원수들을 물리침", ""],["성전 소원","다윗이 하나님을 위한 집을 짓고자 함", ""],["다윗 언약","하나님이 영원한 왕위의 약속을 주심", ""],["메시아 약속","다윗 왕권이 그리스도에게 이어짐", ""]], scriptureRefs:[["사무엘하 5장","다윗의 통일 왕국"],["사무엘하 7장","다윗 언약"],["누가복음 1:32~33","다윗의 왕위를 잇는 예수 그리스도"]], visualItems:["헤브론", "예루살렘", "다윗 왕국"]},
  "bathsheba": {flowTitle:"핵심사건", flow:[["머무름","다윗이 전쟁터가 아닌 예루살렘에 머묾", ""],["범죄","밧세바를 데려와 간음함", ""],["은폐","임신 사실을 숨기려 함", ""],["우리아","우리아가 충성스럽게 행동함", ""],["살인","다윗이 우리아를 전쟁터에서 죽게 함", ""],["책망","나단이 비유로 다윗의 죄를 드러냄", ""],["회개","다윗이 죄를 인정하고 회개함", ""]], scriptureRefs:[["사무엘하 11장","다윗의 범죄"],["사무엘하 12장","나단의 책망"],["시편 51편","다윗의 회개 기도"]], visualItems:["예루살렘 왕궁", "랍바 전쟁터", "나단의 책망"]},
  "solomon-wisdom": {flowTitle:"핵심사건", flow:[["제사","솔로몬이 기브온에서 제사를 드림", ""],["질문","하나님이 무엇을 줄지 물으심", ""],["간구","솔로몬이 듣는 마음과 지혜를 구함", ""],["응답","하나님이 지혜와 부귀와 영광을 주심", ""],["재판","두 여인의 아이 사건을 재판함", ""],["인정","백성이 솔로몬 안의 하나님의 지혜를 봄", ""],["번영","왕국이 지혜와 질서 속에 번영함", ""]], scriptureRefs:[["열왕기상 3장","솔로몬의 지혜 구함과 재판"],["열왕기상 4장","솔로몬 왕국의 지혜와 번영"],["잠언 1:7","여호와를 경외하는 것이 지식의 근본"]], visualItems:["기브온", "예루살렘", "솔로몬의 재판"]},
  "temple-build": {flowTitle:"핵심사건", flow:[["준비","다윗이 성전 건축을 준비함", ""],["협력","솔로몬이 두로 왕 히람과 협력함", ""],["재료","백향목과 돌과 금이 준비됨", ""],["건축","예루살렘 모리아 산에 성전이 세워짐", ""],["기구","성소와 지성소와 성전 기구가 제작됨", ""],["완공","성전 건축이 마무리됨", ""],["예배 중심","이스라엘 예배의 중심이 세워짐", ""]], scriptureRefs:[["열왕기상 5~7장","솔로몬의 성전 건축"],["역대하 2~4장","성전 준비와 구조"],["요한복음 2:19~21","예수께서 자기 몸을 성전으로 말씀하심"]], visualItems:["모리아 산", "성전 구조", "지성소"]},
  "temple-dedication": {flowTitle:"핵심사건", flow:[["언약궤 안치","언약궤가 지성소로 옮겨짐", ""],["찬양","제사장과 레위인이 찬양함", ""],["영광","여호와의 영광이 성전에 가득함", ""],["축복","솔로몬이 백성을 축복함", ""],["기도","솔로몬이 봉헌 기도를 드림", ""],["응답","하나님이 제물을 받으심", ""],["예배 중심","성전이 기도와 회개의 중심으로 세워짐", ""]], scriptureRefs:[["열왕기상 8장","성전 봉헌 기도"],["역대하 5~7장","하나님의 영광과 응답"],["요한계시록 21:22","새 예루살렘에는 주 하나님과 어린양이 성전이심"]], visualItems:["예루살렘 성전", "언약궤", "하나님의 영광"]}
});

Object.assign(EVENT_EXPLORE, {
  "saul-king": {title:"8. 연결탐험", items:[{title:"사무엘", desc:"마지막 사사"},{title:"왕정", desc:"인간 왕의 시작"},{title:"사울", desc:"첫 왕"},{title:"다윗", desc:"언약 왕권"},{title:"하나님", desc:"참 왕"}]},
  "david-goliath": {title:"8. 연결탐험", items:[{title:"엘라 골짜기", desc:"믿음의 전장"},{title:"골리앗", desc:"두려움의 상징"},{title:"다윗", desc:"믿음의 사람"},{title:"하나님의 이름", desc:"승리의 근거"},{title:"십자가", desc:"약함의 승리"}]},
  "ark-move": {title:"8. 연결탐험", items:[{title:"언약궤", desc:"하나님의 임재"},{title:"웃사", desc:"거룩함의 경고"},{title:"오벧에돔", desc:"임재의 복"},{title:"예루살렘", desc:"예배 중심"},{title:"성전", desc:"임재의 확장"}]},
  "david-kingdom": {title:"8. 연결탐험", items:[{title:"헤브론", desc:"초기 통치"},{title:"예루살렘", desc:"왕국 중심"},{title:"다윗 언약", desc:"영원한 왕위"},{title:"메시아", desc:"약속의 왕"},{title:"하나님 나라", desc:"왕권의 완성"}]},
  "bathsheba": {title:"8. 연결탐험", items:[{title:"권력", desc:"죄의 위험"},{title:"우리아", desc:"충성의 대조"},{title:"나단", desc:"말씀의 책망"},{title:"시편 51편", desc:"회개의 기도"},{title:"은혜", desc:"용서와 회복"}]},
  "solomon-wisdom": {title:"8. 연결탐험", items:[{title:"기브온", desc:"지혜의 기도"},{title:"듣는 마음", desc:"지도자의 태도"},{title:"재판", desc:"공의의 지혜"},{title:"잠언", desc:"지혜 문학"},{title:"그리스도", desc:"참 지혜"}]},
  "temple-build": {title:"8. 연결탐험", items:[{title:"성막", desc:"임재의 원형"},{title:"모리아 산", desc:"성전의 자리"},{title:"솔로몬", desc:"건축자"},{title:"예수", desc:"참 성전"},{title:"교회", desc:"성령의 성전"}]},
  "temple-dedication": {title:"8. 연결탐험", items:[{title:"언약궤", desc:"지성소 안치"},{title:"영광", desc:"하나님의 임재"},{title:"기도", desc:"회개의 통로"},{title:"성전", desc:"예배 중심"},{title:"새 예루살렘", desc:"완성된 임재"}]}
});

Object.assign(EVENT_MAP_CROPS, {
  "saul-king":"assets/maps/32_saul_king_map.png",
  "david-goliath":"assets/maps/33_david_goliath_map.png",
  "ark-move":"assets/maps/34_ark_move_map.png",
  "david-kingdom":"assets/maps/35_david_kingdom_map.png",
  "bathsheba":"assets/maps/36_bathsheba_map.png",
  "solomon-wisdom":"assets/maps/37_solomon_wisdom_map.png",
  "temple-build":"assets/maps/38_temple_build_map.png",
  "temple-dedication":"assets/maps/39_temple_dedication_map.png"
});


// v46 분열왕국 핵심사건 상세화면 데이터
Object.assign(EVENTS, {
  "kingdom-divide": {
    title:"왕국 분열", era:"분열왕국", year:"BC 931년경", scripture:"열왕기상 11~12장, 역대하 10장",
    place:"세겜, 예루살렘, 북이스라엘과 남유다", people:["하나님","솔로몬","르호보암","여로보암","이스라엘 백성"],
    summary:"솔로몬 이후 르호보암의 어리석은 결정과 여로보암의 반란으로 이스라엘이 북이스라엘과 남유다로 갈라진 사건입니다.",
    core:["솔로몬의 우상숭배로 왕국 분열이 예고됨","르호보암이 세겜에서 왕으로 세워짐","백성이 무거운 멍에를 가볍게 해 달라고 요구함","르호보암이 원로의 조언을 버리고 강경하게 답함","열 지파가 여로보암을 따름","유다와 베냐민은 르호보암을 따름","통일왕국이 북이스라엘과 남유다로 분열됨"],
    meaning:["하나님의 말씀을 떠난 왕권은 결국 분열을 낳음","지도자의 교만한 선택은 공동체 전체를 흔들 수 있음","분열왕국 시대는 선지자 사역과 심판 역사의 배경이 됨","하나님의 언약은 인간 왕국의 실패 속에서도 계속 이어짐"],
    connect:["솔로몬의 우상숭배","르호보암","여로보암","북이스라엘","남유다"],
    visual:"세겜, 예루살렘, 북이스라엘과 남유다 분열 지도", image:"assets/infographics/40_kingdom_divide.png"
  },
  "golden-calves": {
    title:"금송아지 우상 사건", era:"분열왕국", year:"BC 930년경", scripture:"열왕기상 12:25~33",
    place:"벧엘, 단", people:["여로보암","북이스라엘 백성","제사장들"],
    summary:"북이스라엘 왕 여로보암이 백성이 예루살렘으로 내려가지 못하게 하려고 벧엘과 단에 금송아지를 세운 사건입니다.",
    core:["여로보암이 왕권 유지를 두려워함","백성이 예루살렘 성전으로 갈 것을 염려함","벧엘과 단에 금송아지를 세움","새 절기와 제사 제도를 만듦","레위인이 아닌 사람을 제사장으로 세움","북이스라엘 백성이 우상숭배에 빠짐","이 죄가 북이스라엘 멸망의 뿌리가 됨"],
    meaning:["정치적 계산으로 만든 종교는 하나님을 대체하는 우상이 됨","예배의 편리함이 말씀의 기준을 무너뜨릴 수 있음","여로보암의 죄는 북이스라엘 역사 전체를 오염시킴","참 예배는 장소보다 하나님의 말씀과 언약에 근거해야 함"],
    connect:["출애굽 금송아지","벧엘","단","거짓 예배","여로보암의 죄"],
    visual:"벧엘과 단의 금송아지 우상, 북이스라엘 예배 중심지", image:"assets/infographics/41_golden_calves.png"
  },
  "carmel": {
    title:"엘리야 갈멜산 대결", era:"분열왕국", year:"BC 9세기경", scripture:"열왕기상 18장",
    place:"갈멜산, 사마리아", people:["하나님","엘리야","아합","이세벨","바알 선지자들","이스라엘 백성"],
    summary:"엘리야가 갈멜산에서 바알 선지자들과 대결하여 여호와만 참 하나님이심을 드러낸 사건입니다.",
    core:["아합 시대에 바알 숭배가 극심해짐","엘리야가 갈멜산으로 백성과 선지자들을 모음","바알 선지자들이 제단에 불을 구하지만 응답이 없음","엘리야가 무너진 여호와의 제단을 수축함","엘리야가 기도하자 하늘에서 불이 내려옴","백성이 여호와가 하나님이라고 고백함","가뭄이 끝나고 비가 내림"],
    meaning:["하나님은 우상과 비교될 수 없는 유일한 참 하나님이심","중간 지대에 머무르는 신앙은 결국 결단을 요구받음","무너진 제단의 회복은 예배 회복의 상징임","선지자의 사명은 시대의 우상 앞에서 하나님의 말씀을 세우는 것임"],
    connect:["아합과 이세벨","바알 숭배","갈멜산","불의 응답","예배 회복"],
    visual:"갈멜산, 바알 제단과 여호와의 제단, 하늘에서 내린 불", image:"assets/infographics/42_carmel.png"
  },
  "naboth": {
    title:"나봇의 포도원", era:"분열왕국", year:"BC 9세기경", scripture:"열왕기상 21장",
    place:"이스르엘", people:["하나님","나봇","아합","이세벨","엘리야"],
    summary:"아합과 이세벨이 나봇의 포도원을 빼앗기 위해 거짓 증언과 살인을 저질렀고, 엘리야가 하나님의 심판을 선포한 사건입니다.",
    core:["아합이 나봇의 포도원을 탐냄","나봇이 조상의 기업이라 거절함","이세벨이 거짓 증인을 세움","나봇이 억울하게 죽임을 당함","아합이 포도원을 차지함","엘리야가 하나님의 심판을 선포함","아합 가문에 심판이 예고됨"],
    meaning:["탐욕은 권력과 결합할 때 약자를 짓밟는 죄가 됨","하나님은 억울한 피와 불의한 재판을 외면하지 않으심","땅은 하나님의 기업이라는 신앙 고백이 담겨 있음","왕도 하나님의 공의 앞에서는 심판을 피할 수 없음"],
    connect:["기업","탐욕","불의한 재판","엘리야의 책망","하나님의 공의"],
    visual:"이스르엘 포도원, 아합 왕궁, 엘리야의 심판 선언", image:"assets/infographics/43_naboth.png"
  },
  "elisha-miracles": {
    title:"엘리사의 기적", era:"분열왕국", year:"BC 9세기경", scripture:"열왕기하 2~7장",
    place:"길갈, 여리고, 수넴, 요단, 사마리아", people:["하나님","엘리사","선지자의 제자들","수넴 여인","나아만"],
    summary:"엘리사가 여러 기적을 통해 하나님의 생명, 회복, 공급, 구원의 능력을 드러낸 사건들입니다.",
    core:["엘리야의 뒤를 이어 엘리사가 사역을 시작함","여리고 물을 고침","과부의 기름을 공급함","수넴 여인의 아들을 살림","독이 든 국을 고침","나아만의 나병이 치유됨","사마리아의 위기 속에서도 하나님의 구원을 선포함"],
    meaning:["하나님의 능력은 전쟁과 심판뿐 아니라 생명과 회복으로도 나타남","작은 자와 약한 자를 돌보시는 하나님의 긍휼이 드러남","말씀에 순종할 때 회복의 길이 열림","선지자 사역은 하나님의 통치가 삶의 현장에 임함을 보여줌"],
    connect:["엘리야","선지자 사역","나아만","요단강","치유와 회복"],
    visual:"요단강, 수넴, 사마리아, 엘리사의 주요 사역지", image:"assets/infographics/44_elisha_miracles.png"
  },
  "jonah-nineveh": {
    title:"요나와 니느웨", era:"분열왕국", year:"BC 8세기경", scripture:"요나 1~4장",
    place:"욥바, 바다, 니느웨", people:["하나님","요나","니느웨 사람들","앗수르"],
    summary:"요나가 니느웨 심판을 선포하라는 하나님의 명령을 피했으나, 결국 니느웨에 가서 말씀을 전하고 그들이 회개한 사건입니다.",
    core:["하나님이 요나에게 니느웨로 가라 명하심","요나가 다시스로 도망함","큰 풍랑이 일어남","요나가 큰 물고기 뱃속에 들어감","요나가 회개하고 다시 부름을 받음","니느웨가 심판의 말씀을 듣고 회개함","하나님이 니느웨를 긍휼히 여기심"],
    meaning:["하나님의 긍휼은 이스라엘을 넘어 이방 민족에게도 향함","선지자의 편견보다 하나님의 자비가 더 큼","회개는 심판을 돌이키는 길이 됨","하나님의 선교는 원수로 여겨지는 민족까지 품음"],
    connect:["요나","니느웨","큰 물고기","회개","이방 선교"],
    visual:"욥바에서 다시스 방향, 니느웨 위치, 요나의 이동 경로", image:"assets/infographics/45_jonah_nineveh.png"
  },
  "north-fall": {
    title:"북이스라엘 멸망", era:"분열왕국", year:"BC 722년", scripture:"열왕기하 17장",
    place:"사마리아, 앗수르", people:["하나님","호세아 왕","앗수르 왕 살만에셀","북이스라엘 백성"],
    summary:"북이스라엘이 계속된 우상숭배와 불순종 끝에 앗수르에게 사마리아를 빼앗기고 멸망한 사건입니다.",
    core:["북이스라엘이 여로보암의 죄를 계속 따름","선지자들의 경고를 듣지 않음","앗수르가 북이스라엘을 압박함","사마리아가 포위됨","BC 722년 사마리아가 함락됨","백성이 앗수르 지역으로 사로잡혀 감","북이스라엘 왕국이 역사에서 사라짐"],
    meaning:["오래 참으시는 하나님도 죄를 영원히 방치하지 않으심","우상숭배와 말씀 거부는 공동체를 무너뜨림","선지자의 경고를 무시한 결과가 역사적 심판으로 나타남","남유다에게도 회개의 경고가 됨"],
    connect:["여로보암의 죄","사마리아","앗수르","선지자의 경고","심판"],
    visual:"사마리아 함락, 앗수르 포로 이동 경로", image:"assets/infographics/46_north_fall.png"
  },
  "hezekiah-reform": {
    title:"히스기야 개혁", era:"분열왕국", year:"BC 715~686년경", scripture:"열왕기하 18장, 역대하 29~31장",
    place:"예루살렘, 유다 전역", people:["하나님","히스기야","제사장들","레위 사람들","유다 백성"],
    summary:"히스기야가 성전을 정결하게 하고 우상을 제거하며 유다의 예배와 신앙을 회복한 사건입니다.",
    core:["히스기야가 유다 왕이 됨","성전 문을 열고 성전을 정결하게 함","제사장과 레위인을 회복시킴","우상과 산당을 제거함","놋뱀까지 우상이 되자 부숨","유월절을 회복함","백성이 하나님께 돌아오는 개혁이 일어남"],
    meaning:["신앙 개혁은 예배 회복에서 시작됨","좋은 전통도 우상이 되면 제거해야 함","지도자의 결단은 공동체 회복의 통로가 될 수 있음","히스기야의 개혁은 심판 시대 속 남유다의 중요한 회복 장면임"],
    connect:["성전 정결","유월절 회복","놋뱀 파괴","예배 개혁","남유다"],
    visual:"예루살렘 성전, 유다 전역의 산당 제거, 유월절 회복", image:"assets/infographics/47_hezekiah_reform.png"
  },
  "assyria-invasion": {
    title:"앗수르 침공", era:"분열왕국", year:"BC 701년", scripture:"열왕기하 18~19장, 이사야 36~37장",
    place:"예루살렘, 라기스, 앗수르 진영", people:["하나님","히스기야","이사야","산헤립","랍사게"],
    summary:"앗수르 왕 산헤립이 유다를 침공하고 예루살렘을 위협했으나, 하나님께서 히스기야의 기도에 응답하여 구원하신 사건입니다.",
    core:["앗수르가 유다의 여러 성읍을 점령함","산헤립이 예루살렘을 위협함","랍사게가 하나님과 히스기야를 조롱함","히스기야가 성전에 올라가 기도함","이사야가 하나님의 구원을 선포함","여호와의 사자가 앗수르 군대를 침","산헤립이 물러가고 예루살렘이 보존됨"],
    meaning:["하나님을 조롱하는 제국의 교만은 무너짐","위기의 순간에 기도는 현실 도피가 아니라 믿음의 대응임","예루살렘의 보존은 다윗 언약과 하나님의 주권을 보여줌","인간 군사력보다 하나님의 구원이 더 크다"],
    connect:["산헤립","랍사게","히스기야의 기도","이사야","예루살렘 구원"],
    visual:"앗수르 침공 경로, 라기스, 예루살렘 포위", image:"assets/infographics/48_assyria_invasion.png"
  },
  "josiah-reform": {
    title:"요시야 개혁", era:"분열왕국", year:"BC 640~609년경", scripture:"열왕기하 22~23장, 역대하 34~35장",
    place:"예루살렘, 유다 전역", people:["하나님","요시야","힐기야","훌다","유다 백성"],
    summary:"요시야가 성전에서 발견된 율법책을 듣고 회개하며 유다 전역의 우상과 잘못된 예배를 개혁한 사건입니다.",
    core:["요시야가 어린 나이에 왕이 됨","성전 수리 중 율법책이 발견됨","요시야가 말씀을 듣고 옷을 찢음","여선지자 훌다가 하나님의 말씀을 전함","요시야가 백성과 언약을 새롭게 함","우상과 산당을 제거함","유월절을 크게 지킴"],
    meaning:["참된 개혁은 하나님의 말씀을 다시 듣는 데서 시작됨","말씀 앞에서의 회개가 공동체 회복의 출발점임","외형적 개혁만으로는 누적된 죄의 결과를 모두 지울 수 없음","요시야는 남유다 말기의 마지막 신앙 회복을 보여줌"],
    connect:["율법책 발견","성전 수리","언약 갱신","유월절","말씀 회복"],
    visual:"예루살렘 성전, 율법책 발견, 유다 전역 개혁", image:"assets/infographics/49_josiah_reform.png"
  },
  "jeremiah-tears": {
    title:"예레미야의 눈물", era:"분열왕국", year:"BC 7~6세기경", scripture:"예레미야, 예레미야애가",
    place:"예루살렘, 유다", people:["하나님","예레미야","유다 백성","시드기야"],
    summary:"예레미야가 멸망을 앞둔 유다에게 회개와 심판의 말씀을 전하며 눈물로 하나님의 마음을 드러낸 사건입니다.",
    core:["예레미야가 선지자로 부름받음","유다의 죄와 우상숭배를 책망함","거짓 평안을 선포하는 사람들과 대립함","바벨론에 항복하라는 하나님의 말씀을 전함","백성에게 미움과 박해를 받음","예루살렘 멸망을 바라보며 슬퍼함","심판 중에도 새 언약의 소망을 전함"],
    meaning:["선지자의 눈물은 하나님의 아픈 사랑을 보여줌","참된 말씀은 듣기 불편해도 살 길을 제시함","심판의 메시지 안에도 회복과 새 언약의 약속이 있음","하나님의 백성은 형식적 종교가 아니라 마음의 순종으로 살아야 함"],
    connect:["눈물의 선지자","새 언약","바벨론","예루살렘 멸망","예레미야애가"],
    visual:"예루살렘, 무너지는 성, 예레미야의 눈물", image:"assets/infographics/50_jeremiah_tears.png"
  },
  "judah-fall": {
    title:"남유다 멸망", era:"분열왕국", year:"BC 586년", scripture:"열왕기하 24~25장, 역대하 36장, 예레미야 39장",
    place:"예루살렘, 바벨론", people:["하나님","시드기야","느부갓네살","예레미야","유다 백성"],
    summary:"남유다가 끝내 회개하지 않아 바벨론에게 예루살렘과 성전이 무너지고 백성이 포로로 끌려간 사건입니다.",
    core:["유다가 계속 하나님의 말씀을 거역함","바벨론이 예루살렘을 포위함","기근과 절망이 성 안에 깊어짐","예루살렘 성이 함락됨","성전과 왕궁이 불타고 성벽이 무너짐","시드기야 왕이 붙잡힘","유다 백성이 바벨론으로 포로로 끌려감"],
    meaning:["성전이 있다는 사실만으로 죄의 심판을 피할 수 없음","언약 백성의 특권은 말씀 순종과 분리될 수 없음","멸망은 끝이 아니라 포로기와 회복 약속으로 이어지는 전환점임","하나님은 심판 중에도 남은 자와 새 언약의 소망을 남기심"],
    connect:["예루살렘 함락","성전 파괴","바벨론 포로","시드기야","포로귀환의 시작점"],
    visual:"예루살렘 함락, 성전 파괴, 바벨론 포로 이동", image:"assets/infographics/51_judah_fall.png"
  }
});

Object.assign(EVENT_ENRICH, {
  "kingdom-divide": {flowTitle:"핵심사건", flow:[["예고","솔로몬의 죄로 왕국 분열이 예고됨", ""],["요구","백성이 르호보암에게 멍에를 가볍게 해 달라고 요구함", ""],["거절","르호보암이 원로의 조언을 버림", ""],["분열","열 지파가 여로보암을 따름", ""],["남유다","유다와 베냐민이 르호보암을 따름", ""],["두 왕국","북이스라엘과 남유다로 갈라짐", ""],["새 시대","분열왕국 시대가 시작됨", ""]], scriptureRefs:[["열왕기상 11장","분열의 예고"],["열왕기상 12장","왕국 분열"],["역대하 10장","르호보암의 어리석은 선택"]], visualItems:["세겜", "예루살렘", "북이스라엘·남유다"]},
  "golden-calves": {flowTitle:"핵심사건", flow:[["두려움","여로보암이 백성의 예루살렘 방문을 두려워함", ""],["제작","벧엘과 단에 금송아지를 세움", ""],["왜곡","새 절기와 제사장을 만듦", ""],["우상화","북이스라엘 백성이 우상숭배에 빠짐", ""],["죄의 기준","여로보암의 죄가 반복됨", ""],["영적 붕괴","예배가 정치 도구로 변질됨", ""],["심판의 씨앗","북이스라엘 멸망의 뿌리가 됨", ""]], scriptureRefs:[["열왕기상 12:25~33","벧엘과 단의 금송아지"],["열왕기상 13장","하나님의 사람의 경고"],["호세아 8:5~6","사마리아의 송아지 책망"]], visualItems:["벧엘", "단", "금송아지 우상"]},
  "carmel": {flowTitle:"핵심사건", flow:[["우상숭배","아합 시대 바알 숭배가 극심해짐", ""],["소집","엘리야가 갈멜산에 백성을 모음", ""],["침묵","바알은 응답하지 못함", ""],["제단 회복","엘리야가 여호와의 제단을 수축함", ""],["불","하나님의 불이 제단에 임함", ""],["고백","백성이 여호와가 하나님이라고 고백함", ""],["비","가뭄이 끝나고 비가 내림", ""]], scriptureRefs:[["열왕기상 18장","갈멜산 대결"],["신명기 6:4","오직 한 분 하나님"],["야고보서 5:17~18","엘리야의 기도"]], visualItems:["갈멜산", "바알 선지자", "불의 응답"]},
  "naboth": {flowTitle:"핵심사건", flow:[["탐냄","아합이 나봇의 포도원을 원함", ""],["거절","나봇이 조상의 기업이라 거절함", ""],["음모","이세벨이 거짓 증인을 세움", ""],["살인","나봇이 억울하게 죽임당함", ""],["탈취","아합이 포도원을 차지함", ""],["책망","엘리야가 하나님의 심판을 선포함", ""],["심판","아합 가문에 심판이 예고됨", ""]], scriptureRefs:[["열왕기상 21장","나봇의 포도원"],["레위기 25장","기업의 땅"],["미가 2:1~2","탐욕과 탈취에 대한 책망"]], visualItems:["이스르엘", "포도원", "엘리야의 책망"]},
  "elisha-miracles": {flowTitle:"핵심사건", flow:[["계승","엘리사가 엘리야의 뒤를 이어 사역함", ""],["물","여리고 물을 고침", ""],["공급","과부의 기름을 채움", ""],["생명","수넴 여인의 아들을 살림", ""],["정화","독이 든 국을 고침", ""],["치유","나아만의 나병이 치유됨", ""],["구원","위기 속에서 하나님의 구원을 선포함", ""]], scriptureRefs:[["열왕기하 2장","엘리사 사역의 시작"],["열왕기하 4장","공급과 생명의 기적"],["열왕기하 5장","나아만 치유"]], visualItems:["여리고", "수넴", "요단강"]},
  "jonah-nineveh": {flowTitle:"핵심사건", flow:[["명령","하나님이 요나에게 니느웨로 가라 하심", ""],["도망","요나가 다시스로 도망함", ""],["풍랑","바다에 큰 풍랑이 일어남", ""],["물고기","요나가 큰 물고기 뱃속에 들어감", ""],["재부름","요나가 다시 말씀을 받음", ""],["회개","니느웨가 말씀을 듣고 회개함", ""],["긍휼","하나님이 니느웨를 아끼심", ""]], scriptureRefs:[["요나 1장","요나의 도망"],["요나 2장","물고기 뱃속의 기도"],["요나 3~4장","니느웨 회개와 하나님의 긍휼"]], visualItems:["욥바", "바다", "니느웨"]},
  "north-fall": {flowTitle:"핵심사건", flow:[["반복","북이스라엘이 여로보암의 죄를 따름", ""],["경고","선지자들의 경고를 무시함", ""],["압박","앗수르가 북이스라엘을 압박함", ""],["포위","사마리아가 포위됨", ""],["함락","BC 722년 사마리아가 함락됨", ""],["포로","백성이 앗수르 지역으로 끌려감", ""],["멸망","북이스라엘 왕국이 끝남", ""]], scriptureRefs:[["열왕기하 17장","북이스라엘 멸망"],["호세아 4장","북이스라엘의 죄 책망"],["아모스 5장","정의와 공의를 요구하심"]], visualItems:["사마리아", "앗수르", "포로 이동"]},
  "hezekiah-reform": {flowTitle:"핵심사건", flow:[["즉위","히스기야가 유다 왕이 됨", ""],["성전 정결","성전 문을 열고 정결하게 함", ""],["예배 회복","제사장과 레위인을 회복시킴", ""],["우상 제거","산당과 우상을 제거함", ""],["놋뱀 파괴","우상이 된 놋뱀을 부숨", ""],["유월절","유월절을 회복함", ""],["개혁","백성이 하나님께 돌아옴", ""]], scriptureRefs:[["열왕기하 18장","히스기야의 신앙"],["역대하 29~31장","성전 정결과 유월절"],["민수기 21장","놋뱀의 기원"]], visualItems:["예루살렘 성전", "놋뱀", "유월절"]},
  "assyria-invasion": {flowTitle:"핵심사건", flow:[["침공","앗수르가 유다 성읍들을 점령함", ""],["위협","산헤립이 예루살렘을 압박함", ""],["조롱","랍사게가 하나님을 조롱함", ""],["기도","히스기야가 성전에 올라가 기도함", ""],["예언","이사야가 하나님의 구원을 선포함", ""],["구원","여호와의 사자가 앗수르 군대를 침", ""],["보존","예루살렘이 보존됨", ""]], scriptureRefs:[["열왕기하 18~19장","앗수르 침공과 구원"],["이사야 36~37장","히스기야의 기도"],["시편 46편","하나님은 피난처이심"]], visualItems:["라기스", "예루살렘", "앗수르 진영"]},
  "josiah-reform": {flowTitle:"핵심사건", flow:[["즉위","요시야가 어린 나이에 왕이 됨", ""],["발견","성전 수리 중 율법책이 발견됨", ""],["회개","요시야가 말씀 앞에서 옷을 찢음", ""],["확인","훌다가 하나님의 말씀을 전함", ""],["언약 갱신","백성과 언약을 새롭게 함", ""],["우상 제거","우상과 산당을 제거함", ""],["유월절","유월절을 크게 지킴", ""]], scriptureRefs:[["열왕기하 22~23장","요시야 개혁"],["역대하 34~35장","율법책 발견과 유월절"],["신명기 6장","말씀 중심 신앙"]], visualItems:["성전", "율법책", "유월절"]},
  "jeremiah-tears": {flowTitle:"핵심사건", flow:[["부름","예레미야가 선지자로 부름받음", ""],["책망","유다의 죄와 우상숭배를 책망함", ""],["대립","거짓 평안의 메시지와 대립함", ""],["항복 선포","바벨론에 항복하라는 말씀을 전함", ""],["박해","백성에게 미움과 박해를 받음", ""],["눈물","예루살렘 멸망을 바라보며 슬퍼함", ""],["소망","새 언약의 약속을 전함", ""]], scriptureRefs:[["예레미야 1장","예레미야의 부름"],["예레미야 31:31~34","새 언약"],["예레미야애가 3장","고난 중의 소망"]], visualItems:["예루살렘", "눈물", "새 언약"]},
  "judah-fall": {flowTitle:"핵심사건", flow:[["불순종","유다가 하나님의 말씀을 거역함", ""],["포위","바벨론이 예루살렘을 포위함", ""],["기근","성 안에 기근과 절망이 깊어짐", ""],["함락","예루살렘 성이 무너짐", ""],["성전 파괴","성전과 왕궁이 불탐", ""],["포로","백성이 바벨론으로 끌려감", ""],["전환","포로기와 회복 약속의 시대가 시작됨", ""]], scriptureRefs:[["열왕기하 25장","예루살렘 함락"],["역대하 36장","남유다 멸망과 포로"],["예레미야 39장","시드기야와 예루살렘의 몰락"]], visualItems:["예루살렘", "성전 파괴", "바벨론 포로"]}
});

Object.assign(EVENT_EXPLORE, {
  "kingdom-divide": {title:"8. 연결탐험", items:[{title:"솔로몬", desc:"분열의 배경"},{title:"르호보암", desc:"어리석은 선택"},{title:"여로보암", desc:"북왕국 시작"},{title:"세겜", desc:"분열의 현장"},{title:"다윗 언약", desc:"남은 약속"}]},
  "golden-calves": {title:"8. 연결탐험", items:[{title:"벧엘", desc:"거짓 예배 중심"},{title:"단", desc:"북쪽 제단"},{title:"금송아지", desc:"우상숭배"},{title:"예루살렘", desc:"참 예배 중심"},{title:"여로보암의 죄", desc:"반복된 죄"}]},
  "carmel": {title:"8. 연결탐험", items:[{title:"엘리야", desc:"불의 선지자"},{title:"바알", desc:"거짓 신"},{title:"갈멜산", desc:"결단의 장소"},{title:"제단", desc:"예배 회복"},{title:"기도", desc:"응답의 통로"}]},
  "naboth": {title:"8. 연결탐험", items:[{title:"나봇", desc:"기업을 지킨 사람"},{title:"아합", desc:"탐욕의 왕"},{title:"이세벨", desc:"불의한 권력"},{title:"포도원", desc:"기업의 상징"},{title:"공의", desc:"하나님의 심판"}]},
  "elisha-miracles": {title:"8. 연결탐험", items:[{title:"엘리야", desc:"사역의 계승"},{title:"엘리사", desc:"회복의 선지자"},{title:"나아만", desc:"이방인의 치유"},{title:"요단강", desc:"순종과 회복"},{title:"긍휼", desc:"생명의 기적"}]},
  "jonah-nineveh": {title:"8. 연결탐험", items:[{title:"요나", desc:"도망한 선지자"},{title:"니느웨", desc:"회개한 도시"},{title:"큰 물고기", desc:"구원의 표징"},{title:"회개", desc:"심판을 돌이킴"},{title:"이방 선교", desc:"열방을 향한 긍휼"}]},
  "north-fall": {title:"8. 연결탐험", items:[{title:"사마리아", desc:"북왕국 수도"},{title:"앗수르", desc:"심판의 도구"},{title:"여로보암의 죄", desc:"멸망의 뿌리"},{title:"호세아", desc:"마지막 왕"},{title:"포로", desc:"흩어짐"}]},
  "hezekiah-reform": {title:"8. 연결탐험", items:[{title:"히스기야", desc:"개혁의 왕"},{title:"성전", desc:"예배 회복"},{title:"놋뱀", desc:"우상이 된 전통"},{title:"유월절", desc:"언약 기억"},{title:"신뢰", desc:"하나님 의지"}]},
  "assyria-invasion": {title:"8. 연결탐험", items:[{title:"산헤립", desc:"앗수르 왕"},{title:"랍사게", desc:"조롱의 말"},{title:"히스기야", desc:"기도의 왕"},{title:"이사야", desc:"구원의 말씀"},{title:"예루살렘", desc:"보존된 성"}]},
  "josiah-reform": {title:"8. 연결탐험", items:[{title:"율법책", desc:"말씀 회복"},{title:"요시야", desc:"말씀 앞의 왕"},{title:"훌다", desc:"말씀 확인"},{title:"언약 갱신", desc:"공동체 회복"},{title:"유월절", desc:"신앙 회복"}]},
  "jeremiah-tears": {title:"8. 연결탐험", items:[{title:"예레미야", desc:"눈물의 선지자"},{title:"거짓 평안", desc:"멸망 전 착각"},{title:"새 언약", desc:"회복의 소망"},{title:"예레미야애가", desc:"슬픔의 노래"},{title:"바벨론", desc:"심판의 제국"}]},
  "judah-fall": {title:"8. 연결탐험", items:[{title:"예루살렘", desc:"함락된 성"},{title:"성전 파괴", desc:"심판의 상징"},{title:"시드기야", desc:"마지막 왕"},{title:"바벨론 포로", desc:"새 시대의 시작"},{title:"포로귀환", desc:"회복의 다음 장"}]}
});

Object.assign(EVENT_MAP_CROPS, {
  "kingdom-divide":"assets/maps/40_kingdom_divide_map.png",
  "golden-calves":"assets/maps/41_golden_calves_map.png",
  "carmel":"assets/maps/42_carmel_map.png",
  "naboth":"assets/maps/43_naboth_map.png",
  "elisha-miracles":"assets/maps/44_elisha_miracles_map.png",
  "jonah-nineveh":"assets/maps/45_jonah_nineveh_map.png",
  "north-fall":"assets/maps/46_north_fall_map.png",
  "hezekiah-reform":"assets/maps/47_hezekiah_reform_map.png",
  "assyria-invasion":"assets/maps/48_assyria_invasion_map.png",
  "josiah-reform":"assets/maps/49_josiah_reform_map.png",
  "jeremiah-tears":"assets/maps/50_jeremiah_tears_map.png",
  "judah-fall":"assets/maps/51_judah_fall_map.png"
});

// v47 유다 멸망과 포로 핵심사건 상세화면 데이터
Object.assign(EVENTS, {
  "daniel-friends": {
    title:"다니엘과 세 친구", era:"유다 멸망과 포로", year:"BC 605년경", scripture:"다니엘 1장, 다니엘 3장",
    place:"바벨론 왕궁, 유다에서 바벨론으로 이동", people:["하나님","다니엘","하나냐","미사엘","아사랴","느부갓네살"],
    summary:"유다의 젊은이들이 바벨론으로 끌려가 왕궁 교육을 받았으나, 다니엘과 세 친구는 하나님의 백성으로서 정체성을 지키며 충성한 사건입니다.",
    core:["유다 청년들이 바벨론으로 끌려감","바벨론 왕궁에서 교육을 받음","왕의 음식과 포도주를 거절함","하나님께 정결을 지키기로 결단함","하나님이 지혜와 총명을 주심","풀무불 사건에서 하나님의 보호를 경험함","이방 제국 속에서도 믿음의 모범이 됨"],
    meaning:["세상 문화의 압력 속에서도 하나님을 선택하는 믿음을 보여줌","신앙의 정체성과 충성은 삶의 모든 영역에서 드러나야 함","하나님은 포로지에서도 자기 백성과 함께하심","하나님은 믿음의 결단을 통해 지혜와 능력을 주심"],
    connect:["바벨론 포로","정결한 믿음","풀무불","다니엘","성찬"],
    visual:"바벨론과 유다의 위치, 바벨론 왕궁 구조", image:"assets/infographics/52_daniel_friends.png"
  },
  "furnace": {
    title:"풀무불 사건", era:"유다 멸망과 포로", year:"BC 6세기경", scripture:"다니엘 3장",
    place:"바벨론, 두라 평지", people:["하나님","사드락","메삭","아벳느고","느부갓네살"],
    summary:"느부갓네살 왕의 금신상에 절하라는 명령을 거부한 세 친구가 풀무불에 던져졌으나 하나님께서 그들을 보호하신 사건입니다.",
    core:["느부갓네살이 큰 금신상을 세움","모든 사람이 절하라는 명령이 내려짐","세 친구가 우상에게 절하지 않음","왕이 분노하여 풀무불에 던짐","불 속에 네 번째 존재가 함께 나타남","세 친구가 해를 입지 않고 나옴","왕이 하나님을 높이며 조서를 내림"],
    meaning:["참 신앙은 생명의 위협 앞에서도 하나님만 예배함","하나님은 고난을 없애시기도 하지만 고난 속에 함께하시기도 함","우상숭배 권력 앞에서도 믿음은 타협하지 않아야 함","하나님의 구원은 이방 왕 앞에서도 증거가 됨"],
    connect:["우상숭배","금신상","순교적 믿음","임마누엘","십자가"],
    visual:"두라 평지, 금신상, 풀무불과 하나님의 보호", image:"assets/infographics/54_furnace.png"
  },
  "nebuchadnezzar-dream": {
    title:"느부갓네살의 꿈", era:"유다 멸망과 포로", year:"BC 6세기경", scripture:"다니엘 2장, 다니엘 4장",
    place:"바벨론 왕궁", people:["하나님","다니엘","느부갓네살","박사와 술객들"],
    summary:"하나님께서 다니엘에게 느부갓네살의 꿈과 해석을 알게 하셔서 세상 제국 위에 하나님의 나라가 있음을 드러내신 사건입니다.",
    core:["느부갓네살이 이해하기 어려운 꿈을 꿈","바벨론 지혜자들이 해석하지 못함","다니엘이 하나님께 기도함","하나님이 꿈과 해석을 알려주심","큰 신상의 꿈이 제국의 흥망을 가리킴","뜨인 돌이 신상을 무너뜨림","하나님의 나라가 영원함이 선포됨"],
    meaning:["역사의 주권은 제국이 아니라 하나님께 있음","인간 지혜의 한계를 넘어 하나님의 계시가 필요함","세상 왕국은 사라지지만 하나님의 나라는 영원함","포로지에서도 하나님의 말씀은 권력의 중심을 흔듦"],
    connect:["바벨론","제국의 흥망","하나님의 나라","다니엘의 지혜","새창조"],
    visual:"큰 신상, 뜨인 돌, 바벨론 제국과 하나님의 나라", image:"assets/infographics/55_nebuchadnezzar_dream.png"
  },
  "lion-den": {
    title:"사자굴 사건", era:"유다 멸망과 포로", year:"BC 6세기경", scripture:"다니엘 6장",
    place:"메대-바사 제국, 사자굴", people:["하나님","다니엘","다리오 왕","총리와 고관들"],
    summary:"다니엘이 왕 외에 다른 신에게 기도하지 말라는 금령에도 하나님께 기도하다가 사자굴에 던져졌으나, 하나님께서 그를 보호하신 사건입니다.",
    core:["다니엘이 뛰어난 행정가로 세워짐","시기한 고관들이 다니엘을 모함함","기도 금령이 내려짐","다니엘이 평소처럼 하나님께 기도함","다니엘이 사자굴에 던져짐","하나님이 사자들의 입을 막으심","다리오 왕이 하나님의 살아계심을 선포함"],
    meaning:["믿음은 위기 속에서도 일상의 기도를 멈추지 않음","하나님은 억울한 자를 보호하시고 악한 모함을 드러내심","포로 백성의 신앙은 제국의 법보다 하나님께 우선순위를 둠","하나님의 구원은 왕과 나라 앞에 증거가 됨"],
    connect:["기도","사자굴","다리오 왕","고난 중 보호","부활 소망"],
    visual:"사자굴, 다니엘의 기도, 메대-바사 왕궁", image:"assets/infographics/56_lion_den.png"
  },
  "ezekiel-vision": {
    title:"에스겔 환상", era:"유다 멸망과 포로", year:"BC 593년경 이후", scripture:"에스겔 1장, 37장, 40~48장",
    place:"바벨론 그발 강가, 포로지", people:["하나님","에스겔","이스라엘 포로 공동체"],
    summary:"포로지의 에스겔이 하나님의 영광, 마른 뼈의 회복, 새 성전의 환상을 보며 심판 이후 회복의 소망을 전한 사건입니다.",
    core:["에스겔이 그발 강가에서 하나님의 영광을 봄","하나님이 에스겔을 파수꾼으로 부르심","예루살렘 심판을 상징 행동으로 전함","마른 뼈 골짜기 환상을 봄","하나님의 영이 생명을 회복시킴","새 마음과 새 영의 약속을 전함","새 성전과 회복된 공동체의 환상을 봄"],
    meaning:["하나님의 영광은 성전이 무너진 뒤에도 포로지에 임함","심판은 끝이 아니라 회복을 향한 하나님의 통로가 될 수 있음","하나님의 영이 죽은 공동체를 다시 살리심","새 성전 환상은 하나님 임재의 회복을 바라보게 함"],
    connect:["하나님의 영광","마른 뼈","새 마음","새 성전","성령"],
    visual:"그발 강가, 마른 뼈 골짜기, 새 성전 환상", image:"assets/infographics/57_ezekiel_vision.png"
  },
  "esther-purim": {
    title:"에스더와 부림절", era:"유다 멸망과 포로", year:"BC 5세기경", scripture:"에스더 1~10장",
    place:"바사 제국 수산 궁", people:["하나님","에스더","모르드개","하만","아하수에로 왕"],
    summary:"바사 제국에서 유다 민족이 멸절될 위기에 처했으나, 에스더와 모르드개를 통해 하나님께서 자기 백성을 보존하신 사건입니다.",
    core:["에스더가 바사 왕후가 됨","하만이 유다인을 미워하여 멸절 계획을 세움","모르드개가 에스더에게 사명을 일깨움","에스더가 죽으면 죽으리라 결단함","왕 앞에 나아가 잔치를 베풂","하만의 음모가 드러남","유다 백성이 구원받고 부림절을 지킴"],
    meaning:["하나님은 이름이 드러나지 않아도 역사를 섭리하심","한 사람의 결단이 공동체 구원의 통로가 될 수 있음","위기의 때에 믿음은 침묵보다 책임 있는 행동을 요구함","부림절은 죽음의 위기가 기쁨과 구원으로 바뀐 기억임"],
    connect:["에스더","모르드개","하만","부림절","섭리"],
    visual:"수산 궁, 바사 제국, 유다 민족 구원과 부림절", image:"assets/infographics/58_esther_purim.png"
  }
});

Object.assign(EVENT_ENRICH, {
  "daniel-friends": {flowTitle:"핵심사건", flow:[["포로","유다 청년들이 바벨론으로 끌려감", ""],["교육","왕궁에서 바벨론식 교육을 받음", ""],["결단","왕의 음식과 포도주를 거절함", ""],["정결","하나님 앞에서 정결을 지키려 함", ""],["지혜","하나님이 지혜와 총명을 주심", ""],["보호","풀무불 속에서도 하나님의 보호를 경험함", ""],["증거","포로지에서 믿음의 모범이 됨", ""]], scriptureRefs:[["다니엘 1장","왕의 음식 거절과 지혜"],["다니엘 3장","풀무불 속의 보호"],["시편 37:23-24","의인의 걸음을 정하시는 하나님"]], visualItems:["바벨론과 유다의 위치", "바벨론 왕궁", "포로 청년 교육"]},
  "furnace": {flowTitle:"핵심사건", flow:[["금신상","느부갓네살이 큰 금신상을 세움", ""],["명령","모든 사람이 절하라는 명령이 내려짐", ""],["거부","세 친구가 우상에게 절하지 않음", ""],["풀무불","왕이 그들을 풀무불에 던짐", ""],["함께하심","불 속에 네 번째 존재가 함께 나타남", ""],["구원","세 친구가 해를 입지 않고 나옴", ""],["증거","왕이 하나님을 높임", ""]], scriptureRefs:[["다니엘 3장","풀무불 사건"],["출애굽기 20:3-5","우상숭배 금지"],["이사야 43:2","불 가운데서도 함께하심"]], visualItems:["두라 평지", "금신상", "풀무불"]},
  "nebuchadnezzar-dream": {flowTitle:"핵심사건", flow:[["꿈","느부갓네살이 큰 신상의 꿈을 꿈", ""],["한계","바벨론 지혜자들이 해석하지 못함", ""],["기도","다니엘과 친구들이 하나님께 간구함", ""],["계시","하나님이 꿈과 해석을 알려주심", ""],["제국","신상이 세상 제국의 흥망을 보여줌", ""],["돌","뜨인 돌이 신상을 무너뜨림", ""],["나라","하나님의 나라가 영원함을 선포함", ""]], scriptureRefs:[["다니엘 2장","큰 신상의 꿈"],["다니엘 4장","느부갓네살의 낮아짐"],["다니엘 7장","하나님의 영원한 나라"]], visualItems:["큰 신상", "뜨인 돌", "하나님의 나라"]},
  "lion-den": {flowTitle:"핵심사건", flow:[["탁월함","다니엘이 뛰어난 행정가로 세워짐", ""],["모함","고관들이 다니엘을 시기함", ""],["금령","왕 외에 기도하지 말라는 법이 세워짐", ""],["기도","다니엘이 평소처럼 하나님께 기도함", ""],["사자굴","다니엘이 사자굴에 던져짐", ""],["보호","하나님이 사자들의 입을 막으심", ""],["선포","다리오 왕이 하나님을 높임", ""]], scriptureRefs:[["다니엘 6장","사자굴 사건"],["시편 34:7","여호와의 사자가 보호함"],["베드로전서 5:8-10","고난 중 믿음"]], visualItems:["사자굴", "다니엘의 기도", "다리오 왕"]},
  "ezekiel-vision": {flowTitle:"핵심사건", flow:[["영광","그발 강가에서 하나님의 영광을 봄", ""],["부름","에스겔이 파수꾼으로 부름받음", ""],["상징","예루살렘 심판을 상징 행동으로 전함", ""],["마른 뼈","마른 뼈 골짜기 환상을 봄", ""],["생기","하나님의 영이 생명을 회복시킴", ""],["새 마음","새 마음과 새 영의 약속을 전함", ""],["새 성전","새 성전 환상을 봄", ""]], scriptureRefs:[["에스겔 1장","하나님의 영광 환상"],["에스겔 37장","마른 뼈 환상"],["에스겔 40~48장","새 성전 환상"]], visualItems:["그발 강가", "마른 뼈 골짜기", "새 성전"]},
  "esther-purim": {flowTitle:"핵심사건", flow:[["왕후","에스더가 바사 왕후가 됨", ""],["위기","하만이 유다인 멸절 계획을 세움", ""],["사명","모르드개가 에스더에게 결단을 촉구함", ""],["결단","에스더가 죽으면 죽으리라 결단함", ""],["잔치","왕 앞에 나아가 잔치를 베풂", ""],["역전","하만의 음모가 드러남", ""],["부림절","유다 백성이 구원받고 부림절을 지킴", ""]], scriptureRefs:[["에스더 4:14-16","죽으면 죽으리이다"],["에스더 7장","하만의 음모가 드러남"],["에스더 9장","부림절 제정"]], visualItems:["수산 궁", "바사 제국", "부림절"]}
});

Object.assign(EVENT_EXPLORE, {
  "daniel-friends": {title:"8. 연결탐험", items:[{title:"바벨론 포로", desc:"믿음의 시험"},{title:"정결", desc:"신앙 정체성"},{title:"풀무불", desc:"보호의 경험"},{title:"지혜", desc:"하나님의 선물"},{title:"성찬", desc:"언약 기억"}]},
  "furnace": {title:"8. 연결탐험", items:[{title:"금신상", desc:"제국의 우상"},{title:"순교적 믿음", desc:"타협 거부"},{title:"임마누엘", desc:"불 속의 동행"},{title:"십자가", desc:"고난 속 구원"},{title:"예배", desc:"하나님께만"}]},
  "nebuchadnezzar-dream": {title:"8. 연결탐험", items:[{title:"바벨론", desc:"제국의 상징"},{title:"큰 신상", desc:"제국의 흥망"},{title:"뜨인 돌", desc:"하나님의 나라"},{title:"다니엘", desc:"계시의 통로"},{title:"새창조", desc:"완성될 나라"}]},
  "lion-den": {title:"8. 연결탐험", items:[{title:"기도", desc:"일상의 믿음"},{title:"사자굴", desc:"죽음의 위기"},{title:"다리오", desc:"이방 왕의 고백"},{title:"부활 소망", desc:"구원의 그림자"},{title:"충성", desc:"끝까지 믿음"}]},
  "ezekiel-vision": {title:"8. 연결탐험", items:[{title:"하나님의 영광", desc:"포로지 임재"},{title:"마른 뼈", desc:"회복의 생명"},{title:"새 마음", desc:"내적 변화"},{title:"새 성전", desc:"임재 회복"},{title:"성령", desc:"살리시는 영"}]},
  "esther-purim": {title:"8. 연결탐험", items:[{title:"에스더", desc:"결단의 사람"},{title:"모르드개", desc:"사명을 일깨움"},{title:"하만", desc:"악한 음모"},{title:"부림절", desc:"역전의 기쁨"},{title:"섭리", desc:"숨은 손길"}]}
});

Object.assign(EVENT_MAP_CROPS, {
  "daniel-friends":"assets/maps/52_daniel_friends_map.png",
  "furnace":"assets/maps/54_furnace_map.png",
  "nebuchadnezzar-dream":"assets/maps/55_nebuchadnezzar_dream_map.png",
  "lion-den":"assets/maps/56_lion_den_map.png",
  "ezekiel-vision":"assets/maps/57_ezekiel_vision_map.png",
  "esther-purim":"assets/maps/58_esther_purim_map.png"
});



// v48 포로귀환 핵심사건 상세화면 데이터
Object.assign(EVENTS, {
  "zerubbabel-return": {
    title:"스룹바벨 귀환", era:"포로귀환", year:"BC 538년경", scripture:"에스라 1~3장, 학개 1장, 스가랴 4장",
    place:"바벨론에서 예루살렘까지, 유다", people:["하나님","스룹바벨","여호수아","고레스 왕","학개","스가랴"],
    summary:"바벨론 포로 생활 후 페르시아 왕 고레스의 칙령으로 유다 백성이 예루살렘으로 돌아와 제단을 쌓고 성전 재건의 기초를 놓은 사건입니다.",
    core:["고레스 칙령으로 귀환이 허락됨","스룹바벨과 여호수아를 중심으로 백성이 예루살렘으로 돌아옴","제단을 재건하고 예배를 회복함","성전 재건의 기초를 놓음","주변 민족의 방해로 공사가 중단됨","학개와 스가랴의 격려로 다시 힘을 얻음","성전 재건의 길이 열림"],
    meaning:["하나님은 약속을 기억하시고 자기 백성을 회복시키심","회복은 작게 시작되지만 하나님의 능력으로 완성됨","무너진 예배와 공동체를 다시 세우는 출발점임","예수 그리스도의 오실 길을 예비하는 회복의 시작임"],
    connect:["유월절","성막·성전","십자가","성찬"],
    visual:"바벨론에서 예루살렘까지의 귀환 경로, 성전 재건 과정, 예루살렘 성전 위치", image:"assets/infographics/59_zerubbabel_return.png"
  },
  "temple-rebuild": {
    title:"성전 재건", era:"포로귀환", year:"BC 520~516년경", scripture:"에스라 3~6장, 학개, 스가랴",
    place:"예루살렘 성전 산", people:["하나님","스룹바벨","여호수아","학개","스가랴","다리오 왕"],
    summary:"중단되었던 성전 재건이 선지자들의 격려와 하나님의 도우심으로 다시 시작되어 마침내 완성되고 봉헌된 사건입니다.",
    core:["귀환 공동체가 성전 기초를 놓음","주변 민족의 반대와 방해로 공사가 중단됨","학개와 스가랴가 백성을 격려함","다리오 왕 때 고레스 칙령이 확인됨","성전 재건이 다시 진행됨","성전이 완성되어 봉헌됨","유월절을 지키며 예배 공동체가 회복됨"],
    meaning:["성전 재건은 단순한 건축이 아니라 하나님 임재와 예배 회복의 표시임","하나님의 일은 방해 속에서도 말씀과 순종으로 계속됨","작은 성전이라도 하나님이 함께하시면 영광의 자리가 됨","참 성전이신 그리스도를 바라보게 함"],
    connect:["솔로몬 성전","스룹바벨 성전","학개","스가랴","예수 그리스도"],
    visual:"예루살렘 성전 재건 과정, 성전 기초와 봉헌 장면", image:"assets/infographics/60_temple_rebuild.png"
  },
  "ezra-reform": {
    title:"에스라 율법개혁", era:"포로귀환", year:"BC 458년경", scripture:"에스라 7~10장, 느헤미야 8장",
    place:"예루살렘", people:["하나님","에스라","아닥사스다 왕","귀환 공동체"],
    summary:"학사 에스라가 예루살렘으로 돌아와 율법을 가르치고 백성의 신앙과 공동체 질서를 말씀 중심으로 개혁한 사건입니다.",
    core:["에스라가 율법에 익숙한 학사로 세워짐","아닥사스다 왕의 허락을 받아 예루살렘으로 귀환함","성전과 공동체를 정비함","백성에게 하나님의 율법을 가르침","혼합 신앙과 불순종 문제를 직면함","백성이 죄를 자복하고 회개함","말씀 중심 공동체로 다시 세워짐"],
    meaning:["회복된 공동체는 말씀을 기준으로 다시 세워져야 함","개혁은 제도보다 먼저 회개와 순종에서 시작됨","말씀 교육은 공동체의 정체성을 지키는 핵심임","포로 이후 유다 신앙의 중심이 율법과 예배로 재정비됨"],
    connect:["율법","회개","말씀 교육","언약 갱신","성경읽기"],
    visual:"에스라의 귀환 경로, 율법 낭독과 백성의 회개 장면", image:"assets/infographics/61_ezra_reform.png"
  },
  "nehemiah-wall": {
    title:"느헤미야 성벽 재건", era:"포로귀환", year:"BC 445년경", scripture:"느헤미야 1~13장",
    place:"예루살렘 성벽", people:["하나님","느헤미야","아닥사스다 왕","산발랏","도비야","예루살렘 백성"],
    summary:"느헤미야가 예루살렘의 무너진 성벽 소식을 듣고 기도한 뒤 귀환하여 성벽을 재건하고 공동체를 새롭게 정비한 사건입니다.",
    core:["느헤미야가 예루살렘 성벽이 무너졌다는 소식을 들음","금식하며 하나님께 기도함","아닥사스다 왕의 허락을 받아 예루살렘으로 감","무너진 성벽을 조사하고 백성을 격려함","산발랏과 도비야의 방해를 받음","백성이 협력하여 성벽을 52일 만에 재건함","말씀 낭독과 언약 갱신으로 공동체가 회복됨"],
    meaning:["기도와 실행이 함께할 때 무너진 공동체가 회복됨","성벽 재건은 안전 확보를 넘어 정체성 회복의 상징임","하나님의 일에는 방해가 있으나 협력과 믿음으로 감당해야 함","말씀과 예배가 공동체 재건의 마지막 중심이 됨"],
    connect:["예루살렘","성벽","기도","공동체 회복","언약 갱신"],
    visual:"예루살렘 성벽 재건 구역, 방해 세력, 성벽 완공 과정", image:"assets/infographics/62_nehemiah_wall.png"
  }
});

Object.assign(EVENT_ENRICH, {
  "zerubbabel-return": {flowTitle:"핵심사건", flow:[["칙령","고레스가 귀환을 허락함", ""],["귀환","스룹바벨과 백성이 예루살렘으로 돌아옴", ""],["제단","제단을 재건하고 번제를 드림", ""],["기초","성전 기초를 놓음", ""],["방해","주변 민족의 반대로 공사가 중단됨", ""],["격려","학개와 스가랴가 백성을 격려함", ""],["회복","성전 재건의 기초가 놓임", ""]], scriptureRefs:[["역대하 36:22-23","고레스 칙령과 귀환 허락"],["에스라 1장","귀환 명령과 성전 재건 허락"],["에스라 3:1-6","제단 재건과 예배 회복"],["학개 1:8","성전 재건의 격려"],["스가랴 4:6","힘이 아닌 하나님의 영으로"]], visualItems:["귀환 경로", "성전 재건 과정", "예루살렘 성전 위치"]},
  "temple-rebuild": {flowTitle:"핵심사건", flow:[["기초","성전 기초가 놓임", ""],["눈물과 기쁨","백성이 울고 기뻐함", ""],["방해","대적들이 공사를 막음", ""],["말씀","학개와 스가랴가 말씀으로 격려함", ""],["확인","다리오 때 고레스 칙령이 확인됨", ""],["완공","성전이 완성됨", ""],["봉헌","성전 봉헌과 유월절이 지켜짐", ""]], scriptureRefs:[["에스라 3장","성전 기초"],["에스라 5~6장","성전 재건 재개와 완공"],["학개 2장","나중 영광의 약속"],["스가랴 4장","스룹바벨을 향한 격려"]], visualItems:["성전 기초", "재건 공사", "성전 봉헌"]},
  "ezra-reform": {flowTitle:"핵심사건", flow:[["부름","에스라가 율법 학사로 세워짐", ""],["귀환","아닥사스다의 허락을 받아 예루살렘으로 감", ""],["정비","성전과 공동체를 정비함", ""],["가르침","하나님의 율법을 백성에게 가르침", ""],["직면","혼합 신앙과 불순종 문제를 드러냄", ""],["회개","백성이 죄를 자복함", ""],["개혁","말씀 중심 공동체로 재정비됨", ""]], scriptureRefs:[["에스라 7장","에스라의 귀환"],["에스라 9~10장","회개와 개혁"],["느헤미야 8장","율법 낭독과 말씀 회복"]], visualItems:["율법책", "말씀 낭독", "공동체 회개"]},
  "nehemiah-wall": {flowTitle:"핵심사건", flow:[["소식","예루살렘 성벽이 무너졌다는 소식을 들음", ""],["기도","느헤미야가 금식하며 기도함", ""],["허락","왕의 허락을 받아 예루살렘으로 감", ""],["조사","밤에 성벽 상태를 살핌", ""],["협력","백성이 구역별로 성벽을 재건함", ""],["방해","산발랏과 도비야의 조롱과 위협을 견딤", ""],["완공","성벽을 완공하고 공동체를 회복함", ""]], scriptureRefs:[["느헤미야 1장","느헤미야의 기도"],["느헤미야 2장","예루살렘 귀환과 조사"],["느헤미야 4장","방해 속의 재건"],["느헤미야 6장","성벽 완공"],["느헤미야 8장","말씀 낭독과 언약 갱신"]], visualItems:["예루살렘 성벽", "재건 구역", "방해 세력"]}
});

Object.assign(EVENT_EXPLORE, {
  "zerubbabel-return": {title:"8. 연결탐험", items:[{title:"유월절", desc:"구원과 귀환의 기억"},{title:"성막·성전", desc:"하나님 임재 회복"},{title:"십자가", desc:"참 성전의 길"},{title:"성찬", desc:"회복 공동체의 예배"},{title:"스가랴", desc:"성전 재건의 격려"}]},
  "temple-rebuild": {title:"8. 연결탐험", items:[{title:"솔로몬 성전", desc:"이전 성전의 영광"},{title:"스룹바벨 성전", desc:"회복된 예배 중심"},{title:"학개", desc:"재건 촉구"},{title:"스가랴", desc:"하나님의 영으로"},{title:"예수", desc:"참 성전"}]},
  "ezra-reform": {title:"8. 연결탐험", items:[{title:"율법", desc:"공동체의 기준"},{title:"회개", desc:"개혁의 출발"},{title:"말씀 교육", desc:"정체성 회복"},{title:"언약 갱신", desc:"백성의 응답"},{title:"성경읽기", desc:"신앙 회복의 길"}]},
  "nehemiah-wall": {title:"8. 연결탐험", items:[{title:"예루살렘", desc:"회복의 중심"},{title:"성벽", desc:"정체성과 보호"},{title:"기도", desc:"실행의 출발"},{title:"공동체", desc:"함께 세움"},{title:"언약 갱신", desc:"말씀으로 재정비"}]}
});

Object.assign(EVENT_MAP_CROPS, {
  "zerubbabel-return":"assets/maps/59_zerubbabel_return_map.png",
  "temple-rebuild":"assets/maps/60_temple_rebuild_map.png",
  "ezra-reform":"assets/maps/61_ezra_reform_map.png",
  "nehemiah-wall":"assets/maps/62_nehemiah_wall_map.png"
});


/* v49 신구약 중간기 핵심사건 상세화면 추가 */
Object.assign(EVENTS, {
  "hellenism": {
    title:"헬라제국 등장", era:"신구약 중간기", year:"BC 332년경 이후", scripture:"말라기 이후 ~ 마태복음 이전",
    place:"팔레스타인, 지중해 동부, 헬라 세계",
    people:["알렉산더 대왕","프톨레마이오스 왕조","셀레우코스 왕조"],
    summary:"페르시아 이후 헬라 세력이 팔레스타인에 들어오며 유대 사회가 헬라 언어와 문화의 영향권 안에 놓이게 된 사건입니다.",
    core:["페르시아 제국의 약화","헬라 세력의 동방 진출","팔레스타인이 헬라 문화권에 편입됨","그리스어와 헬라식 도시 문화가 확산됨","유대 신앙과 헬라 문화 사이의 긴장이 시작됨"],
    meaning:["신약 시대의 언어·문화적 배경이 준비됨","유대 공동체가 정체성 보존이라는 과제를 맞게 됨","복음이 헬라어 세계로 전파될 역사적 무대가 형성됨","침묵기에도 하나님은 역사의 흐름을 준비하심"],
    connect:["알렉산더 대왕","70인역","마카비 혁명","로마제국","신약 배경"],
    visual:"헬라 제국 확장 경로, 팔레스타인 지배 변화, 헬라 문화권", image:"assets/infographics/63_hellenism.png"
  },
  "alexander": {
    title:"알렉산더 대왕", era:"신구약 중간기", year:"BC 336~323년경", scripture:"다니엘 8장 배경 이해",
    place:"마케도니아, 페르시아, 시리아, 팔레스타인, 이집트",
    people:["알렉산더 대왕","다리오 3세","유대 백성"],
    summary:"알렉산더 대왕이 페르시아를 무너뜨리고 광대한 헬라 제국을 세워 팔레스타인과 유대 사회가 헬라 세계에 편입된 사건입니다.",
    core:["마케도니아의 세력 확대","페르시아 제국 정복","팔레스타인 지역의 헬라권 편입","알렉산더 사후 제국이 여러 왕국으로 분열됨","프톨레마이오스와 셀레우코스 사이에서 유대가 영향을 받음"],
    meaning:["다니엘서의 제국 환상과 연결되는 역사적 배경","신약 시대의 헬라어 환경이 형성됨","정치 권력은 바뀌어도 하나님의 구속사는 계속 진행됨","유대 신앙과 제국 문화의 충돌이 본격화됨"],
    connect:["다니엘의 환상","헬라제국","프톨레마이오스","셀레우코스","신약 세계"],
    visual:"알렉산더 원정 경로, 헬라 제국 분열, 팔레스타인 위치", image:"assets/infographics/64_alexander.png"
  },
  "maccabees": {
    title:"마카비 혁명", era:"신구약 중간기", year:"BC 167~160년경", scripture:"신구약 중간기 역사 배경",
    place:"유대, 예루살렘, 모디인",
    people:["마타디아","유다 마카비","안티오코스 4세"],
    summary:"안티오코스 4세의 종교 탄압에 맞서 마카비 가문이 봉기하고, 유대 신앙과 성전 예배 회복을 위해 싸운 사건입니다.",
    core:["안티오코스 4세의 헬라화 강요","성전 모독과 제사 금지","마타디아 가문의 저항","유다 마카비의 군사적 승리","성전 정화와 예배 회복"],
    meaning:["하나님 백성의 신앙 정체성 보존을 보여줌","성전과 율법을 둘러싼 갈등이 신약 배경을 형성함","정치 독립보다 신앙의 충성이 핵심임","하누카 절기의 역사적 배경이 됨"],
    connect:["성전","하누카","안티오코스 4세","유대 독립","예수 시대 유대교"],
    visual:"마카비 봉기 지역, 예루살렘 성전, 셀레우코스 지배권", image:"assets/infographics/65_maccabees.png"
  },
  "hanukkah": {
    title:"하누카 절기", era:"신구약 중간기", year:"BC 164년경 이후", scripture:"요한복음 10:22 배경",
    place:"예루살렘 성전",
    people:["유다 마카비","유대 백성"],
    summary:"마카비 혁명 이후 더럽혀진 성전을 정화하고 다시 봉헌한 일을 기념하는 절기로, 신약의 수전절 배경이 됩니다.",
    core:["성전이 이방 제의로 더럽혀짐","마카비 세력이 예루살렘을 회복함","성전 정화와 재봉헌이 이루어짐","하누카 절기가 시작됨","요한복음의 수전절 배경으로 이어짐"],
    meaning:["예배 회복과 성전 정결의 의미를 보여줌","어둠 속에서도 하나님께 드리는 예배가 보존됨","신약에서 예수님이 참 성전의 의미를 드러내시는 배경이 됨","구약과 신약 사이의 역사적 연결고리가 됨"],
    connect:["마카비 혁명","성전 봉헌","수전절","예루살렘","참 성전"],
    visual:"예루살렘 성전, 성전 정화, 하누카 등잔", image:"assets/infographics/66_hanukkah.png"
  },
  "rome": {
    title:"로마제국 등장", era:"신구약 중간기", year:"BC 63년경 이후", scripture:"누가복음 2장 배경",
    place:"로마, 시리아, 유대, 예루살렘",
    people:["폼페이우스","헤롯 대왕","가이사 아우구스투스"],
    summary:"로마가 팔레스타인을 장악하면서 유대는 로마의 지배 아래 놓였고, 예수 시대의 정치·사회적 배경이 형성되었습니다.",
    core:["로마의 동방 진출","폼페이우스의 예루살렘 점령","유대가 로마 영향권에 들어감","헤롯 왕조가 로마의 후원 아래 세워짐","로마 행정과 도로망이 신약 시대 배경이 됨"],
    meaning:["예수 탄생 당시의 정치 질서가 준비됨","복음 전파를 위한 도로·언어·제국 질서가 마련됨","하나님 나라는 제국의 질서와 다른 방식으로 임함","초대교회 선교의 역사적 통로가 형성됨"],
    connect:["헤롯 대왕","가이사 아우구스투스","베들레헴","복음 전파","사도행전"],
    visual:"로마 제국 지배권, 유대와 예루살렘, 로마 도로망", image:"assets/infographics/67_rome.png"
  }
});

Object.assign(EVENT_ENRICH, {
  "hellenism": {flowTitle:"핵심사건", flow:[["변화","페르시아 이후 헬라 세력이 부상함",""],["편입","팔레스타인이 헬라 문화권에 들어감",""],["확산","그리스어와 헬라식 문화가 퍼짐",""],["긴장","유대 신앙과 헬라 문화가 충돌함",""],["준비","신약 시대의 언어·문화 배경이 형성됨",""]], scriptureRefs:[["다니엘 8장","헬라 제국을 이해하는 예언적 배경"],["말라기 이후","예언서 이후의 역사적 공백"],["신약 배경","헬라어 세계와 복음 전파"]], visualItems:["헬라 문화권", "팔레스타인 지배 변화", "그리스어 확산"]},
  "alexander": {flowTitle:"핵심사건", flow:[["등장","알렉산더가 마케도니아 왕이 됨",""],["정복","페르시아 제국을 무너뜨림",""],["편입","유대 지역이 헬라 세계에 들어감",""],["분열","알렉산더 사후 제국이 나뉨",""],["배경","프톨레마이오스와 셀레우코스의 경쟁이 이어짐",""]], scriptureRefs:[["다니엘 8장","숫염소 환상의 역사적 배경"],["다니엘 11장","헬라 이후 왕국들의 충돌 배경"],["신약 배경","헬라어와 헬라 문화권"]], visualItems:["알렉산더 원정", "헬라 제국", "분열 왕국"]},
  "maccabees": {flowTitle:"핵심사건", flow:[["탄압","안티오코스 4세가 유대 신앙을 억압함",""],["모독","성전이 더럽혀지고 제사가 금지됨",""],["봉기","마카비 가문이 저항을 시작함",""],["승리","유다 마카비가 예루살렘을 회복함",""],["정화","성전 예배가 다시 세워짐",""]], scriptureRefs:[["다니엘 11장","안티오코스 시대를 이해하는 배경"],["요한복음 10:22","수전절 배경"],["신구약 중간기","유대 신앙 보존의 역사"]], visualItems:["마카비 봉기", "예루살렘 성전", "셀레우코스 지배"]},
  "hanukkah": {flowTitle:"핵심사건", flow:[["회복","예루살렘 성전이 회복됨",""],["정화","더럽혀진 성전이 정결하게 됨",""],["봉헌","성전이 다시 하나님께 드려짐",""],["기념","하누카 절기가 시작됨",""],["연결","신약의 수전절 배경으로 이어짐",""]], scriptureRefs:[["요한복음 10:22","예수님 당시 수전절 언급"],["성전 봉헌","예배 회복의 배경"],["신약 배경","성전과 메시아 이해"]], visualItems:["성전 정화", "하누카 등잔", "예루살렘"]},
  "rome": {flowTitle:"핵심사건", flow:[["진출","로마가 동방으로 세력을 넓힘",""],["점령","폼페이우스가 예루살렘을 장악함",""],["지배","유대가 로마 영향권에 들어감",""],["헤롯","헤롯 왕조가 로마 후원 아래 세워짐",""],["무대","예수 시대와 초대교회 선교의 배경이 마련됨",""]], scriptureRefs:[["누가복음 2장","가이사 아우구스투스와 호적령 배경"],["마태복음 2장","헤롯 시대 배경"],["사도행전","로마 제국 질서 속 복음 확장"]], visualItems:["로마 제국", "유대 지역", "로마 도로망"]}
});

Object.assign(EVENT_EXPLORE, {
  "hellenism": {title:"8. 연결탐험", items:[{title:"70인역", desc:"헬라어 성경 번역"},{title:"신약 헬라어", desc:"복음 전파의 언어"},{title:"마카비 혁명", desc:"정체성 보존의 저항"},{title:"로마제국", desc:"신약 무대 준비"},{title:"바울 선교", desc:"헬라 세계를 향한 복음"}]},
  "alexander": {title:"8. 연결탐험", items:[{title:"다니엘", desc:"제국 환상의 배경"},{title:"헬라제국", desc:"문화권 형성"},{title:"프톨레마이오스", desc:"이집트계 지배"},{title:"셀레우코스", desc:"시리아계 지배"},{title:"신약 세계", desc:"헬라어 문화권"}]},
  "maccabees": {title:"8. 연결탐험", items:[{title:"성전", desc:"예배 정체성의 중심"},{title:"하누카", desc:"성전 정화 기념"},{title:"안티오코스", desc:"신앙 탄압의 상징"},{title:"유대 독립", desc:"하스몬 왕조 배경"},{title:"예수 시대", desc:"유대 사회 이해"}]},
  "hanukkah": {title:"8. 연결탐험", items:[{title:"수전절", desc:"요한복음의 배경"},{title:"성전 봉헌", desc:"예배 회복"},{title:"빛", desc:"하누카 상징"},{title:"예루살렘", desc:"성전의 도시"},{title:"참 성전", desc:"그리스도와 연결"}]},
  "rome": {title:"8. 연결탐험", items:[{title:"헤롯", desc:"예수 탄생기의 왕"},{title:"가이사", desc:"로마 황제 질서"},{title:"베들레헴", desc:"호적령과 탄생"},{title:"십자가", desc:"로마 처형 방식"},{title:"사도행전", desc:"로마까지 간 복음"}]}
});

Object.assign(EVENT_MAP_CROPS, {
  "hellenism":"assets/maps/63_hellenism_map.png",
  "alexander":"assets/maps/64_alexander_map.png",
  "maccabees":"assets/maps/65_maccabees_map.png",
  "hanukkah":"assets/maps/66_hanukkah_map.png",
  "rome":"assets/maps/67_rome_map.png"
});

// v50 예수 시대 상세화면 추가
Object.assign(EVENTS, {
  "jesus-birth": {
    title:"예수 탄생", era:"예수 시대", year:"BC 4경", scripture:"마태복음 1~2장, 누가복음 1~2장",
    place:"베들레헴",
    people:["예수님", "마리아", "요셉", "천사", "목자들"],
    summary:"예수 그리스도께서 베들레헴에서 탄생하시며 구약의 메시아 약속이 성취된 사건입니다.",
    core:["수태고지", "베들레헴 탄생", "목자들에게 소식 전파", "하나님께 영광 돌림"],
    meaning:["구약의 메시아 약속이 실제 역사 속에서 성취됨", "하나님의 아들이 낮고 겸손한 모습으로 오심", "구원의 역사가 예수 그리스도 안에서 시작됨"],
    connect:["성육신", "메시아 약속", "베들레헴", "다윗 언약", "복음서 시작"],
    visual:"베들레헴 관련 지도/시각자료",
    image:"assets/infographics/68_jesus_birth.png"
  },
  "magi": {
    title:"동방박사", era:"예수 시대", year:"BC 4경", scripture:"마태복음 2장",
    place:"동방, 예루살렘, 베들레헴",
    people:["동방박사", "헤롯", "예수님", "마리아", "요셉"],
    summary:"동방박사들이 별을 따라 유대인의 왕으로 나신 예수님께 경배하러 온 사건입니다.",
    core:["별을 발견함", "예루살렘에서 왕을 찾음", "베들레헴으로 인도됨", "예물로 경배함"],
    meaning:["예수님은 유대인뿐 아니라 열방의 왕이심", "참된 경배는 그리스도께 향해야 함", "헤롯의 두려움과 박사들의 경배가 대조됨"],
    connect:["별", "열방 경배", "헤롯", "베들레헴", "메시아 왕"],
    visual:"동방, 예루살렘, 베들레헴 관련 지도/시각자료",
    image:"assets/infographics/69_magi.png"
  },
  "john-baptist": {
    title:"세례요한", era:"예수 시대", year:"AD 27경", scripture:"마태복음 3장, 마가복음 1장, 누가복음 3장",
    place:"유대 광야, 요단강",
    people:["세례요한", "예수님", "백성들", "바리새인들"],
    summary:"세례요한이 광야에서 회개를 선포하며 예수님의 길을 준비한 사건입니다.",
    core:["광야에서 외침", "회개 선포", "세례 베풂", "메시아를 증언함"],
    meaning:["메시아의 길을 예비한 선지자적 사역", "회개와 하나님 나라 선포의 시작", "예수님의 공생애를 준비하는 전환점"],
    connect:["회개", "요단강", "엘리야의 심령", "메시아 증언", "예수 세례"],
    visual:"유대 광야, 요단강 관련 지도/시각자료",
    image:"assets/infographics/70_john_baptist.png"
  },
  "jesus-baptism": {
    title:"예수 세례", era:"예수 시대", year:"AD 27경", scripture:"마태복음 3장, 마가복음 1장, 누가복음 3장",
    place:"요단강",
    people:["예수님", "세례요한", "성령", "하나님 아버지"],
    summary:"예수님께서 요단강에서 세례를 받으시고 하나님의 아들로 공적으로 선포되신 사건입니다.",
    core:["요단강으로 오심", "세례를 받으심", "성령이 임하심", "하늘의 음성이 들림"],
    meaning:["예수님의 공생애 시작", "성부·성자·성령이 함께 드러난 사건", "의로운 순종과 사명의 출발"],
    connect:["요단강", "성령", "하나님의 아들", "공생애", "삼위일체"],
    visual:"요단강 관련 지도/시각자료",
    image:"assets/infographics/71_jesus_baptism.png"
  },
  "temptation": {
    title:"광야 시험", era:"예수 시대", year:"AD 27경", scripture:"마태복음 4장, 누가복음 4장",
    place:"유대 광야",
    people:["예수님", "사탄", "성령"],
    summary:"예수님께서 광야에서 40일 금식 후 사탄의 시험을 말씀으로 이기신 사건입니다.",
    core:["성령에 이끌려 광야로 가심", "40일 금식", "세 가지 시험", "말씀으로 승리하심"],
    meaning:["예수님은 시험을 이기신 참 순종자이심", "하나님의 말씀으로 유혹을 분별해야 함", "이스라엘의 실패를 예수님이 순종으로 회복하심"],
    connect:["광야 40일", "말씀", "순종", "이스라엘 광야", "사탄의 시험"],
    visual:"유대 광야 관련 지도/시각자료",
    image:"assets/infographics/72_temptation.png"
  },
  "calling-disciples": {
    title:"제자 부르심", era:"예수 시대", year:"AD 27~28경", scripture:"마태복음 4장, 마가복음 1장, 누가복음 5장",
    place:"갈릴리 호수",
    people:["예수님", "베드로", "안드레", "야고보", "요한"],
    summary:"예수님께서 갈릴리에서 제자들을 부르시고 사람을 낚는 어부로 세우신 사건입니다.",
    core:["갈릴리에서 부르심", "그물을 버리고 따름", "사람 낚는 어부로 세움", "제자 공동체 시작"],
    meaning:["제자는 예수님의 부르심에 즉시 응답하는 사람", "복음 사역은 공동체와 제자도를 통해 확장됨", "일상의 자리에서 하나님 나라 사명이 시작됨"],
    connect:["갈릴리", "제자도", "베드로", "사람 낚는 어부", "복음 전파"],
    visual:"갈릴리 호수 관련 지도/시각자료",
    image:"assets/infographics/73_calling_disciples.png"
  },
  "sermon-mount": {
    title:"산상수훈", era:"예수 시대", year:"AD 28경", scripture:"마태복음 5~7장",
    place:"갈릴리 산지",
    people:["예수님", "제자들", "무리"],
    summary:"예수님께서 하나님 나라 백성의 삶과 의를 가르치신 대표적 설교입니다.",
    core:["팔복 선포", "빛과 소금의 사명", "율법의 완성", "주기도문과 삶의 교훈"],
    meaning:["하나님 나라 백성의 성품과 삶을 보여줌", "율법의 참뜻을 예수님이 권위 있게 해석하심", "말씀을 듣고 행하는 삶이 중요함"],
    connect:["팔복", "빛과 소금", "주기도문", "율법의 완성", "반석 위의 집"],
    visual:"갈릴리 산지 관련 지도/시각자료",
    image:"assets/infographics/74_sermon_mount.png"
  },
  "five-loaves": {
    title:"오병이어", era:"예수 시대", year:"AD 29경", scripture:"마태복음 14장, 요한복음 6장",
    place:"갈릴리 호수 근처 빈 들",
    people:["예수님", "제자들", "무리", "한 아이"],
    summary:"예수님께서 떡 다섯 개와 물고기 두 마리로 큰 무리를 먹이신 사건입니다.",
    core:["무리를 불쌍히 여기심", "오병이어를 받으심", "축사 후 나누심", "모두 배불리 먹음"],
    meaning:["예수님은 생명의 떡이심", "작은 것을 드릴 때 주님이 풍성하게 사용하심", "하나님 나라의 긍휼과 공급을 보여줌"],
    connect:["생명의 떡", "갈릴리", "긍휼", "기적", "감사"],
    visual:"갈릴리 호수 근처 빈 들 관련 지도/시각자료",
    image:"assets/infographics/75_five_loaves.png"
  },
  "walk-water": {
    title:"물 위를 걸으심", era:"예수 시대", year:"AD 29경", scripture:"마태복음 14장, 마가복음 6장, 요한복음 6장",
    place:"갈릴리 호수",
    people:["예수님", "베드로", "제자들"],
    summary:"예수님께서 풍랑 속 갈릴리 호수 위를 걸어 제자들에게 오신 사건입니다.",
    core:["제자들이 풍랑을 만남", "예수님이 물 위를 걸어오심", "베드로가 걷다 두려워함", "예수님이 구원하심"],
    meaning:["예수님은 자연을 다스리시는 주님", "두려움 속에서도 주님을 바라보아야 함", "믿음은 주님의 말씀에 근거함"],
    connect:["풍랑", "믿음", "베드로", "갈릴리 호수", "주님의 권세"],
    visual:"갈릴리 호수 관련 지도/시각자료",
    image:"assets/infographics/76_walk_water.png"
  },
  "transfiguration": {
    title:"변화산 사건", era:"예수 시대", year:"AD 29경", scripture:"마태복음 17장, 마가복음 9장, 누가복음 9장",
    place:"높은 산",
    people:["예수님", "베드로", "야고보", "요한", "모세", "엘리야"],
    summary:"예수님께서 산 위에서 영광스러운 모습으로 변화되시고 하나님의 아들로 선포되신 사건입니다.",
    core:["산에 오르심", "영광스러운 모습으로 변화됨", "모세와 엘리야가 나타남", "하늘의 음성이 들림"],
    meaning:["예수님의 영광과 신성이 드러남", "율법과 선지자가 그리스도 안에서 성취됨", "십자가 이전에 부활 영광을 미리 보여줌"],
    connect:["모세", "엘리야", "영광", "하나님의 아들", "십자가 전조"],
    visual:"높은 산 관련 지도/시각자료",
    image:"assets/infographics/77_transfiguration.png"
  },
  "lazarus": {
    title:"나사로 부활", era:"예수 시대", year:"AD 30경", scripture:"요한복음 11장",
    place:"베다니",
    people:["예수님", "나사로", "마르다", "마리아"],
    summary:"예수님께서 죽은 나사로를 무덤에서 다시 살리신 사건입니다.",
    core:["나사로가 죽음", "예수님이 베다니에 오심", "무덤 앞에서 부르심", "나사로가 살아나옴"],
    meaning:["예수님은 부활이요 생명이심", "죽음 앞에서도 주님의 생명 권세가 드러남", "십자가와 부활 사건을 앞당겨 보여줌"],
    connect:["부활과 생명", "베다니", "마르다", "마리아", "빈 무덤"],
    visual:"베다니 관련 지도/시각자료",
    image:"assets/infographics/78_lazarus.png"
  },
  "triumphal-entry": {
    title:"예루살렘 입성", era:"예수 시대", year:"AD 30경", scripture:"마태복음 21장, 요한복음 12장",
    place:"감람산, 예루살렘",
    people:["예수님", "제자들", "무리"],
    summary:"예수님께서 나귀를 타고 예루살렘에 입성하시며 메시아 왕으로 환영받으신 사건입니다.",
    core:["나귀를 준비함", "예루살렘으로 입성", "호산나 외침", "성전을 향해 나아감"],
    meaning:["겸손한 왕으로 오신 메시아", "스가랴 예언의 성취", "십자가 고난 주간의 시작"],
    connect:["호산나", "나귀", "예루살렘", "종려주일", "고난주간"],
    visual:"감람산, 예루살렘 관련 지도/시각자료",
    image:"assets/infographics/79_triumphal_entry.png"
  },
  "last-supper": {
    title:"최후의 만찬", era:"예수 시대", year:"AD 30경", scripture:"마태복음 26장, 누가복음 22장, 요한복음 13장",
    place:"예루살렘 다락방",
    people:["예수님", "열두 제자", "유다", "베드로"],
    summary:"예수님께서 십자가를 앞두고 제자들과 유월절 식사를 하시며 새 언약의 의미를 가르치신 사건입니다.",
    core:["유월절 식사 준비", "떡과 잔을 주심", "제자들의 발을 씻기심", "새 언약을 말씀하심"],
    meaning:["성찬의 기원이 되는 사건", "예수님의 몸과 피로 세워지는 새 언약", "섬김과 사랑의 계명을 보여줌"],
    connect:["유월절", "성찬", "새 언약", "발 씻김", "십자가"],
    visual:"예루살렘 다락방 관련 지도/시각자료",
    image:"assets/infographics/80_last_supper.png"
  },
  "gethsemane": {
    title:"겟세마네 기도", era:"예수 시대", year:"AD 30경", scripture:"마태복음 26장, 마가복음 14장, 누가복음 22장",
    place:"겟세마네 동산",
    people:["예수님", "베드로", "야고보", "요한", "유다"],
    summary:"예수님께서 체포되기 전 겟세마네에서 아버지의 뜻에 순종하며 기도하신 사건입니다.",
    core:["겟세마네로 가심", "고뇌하며 기도하심", "제자들이 잠듦", "아버지의 뜻에 순종하심"],
    meaning:["십자가 순종의 절정", "고난 앞에서 기도로 하나님의 뜻을 붙드심", "제자들의 연약함과 예수님의 순종이 대조됨"],
    connect:["기도", "순종", "겟세마네", "체포", "아버지의 뜻"],
    visual:"겟세마네 동산 관련 지도/시각자료",
    image:"assets/infographics/81_gethsemane.png"
  },
  "cross": {
    title:"십자가", era:"예수 시대", year:"AD 30경", scripture:"마태복음 27장, 마가복음 15장, 누가복음 23장, 요한복음 19장",
    place:"골고다",
    people:["예수님", "빌라도", "군인들", "마리아", "요한"],
    summary:"예수님께서 십자가에서 죽으심으로 죄인을 위한 대속을 이루신 사건입니다.",
    core:["재판과 조롱", "골고다로 가심", "십자가에 못 박힘", "다 이루었다고 선포하심"],
    meaning:["구원의 중심 사건", "죄와 죽음의 권세를 깨뜨리는 대속", "하나님의 사랑과 공의가 동시에 드러남"],
    connect:["골고다", "대속", "다 이루었다", "성전 휘장", "구원"],
    visual:"골고다 관련 지도/시각자료",
    image:"assets/infographics/82_cross.png"
  },
  "resurrection": {
    title:"부활", era:"예수 시대", year:"AD 30경", scripture:"마태복음 28장, 마가복음 16장, 누가복음 24장, 요한복음 20장",
    place:"예루살렘 무덤",
    people:["예수님", "막달라 마리아", "제자들", "천사"],
    summary:"예수님께서 죽은 자 가운데서 살아나셔서 구원의 승리를 확증하신 사건입니다.",
    core:["빈 무덤 발견", "천사의 선언", "부활하신 주님을 만남", "제자들에게 나타나심"],
    meaning:["기독교 신앙의 핵심", "죄와 사망을 이기신 승리", "새 생명과 부활 소망의 근거"],
    connect:["빈 무덤", "부활", "새 생명", "제자들", "복음의 확증"],
    visual:"예루살렘 무덤 관련 지도/시각자료",
    image:"assets/infographics/83_resurrection.png"
  },
  "pentecost-promise": {
    title:"오순절 약속", era:"예수 시대", year:"AD 30경", scripture:"누가복음 24장, 사도행전 1장",
    place:"예루살렘",
    people:["예수님", "제자들", "성령"],
    summary:"부활하신 예수님께서 제자들에게 성령을 기다리며 증인이 되라고 명령하신 사건입니다.",
    core:["예루살렘에 머물라 명령", "성령 약속", "증인의 사명 선포", "기다림의 시간"],
    meaning:["성령강림과 초대교회의 직접적 준비", "복음이 예루살렘에서 땅끝까지 확장될 사명", "제자 공동체가 증인 공동체로 세워짐"],
    connect:["성령", "증인", "예루살렘", "땅끝", "초대교회"],
    visual:"예루살렘 관련 지도/시각자료",
    image:"assets/infographics/84_pentecost_promise.png"
  },
  "ascension": {
    title:"승천", era:"예수 시대", year:"AD 30경", scripture:"누가복음 24장, 사도행전 1장",
    place:"감람산",
    people:["예수님", "제자들", "천사들"],
    summary:"예수님께서 제자들이 보는 가운데 하늘로 올라가시고 다시 오실 것이 약속된 사건입니다.",
    core:["감람산에 모임", "마지막 명령을 주심", "하늘로 올라가심", "다시 오심이 약속됨"],
    meaning:["예수님의 왕권과 높아지심", "재림 약속의 근거", "교회의 사명과 기다림을 연결함"],
    connect:["감람산", "승천", "재림 약속", "증인의 사명", "하나님 나라"],
    visual:"감람산 관련 지도/시각자료",
    image:"assets/infographics/85_ascension.png"
  }
});

Object.assign(EVENT_ENRICH, {
  "jesus-birth": {flowTitle:"핵심사건", flow:[["수태고지", "예수 탄생 사건의 핵심 흐름: 수태고지", ""], ["베들레헴 탄생", "예수 탄생 사건의 핵심 흐름: 베들레헴 탄생", ""], ["목자들에게 소식 전파", "예수 탄생 사건의 핵심 흐름: 목자들에게 소식 전파", ""], ["하나님께 영광 돌림", "예수 탄생 사건의 핵심 흐름: 하나님께 영광 돌림", ""]], scriptureRefs:[[ "마태복음 1~2장, 누가복음 1~2장", "예수 탄생 관련 본문" ]], visualItems:["베들레헴", "베들레헴 관련 지도/시각자료", "예수 탄생"]},
  "magi": {flowTitle:"핵심사건", flow:[["별을 발견함", "동방박사 사건의 핵심 흐름: 별을 발견함", ""], ["예루살렘에서 왕을 찾음", "동방박사 사건의 핵심 흐름: 예루살렘에서 왕을 찾음", ""], ["베들레헴으로 인도됨", "동방박사 사건의 핵심 흐름: 베들레헴으로 인도됨", ""], ["예물로 경배함", "동방박사 사건의 핵심 흐름: 예물로 경배함", ""]], scriptureRefs:[[ "마태복음 2장", "동방박사 관련 본문" ]], visualItems:["동방, 예루살렘, 베들레헴", "동방, 예루살렘, 베들레헴 관련 지도/시각자료", "동방박사"]},
  "john-baptist": {flowTitle:"핵심사건", flow:[["광야에서 외침", "세례요한 사건의 핵심 흐름: 광야에서 외침", ""], ["회개 선포", "세례요한 사건의 핵심 흐름: 회개 선포", ""], ["세례 베풂", "세례요한 사건의 핵심 흐름: 세례 베풂", ""], ["메시아를 증언함", "세례요한 사건의 핵심 흐름: 메시아를 증언함", ""]], scriptureRefs:[[ "마태복음 3장, 마가복음 1장, 누가복음 3장", "세례요한 관련 본문" ]], visualItems:["유대 광야, 요단강", "유대 광야, 요단강 관련 지도/시각자료", "세례요한"]},
  "jesus-baptism": {flowTitle:"핵심사건", flow:[["요단강으로 오심", "예수 세례 사건의 핵심 흐름: 요단강으로 오심", ""], ["세례를 받으심", "예수 세례 사건의 핵심 흐름: 세례를 받으심", ""], ["성령이 임하심", "예수 세례 사건의 핵심 흐름: 성령이 임하심", ""], ["하늘의 음성이 들림", "예수 세례 사건의 핵심 흐름: 하늘의 음성이 들림", ""]], scriptureRefs:[[ "마태복음 3장, 마가복음 1장, 누가복음 3장", "예수 세례 관련 본문" ]], visualItems:["요단강", "요단강 관련 지도/시각자료", "예수 세례"]},
  "temptation": {flowTitle:"핵심사건", flow:[["성령에 이끌려 광야로 가심", "광야 시험 사건의 핵심 흐름: 성령에 이끌려 광야로 가심", ""], ["40일 금식", "광야 시험 사건의 핵심 흐름: 40일 금식", ""], ["세 가지 시험", "광야 시험 사건의 핵심 흐름: 세 가지 시험", ""], ["말씀으로 승리하심", "광야 시험 사건의 핵심 흐름: 말씀으로 승리하심", ""]], scriptureRefs:[[ "마태복음 4장, 누가복음 4장", "광야 시험 관련 본문" ]], visualItems:["유대 광야", "유대 광야 관련 지도/시각자료", "광야 시험"]},
  "calling-disciples": {flowTitle:"핵심사건", flow:[["갈릴리에서 부르심", "제자 부르심 사건의 핵심 흐름: 갈릴리에서 부르심", ""], ["그물을 버리고 따름", "제자 부르심 사건의 핵심 흐름: 그물을 버리고 따름", ""], ["사람 낚는 어부로 세움", "제자 부르심 사건의 핵심 흐름: 사람 낚는 어부로 세움", ""], ["제자 공동체 시작", "제자 부르심 사건의 핵심 흐름: 제자 공동체 시작", ""]], scriptureRefs:[[ "마태복음 4장, 마가복음 1장, 누가복음 5장", "제자 부르심 관련 본문" ]], visualItems:["갈릴리 호수", "갈릴리 호수 관련 지도/시각자료", "제자 부르심"]},
  "sermon-mount": {flowTitle:"핵심사건", flow:[["팔복 선포", "산상수훈 사건의 핵심 흐름: 팔복 선포", ""], ["빛과 소금의 사명", "산상수훈 사건의 핵심 흐름: 빛과 소금의 사명", ""], ["율법의 완성", "산상수훈 사건의 핵심 흐름: 율법의 완성", ""], ["주기도문과 삶의 교훈", "산상수훈 사건의 핵심 흐름: 주기도문과 삶의 교훈", ""]], scriptureRefs:[[ "마태복음 5~7장", "산상수훈 관련 본문" ]], visualItems:["갈릴리 산지", "갈릴리 산지 관련 지도/시각자료", "산상수훈"]},
  "five-loaves": {flowTitle:"핵심사건", flow:[["무리를 불쌍히 여기심", "오병이어 사건의 핵심 흐름: 무리를 불쌍히 여기심", ""], ["오병이어를 받으심", "오병이어 사건의 핵심 흐름: 오병이어를 받으심", ""], ["축사 후 나누심", "오병이어 사건의 핵심 흐름: 축사 후 나누심", ""], ["모두 배불리 먹음", "오병이어 사건의 핵심 흐름: 모두 배불리 먹음", ""]], scriptureRefs:[[ "마태복음 14장, 요한복음 6장", "오병이어 관련 본문" ]], visualItems:["갈릴리 호수 근처 빈 들", "갈릴리 호수 근처 빈 들 관련 지도/시각자료", "오병이어"]},
  "walk-water": {flowTitle:"핵심사건", flow:[["제자들이 풍랑을 만남", "물 위를 걸으심 사건의 핵심 흐름: 제자들이 풍랑을 만남", ""], ["예수님이 물 위를 걸어오심", "물 위를 걸으심 사건의 핵심 흐름: 예수님이 물 위를 걸어오심", ""], ["베드로가 걷다 두려워함", "물 위를 걸으심 사건의 핵심 흐름: 베드로가 걷다 두려워함", ""], ["예수님이 구원하심", "물 위를 걸으심 사건의 핵심 흐름: 예수님이 구원하심", ""]], scriptureRefs:[[ "마태복음 14장, 마가복음 6장, 요한복음 6장", "물 위를 걸으심 관련 본문" ]], visualItems:["갈릴리 호수", "갈릴리 호수 관련 지도/시각자료", "물 위를 걸으심"]},
  "transfiguration": {flowTitle:"핵심사건", flow:[["산에 오르심", "변화산 사건 사건의 핵심 흐름: 산에 오르심", ""], ["영광스러운 모습으로 변화됨", "변화산 사건 사건의 핵심 흐름: 영광스러운 모습으로 변화됨", ""], ["모세와 엘리야가 나타남", "변화산 사건 사건의 핵심 흐름: 모세와 엘리야가 나타남", ""], ["하늘의 음성이 들림", "변화산 사건 사건의 핵심 흐름: 하늘의 음성이 들림", ""]], scriptureRefs:[[ "마태복음 17장, 마가복음 9장, 누가복음 9장", "변화산 사건 관련 본문" ]], visualItems:["높은 산", "높은 산 관련 지도/시각자료", "변화산 사건"]},
  "lazarus": {flowTitle:"핵심사건", flow:[["나사로가 죽음", "나사로 부활 사건의 핵심 흐름: 나사로가 죽음", ""], ["예수님이 베다니에 오심", "나사로 부활 사건의 핵심 흐름: 예수님이 베다니에 오심", ""], ["무덤 앞에서 부르심", "나사로 부활 사건의 핵심 흐름: 무덤 앞에서 부르심", ""], ["나사로가 살아나옴", "나사로 부활 사건의 핵심 흐름: 나사로가 살아나옴", ""]], scriptureRefs:[[ "요한복음 11장", "나사로 부활 관련 본문" ]], visualItems:["베다니", "베다니 관련 지도/시각자료", "나사로 부활"]},
  "triumphal-entry": {flowTitle:"핵심사건", flow:[["나귀를 준비함", "예루살렘 입성 사건의 핵심 흐름: 나귀를 준비함", ""], ["예루살렘으로 입성", "예루살렘 입성 사건의 핵심 흐름: 예루살렘으로 입성", ""], ["호산나 외침", "예루살렘 입성 사건의 핵심 흐름: 호산나 외침", ""], ["성전을 향해 나아감", "예루살렘 입성 사건의 핵심 흐름: 성전을 향해 나아감", ""]], scriptureRefs:[[ "마태복음 21장, 요한복음 12장", "예루살렘 입성 관련 본문" ]], visualItems:["감람산, 예루살렘", "감람산, 예루살렘 관련 지도/시각자료", "예루살렘 입성"]},
  "last-supper": {flowTitle:"핵심사건", flow:[["유월절 식사 준비", "최후의 만찬 사건의 핵심 흐름: 유월절 식사 준비", ""], ["떡과 잔을 주심", "최후의 만찬 사건의 핵심 흐름: 떡과 잔을 주심", ""], ["제자들의 발을 씻기심", "최후의 만찬 사건의 핵심 흐름: 제자들의 발을 씻기심", ""], ["새 언약을 말씀하심", "최후의 만찬 사건의 핵심 흐름: 새 언약을 말씀하심", ""]], scriptureRefs:[[ "마태복음 26장, 누가복음 22장, 요한복음 13장", "최후의 만찬 관련 본문" ]], visualItems:["예루살렘 다락방", "예루살렘 다락방 관련 지도/시각자료", "최후의 만찬"]},
  "gethsemane": {flowTitle:"핵심사건", flow:[["겟세마네로 가심", "겟세마네 기도 사건의 핵심 흐름: 겟세마네로 가심", ""], ["고뇌하며 기도하심", "겟세마네 기도 사건의 핵심 흐름: 고뇌하며 기도하심", ""], ["제자들이 잠듦", "겟세마네 기도 사건의 핵심 흐름: 제자들이 잠듦", ""], ["아버지의 뜻에 순종하심", "겟세마네 기도 사건의 핵심 흐름: 아버지의 뜻에 순종하심", ""]], scriptureRefs:[[ "마태복음 26장, 마가복음 14장, 누가복음 22장", "겟세마네 기도 관련 본문" ]], visualItems:["겟세마네 동산", "겟세마네 동산 관련 지도/시각자료", "겟세마네 기도"]},
  "cross": {flowTitle:"핵심사건", flow:[["재판과 조롱", "십자가 사건의 핵심 흐름: 재판과 조롱", ""], ["골고다로 가심", "십자가 사건의 핵심 흐름: 골고다로 가심", ""], ["십자가에 못 박힘", "십자가 사건의 핵심 흐름: 십자가에 못 박힘", ""], ["다 이루었다고 선포하심", "십자가 사건의 핵심 흐름: 다 이루었다고 선포하심", ""]], scriptureRefs:[[ "마태복음 27장, 마가복음 15장, 누가복음 23장, 요한복음 19장", "십자가 관련 본문" ]], visualItems:["골고다", "골고다 관련 지도/시각자료", "십자가"]},
  "resurrection": {flowTitle:"핵심사건", flow:[["빈 무덤 발견", "부활 사건의 핵심 흐름: 빈 무덤 발견", ""], ["천사의 선언", "부활 사건의 핵심 흐름: 천사의 선언", ""], ["부활하신 주님을 만남", "부활 사건의 핵심 흐름: 부활하신 주님을 만남", ""], ["제자들에게 나타나심", "부활 사건의 핵심 흐름: 제자들에게 나타나심", ""]], scriptureRefs:[[ "마태복음 28장, 마가복음 16장, 누가복음 24장, 요한복음 20장", "부활 관련 본문" ]], visualItems:["예루살렘 무덤", "예루살렘 무덤 관련 지도/시각자료", "부활"]},
  "pentecost-promise": {flowTitle:"핵심사건", flow:[["예루살렘에 머물라 명령", "오순절 약속 사건의 핵심 흐름: 예루살렘에 머물라 명령", ""], ["성령 약속", "오순절 약속 사건의 핵심 흐름: 성령 약속", ""], ["증인의 사명 선포", "오순절 약속 사건의 핵심 흐름: 증인의 사명 선포", ""], ["기다림의 시간", "오순절 약속 사건의 핵심 흐름: 기다림의 시간", ""]], scriptureRefs:[[ "누가복음 24장, 사도행전 1장", "오순절 약속 관련 본문" ]], visualItems:["예루살렘", "예루살렘 관련 지도/시각자료", "오순절 약속"]},
  "ascension": {flowTitle:"핵심사건", flow:[["감람산에 모임", "승천 사건의 핵심 흐름: 감람산에 모임", ""], ["마지막 명령을 주심", "승천 사건의 핵심 흐름: 마지막 명령을 주심", ""], ["하늘로 올라가심", "승천 사건의 핵심 흐름: 하늘로 올라가심", ""], ["다시 오심이 약속됨", "승천 사건의 핵심 흐름: 다시 오심이 약속됨", ""]], scriptureRefs:[[ "누가복음 24장, 사도행전 1장", "승천 관련 본문" ]], visualItems:["감람산", "감람산 관련 지도/시각자료", "승천"]}
});

Object.assign(EVENT_EXPLORE, {
  "jesus-birth": {title:"8. 연결탐험", items:[{"title": "성육신", "desc": "연결 주제"}, {"title": "메시아 약속", "desc": "연결 주제"}, {"title": "베들레헴", "desc": "연결 주제"}, {"title": "다윗 언약", "desc": "연결 주제"}, {"title": "복음서 시작", "desc": "연결 주제"}]},
  "magi": {title:"8. 연결탐험", items:[{"title": "별", "desc": "연결 주제"}, {"title": "열방 경배", "desc": "연결 주제"}, {"title": "헤롯", "desc": "연결 주제"}, {"title": "베들레헴", "desc": "연결 주제"}, {"title": "메시아 왕", "desc": "연결 주제"}]},
  "john-baptist": {title:"8. 연결탐험", items:[{"title": "회개", "desc": "연결 주제"}, {"title": "요단강", "desc": "연결 주제"}, {"title": "엘리야의 심령", "desc": "연결 주제"}, {"title": "메시아 증언", "desc": "연결 주제"}, {"title": "예수 세례", "desc": "연결 주제"}]},
  "jesus-baptism": {title:"8. 연결탐험", items:[{"title": "요단강", "desc": "연결 주제"}, {"title": "성령", "desc": "연결 주제"}, {"title": "하나님의 아들", "desc": "연결 주제"}, {"title": "공생애", "desc": "연결 주제"}, {"title": "삼위일체", "desc": "연결 주제"}]},
  "temptation": {title:"8. 연결탐험", items:[{"title": "광야 40일", "desc": "연결 주제"}, {"title": "말씀", "desc": "연결 주제"}, {"title": "순종", "desc": "연결 주제"}, {"title": "이스라엘 광야", "desc": "연결 주제"}, {"title": "사탄의 시험", "desc": "연결 주제"}]},
  "calling-disciples": {title:"8. 연결탐험", items:[{"title": "갈릴리", "desc": "연결 주제"}, {"title": "제자도", "desc": "연결 주제"}, {"title": "베드로", "desc": "연결 주제"}, {"title": "사람 낚는 어부", "desc": "연결 주제"}, {"title": "복음 전파", "desc": "연결 주제"}]},
  "sermon-mount": {title:"8. 연결탐험", items:[{"title": "팔복", "desc": "연결 주제"}, {"title": "빛과 소금", "desc": "연결 주제"}, {"title": "주기도문", "desc": "연결 주제"}, {"title": "율법의 완성", "desc": "연결 주제"}, {"title": "반석 위의 집", "desc": "연결 주제"}]},
  "five-loaves": {title:"8. 연결탐험", items:[{"title": "생명의 떡", "desc": "연결 주제"}, {"title": "갈릴리", "desc": "연결 주제"}, {"title": "긍휼", "desc": "연결 주제"}, {"title": "기적", "desc": "연결 주제"}, {"title": "감사", "desc": "연결 주제"}]},
  "walk-water": {title:"8. 연결탐험", items:[{"title": "풍랑", "desc": "연결 주제"}, {"title": "믿음", "desc": "연결 주제"}, {"title": "베드로", "desc": "연결 주제"}, {"title": "갈릴리 호수", "desc": "연결 주제"}, {"title": "주님의 권세", "desc": "연결 주제"}]},
  "transfiguration": {title:"8. 연결탐험", items:[{"title": "모세", "desc": "연결 주제"}, {"title": "엘리야", "desc": "연결 주제"}, {"title": "영광", "desc": "연결 주제"}, {"title": "하나님의 아들", "desc": "연결 주제"}, {"title": "십자가 전조", "desc": "연결 주제"}]},
  "lazarus": {title:"8. 연결탐험", items:[{"title": "부활과 생명", "desc": "연결 주제"}, {"title": "베다니", "desc": "연결 주제"}, {"title": "마르다", "desc": "연결 주제"}, {"title": "마리아", "desc": "연결 주제"}, {"title": "빈 무덤", "desc": "연결 주제"}]},
  "triumphal-entry": {title:"8. 연결탐험", items:[{"title": "호산나", "desc": "연결 주제"}, {"title": "나귀", "desc": "연결 주제"}, {"title": "예루살렘", "desc": "연결 주제"}, {"title": "종려주일", "desc": "연결 주제"}, {"title": "고난주간", "desc": "연결 주제"}]},
  "last-supper": {title:"8. 연결탐험", items:[{"title": "유월절", "desc": "연결 주제"}, {"title": "성찬", "desc": "연결 주제"}, {"title": "새 언약", "desc": "연결 주제"}, {"title": "발 씻김", "desc": "연결 주제"}, {"title": "십자가", "desc": "연결 주제"}]},
  "gethsemane": {title:"8. 연결탐험", items:[{"title": "기도", "desc": "연결 주제"}, {"title": "순종", "desc": "연결 주제"}, {"title": "겟세마네", "desc": "연결 주제"}, {"title": "체포", "desc": "연결 주제"}, {"title": "아버지의 뜻", "desc": "연결 주제"}]},
  "cross": {title:"8. 연결탐험", items:[{"title": "골고다", "desc": "연결 주제"}, {"title": "대속", "desc": "연결 주제"}, {"title": "다 이루었다", "desc": "연결 주제"}, {"title": "성전 휘장", "desc": "연결 주제"}, {"title": "구원", "desc": "연결 주제"}]},
  "resurrection": {title:"8. 연결탐험", items:[{"title": "빈 무덤", "desc": "연결 주제"}, {"title": "부활", "desc": "연결 주제"}, {"title": "새 생명", "desc": "연결 주제"}, {"title": "제자들", "desc": "연결 주제"}, {"title": "복음의 확증", "desc": "연결 주제"}]},
  "pentecost-promise": {title:"8. 연결탐험", items:[{"title": "성령", "desc": "연결 주제"}, {"title": "증인", "desc": "연결 주제"}, {"title": "예루살렘", "desc": "연결 주제"}, {"title": "땅끝", "desc": "연결 주제"}, {"title": "초대교회", "desc": "연결 주제"}]},
  "ascension": {title:"8. 연결탐험", items:[{"title": "감람산", "desc": "연결 주제"}, {"title": "승천", "desc": "연결 주제"}, {"title": "재림 약속", "desc": "연결 주제"}, {"title": "증인의 사명", "desc": "연결 주제"}, {"title": "하나님 나라", "desc": "연결 주제"}]}
});

Object.assign(EVENT_MAP_CROPS, {
  "jesus-birth":"assets/maps/68_jesus_birth_map.png",
  "magi":"assets/maps/69_magi_map.png",
  "john-baptist":"assets/maps/70_john_baptist_map.png",
  "jesus-baptism":"assets/maps/71_jesus_baptism_map.png",
  "temptation":"assets/maps/72_temptation_map.png",
  "calling-disciples":"assets/maps/73_calling_disciples_map.png",
  "sermon-mount":"assets/maps/74_sermon_mount_map.png",
  "five-loaves":"assets/maps/75_five_loaves_map.png",
  "walk-water":"assets/maps/76_walk_water_map.png",
  "transfiguration":"assets/maps/77_transfiguration_map.png",
  "lazarus":"assets/maps/78_lazarus_map.png",
  "triumphal-entry":"assets/maps/79_triumphal_entry_map.png",
  "last-supper":"assets/maps/80_last_supper_map.png",
  "gethsemane":"assets/maps/81_gethsemane_map.png",
  "cross":"assets/maps/82_cross_map.png",
  "resurrection":"assets/maps/83_resurrection_map.png",
  "pentecost-promise":"assets/maps/84_pentecost_promise_map.png",
  "ascension":"assets/maps/85_ascension_map.png"
});


// v52 초대교회 핵심사건 데이터
Object.assign(EVENTS, {
  "pentecost": {
    title:"오순절 성령강림", era:"초대교회", year:"AD 30년경", scripture:"사도행전 2장",
    place:"예루살렘",
    people:["성령","베드로","사도들","각국에서 온 유대인들","초대교회 성도들"],
    summary:"예수님의 승천 후 약속하신 성령이 오순절에 임하여 제자들이 담대히 복음을 전하고 교회가 공식적으로 시작된 사건입니다.",
    core:["성령 강림","방언으로 복음 선포","베드로의 설교","삼천 명 회심","교회 공동체의 시작"],
    meaning:["교회의 탄생과 성령 사역의 시작","복음이 여러 민족과 언어로 확장됨","예수님의 약속이 성취됨","성령이 교회의 능력과 증거의 근원이 되심"],
    connect:["성령","오순절","베드로 설교","교회 탄생","땅끝 증인"],
    visual:"예루살렘 오순절 성령강림 장면과 지도",
    image:"assets/infographics/86_pentecost.png"
  },
  "stephen": {
    title:"스데반 순교", era:"초대교회", year:"AD 30년대", scripture:"사도행전 6~7장",
    place:"예루살렘",
    people:["스데반","공회","사울","초대교회 성도들"],
    summary:"초대교회 일곱 집사 중 한 사람인 스데반이 예수 그리스도를 증언하다가 돌에 맞아 순교한 사건입니다.",
    core:["일곱 집사 세움","스데반의 지혜로운 증언","공회 앞 설교","하늘 보좌 환상","첫 순교"],
    meaning:["교회의 첫 순교 사건","복음 증언에는 고난이 따름","박해가 오히려 복음 확산의 계기가 됨","사울 회심의 배경이 마련됨"],
    connect:["순교","증언","박해","사울","복음 확산"],
    visual:"예루살렘 순교 장소와 초대교회 박해 흐름",
    image:"assets/infographics/87_stephen.png"
  },
  "paul-conversion": {
    title:"바울 회심", era:"초대교회", year:"AD 30년대 중후반", scripture:"사도행전 9장",
    place:"다메섹으로 가는 길",
    people:["사울","예수님","아나니아","다메섹 제자들"],
    summary:"교회를 박해하던 사울이 다메섹 길에서 부활하신 예수님을 만나 회심하고 복음의 사도로 부름받은 사건입니다.",
    core:["사울의 박해","다메섹 길의 빛","예수님의 음성","아나니아의 안수","바울의 사명 시작"],
    meaning:["박해자가 사도로 변화됨","은혜의 부르심과 회심의 대표 사건","이방 선교의 핵심 인물이 세워짐","복음은 사람을 근본적으로 변화시킴"],
    connect:["회심","다메섹","아나니아","이방인의 사도","은혜"],
    visual:"예루살렘에서 다메섹으로 향하는 경로",
    image:"assets/infographics/88_paul_conversion.png"
  },
  "paul-1st": {
    title:"1차 선교여행", era:"초대교회", year:"AD 46~48년경", scripture:"사도행전 13~14장",
    place:"안디옥, 구브로, 소아시아 남부",
    people:["바울","바나바","마가 요한","엘루마","루스드라 사람들"],
    summary:"안디옥 교회의 파송을 받은 바울과 바나바가 구브로와 소아시아 지역에 복음을 전하며 이방 선교를 본격화한 사건입니다.",
    core:["안디옥 교회의 파송","구브로 선교","비시디아 안디옥 설교","이고니온·루스드라 사역","교회 세움과 귀환"],
    meaning:["교회가 선교 공동체로 확장됨","이방인에게 복음의 문이 열림","고난 속에서도 복음 전파가 지속됨","지역 교회 설립의 모델이 제시됨"],
    connect:["안디옥","바나바","구브로","이방 선교","지역 교회"],
    visual:"1차 선교여행 경로 지도",
    image:"assets/infographics/89_paul_1st.png"
  },
  "jerusalem-council": {
    title:"예루살렘 공의회", era:"초대교회", year:"AD 49년경", scripture:"사도행전 15장",
    place:"예루살렘",
    people:["베드로","야고보","바울","바나바","예루살렘 교회 지도자들"],
    summary:"이방인 신자에게 율법과 할례를 요구할 것인지 논의하고, 구원이 은혜로 말미암음을 확인한 초대교회의 중요한 회의입니다.",
    core:["할례 논쟁 발생","바울과 바나바의 예루살렘 방문","베드로의 증언","야고보의 정리","이방 교회에 결정 전달"],
    meaning:["복음의 본질을 지킨 사건","구원은 율법이 아니라 은혜로 받음","유대인과 이방인 교회의 연합 기준 마련","교회 의사결정의 중요한 모델"],
    connect:["은혜","할례 논쟁","야고보","이방인 성도","교회 일치"],
    visual:"예루살렘 공의회와 안디옥 교회 연결",
    image:"assets/infographics/90_jerusalem_council.png"
  },
  "paul-2nd": {
    title:"2차 선교여행", era:"초대교회", year:"AD 49~52년경", scripture:"사도행전 16~18장",
    place:"소아시아, 마게도냐, 아가야",
    people:["바울","실라","디모데","루디아","브리스길라와 아굴라"],
    summary:"바울이 실라와 함께 떠나 마게도냐 환상을 따라 유럽 지역까지 복음을 전하고 여러 교회를 세운 사건입니다.",
    core:["바울과 실라의 출발","디모데 합류","마게도냐 환상","빌립보·데살로니가·베뢰아 사역","아덴과 고린도 사역"],
    meaning:["복음이 유럽으로 확장됨","성령의 인도에 따른 선교","고난 속에서도 찬양과 증거가 이어짐","도시 중심 선교 전략이 나타남"],
    connect:["마게도냐 환상","빌립보","고린도","디모데","유럽 선교"],
    visual:"2차 선교여행 경로 지도",
    image:"assets/infographics/91_paul_2nd.png"
  },
  "paul-3rd": {
    title:"3차 선교여행", era:"초대교회", year:"AD 53~57년경", scripture:"사도행전 18~21장",
    place:"에베소, 마게도냐, 헬라",
    people:["바울","에베소 제자들","두란노 서원 사람들","에베소 장인들","밀레도 장로들"],
    summary:"바울이 에베소를 중심으로 장기간 말씀을 가르치고 여러 교회를 굳게 세운 뒤 예루살렘으로 향한 사건입니다.",
    core:["에베소 장기 사역","두란노 서원 강론","우상 산업과 충돌","마게도냐와 헬라 방문","밀레도 고별 설교"],
    meaning:["말씀 교육을 통한 교회 강화","도시 문화와 복음의 충돌","목회적 권면과 교회 지도력의 중요성","고난을 향해 나아가는 사도의 순종"],
    connect:["에베소","두란노 서원","교회 세움","밀레도 고별","예루살렘 행"],
    visual:"3차 선교여행 경로 지도",
    image:"assets/infographics/92_paul_3rd.png"
  },
  "rome-transfer": {
    title:"로마 압송", era:"초대교회", year:"AD 59~60년경", scripture:"사도행전 21~28장",
    place:"예루살렘, 가이사랴, 로마",
    people:["바울","베스도","아그립바","율리오","로마 성도들"],
    summary:"바울이 예루살렘에서 체포된 뒤 가이사랴 재판과 항해를 거쳐 로마로 압송되어 복음을 증언한 사건입니다.",
    core:["예루살렘 체포","가이사랴 재판","가이사에게 상소","폭풍과 난파","로마 도착과 복음 증언"],
    meaning:["복음이 제국의 중심 로마까지 전해짐","고난과 재판도 복음 증언의 통로가 됨","하나님의 섭리가 선교의 길을 여심","사도행전의 땅끝 선교가 완성 방향으로 나아감"],
    connect:["로마","재판","항해","난파","땅끝 증인"],
    visual:"바울의 로마 압송 항해 경로",
    image:"assets/infographics/93_rome_transfer.png"
  },
  "john-patmos": {
    title:"밧모섬의 요한", era:"초대교회", year:"AD 90년대", scripture:"요한계시록 1장",
    place:"밧모섬",
    people:["사도 요한","부활하신 그리스도","일곱 교회"],
    summary:"사도 요한이 밧모섬에서 부활하신 그리스도의 계시를 받고 일곱 교회와 종말의 소망을 전한 사건입니다.",
    core:["요한의 밧모섬 유배","주의 날에 계시를 받음","부활하신 그리스도의 나타나심","일곱 교회에 편지","새 창조 소망 제시"],
    meaning:["박해 속에서도 교회는 소망을 붙듦","그리스도는 교회의 주인이심","역사의 끝은 하나님의 승리와 새 창조임","성경 역사가 종말의 완성으로 이어짐"],
    connect:["요한계시록","일곱 교회","밧모섬","재림","새 하늘과 새 땅"],
    visual:"밧모섬과 소아시아 일곱 교회 지도",
    image:"assets/infographics/94_john_patmos.png"
  }
});

Object.assign(EVENT_EXPLORE, {
  "pentecost": {title:"8. 연결탐험", items:[{"title": "성령", "desc": "연결 주제"}, {"title": "오순절", "desc": "연결 주제"}, {"title": "베드로 설교", "desc": "연결 주제"}, {"title": "교회 탄생", "desc": "연결 주제"}, {"title": "땅끝 증인", "desc": "연결 주제"}]},
  "stephen": {title:"8. 연결탐험", items:[{"title": "순교", "desc": "연결 주제"}, {"title": "증언", "desc": "연결 주제"}, {"title": "박해", "desc": "연결 주제"}, {"title": "사울", "desc": "연결 주제"}, {"title": "복음 확산", "desc": "연결 주제"}]},
  "paul-conversion": {title:"8. 연결탐험", items:[{"title": "회심", "desc": "연결 주제"}, {"title": "다메섹", "desc": "연결 주제"}, {"title": "아나니아", "desc": "연결 주제"}, {"title": "이방인의 사도", "desc": "연결 주제"}, {"title": "은혜", "desc": "연결 주제"}]},
  "paul-1st": {title:"8. 연결탐험", items:[{"title": "안디옥", "desc": "연결 주제"}, {"title": "바나바", "desc": "연결 주제"}, {"title": "구브로", "desc": "연결 주제"}, {"title": "이방 선교", "desc": "연결 주제"}, {"title": "지역 교회", "desc": "연결 주제"}]},
  "jerusalem-council": {title:"8. 연결탐험", items:[{"title": "은혜", "desc": "연결 주제"}, {"title": "할례 논쟁", "desc": "연결 주제"}, {"title": "야고보", "desc": "연결 주제"}, {"title": "이방인 성도", "desc": "연결 주제"}, {"title": "교회 일치", "desc": "연결 주제"}]},
  "paul-2nd": {title:"8. 연결탐험", items:[{"title": "마게도냐 환상", "desc": "연결 주제"}, {"title": "빌립보", "desc": "연결 주제"}, {"title": "고린도", "desc": "연결 주제"}, {"title": "디모데", "desc": "연결 주제"}, {"title": "유럽 선교", "desc": "연결 주제"}]},
  "paul-3rd": {title:"8. 연결탐험", items:[{"title": "에베소", "desc": "연결 주제"}, {"title": "두란노 서원", "desc": "연결 주제"}, {"title": "교회 세움", "desc": "연결 주제"}, {"title": "밀레도 고별", "desc": "연결 주제"}, {"title": "예루살렘 행", "desc": "연결 주제"}]},
  "rome-transfer": {title:"8. 연결탐험", items:[{"title": "로마", "desc": "연결 주제"}, {"title": "재판", "desc": "연결 주제"}, {"title": "항해", "desc": "연결 주제"}, {"title": "난파", "desc": "연결 주제"}, {"title": "땅끝 증인", "desc": "연결 주제"}]},
  "john-patmos": {title:"8. 연결탐험", items:[{"title": "요한계시록", "desc": "연결 주제"}, {"title": "일곱 교회", "desc": "연결 주제"}, {"title": "밧모섬", "desc": "연결 주제"}, {"title": "재림", "desc": "연결 주제"}, {"title": "새 하늘과 새 땅", "desc": "연결 주제"}]}
});

Object.assign(EVENT_MAP_CROPS, {
  "pentecost":"assets/maps/86_pentecost_map.png",
  "stephen":"assets/maps/87_stephen_map.png",
  "paul-conversion":"assets/maps/88_paul_conversion_map.png",
  "paul-1st":"assets/maps/89_paul_1st_map.png",
  "jerusalem-council":"assets/maps/90_jerusalem_council_map.png",
  "paul-2nd":"assets/maps/91_paul_2nd_map.png",
  "paul-3rd":"assets/maps/92_paul_3rd_map.png",
  "rome-transfer":"assets/maps/93_rome_transfer_map.png",
  "john-patmos":"assets/maps/94_john_patmos_map.png"
});



// v53 종말과 새창조 핵심사건 데이터
Object.assign(EVENTS, {
  "seven-churches": {
    title:"일곱 교회", era:"종말과 새창조", year:"AD 90년대", scripture:"요한계시록 1~3장",
    place:"소아시아 일곱 교회",
    people:["사도 요한", "부활하신 그리스도", "일곱 교회 성도들"],
    summary:"부활하신 그리스도께서 요한을 통해 소아시아 일곱 교회에 책망과 격려와 약속의 말씀을 주신 사건입니다.",
    core:["밧모섬의 요한에게 계시가 임함", "일곱 교회에 편지가 주어짐", "칭찬과 책망이 선포됨", "이기는 자에게 약속이 주어짐", "교회가 재림을 준비하도록 부름받음"],
    meaning:["교회는 그리스도의 말씀 앞에 서야 함", "칭찬뿐 아니라 회개도 교회의 본질임", "환난 속에서도 믿음을 지키는 자에게 약속이 있음", "성경 역사는 교회의 완성과 새 창조로 향함"],
    connect:["일곱 교회", "밧모섬", "회개", "이기는 자", "재림 준비"],
    visual:"소아시아 일곱 교회 위치 지도",
    image:"assets/infographics/95_seven_churches.png"
  },
  "seven-seals": {
    title:"일곱 인", era:"종말과 새창조", year:"미래적 환상", scripture:"요한계시록 5~8장",
    place:"하늘 보좌와 땅",
    people:["어린양", "하나님", "네 생물", "장로들", "땅의 사람들"],
    summary:"어린양이 두루마리의 일곱 인을 떼며 하나님의 심판과 구원 계획이 펼쳐지는 환상입니다.",
    core:["보좌 앞 두루마리 등장", "어린양이 두루마리를 받음", "일곱 인이 차례로 열림", "재앙과 심판이 진행됨", "성도들의 기도와 구원이 드러남"],
    meaning:["역사의 주권은 어린양께 있음", "심판은 우연이 아니라 하나님의 계획 안에 있음", "성도들의 고난과 기도는 하나님 앞에 기억됨", "종말은 두려움만이 아니라 구원의 완성으로 이어짐"],
    connect:["어린양", "두루마리", "일곱 인", "심판", "성도의 기도"],
    visual:"일곱 인 환상 구조도",
    image:"assets/infographics/96_seven_seals.png"
  },
  "beast-tribulation": {
    title:"짐승과 환난", era:"종말과 새창조", year:"미래적 환상", scripture:"요한계시록 12~13장",
    place:"땅과 바다, 세상 권세",
    people:["용", "짐승", "거짓 선지자", "성도들"],
    summary:"하나님을 대적하는 악한 권세가 성도들을 미혹하고 박해하지만, 성도들은 믿음과 인내로 견디도록 부름받는 환상입니다.",
    core:["용의 대적 활동", "바다에서 올라온 짐승", "땅에서 올라온 짐승", "우상 숭배와 표 강요", "성도들의 인내와 믿음 요청"],
    meaning:["악한 권세는 하나님을 흉내 내며 미혹함", "성도는 세상 권세 앞에서도 충성을 지켜야 함", "환난은 끝이 아니라 믿음의 시험임", "최종 승리는 하나님께 속함"],
    connect:["짐승", "환난", "우상 숭배", "성도의 인내", "거짓 권세"],
    visual:"짐승과 환난 상징 구조도",
    image:"assets/infographics/97_beast_tribulation.png"
  },
  "armageddon": {
    title:"아마겟돈", era:"종말과 새창조", year:"종말의 전쟁 환상", scripture:"요한계시록 16~19장",
    place:"므깃도/아마겟돈 상징 지역",
    people:["그리스도", "악한 왕들", "짐승", "거짓 선지자", "성도들"],
    summary:"악한 세력들이 하나님을 대적하기 위해 모이지만, 그리스도의 재림과 심판으로 패배하는 최후 대결의 환상입니다.",
    core:["악한 영들이 왕들을 모음", "아마겟돈 전쟁 준비", "그리스도의 재림", "짐승과 거짓 선지자 심판", "하나님의 최종 승리 선포"],
    meaning:["역사의 마지막 전쟁도 하나님의 주권 아래 있음", "악은 강해 보여도 최종 승리를 얻지 못함", "그리스도는 왕 중의 왕으로 오심", "성도에게 종말은 공포가 아니라 승리의 소망임"],
    connect:["아마겟돈", "재림", "최후 심판", "왕 중의 왕", "승리"],
    visual:"아마겟돈 상징 지역과 종말 전쟁 구조",
    image:"assets/infographics/98_armageddon.png"
  },
  "new-jerusalem": {
    title:"새예루살렘", era:"종말과 새창조", year:"종말의 완성", scripture:"요한계시록 21장",
    place:"새예루살렘",
    people:["하나님", "어린양", "구원받은 백성", "요한"],
    summary:"하늘에서 내려오는 새예루살렘은 하나님이 자기 백성과 영원히 함께하시는 완성된 거룩한 성의 환상입니다.",
    core:["새예루살렘이 하늘에서 내려옴", "하나님의 장막이 사람들과 함께함", "눈물과 죽음과 고통이 사라짐", "성의 영광과 거룩함이 드러남", "어린양이 성의 빛이 되심"],
    meaning:["구원의 최종 목적은 하나님과의 영원한 동거임", "성전은 건물이 아니라 하나님과 어린양의 임재로 완성됨", "죄와 죽음의 질서가 끝남", "성경의 성전·시온·언약 주제가 완성됨"],
    connect:["새예루살렘", "하나님의 장막", "어린양", "눈물 없음", "영원한 임재"],
    visual:"새예루살렘 상징 구조도",
    image:"assets/infographics/99_new_jerusalem.png"
  },
  "new-heaven-earth": {
    title:"새 하늘과 새 땅", era:"종말과 새창조", year:"종말의 완성", scripture:"요한계시록 21~22장",
    place:"새 하늘과 새 땅",
    people:["하나님", "어린양", "성령", "구원받은 백성"],
    summary:"하나님이 처음 창조를 새롭게 하시고, 생명수 강과 생명나무가 있는 새 하늘과 새 땅에서 구원이 완성되는 성경의 마지막 장면입니다.",
    core:["처음 하늘과 땅이 지나감", "새 하늘과 새 땅이 나타남", "생명수 강과 생명나무", "저주가 사라짐", "하나님의 종들이 영원히 왕 노릇함"],
    meaning:["창조에서 시작된 성경 역사가 새 창조로 완성됨", "타락으로 잃어버린 생명과 임재가 회복됨", "구원의 끝은 영원한 예배와 통치임", "성경 전체의 결말은 하나님의 완전한 회복임"],
    connect:["새창조", "생명수 강", "생명나무", "저주 없음", "영원한 나라"],
    visual:"창조에서 새창조까지 연결 구조도",
    image:"assets/infographics/100_new_heaven_earth.png"
  }
});

Object.assign(EVENT_ENRICH, {
  "seven-churches": {
    flow:[["밧모섬의 요한에게 계시가 임함","밧모섬의 요한에게 계시가 임함",""], ["일곱 교회에 편지가 주어짐","일곱 교회에 편지가 주어짐",""], ["칭찬과 책망이 선포됨","칭찬과 책망이 선포됨",""], ["이기는 자에게 약속이 주어짐","이기는 자에게 약속이 주어짐",""], ["교회가 재림을 준비하도록 부름받음","교회가 재림을 준비하도록 부름받음",""]],
    scriptureRefs:[["요한계시록 1~3장", "부활하신 그리스도께서 요한을 통해 소아시아 일곱 교회에 책망과 격려와 약속의 말씀을 주신 사건입니다."]],
    visualItems:["소아시아 일곱 교회 위치 지도"]
  },
  "seven-seals": {
    flow:[["보좌 앞 두루마리 등장","보좌 앞 두루마리 등장",""], ["어린양이 두루마리를 받음","어린양이 두루마리를 받음",""], ["일곱 인이 차례로 열림","일곱 인이 차례로 열림",""], ["재앙과 심판이 진행됨","재앙과 심판이 진행됨",""], ["성도들의 기도와 구원이 드러남","성도들의 기도와 구원이 드러남",""]],
    scriptureRefs:[["요한계시록 5~8장", "어린양이 두루마리의 일곱 인을 떼며 하나님의 심판과 구원 계획이 펼쳐지는 환상입니다."]],
    visualItems:["일곱 인 환상 구조도"]
  },
  "beast-tribulation": {
    flow:[["용의 대적 활동","용의 대적 활동",""], ["바다에서 올라온 짐승","바다에서 올라온 짐승",""], ["땅에서 올라온 짐승","땅에서 올라온 짐승",""], ["우상 숭배와 표 강요","우상 숭배와 표 강요",""], ["성도들의 인내와 믿음 요청","성도들의 인내와 믿음 요청",""]],
    scriptureRefs:[["요한계시록 12~13장", "하나님을 대적하는 악한 권세가 성도들을 미혹하고 박해하지만, 성도들은 믿음과 인내로 견디도록 부름받는 환상입니다."]],
    visualItems:["짐승과 환난 상징 구조도"]
  },
  "armageddon": {
    flow:[["악한 영들이 왕들을 모음","악한 영들이 왕들을 모음",""], ["아마겟돈 전쟁 준비","아마겟돈 전쟁 준비",""], ["그리스도의 재림","그리스도의 재림",""], ["짐승과 거짓 선지자 심판","짐승과 거짓 선지자 심판",""], ["하나님의 최종 승리 선포","하나님의 최종 승리 선포",""]],
    scriptureRefs:[["요한계시록 16~19장", "악한 세력들이 하나님을 대적하기 위해 모이지만, 그리스도의 재림과 심판으로 패배하는 최후 대결의 환상입니다."]],
    visualItems:["아마겟돈 상징 지역과 종말 전쟁 구조"]
  },
  "new-jerusalem": {
    flow:[["새예루살렘이 하늘에서 내려옴","새예루살렘이 하늘에서 내려옴",""], ["하나님의 장막이 사람들과 함께함","하나님의 장막이 사람들과 함께함",""], ["눈물과 죽음과 고통이 사라짐","눈물과 죽음과 고통이 사라짐",""], ["성의 영광과 거룩함이 드러남","성의 영광과 거룩함이 드러남",""], ["어린양이 성의 빛이 되심","어린양이 성의 빛이 되심",""]],
    scriptureRefs:[["요한계시록 21장", "하늘에서 내려오는 새예루살렘은 하나님이 자기 백성과 영원히 함께하시는 완성된 거룩한 성의 환상입니다."]],
    visualItems:["새예루살렘 상징 구조도"]
  },
  "new-heaven-earth": {
    flow:[["처음 하늘과 땅이 지나감","처음 하늘과 땅이 지나감",""], ["새 하늘과 새 땅이 나타남","새 하늘과 새 땅이 나타남",""], ["생명수 강과 생명나무","생명수 강과 생명나무",""], ["저주가 사라짐","저주가 사라짐",""], ["하나님의 종들이 영원히 왕 노릇함","하나님의 종들이 영원히 왕 노릇함",""]],
    scriptureRefs:[["요한계시록 21~22장", "하나님이 처음 창조를 새롭게 하시고, 생명수 강과 생명나무가 있는 새 하늘과 새 땅에서 구원이 완성되는 성경의 마지막 장면입니다."]],
    visualItems:["창조에서 새창조까지 연결 구조도"]
  }
});

Object.assign(EVENT_EXPLORE, {
  "seven-churches": {title:"8. 연결탐험", items:[{"title": "일곱 교회", "desc": "연결 주제"}, {"title": "밧모섬", "desc": "연결 주제"}, {"title": "회개", "desc": "연결 주제"}, {"title": "이기는 자", "desc": "연결 주제"}, {"title": "재림 준비", "desc": "연결 주제"}]},
  "seven-seals": {title:"8. 연결탐험", items:[{"title": "어린양", "desc": "연결 주제"}, {"title": "두루마리", "desc": "연결 주제"}, {"title": "일곱 인", "desc": "연결 주제"}, {"title": "심판", "desc": "연결 주제"}, {"title": "성도의 기도", "desc": "연결 주제"}]},
  "beast-tribulation": {title:"8. 연결탐험", items:[{"title": "짐승", "desc": "연결 주제"}, {"title": "환난", "desc": "연결 주제"}, {"title": "우상 숭배", "desc": "연결 주제"}, {"title": "성도의 인내", "desc": "연결 주제"}, {"title": "거짓 권세", "desc": "연결 주제"}]},
  "armageddon": {title:"8. 연결탐험", items:[{"title": "아마겟돈", "desc": "연결 주제"}, {"title": "재림", "desc": "연결 주제"}, {"title": "최후 심판", "desc": "연결 주제"}, {"title": "왕 중의 왕", "desc": "연결 주제"}, {"title": "승리", "desc": "연결 주제"}]},
  "new-jerusalem": {title:"8. 연결탐험", items:[{"title": "새예루살렘", "desc": "연결 주제"}, {"title": "하나님의 장막", "desc": "연결 주제"}, {"title": "어린양", "desc": "연결 주제"}, {"title": "눈물 없음", "desc": "연결 주제"}, {"title": "영원한 임재", "desc": "연결 주제"}]},
  "new-heaven-earth": {title:"8. 연결탐험", items:[{"title": "새창조", "desc": "연결 주제"}, {"title": "생명수 강", "desc": "연결 주제"}, {"title": "생명나무", "desc": "연결 주제"}, {"title": "저주 없음", "desc": "연결 주제"}, {"title": "영원한 나라", "desc": "연결 주제"}]}
});

Object.assign(EVENT_MAP_CROPS, {
  "seven-churches":"assets/maps/95_seven_churches_map.png",  "seven-seals":"assets/maps/96_seven_seals_map.png",  "beast-tribulation":"assets/maps/97_beast_tribulation_map.png",  "armageddon":"assets/maps/98_armageddon_map.png",  "new-jerusalem":"assets/maps/99_new_jerusalem_map.png",  "new-heaven-earth":"assets/maps/100_new_heaven_earth_map.png"
});

// v54 사사시대~종말과 새창조 6.핵심사건 흐름 원문 보정
Object.assign(EVENT_ENRICH, {
  "deborah-barak": { flow:[["탄식", "이스라엘이 가나안 왕 야빈과 시스라의 압제 아래 고통받음", ""], ["부르심", "드보라가 바락을 불러 하나님의 명령을 전함", ""], ["출정", "바락이 스불론과 납달리 지파의 군사를 모아 출정함", ""], ["전투", "하나님이 기손 강가에서 시스라의 군대를 무너뜨리심", ""], ["도망", "시스라가 병거를 버리고 야엘의 장막으로 도망함", ""], ["승리", "야엘이 시스라를 죽이고 이스라엘이 승리함", ""], ["찬양", "드보라와 바락이 승리의 노래로 하나님께 영광을 돌림", ""]] },
  "gideon-300": { flow:[["압제", "미디안이 이스라엘을 약탈하고 백성이 부르짖음", ""], ["부르심", "하나님의 사자가 기드온을 큰 용사라 부름", ""], ["제단 제거", "기드온이 바알 제단을 헐고 하나님께 제단을 쌓음", ""], ["군사 축소", "하나님이 군사의 수를 300명으로 줄이심", ""], ["전술", "항아리, 횃불, 나팔로 미디안 진영을 둘러쌈", ""], ["혼란", "하나님이 미디안 군대 안에 큰 혼란을 일으키심", ""], ["승리와 경계", "이스라엘이 승리하지만 기드온의 에봇이 올무가 됨", ""]] },
  "samson": { flow:[["출생 예고", "천사가 삼손의 출생과 나실인 사명을 알림", ""], ["구별", "삼손이 태어나 나실인으로 자라남", ""], ["블레셋과 충돌", "삼손이 여러 사건을 통해 블레셋을 침", ""], ["유혹", "들릴라가 삼손의 힘의 비밀을 캐냄", ""], ["몰락", "삼손의 머리털이 잘리고 힘을 잃어 포로가 됨", ""], ["기도", "삼손이 마지막 순간 하나님께 다시 힘을 구함", ""], ["최후 승리", "블레셋 신전이 무너지며 많은 블레셋 사람이 죽음", ""]] },
  "ruth-boaz": { flow:[["흉년", "나오미 가족이 베들레헴을 떠나 모압으로 감", ""], ["상실", "나오미의 남편과 두 아들이 죽음", ""], ["동행", "룻이 나오미를 따라 베들레헴으로 돌아감", ""], ["이삭줍기", "룻이 보아스의 밭에서 이삭을 주움", ""], ["은혜", "보아스가 룻을 보호하고 배려함", ""], ["구속", "보아스가 기업 무를 자로 책임을 감당함", ""], ["계보", "룻과 보아스의 가정이 다윗과 그리스도의 족보로 이어짐", ""]] },
  "saul-king": { flow:[["왕 요구", "이스라엘 백성이 다른 나라처럼 왕을 요구함", ""], ["경고", "사무엘이 왕정의 위험을 경고함", ""], ["선택", "사울이 하나님의 섭리 가운데 선택됨", ""], ["기름부음", "사무엘이 사울에게 기름을 부음", ""], ["공적 선포", "미스바에서 사울이 왕으로 드러남", ""], ["왕권 확인", "길갈에서 사울의 왕권이 새롭게 확인됨", ""], ["왕정 시작", "이스라엘에 왕정 시대가 열림", ""]] },
  "david-goliath": { flow:[["대치", "엘라 골짜기에서 이스라엘과 블레셋이 대치함", ""], ["모욕", "골리앗이 이스라엘과 하나님을 모욕함", ""], ["두려움", "사울과 군대가 두려워함", ""], ["믿음", "다윗이 하나님의 이름으로 나아감", ""], ["승리", "물맷돌로 골리앗을 쓰러뜨림", ""], ["추격", "이스라엘이 블레셋을 추격함", ""], ["증거", "전쟁은 하나님께 속했음을 드러냄", ""]] },
  "ark-move": { flow:[["첫 시도", "다윗이 언약궤를 새 수레에 싣고 옮기려 함", ""], ["웃사의 죽음", "웃사가 언약궤를 붙들다 죽음", ""], ["멈춤", "언약궤가 오벧에돔의 집에 머묾", ""], ["복", "하나님이 오벧에돔의 집에 복을 주심", ""], ["재시도", "다윗이 말씀의 방식대로 다시 옮김", ""], ["찬양", "다윗과 백성이 기쁨으로 찬양함", ""], ["안치", "언약궤가 예루살렘에 안치됨", ""]] },
  "david-kingdom": { flow:[["헤브론 통치", "다윗이 유다 왕으로 다스림", ""], ["통일", "온 이스라엘이 다윗을 왕으로 세움", ""], ["예루살렘 점령", "예루살렘을 수도로 삼음", ""], ["왕국 안정", "주변 원수들을 물리침", ""], ["성전 소원", "다윗이 하나님을 위한 집을 짓고자 함", ""], ["다윗 언약", "하나님이 영원한 왕위의 약속을 주심", ""], ["메시아 약속", "다윗 왕권이 그리스도에게 이어짐", ""]] },
  "bathsheba": { flow:[["머무름", "다윗이 전쟁터가 아닌 예루살렘에 머묾", ""], ["범죄", "밧세바를 데려와 간음함", ""], ["은폐", "임신 사실을 숨기려 함", ""], ["우리아", "우리아가 충성스럽게 행동함", ""], ["살인", "다윗이 우리아를 전쟁터에서 죽게 함", ""], ["책망", "나단이 비유로 다윗의 죄를 드러냄", ""], ["회개", "다윗이 죄를 인정하고 회개함", ""]] },
  "solomon-wisdom": { flow:[["제사", "솔로몬이 기브온에서 제사를 드림", ""], ["질문", "하나님이 무엇을 줄지 물으심", ""], ["간구", "솔로몬이 듣는 마음과 지혜를 구함", ""], ["응답", "하나님이 지혜와 부귀와 영광을 주심", ""], ["재판", "두 여인의 아이 사건을 재판함", ""], ["인정", "백성이 솔로몬 안의 하나님의 지혜를 봄", ""], ["번영", "왕국이 지혜와 질서 속에 번영함", ""]] },
  "temple-build": { flow:[["준비", "다윗이 성전 건축을 준비함", ""], ["협력", "솔로몬이 두로 왕 히람과 협력함", ""], ["재료", "백향목과 돌과 금이 준비됨", ""], ["건축", "예루살렘 모리아 산에 성전이 세워짐", ""], ["기구", "성소와 지성소와 성전 기구가 제작됨", ""], ["완공", "성전 건축이 마무리됨", ""], ["예배 중심", "이스라엘 예배의 중심이 세워짐", ""]] },
  "temple-dedication": { flow:[["언약궤 안치", "언약궤가 지성소로 옮겨짐", ""], ["찬양", "제사장과 레위인이 찬양함", ""], ["영광", "여호와의 영광이 성전에 가득함", ""], ["축복", "솔로몬이 백성을 축복함", ""], ["기도", "솔로몬이 봉헌 기도를 드림", ""], ["응답", "하나님이 제물을 받으심", ""], ["예배 중심", "성전이 기도와 회개의 중심으로 세워짐", ""]] },
  "kingdom-divide": { flow:[["예고", "솔로몬의 죄로 왕국 분열이 예고됨", ""], ["요구", "백성이 르호보암에게 멍에를 가볍게 해 달라고 요구함", ""], ["거절", "르호보암이 원로의 조언을 버림", ""], ["분열", "열 지파가 여로보암을 따름", ""], ["남유다", "유다와 베냐민이 르호보암을 따름", ""], ["두 왕국", "북이스라엘과 남유다로 갈라짐", ""], ["새 시대", "분열왕국 시대가 시작됨", ""]] },
  "golden-calves": { flow:[["두려움", "여로보암이 백성의 예루살렘 방문을 두려워함", ""], ["제작", "벧엘과 단에 금송아지를 세움", ""], ["왜곡", "새 절기와 제사장을 만듦", ""], ["우상화", "북이스라엘 백성이 우상숭배에 빠짐", ""], ["죄의 기준", "여로보암의 죄가 반복됨", ""], ["영적 붕괴", "예배가 정치 도구로 변질됨", ""], ["심판의 씨앗", "북이스라엘 멸망의 뿌리가 됨", ""]] },
  "carmel": { flow:[["우상숭배", "아합 시대 바알 숭배가 극심해짐", ""], ["소집", "엘리야가 갈멜산에 백성을 모음", ""], ["침묵", "바알은 응답하지 못함", ""], ["제단 회복", "엘리야가 여호와의 제단을 수축함", ""], ["불", "하나님의 불이 제단에 임함", ""], ["고백", "백성이 여호와가 하나님이라고 고백함", ""], ["비", "가뭄이 끝나고 비가 내림", ""]] },
  "naboth": { flow:[["탐냄", "아합이 나봇의 포도원을 원함", ""], ["거절", "나봇이 조상의 기업이라 거절함", ""], ["음모", "이세벨이 거짓 증인을 세움", ""], ["살인", "나봇이 억울하게 죽임당함", ""], ["탈취", "아합이 포도원을 차지함", ""], ["책망", "엘리야가 하나님의 심판을 선포함", ""], ["심판", "아합 가문에 심판이 예고됨", ""]] },
  "elisha-miracles": { flow:[["계승", "엘리사가 엘리야의 뒤를 이어 사역함", ""], ["물", "여리고 물을 고침", ""], ["공급", "과부의 기름을 채움", ""], ["생명", "수넴 여인의 아들을 살림", ""], ["정화", "독이 든 국을 고침", ""], ["치유", "나아만의 나병이 치유됨", ""], ["구원", "위기 속에서 하나님의 구원을 선포함", ""]] },
  "jonah-nineveh": { flow:[["명령", "하나님이 요나에게 니느웨로 가라 하심", ""], ["도망", "요나가 다시스로 도망함", ""], ["풍랑", "바다에 큰 풍랑이 일어남", ""], ["물고기", "요나가 큰 물고기 뱃속에 들어감", ""], ["재부름", "요나가 다시 말씀을 받음", ""], ["회개", "니느웨가 말씀을 듣고 회개함", ""], ["긍휼", "하나님이 니느웨를 아끼심", ""]] },
  "north-fall": { flow:[["반복", "북이스라엘이 여로보암의 죄를 따름", ""], ["경고", "선지자들의 경고를 무시함", ""], ["압박", "앗수르가 북이스라엘을 압박함", ""], ["포위", "사마리아가 포위됨", ""], ["함락", "BC 722년 사마리아가 함락됨", ""], ["포로", "백성이 앗수르 지역으로 끌려감", ""], ["멸망", "북이스라엘 왕국이 끝남", ""]] },
  "hezekiah-reform": { flow:[["즉위", "히스기야가 유다 왕이 됨", ""], ["성전 정결", "성전 문을 열고 정결하게 함", ""], ["예배 회복", "제사장과 레위인을 회복시킴", ""], ["우상 제거", "산당과 우상을 제거함", ""], ["놋뱀 파괴", "우상이 된 놋뱀을 부숨", ""], ["유월절", "유월절을 회복함", ""], ["개혁", "백성이 하나님께 돌아옴", ""]] },
  "assyria-invasion": { flow:[["침공", "앗수르가 유다 성읍들을 점령함", ""], ["위협", "산헤립이 예루살렘을 압박함", ""], ["조롱", "랍사게가 하나님을 조롱함", ""], ["기도", "히스기야가 성전에 올라가 기도함", ""], ["예언", "이사야가 하나님의 구원을 선포함", ""], ["구원", "여호와의 사자가 앗수르 군대를 침", ""], ["보존", "예루살렘이 보존됨", ""]] },
  "josiah-reform": { flow:[["즉위", "요시야가 어린 나이에 왕이 됨", ""], ["발견", "성전 수리 중 율법책이 발견됨", ""], ["회개", "요시야가 말씀 앞에서 옷을 찢음", ""], ["확인", "훌다가 하나님의 말씀을 전함", ""], ["언약 갱신", "백성과 언약을 새롭게 함", ""], ["우상 제거", "우상과 산당을 제거함", ""], ["유월절", "유월절을 크게 지킴", ""]] },
  "jeremiah-tears": { flow:[["부름", "예레미야가 선지자로 부름받음", ""], ["책망", "유다의 죄와 우상숭배를 책망함", ""], ["대립", "거짓 평안의 메시지와 대립함", ""], ["항복 선포", "바벨론에 항복하라는 말씀을 전함", ""], ["박해", "백성에게 미움과 박해를 받음", ""], ["눈물", "예루살렘 멸망을 바라보며 슬퍼함", ""], ["소망", "새 언약의 약속을 전함", ""]] },
  "judah-fall": { flow:[["불순종", "유다가 하나님의 말씀을 거역함", ""], ["포위", "바벨론이 예루살렘을 포위함", ""], ["기근", "성 안에 기근과 절망이 깊어짐", ""], ["함락", "예루살렘 성이 무너짐", ""], ["성전 파괴", "성전과 왕궁이 불탐", ""], ["포로", "백성이 바벨론으로 끌려감", ""], ["전환", "포로기와 회복 약속의 시대가 시작됨", ""]] },
  "daniel-friends": { flow:[["포로", "유다 청년들이 바벨론으로 끌려감", ""], ["교육", "왕궁에서 바벨론식 교육을 받음", ""], ["결단", "왕의 음식과 포도주를 거절함", ""], ["정결", "하나님 앞에서 정결을 지키려 함", ""], ["지혜", "하나님이 지혜와 총명을 주심", ""], ["보호", "풀무불 속에서도 하나님의 보호를 경험함", ""], ["증거", "포로지에서 믿음의 모범이 됨", ""]] },
  "furnace": { flow:[["금신상", "느부갓네살이 큰 금신상을 세움", ""], ["명령", "모든 사람이 절하라는 명령이 내려짐", ""], ["거부", "세 친구가 우상에게 절하지 않음", ""], ["풀무불", "왕이 그들을 풀무불에 던짐", ""], ["함께하심", "불 속에 네 번째 존재가 함께 나타남", ""], ["구원", "세 친구가 해를 입지 않고 나옴", ""], ["증거", "왕이 하나님을 높임", ""]] },
  "nebuchadnezzar-dream": { flow:[["꿈", "느부갓네살이 큰 신상의 꿈을 꿈", ""], ["한계", "바벨론 지혜자들이 해석하지 못함", ""], ["기도", "다니엘과 친구들이 하나님께 간구함", ""], ["계시", "하나님이 꿈과 해석을 알려주심", ""], ["제국", "신상이 세상 제국의 흥망을 보여줌", ""], ["돌", "뜨인 돌이 신상을 무너뜨림", ""], ["나라", "하나님의 나라가 영원함을 선포함", ""]] },
  "lion-den": { flow:[["탁월함", "다니엘이 뛰어난 행정가로 세워짐", ""], ["모함", "고관들이 다니엘을 시기함", ""], ["금령", "왕 외에 기도하지 말라는 법이 세워짐", ""], ["기도", "다니엘이 평소처럼 하나님께 기도함", ""], ["사자굴", "다니엘이 사자굴에 던져짐", ""], ["보호", "하나님이 사자들의 입을 막으심", ""], ["선포", "다리오 왕이 하나님을 높임", ""]] },
  "ezekiel-vision": { flow:[["영광", "그발 강가에서 하나님의 영광을 봄", ""], ["부름", "에스겔이 파수꾼으로 부름받음", ""], ["상징", "예루살렘 심판을 상징 행동으로 전함", ""], ["마른 뼈", "마른 뼈 골짜기 환상을 봄", ""], ["생기", "하나님의 영이 생명을 회복시킴", ""], ["새 마음", "새 마음과 새 영의 약속을 전함", ""], ["새 성전", "새 성전 환상을 봄", ""]] },
  "esther-purim": { flow:[["왕후", "에스더가 바사 왕후가 됨", ""], ["위기", "하만이 유다인 멸절 계획을 세움", ""], ["사명", "모르드개가 에스더에게 결단을 촉구함", ""], ["결단", "에스더가 죽으면 죽으리라 결단함", ""], ["잔치", "왕 앞에 나아가 잔치를 베풂", ""], ["역전", "하만의 음모가 드러남", ""], ["부림절", "유다 백성이 구원받고 부림절을 지킴", ""]] },
  "zerubbabel-return": { flow:[["칙령", "고레스가 귀환을 허락함", ""], ["귀환", "스룹바벨과 백성이 예루살렘으로 돌아옴", ""], ["제단", "제단을 재건하고 번제를 드림", ""], ["기초", "성전 기초를 놓음", ""], ["방해", "주변 민족의 반대로 공사가 중단됨", ""], ["격려", "학개와 스가랴가 백성을 격려함", ""], ["회복", "성전 재건의 기초가 놓임", ""]] },
  "temple-rebuild": { flow:[["기초", "성전 기초가 놓임", ""], ["눈물과 기쁨", "백성이 울고 기뻐함", ""], ["방해", "대적들이 공사를 막음", ""], ["말씀", "학개와 스가랴가 말씀으로 격려함", ""], ["확인", "다리오 때 고레스 칙령이 확인됨", ""], ["완공", "성전이 완성됨", ""], ["봉헌", "성전 봉헌과 유월절이 지켜짐", ""]] },
  "ezra-reform": { flow:[["부름", "에스라가 율법 학사로 세워짐", ""], ["귀환", "아닥사스다의 허락을 받아 예루살렘으로 감", ""], ["정비", "성전과 공동체를 정비함", ""], ["가르침", "하나님의 율법을 백성에게 가르침", ""], ["직면", "혼합 신앙과 불순종 문제를 드러냄", ""], ["회개", "백성이 죄를 자복함", ""], ["개혁", "말씀 중심 공동체로 재정비됨", ""]] },
  "nehemiah-wall": { flow:[["소식", "예루살렘 성벽이 무너졌다는 소식을 들음", ""], ["기도", "느헤미야가 금식하며 기도함", ""], ["허락", "왕의 허락을 받아 예루살렘으로 감", ""], ["조사", "밤에 성벽 상태를 살핌", ""], ["협력", "백성이 구역별로 성벽을 재건함", ""], ["방해", "산발랏과 도비야의 조롱과 위협을 견딤", ""], ["완공", "성벽을 완공하고 공동체를 회복함", ""]] },
  "hellenism": { flow:[["변화", "페르시아 이후 헬라 세력이 부상함", ""], ["편입", "팔레스타인이 헬라 문화권에 들어감", ""], ["확산", "그리스어와 헬라식 문화가 퍼짐", ""], ["긴장", "유대 신앙과 헬라 문화가 충돌함", ""], ["준비", "신약 시대의 언어·문화 배경이 형성됨", ""]] },
  "alexander": { flow:[["등장", "알렉산더가 마케도니아 왕이 됨", ""], ["정복", "페르시아 제국을 무너뜨림", ""], ["편입", "유대 지역이 헬라 세계에 들어감", ""], ["분열", "알렉산더 사후 제국이 나뉨", ""], ["배경", "프톨레마이오스와 셀레우코스의 경쟁이 이어짐", ""]] },
  "maccabees": { flow:[["탄압", "안티오코스 4세가 유대 신앙을 억압함", ""], ["모독", "성전이 더럽혀지고 제사가 금지됨", ""], ["봉기", "마카비 가문이 저항을 시작함", ""], ["승리", "유다 마카비가 예루살렘을 회복함", ""], ["정화", "성전 예배가 다시 세워짐", ""]] },
  "hanukkah": { flow:[["회복", "예루살렘 성전이 회복됨", ""], ["정화", "더럽혀진 성전이 정결하게 됨", ""], ["봉헌", "성전이 다시 하나님께 드려짐", ""], ["기념", "하누카 절기가 시작됨", ""], ["연결", "신약의 수전절 배경으로 이어짐", ""]] },
  "rome": { flow:[["진출", "로마가 동방으로 세력을 넓힘", ""], ["점령", "폼페이우스가 예루살렘을 장악함", ""], ["지배", "유대가 로마 영향권에 들어감", ""], ["헤롯", "헤롯 왕조가 로마 후원 아래 세워짐", ""], ["무대", "예수 시대와 초대교회 선교의 배경이 마련됨", ""]] },
  "jesus-birth": { flow:[["수태고지", "예수 탄생 사건의 핵심 흐름: 수태고지", ""], ["베들레헴 탄생", "예수 탄생 사건의 핵심 흐름: 베들레헴 탄생", ""], ["목자들에게 소식 전파", "예수 탄생 사건의 핵심 흐름: 목자들에게 소식 전파", ""], ["하나님께 영광 돌림", "예수 탄생 사건의 핵심 흐름: 하나님께 영광 돌림", ""]] },
  "magi": { flow:[["별을 발견함", "동방박사 사건의 핵심 흐름: 별을 발견함", ""], ["예루살렘에서 왕을 찾음", "동방박사 사건의 핵심 흐름: 예루살렘에서 왕을 찾음", ""], ["베들레헴으로 인도됨", "동방박사 사건의 핵심 흐름: 베들레헴으로 인도됨", ""], ["예물로 경배함", "동방박사 사건의 핵심 흐름: 예물로 경배함", ""]] },
  "john-baptist": { flow:[["광야에서 외침", "세례요한 사건의 핵심 흐름: 광야에서 외침", ""], ["회개 선포", "세례요한 사건의 핵심 흐름: 회개 선포", ""], ["세례 베풂", "세례요한 사건의 핵심 흐름: 세례 베풂", ""], ["메시아를 증언함", "세례요한 사건의 핵심 흐름: 메시아를 증언함", ""]] },
  "jesus-baptism": { flow:[["요단강으로 오심", "예수 세례 사건의 핵심 흐름: 요단강으로 오심", ""], ["세례를 받으심", "예수 세례 사건의 핵심 흐름: 세례를 받으심", ""], ["성령이 임하심", "예수 세례 사건의 핵심 흐름: 성령이 임하심", ""], ["하늘의 음성이 들림", "예수 세례 사건의 핵심 흐름: 하늘의 음성이 들림", ""]] },
  "temptation": { flow:[["성령에 이끌려 광야로 가심", "광야 시험 사건의 핵심 흐름: 성령에 이끌려 광야로 가심", ""], ["40일 금식", "광야 시험 사건의 핵심 흐름: 40일 금식", ""], ["세 가지 시험", "광야 시험 사건의 핵심 흐름: 세 가지 시험", ""], ["말씀으로 승리하심", "광야 시험 사건의 핵심 흐름: 말씀으로 승리하심", ""]] },
  "calling-disciples": { flow:[["갈릴리에서 부르심", "제자 부르심 사건의 핵심 흐름: 갈릴리에서 부르심", ""], ["그물을 버리고 따름", "제자 부르심 사건의 핵심 흐름: 그물을 버리고 따름", ""], ["사람 낚는 어부로 세움", "제자 부르심 사건의 핵심 흐름: 사람 낚는 어부로 세움", ""], ["제자 공동체 시작", "제자 부르심 사건의 핵심 흐름: 제자 공동체 시작", ""]] },
  "sermon-mount": { flow:[["팔복 선포", "산상수훈 사건의 핵심 흐름: 팔복 선포", ""], ["빛과 소금의 사명", "산상수훈 사건의 핵심 흐름: 빛과 소금의 사명", ""], ["율법의 완성", "산상수훈 사건의 핵심 흐름: 율법의 완성", ""], ["주기도문과 삶의 교훈", "산상수훈 사건의 핵심 흐름: 주기도문과 삶의 교훈", ""]] },
  "five-loaves": { flow:[["무리를 불쌍히 여기심", "오병이어 사건의 핵심 흐름: 무리를 불쌍히 여기심", ""], ["오병이어를 받으심", "오병이어 사건의 핵심 흐름: 오병이어를 받으심", ""], ["축사 후 나누심", "오병이어 사건의 핵심 흐름: 축사 후 나누심", ""], ["모두 배불리 먹음", "오병이어 사건의 핵심 흐름: 모두 배불리 먹음", ""]] },
  "walk-water": { flow:[["제자들이 풍랑을 만남", "물 위를 걸으심 사건의 핵심 흐름: 제자들이 풍랑을 만남", ""], ["예수님이 물 위를 걸어오심", "물 위를 걸으심 사건의 핵심 흐름: 예수님이 물 위를 걸어오심", ""], ["베드로가 걷다 두려워함", "물 위를 걸으심 사건의 핵심 흐름: 베드로가 걷다 두려워함", ""], ["예수님이 구원하심", "물 위를 걸으심 사건의 핵심 흐름: 예수님이 구원하심", ""]] },
  "transfiguration": { flow:[["산에 오르심", "변화산 사건 사건의 핵심 흐름: 산에 오르심", ""], ["영광스러운 모습으로 변화됨", "변화산 사건 사건의 핵심 흐름: 영광스러운 모습으로 변화됨", ""], ["모세와 엘리야가 나타남", "변화산 사건 사건의 핵심 흐름: 모세와 엘리야가 나타남", ""], ["하늘의 음성이 들림", "변화산 사건 사건의 핵심 흐름: 하늘의 음성이 들림", ""]] },
  "lazarus": { flow:[["나사로가 죽음", "나사로 부활 사건의 핵심 흐름: 나사로가 죽음", ""], ["예수님이 베다니에 오심", "나사로 부활 사건의 핵심 흐름: 예수님이 베다니에 오심", ""], ["무덤 앞에서 부르심", "나사로 부활 사건의 핵심 흐름: 무덤 앞에서 부르심", ""], ["나사로가 살아나옴", "나사로 부활 사건의 핵심 흐름: 나사로가 살아나옴", ""]] },
  "triumphal-entry": { flow:[["나귀를 준비함", "예루살렘 입성 사건의 핵심 흐름: 나귀를 준비함", ""], ["예루살렘으로 입성", "예루살렘 입성 사건의 핵심 흐름: 예루살렘으로 입성", ""], ["호산나 외침", "예루살렘 입성 사건의 핵심 흐름: 호산나 외침", ""], ["성전을 향해 나아감", "예루살렘 입성 사건의 핵심 흐름: 성전을 향해 나아감", ""]] },
  "last-supper": { flow:[["유월절 식사 준비", "최후의 만찬 사건의 핵심 흐름: 유월절 식사 준비", ""], ["떡과 잔을 주심", "최후의 만찬 사건의 핵심 흐름: 떡과 잔을 주심", ""], ["제자들의 발을 씻기심", "최후의 만찬 사건의 핵심 흐름: 제자들의 발을 씻기심", ""], ["새 언약을 말씀하심", "최후의 만찬 사건의 핵심 흐름: 새 언약을 말씀하심", ""]] },
  "gethsemane": { flow:[["겟세마네로 가심", "겟세마네 기도 사건의 핵심 흐름: 겟세마네로 가심", ""], ["고뇌하며 기도하심", "겟세마네 기도 사건의 핵심 흐름: 고뇌하며 기도하심", ""], ["제자들이 잠듦", "겟세마네 기도 사건의 핵심 흐름: 제자들이 잠듦", ""], ["아버지의 뜻에 순종하심", "겟세마네 기도 사건의 핵심 흐름: 아버지의 뜻에 순종하심", ""]] },
  "cross": { flow:[["재판과 조롱", "십자가 사건의 핵심 흐름: 재판과 조롱", ""], ["골고다로 가심", "십자가 사건의 핵심 흐름: 골고다로 가심", ""], ["십자가에 못 박힘", "십자가 사건의 핵심 흐름: 십자가에 못 박힘", ""], ["다 이루었다고 선포하심", "십자가 사건의 핵심 흐름: 다 이루었다고 선포하심", ""]] },
  "resurrection": { flow:[["빈 무덤 발견", "부활 사건의 핵심 흐름: 빈 무덤 발견", ""], ["천사의 선언", "부활 사건의 핵심 흐름: 천사의 선언", ""], ["부활하신 주님을 만남", "부활 사건의 핵심 흐름: 부활하신 주님을 만남", ""], ["제자들에게 나타나심", "부활 사건의 핵심 흐름: 제자들에게 나타나심", ""]] },
  "pentecost-promise": { flow:[["예루살렘에 머물라 명령", "오순절 약속 사건의 핵심 흐름: 예루살렘에 머물라 명령", ""], ["성령 약속", "오순절 약속 사건의 핵심 흐름: 성령 약속", ""], ["증인의 사명 선포", "오순절 약속 사건의 핵심 흐름: 증인의 사명 선포", ""], ["기다림의 시간", "오순절 약속 사건의 핵심 흐름: 기다림의 시간", ""]] },
  "ascension": { flow:[["감람산에 모임", "승천 사건의 핵심 흐름: 감람산에 모임", ""], ["마지막 명령을 주심", "승천 사건의 핵심 흐름: 마지막 명령을 주심", ""], ["하늘로 올라가심", "승천 사건의 핵심 흐름: 하늘로 올라가심", ""], ["다시 오심이 약속됨", "승천 사건의 핵심 흐름: 다시 오심이 약속됨", ""]] },
  "pentecost": { flow:[["성령 강림", "성령 강림", ""], ["방언으로 복음 선포", "방언으로 복음 선포", ""], ["베드로의 설교", "베드로의 설교", ""], ["삼천 명 회심", "삼천 명 회심", ""], ["교회 공동체의 시작", "교회 공동체의 시작", ""]] },
  "stephen": { flow:[["일곱 집사 세움", "일곱 집사 세움", ""], ["스데반의 지혜로운 증언", "스데반의 지혜로운 증언", ""], ["공회 앞 설교", "공회 앞 설교", ""], ["하늘 보좌 환상", "하늘 보좌 환상", ""], ["첫 순교", "첫 순교", ""]] },
  "paul-conversion": { flow:[["사울의 박해", "사울의 박해", ""], ["다메섹 길의 빛", "다메섹 길의 빛", ""], ["예수님의 음성", "예수님의 음성", ""], ["아나니아의 안수", "아나니아의 안수", ""], ["바울의 사명 시작", "바울의 사명 시작", ""]] },
  "paul-1st": { flow:[["안디옥 교회의 파송", "안디옥 교회의 파송", ""], ["구브로 선교", "구브로 선교", ""], ["비시디아 안디옥 설교", "비시디아 안디옥 설교", ""], ["이고니온·루스드라 사역", "이고니온·루스드라 사역", ""], ["교회 세움과 귀환", "교회 세움과 귀환", ""]] },
  "jerusalem-council": { flow:[["할례 논쟁 발생", "할례 논쟁 발생", ""], ["바울과 바나바의 예루살렘 방문", "바울과 바나바의 예루살렘 방문", ""], ["베드로의 증언", "베드로의 증언", ""], ["야고보의 정리", "야고보의 정리", ""], ["이방 교회에 결정 전달", "이방 교회에 결정 전달", ""]] },
  "paul-2nd": { flow:[["바울과 실라의 출발", "바울과 실라의 출발", ""], ["디모데 합류", "디모데 합류", ""], ["마게도냐 환상", "마게도냐 환상", ""], ["빌립보·데살로니가·베뢰아 사역", "빌립보·데살로니가·베뢰아 사역", ""], ["아덴과 고린도 사역", "아덴과 고린도 사역", ""]] },
  "paul-3rd": { flow:[["에베소 장기 사역", "에베소 장기 사역", ""], ["두란노 서원 강론", "두란노 서원 강론", ""], ["우상 산업과 충돌", "우상 산업과 충돌", ""], ["마게도냐와 헬라 방문", "마게도냐와 헬라 방문", ""], ["밀레도 고별 설교", "밀레도 고별 설교", ""]] },
  "rome-transfer": { flow:[["예루살렘 체포", "예루살렘 체포", ""], ["가이사랴 재판", "가이사랴 재판", ""], ["가이사에게 상소", "가이사에게 상소", ""], ["폭풍과 난파", "폭풍과 난파", ""], ["로마 도착과 복음 증언", "로마 도착과 복음 증언", ""]] },
  "john-patmos": { flow:[["요한의 밧모섬 유배", "요한의 밧모섬 유배", ""], ["주의 날에 계시를 받음", "주의 날에 계시를 받음", ""], ["부활하신 그리스도의 나타나심", "부활하신 그리스도의 나타나심", ""], ["일곱 교회에 편지", "일곱 교회에 편지", ""], ["새 창조 소망 제시", "새 창조 소망 제시", ""]] },
  "seven-churches": { flow:[["밧모섬의 요한에게 계시가 임함", "밧모섬의 요한에게 계시가 임함", ""], ["일곱 교회에 편지가 주어짐", "일곱 교회에 편지가 주어짐", ""], ["칭찬과 책망이 선포됨", "칭찬과 책망이 선포됨", ""], ["이기는 자에게 약속이 주어짐", "이기는 자에게 약속이 주어짐", ""], ["교회가 재림을 준비하도록 부름받음", "교회가 재림을 준비하도록 부름받음", ""]] },
  "seven-seals": { flow:[["보좌 앞 두루마리 등장", "보좌 앞 두루마리 등장", ""], ["어린양이 두루마리를 받음", "어린양이 두루마리를 받음", ""], ["일곱 인이 차례로 열림", "일곱 인이 차례로 열림", ""], ["재앙과 심판이 진행됨", "재앙과 심판이 진행됨", ""], ["성도들의 기도와 구원이 드러남", "성도들의 기도와 구원이 드러남", ""]] },
  "beast-tribulation": { flow:[["용의 대적 활동", "용의 대적 활동", ""], ["바다에서 올라온 짐승", "바다에서 올라온 짐승", ""], ["땅에서 올라온 짐승", "땅에서 올라온 짐승", ""], ["우상 숭배와 표 강요", "우상 숭배와 표 강요", ""], ["성도들의 인내와 믿음 요청", "성도들의 인내와 믿음 요청", ""]] },
  "armageddon": { flow:[["악한 영들이 왕들을 모음", "악한 영들이 왕들을 모음", ""], ["아마겟돈 전쟁 준비", "아마겟돈 전쟁 준비", ""], ["그리스도의 재림", "그리스도의 재림", ""], ["짐승과 거짓 선지자 심판", "짐승과 거짓 선지자 심판", ""], ["하나님의 최종 승리 선포", "하나님의 최종 승리 선포", ""]] },
  "new-jerusalem": { flow:[["새예루살렘이 하늘에서 내려옴", "새예루살렘이 하늘에서 내려옴", ""], ["하나님의 장막이 사람들과 함께함", "하나님의 장막이 사람들과 함께함", ""], ["눈물과 죽음과 고통이 사라짐", "눈물과 죽음과 고통이 사라짐", ""], ["성의 영광과 거룩함이 드러남", "성의 영광과 거룩함이 드러남", ""], ["어린양이 성의 빛이 되심", "어린양이 성의 빛이 되심", ""]] },
  "new-heaven-earth": { flow:[["처음 하늘과 땅이 지나감", "처음 하늘과 땅이 지나감", ""], ["새 하늘과 새 땅이 나타남", "새 하늘과 새 땅이 나타남", ""], ["생명수 강과 생명나무", "생명수 강과 생명나무", ""], ["저주가 사라짐", "저주가 사라짐", ""], ["하나님의 종들이 영원히 왕 노릇함", "하나님의 종들이 영원히 왕 노릇함", ""]] }
});

// v55 종말과 새창조 6.핵심사건 인포그래픽 원문형 보정
Object.assign(EVENT_ENRICH, {
  "seven-churches": { flow:[["에베소", "처음 사랑을 버린 교회", "주님이 나타나신 모습: 일곱 별을 오른손에 가지시고 일곱 금 촛대 사이에 서신 이<br>칭찬: 수고와 인내, 악한 자를 시험하여 거짓을 드러냄<br>책망: 처음 사랑을 버림<br>권면: 처음 행위를 기억하고 회개하여 행하라<br>약속: 생명나무의 열매를 먹게 하심"], ["서머나", "환난 중에도 믿음을 지킨 교회", "주님이 나타나신 모습: 처음과 나중이 되시며 죽었다가 살아나신 이<br>칭찬: 환난과 가난 중에도 믿음을 지킴<br>책망: 없음<br>권면: 장차 받을 고난을 두려워하지 말라<br>약속: 둘째 사망의 해를 받지 아니함"], ["버가모", "믿음을 지켰으나 거짓 교훈을 허용한 교회", "주님이 나타나신 모습: 날선 검을 가지신 이<br>칭찬: 주님의 이름을 굳게 잡고 믿음을 지킴<br>책망: 발람의 교훈과 니골라당의 행위<br>권면: 회개하라<br>약속: 만나를 주시고 흰 돌과 새 이름"], ["두아디라", "사랑과 섬김은 있으나 우상숭배를 용납한 교회", "주님이 나타나신 모습: 하나님의 아들이시며 눈이 불꽃 같으신 이<br>칭찬: 사랑과 섬김과 믿음과 인내와 마지막 행위가 처음보다 많음<br>책망: 이세벨의 가르침과 음행과 우상숭배<br>권면: 그 행위를 회개하라<br>약속: 만국을 다스릴 권세와 새벽 별"], ["사데", "이름은 살았으나 영적으로 죽은 교회", "주님이 나타나신 모습: 일곱 영과 일곱 별을 가지신 이<br>칭찬: 이름은 살았으나 죽은 자<br>책망: 영적으로 죽어 있음<br>권면: 깨어 회개하고 남은 바를 굳게 하라<br>약속: 흰 옷과 생명책에 이름을 기록"], ["빌라델비아", "작은 능력으로 말씀을 지킨 교회", "주님이 나타나신 모습: 거룩하고 참되신 이, 다윗의 열쇠를 가지신 이<br>칭찬: 작은 능력이나 말씀을 지키고 주의 이름을 부인하지 않음<br>책망: 없음<br>권면: 내가 열어둔 문을 닫을 자가 없으니 지키라<br>약속: 하나님의 성전에 기둥이 되게 함"], ["라오디게아", "미지근하여 책망받은 교회", "주님이 나타나신 모습: 아멘이시며 충성되고 참된 증인이신 이<br>칭찬: 없음<br>책망: 차지도 뜨겁지도 아니한 미지근함, 자기 부요함에 속음<br>권면: 금·흰 옷·안약을 사라, 회개하라<br>약속: 내가 문 밖에 서서 두드리노니 열면 함께 먹으리라"]] },
  "seven-seals": { flow:[["첫째 인 흰 말", "정복하는 자가 나아가 활과 면류관을 받음", "계 6:1-2"], ["둘째 인 붉은 말", "큰 전쟁이 일어나 평화가 사라짐", "계 6:3-4"], ["셋째 인 검은 말", "기근이 있어 한 데나리온에 보리 한 되나 밀 한 되가 됨", "계 6:5-6"], ["넷째 인 청황색 말", "사망과 음부가 권세를 받음", "계 6:7-8"], ["다섯째 인 순교하는 영혼들", "제단 아래서 순교한 자들의 부르짖음과 흰 옷을 받음", "계 6:9-11"], ["여섯째 인 자연 재앙", "해가 검어지고 달이 붉어지며 별들이 떨어지고 땅과 하늘이 진동함", "계 6:12-17"], ["일곱째 인 하늘의 침묵", "하늘에 약 반 시간 동안 침묵이 있음", "계 8:1"]] },
  "beast-tribulation": { flow:[["짐승의 등장", "바다에서 일곱 머리 열 뿔 가진 짐승이 올라와 권세를 받음", "계 13:1-2"], ["두 번째 짐승 등장", "땅에서 두 뿔 가진 다른 짐승이 올라와 표적과 이적을 행함", "계 13:11-12"], ["짐승의 우상", "첫째 짐승의 형상을 만들어 생명을 주어 경배하게 함", "계 13:14-15"], ["짐승의 표(666)", "모든 사람에게 표를 받게 하여 사고팔지 못하게 함", "계 13:16-17"], ["큰 환난", "생명책에 기록되지 않은 자들이 큰 환난을 당함", "계 7:14"], ["하나님의 심판", "일곱 대접 심판으로 짐승의 나라와 세상 시스템이 무너짐", "계 16장"], ["짐승의 멸망", "그리스도께서 재림하여 짐승과 거짓 선지자를 불못에 던지심", "계 19:19-21"]] },
  "armageddon": { flow:[["악의 세력 집결", "온 세상의 왕들이 아마겟돈으로 모여 전쟁을 준비함", "계 16:13-14"], ["하나님의 진노", "일곱 대접 재앙과 하나님의 진노가 세상에 임함", "계 16:15-16"], ["그리스도의 재림", "예수 그리스도께서 하늘의 군대와 함께 영광으로 강림하심", "계 19:11-16"], ["아마겟돈 전투", "아마겟돈 평야에서 그리스도와 악의 세력 사이에 전쟁이 일어남", "계 19:17-21"], ["악의 세력 심판", "적그리스도와 거짓 선지자와 사탄이 불못에 던져짐", "계 19:20, 20:10"], ["사탄의 결박", "사탄이 천 년 동안 무저갱에 결박되어 더 이상 미혹하지 못함", "계 20:1-3"], ["천년왕국 시작", "의로운 왕국이 땅에 세워지고 평화와 정의가 가득함", "계 20:4-6"]] },
  "new-jerusalem": { flow:[["예수님 재림", "주 예수께서 영광 가운데 재림하심", "계 19:11-16"], ["최후 심판", "죽은 자들을 심판하시고 악인들은 영원한 심판을 받음", "계 20:11-15"], ["옛 하늘과 옛 땅 소멸", "하늘과 땅과 바다가 사라지고 모든 것이 새롭게 됨", "계 20:11, 계 21:1"], ["새 하늘과 새 땅", "의가 거하는 새 하늘과 새 땅이 창조됨", "계 21:1"], ["새예루살렘 하강", "하나님께로부터 새예루살렘이 하늘에서 내려옴", "계 21:2"], ["하나님 임재와 교제", "하나님이 성막을 치시고 성도들과 영원히 함께 거하심", "계 21:3-4"], ["영원한 생명과 기쁨", "눈물, 죽음, 슬픔이 없고 영원한 생명과 기쁨을 누림", "계 21:4-27, 22:1-5"]] },
  "new-heaven-earth": { flow:[["사탄의 최후 패배", "사탄이 불못에 던져져 영원히 결박됨", "계 20:7-10"], ["큰 흰 보좌 심판", "죽은 자들이 심판을 받고 사망과 음부가 불못에 던져짐", "계 20:11-15"], ["첫 하늘과 첫 땅 소멸", "첫 하늘과 첫 땅이 사라져 바다도 다시 있지 아니함", "계 21:1"], ["새 하늘과 새 땅 창조", "하나님이 새 하늘과 새 땅을 창조하심", "계 21:1"], ["새 예루살렘 하강", "새 예루살렘이 하늘에서 내려와 신부처럼 단장함", "계 21:2"], ["하나님과 영원한 교제", "하나님이 친히 그들과 함께 거하시며 그들은 하나님의 백성이 됨", "계 21:3-4"], ["모든 것의 완전 회복", "눈물과 슬픔과 고통과 사망이 다시 없으며 영원한 기쁨이 있음", "계 21:4"]] }
});


// v60 족장시대 추가 핵심사건 상세 데이터 - 반드시 전체 const 선언 이후 실행
Object.assign(EVENTS, {
  "isaac-birth":{
    title:"이삭의 출생", era:"족장 시대", year:"BC 2066경", scripture:"창세기 21장",
    place:"브엘세바 일대", people:["하나님","아브라함","사라","이삭"],
    summary:"하나님이 약속하신 때에 아브라함과 사라에게 이삭이 태어난 사건입니다. 인간적으로 불가능해 보였던 상황 속에서 하나님의 언약이 실제 역사 속에서 성취되기 시작합니다.",
    core:["하나님의 약속 재확인","사라의 임신과 이삭 출생","이삭이라는 이름의 의미","약속의 자녀를 통한 언약 계승"],
    meaning:["하나님의 약속은 사람의 한계를 넘어 반드시 성취됨","이삭은 언약 계승의 핵심 인물로 세워짐","웃음과 기쁨 속에 하나님의 신실하심이 드러남"],
    connect:["아브라함 언약","약속의 아들","모리아산 사건","그리스도 예표"],
    visual:"브엘세바 위치, 족장 가문의 언약 계보, 이삭 출생 장면",
    image:"assets/infographics/101_isaac_birth.png"
  },
  "isaac-rebekah":{
    title:"이삭과 리브가의 결혼", era:"족장 시대", year:"BC 2026경", scripture:"창세기 24장",
    place:"하란, 브엘라해로이, 가나안", people:["아브라함","아브라함의 종","이삭","리브가","라반"],
    summary:"아브라함의 종이 하란으로 가서 하나님의 인도하심 가운데 리브가를 만나고, 리브가가 이삭의 아내가 되어 언약 가문이 이어지는 사건입니다.",
    core:["아브라함의 결혼 지시","종의 기도","우물가에서 리브가를 만남","리브가의 결단","이삭과 리브가의 결혼"],
    meaning:["언약 가문은 하나님의 섭리 속에서 보존됨","기도와 순종을 통해 하나님의 인도하심이 드러남","이삭과 리브가의 결혼은 언약 계승의 중요한 전환점임"],
    connect:["언약 계승","하란 이동 경로","신부 이미지","하나님의 인도"],
    visual:"하란에서 가나안으로 이어지는 이동 경로와 우물가 장면",
    image:"assets/infographics/102_isaac_rebekah.png"
  },
  "birthright-stew":{
    title:"야곱과 에서의 팥죽 장자권", era:"족장 시대", year:"BC 2000경 전후", scripture:"창세기 25장",
    place:"가나안 브엘세바 일대", people:["이삭","리브가","에서","야곱"],
    summary:"에서가 허기 때문에 장자권을 가볍게 여기고 야곱에게 팥죽 한 그릇에 팔아버린 사건입니다. 언약의 가치와 영적 우선순위를 보여주는 장면입니다.",
    core:["에서와 야곱의 성장","에서의 허기와 팥죽 요구","야곱의 장자권 요구","에서의 장자권 맹세와 거래","장자권을 가볍게 여긴 결과"],
    meaning:["영적 가치를 가볍게 여기면 큰 손실을 가져옴","장자권은 단순한 가족 서열이 아니라 언약 계승과 연결됨","하나님의 선택과 인간의 책임이 함께 드러남"],
    connect:["장자권","언약 계승","야곱의 벧엘 체험","이스라엘 이름"],
    visual:"팥죽 장면, 장자권 거래 흐름도, 에돔과 이스라엘의 관계 개념도",
    image:"assets/infographics/103_birthright_stew.png"
  },
  "jacob-egypt":{
    title:"야곱 가족의 애굽 이주", era:"족장 시대", year:"BC 1876경", scripture:"창세기 46~47장",
    place:"가나안 브엘세바에서 애굽 고센 땅", people:["야곱","요셉","바로","야곱의 아들들"],
    summary:"가나안의 기근 가운데 야곱 가족이 요셉의 초청으로 애굽 고센 땅에 정착한 사건입니다. 훗날 출애굽 사건의 역사적 배경이 됩니다.",
    core:["가나안의 기근","요셉의 가족 초청","브엘세바에서 하나님의 말씀을 들음","야곱 가족의 애굽 이동","고센 땅 정착"],
    meaning:["하나님은 기근 속에서도 언약 가족을 보존하심","애굽 이주는 출애굽과 이스라엘 민족 형성의 준비 과정임","요셉의 고난은 가족과 민족을 살리는 통로가 됨"],
    connect:["요셉 총리 등극","고센 땅","출애굽 준비","언약 백성의 보존"],
    visual:"가나안에서 고센으로 이동하는 경로와 나일강 삼각주 개념도",
    image:"assets/infographics/104_jacob_egypt.png"
  }
});

Object.assign(EVENT_MAP_CROPS, {
  "isaac-birth":"assets/maps/101_isaac_birth_map.png",
  "isaac-rebekah":"assets/maps/102_isaac_rebekah_map.png",
  "birthright-stew":"assets/maps/103_birthright_stew_map.png",
  "jacob-egypt":"assets/maps/104_jacob_egypt_map.png"
});

Object.assign(ORIGINAL_INFOGRAPHICS, {
  "isaac-birth":"assets/infographics/101_isaac_birth.png",
  "isaac-rebekah":"assets/infographics/102_isaac_rebekah.png",
  "birthright-stew":"assets/infographics/103_birthright_stew.png",
  "jacob-egypt":"assets/infographics/104_jacob_egypt.png"
});

Object.assign(EVENT_ENRICH, {
  "isaac-birth":{
    flowTitle:"핵심사건 흐름",
    flow:[["약속","하나님이 아브라함에게 후손과 언약을 약속하심","창 17:19"],["방문","하나님이 사라에게 아들이 있을 것을 다시 말씀하심","창 18:10"],["출생","정하신 때에 사라가 이삭을 낳음","창 21:1-3"],["이름","아브라함이 아들의 이름을 이삭이라 함","창 21:3"],["언약 계승","이삭을 통해 언약의 계보가 이어짐","창 21:12"]],
    scriptureRefs:[["창세기 17:19","사라가 네게 아들을 낳으리니 너는 그 이름을 이삭이라 하라"],["창세기 21:1-7","여호와께서 말씀하신 대로 사라를 돌보셨고 이삭이 태어남"],["로마서 4:18-21","아브라함은 하나님의 약속을 믿음으로 굳게 섬"]],
    visualItems:["브엘세바 위치","족장 가문 계보","약속의 아들 이삭"]
  },
  "isaac-rebekah":{
    flowTitle:"핵심사건 흐름",
    flow:[["파송","아브라함이 종을 하란으로 보냄","창 24:1-9"],["기도","종이 우물가에서 하나님의 인도를 구함","창 24:12-14"],["만남","리브가가 나타나 물을 길어 줌","창 24:15-21"],["확인","리브가의 집에서 하나님의 인도하심을 설명함","창 24:34-49"],["결단","리브가가 가겠다고 응답함","창 24:58"],["결혼","이삭이 리브가를 아내로 맞이함","창 24:67"]],
    scriptureRefs:[["창세기 24장","이삭과 리브가의 결혼 전체 이야기"],["창세기 24:27","여호와께서 나를 바른 길로 인도하사"],["창세기 24:67","이삭이 리브가를 사랑하였으니"]],
    visualItems:["하란-가나안 이동 경로","우물가 만남","언약 가문 계승"]
  },
  "birthright-stew":{
    flowTitle:"핵심사건 흐름",
    flow:[["쌍둥이","에서와 야곱이 태어나고 각기 다른 성향으로 자람","창 25:24-28"],["허기","에서가 들에서 돌아와 심히 피곤함","창 25:29"],["요구","에서가 야곱에게 붉은 죽을 달라고 함","창 25:30"],["거래","야곱이 장자권을 요구함","창 25:31"],["맹세","에서가 장자권을 팔기로 맹세함","창 25:33"],["경시","에서가 장자의 명분을 가볍게 여김","창 25:34"]],
    scriptureRefs:[["창세기 25:29-34","야곱과 에서의 장자권 거래"],["히브리서 12:16-17","에서가 한 그릇 음식을 위하여 장자의 명분을 판 자로 언급됨"],["로마서 9:10-13","야곱과 에서의 선택 문제"]],
    visualItems:["팥죽과 장자권 거래","브엘세바 일대","언약 계승 흐름"]
  },
  "jacob-egypt":{
    flowTitle:"핵심사건 흐름",
    flow:[["기근","가나안에 기근이 심해짐","창 43:1"],["초청","요셉이 가족을 애굽으로 초청함","창 45:9-11"],["브엘세바","야곱이 브엘세바에서 하나님께 제사드림","창 46:1"],["말씀","하나님이 애굽으로 내려가기를 두려워하지 말라 하심","창 46:2-4"],["이주","야곱 가족이 애굽으로 이동함","창 46:5-7"],["상봉","야곱과 요셉이 고센에서 만남","창 46:29"],["정착","야곱 가족이 고센 땅에 거주함","창 47:6"]],
    scriptureRefs:[["창세기 45:16-28","요셉이 가족을 애굽으로 부름"],["창세기 46장","야곱 가족의 애굽 이주"],["창세기 47:1-12","고센 땅 정착"],["출애굽기 1:1-7","애굽에서 이스라엘 자손이 번성함"]],
    visualItems:["가나안-애굽 고센 이동 경로","나일강 삼각주","출애굽 배경"]
  }
});

Object.assign(EVENT_EXPLORE, {
  "isaac-birth":{items:[{title:"아브라함 언약",desc:"약속의 출발"},{title:"약속의 아들",desc:"불가능 속 성취"},{title:"이삭 번제",desc:"믿음의 시험"},{title:"그리스도",desc:"참 약속의 씨"}]},
  "isaac-rebekah":{items:[{title:"하나님의 인도",desc:"기도와 응답"},{title:"언약 계승",desc:"가문 보존"},{title:"신부 이미지",desc:"교회 예표"},{title:"야곱과 에서",desc:"다음 세대"}]},
  "birthright-stew":{items:[{title:"장자권",desc:"언약의 가치"},{title:"영적 우선순위",desc:"무엇을 귀하게 보는가"},{title:"야곱",desc:"언약 계승자"},{title:"에서",desc:"경솔한 선택"}]},
  "jacob-egypt":{items:[{title:"요셉의 섭리",desc:"고난이 구원으로"},{title:"고센 땅",desc:"민족 보존"},{title:"출애굽",desc:"다음 큰 사건"},{title:"언약 성취",desc:"큰 민족 준비"}]}
});


// v62 가나안 정복 시대 추가 핵심사건: 할례와 길갈의 유월절, 여호수아의 유언과 세겜 언약
Object.assign(ALL_EVENT_TITLES, {
  "circumcision-gilgal-passover":"할례와 길갈의 유월절",
  "joshua-shechem-covenant":"여호수아의 유언과 세겜 언약"
});

Object.assign(EVENTS, {
  "circumcision-gilgal-passover": {
    title:"할례와 길갈의 유월절", era:"가나안 정복", year:"BC 1406년경", scripture:"여호수아 5장",
    place:"길갈, 여리고 동쪽", people:["하나님","여호수아","이스라엘 백성","새 세대","제사장들"],
    summary:"요단강을 건넌 새 세대가 길갈에서 할례를 받고 유월절을 지키며 언약 백성의 정체성을 회복한 사건입니다.",
    core:["요단강 도하 후 길갈에 진을 침","광야 세대 이후 새 세대가 할례를 받음","하나님이 애굽의 수치를 굴러가게 하심","가나안 땅에서 유월절을 지킴","그 땅의 소산을 먹기 시작함","만나가 그침","여리고 정복을 앞두고 언약 백성으로 재정비됨"],
    meaning:["가나안 정복은 전쟁 이전에 언약 회복으로 시작됨","할례는 하나님 백성의 정체성을 다시 확인하는 표징임","유월절은 출애굽 구원을 기억하며 새 땅에서 새 출발하는 예배임","만나가 그치고 땅의 소산을 먹은 것은 광야 훈련에서 약속의 땅 생활로 넘어감을 뜻함"],
    connect:["요단강 도하","할례","유월절","만나의 그침","여리고 함락"],
    visual:"길갈 위치, 여리고 동쪽, 요단강 도하 후 진영, 유월절 식탁", image:"assets/infographics/111_circumcision_gilgal_passover.png"
  },
  "joshua-shechem-covenant": {
    title:"여호수아의 유언과 세겜 언약", era:"가나안 정복", year:"BC 1375년경 전후", scripture:"여호수아 23~24장",
    place:"세겜", people:["하나님","여호수아","이스라엘 장로들","이스라엘 백성","요셉 지파"],
    summary:"여호수아가 말년에 이스라엘을 모아 하나님의 구원 역사를 회고하고, 세겜에서 오직 여호와만 섬기겠다는 언약을 새롭게 한 사건입니다.",
    core:["여호수아가 이스라엘 지도자들을 부름","하나님이 행하신 정복과 구원을 회고함","다른 신들을 버리라고 명령함","백성에게 섬길 자를 선택하라고 촉구함","백성이 여호와를 섬기겠다고 응답함","세겜에서 언약을 세우고 큰 돌을 증거로 삼음","여호수아가 죽고 한 시대가 마무리됨"],
    meaning:["가나안 정복의 결론은 땅의 소유가 아니라 하나님만 섬기는 언약적 충성임","신앙은 다음 세대에게 선택과 책임으로 전수되어야 함","세겜 언약은 족장 언약과 출애굽 구원을 가나안 생활 속에서 재확인한 사건임","여호수아의 유언은 사사시대의 타락을 대비시키는 기준점이 됨"],
    connect:["아브라함 언약","가나안 땅 분배","세겜","언약 갱신","사사기의 악순환"],
    visual:"세겜 위치, 에발산과 그리심산, 언약의 돌, 지파 대표 모임", image:"assets/infographics/112_joshua_shechem_covenant.png"
  }
});

Object.assign(EVENT_ENRICH, {
  "circumcision-gilgal-passover": {flowTitle:"핵심사건", flow:[["길갈 진영","요단강을 건넌 이스라엘이 길갈에 진을 침", ""],["할례 시행","광야에서 태어난 새 세대가 할례를 받음", ""],["수치 제거","하나님이 애굽의 수치를 굴러가게 하심", ""],["유월절 준수","가나안 땅에서 유월절을 지킴", ""],["땅의 소산","그 땅의 곡식을 먹기 시작함", ""],["만나 그침","광야의 만나 공급이 마무리됨", ""],["정복 준비","언약 백성으로 여리고 정복을 준비함", ""]], scriptureRefs:[["여호수아 5장","길갈 할례와 유월절"],["출애굽기 12장","첫 유월절"],["창세기 17장","할례 언약"],["고린도전서 5:7","그리스도 우리의 유월절 양"]], visualItems:["길갈", "요단강", "여리고 동쪽", "유월절"]},
  "joshua-shechem-covenant": {flowTitle:"핵심사건", flow:[["지도자 소집","여호수아가 장로와 지도자들을 부름", ""],["구원 역사 회고","아브라함부터 출애굽과 가나안 정복까지 회고함", ""],["우상 제거 촉구","이방 신들을 버리고 여호와만 섬기라 명함", ""],["선택 요청","오늘 너희가 섬길 자를 택하라 말함", ""],["백성의 응답","백성이 여호와만 섬기겠다고 고백함", ""],["언약 갱신","세겜에서 언약을 세우고 율례와 법도를 기록함", ""],["증거의 돌","큰 돌을 세워 언약의 증거로 삼음", ""]], scriptureRefs:[["여호수아 23장","여호수아의 고별 권면"],["여호수아 24장","세겜 언약"],["신명기 30장","생명과 복의 선택"],["사사기 2장","다음 세대의 타락과 대비"]], visualItems:["세겜", "에발산", "그리심산", "언약의 돌"]}
});

Object.assign(EVENT_EXPLORE, {
  "circumcision-gilgal-passover": {title:"8. 연결탐험", items:[{title:"요단강 도하", desc:"약속의 땅 입성"},{title:"할례", desc:"언약 백성의 표"},{title:"유월절", desc:"출애굽 구원 기억"},{title:"만나의 그침", desc:"광야에서 가나안으로"},{title:"여리고 함락", desc:"정복의 시작"}]},
  "joshua-shechem-covenant": {title:"8. 연결탐험", items:[{title:"세겜", desc:"언약의 장소"},{title:"아브라함 언약", desc:"약속의 땅"},{title:"가나안 분배", desc:"약속의 성취"},{title:"오직 여호와", desc:"신앙의 선택"},{title:"사사기", desc:"언약 망각의 결과"}]}
});

Object.assign(EVENT_MAP_CROPS, {
  "circumcision-gilgal-passover":"assets/maps/111_circumcision_gilgal_passover_map.png",
  "joshua-shechem-covenant":"assets/maps/112_joshua_shechem_covenant_map.png"
});


// v66 전수 보강: 누락된 원본/지도 경로 자동 보완
Object.assign(ORIGINAL_INFOGRAPHICS, {
  "eli-samuel-birth":"assets/infographics/117_eli_samuel_birth.png",
  "gibeah-atrocity":"assets/infographics/116_gibeah_atrocity.png",
  "jephthah":"assets/infographics/115_jephthah.png",
  "joshua-shechem-covenant":"assets/infographics/112_joshua_shechem_covenant.png",
  "judges-cycle":"assets/infographics/113_judges_cycle.png",
  "micah-idol-levite":"assets/infographics/114_micah_idol_levite.png"
});
Object.assign(EVENT_MAP_CROPS, {
  "eli-samuel-birth":"assets/infographics/117_eli_samuel_birth.png",
  "gibeah-atrocity":"assets/infographics/116_gibeah_atrocity.png",
  "jephthah":"assets/infographics/115_jephthah.png",
  "judges-cycle":"assets/infographics/113_judges_cycle.png",
  "micah-idol-levite":"assets/infographics/114_micah_idol_levite.png"
});


// v69 통일왕국 시대 추가 핵심사건
Object.assign(EVENTS, {
  "saul-disobedience":{
    title:"사울왕의 불순종과 버림받음",
    era:"통일왕국",
    year:"BC 1050경 이후",
    scripture:"사무엘상 13장, 15장",
    place:"길갈, 아말렉 전쟁 지역",
    people:["사울","사무엘","아말렉","이스라엘 백성"],
    summary:"사울 왕이 하나님의 명령을 온전히 순종하지 않고 자기 판단과 체면을 앞세우다가 왕위가 하나님께 버림받는 사건입니다.",
    core:["사울이 길갈에서 제사장 권한을 침범함","사무엘이 사울의 불순종을 책망함","아말렉을 진멸하라는 명령을 일부만 순종함","사울이 좋은 짐승과 아각 왕을 남김","사무엘이 순종이 제사보다 낫다고 선포함","하나님께서 사울을 왕으로 세우신 것을 후회하심"],
    meaning:["불완전한 순종은 불순종임","왕도 하나님의 말씀 아래 있어야 함","참된 왕은 말씀에 온전히 순종하는 분이어야 함"],
    connect:["순종","제사","왕권","다윗 선택","그리스도의 순종"],
    visual:"길갈과 아말렉 전쟁 개념도",
    image:"assets/infographics/118_saul_disobedience.png"
  },
  "david-fugitive-life":{
    title:"다윗의 도피생활",
    era:"통일왕국",
    year:"BC 1020경",
    scripture:"사무엘상 18~31장",
    place:"놉, 아둘람, 엔게디, 십 광야, 블레셋 지역",
    people:["다윗","사울","요나단","아비아달","아비가일"],
    summary:"다윗이 사울의 추격을 피해 광야와 여러 지역을 떠돌며 하나님의 때를 기다린 사건입니다.",
    core:["사울이 다윗을 시기하고 죽이려 함","요나단이 다윗을 돕고 언약을 맺음","다윗이 놉과 아둘람 굴로 피신함","다윗이 사울을 죽일 기회를 얻었지만 해치지 않음","광야 도피 중 공동체가 형성됨","사울의 죽음 이후 다윗 왕국의 길이 열림"],
    meaning:["하나님의 약속은 고난 속에서 준비됨","다윗은 보복보다 하나님의 때를 기다림","고난의 왕 다윗은 그리스도의 낮아지심을 예표함"],
    connect:["기름부음","광야","고난","하나님의 때","그리스도 왕권"],
    visual:"다윗 도피 경로 지도",
    image:"assets/infographics/119_david_fugitive_life.png"
  },
  "absalom-rebellion":{
    title:"압살롬의 반역",
    era:"통일왕국",
    year:"BC 980경",
    scripture:"사무엘하 13~19장",
    place:"예루살렘, 헤브론, 마하나임, 에브라임 수풀",
    people:["다윗","압살롬","요압","후새","아히도벨"],
    summary:"다윗의 아들 압살롬이 백성의 마음을 훔쳐 반역을 일으키고, 다윗이 예루살렘을 떠나 피신한 사건입니다.",
    core:["다윗 집안의 죄와 갈등이 깊어짐","압살롬이 백성의 마음을 얻음","압살롬이 헤브론에서 왕을 자처함","다윗이 예루살렘을 떠나 피신함","후새의 계략으로 아히도벨의 모략이 무너짐","압살롬이 전쟁 중 죽고 다윗은 슬퍼함"],
    meaning:["죄의 결과가 가정과 나라에 영향을 미침","권력욕은 공동체를 분열시킴","다윗의 슬픔은 심판 속에서도 자비를 갈망하는 마음을 보여줌"],
    connect:["다윗 언약","죄의 결과","반역","왕의 눈물","그리스도의 자비"],
    visual:"예루살렘-헤브론-마하나임 이동 지도",
    image:"assets/infographics/120_absalom_rebellion.png"
  }
});

Object.assign(EVENT_ENRICH, {
  "saul-disobedience":{
    flowTitle:"사울의 불순종 흐름",
    flow:[
      ["권한 침범","길갈에서 사울이 직접 제사를 드림",""],
      ["명령 일부 순종","아말렉 진멸 명령을 온전히 따르지 않음",""],
      ["변명","사울이 백성과 제사를 이유로 변명함",""],
      ["책망","사무엘이 순종이 제사보다 낫다고 선포함",""],
      ["버림받음","하나님께서 사울의 왕권을 거두심",""]
    ],
    scriptureRefs:[
      ["사무엘상 13장","사울이 길갈에서 기다리지 못하고 제사를 드림"],
      ["사무엘상 15장","사울의 아말렉 불순종과 사무엘의 책망"]
    ],
    visualItems:["길갈","아말렉 전쟁", "사울의 불순종"]
  },
  "david-fugitive-life":{
    flowTitle:"다윗의 도피생활 흐름",
    flow:[
      ["사울의 시기","사울이 다윗을 죽이려 함",""],
      ["요나단의 도움","요나단이 다윗을 보호하고 언약을 맺음",""],
      ["광야 도피","다윗이 놉·아둘람·엔게디 등으로 피신함",""],
      ["보복 거절","다윗이 사울을 죽일 기회를 얻었지만 해치지 않음",""],
      ["왕국 준비","고난 속에서 다윗의 리더십이 준비됨",""]
    ],
    scriptureRefs:[
      ["사무엘상 18~31장","다윗이 사울의 추격을 피해 도피한 시기"],
      ["사무엘상 24장, 26장","다윗이 사울을 살려 줌"]
    ],
    visualItems:["놉","아둘람","엔게디","십 광야","블레셋"]
  },
  "absalom-rebellion":{
    flowTitle:"압살롬 반역 흐름",
    flow:[
      ["가정의 균열","다윗 집안의 죄와 갈등이 깊어짐",""],
      ["민심 장악","압살롬이 백성의 마음을 훔침",""],
      ["반역 선포","압살롬이 헤브론에서 왕을 자처함",""],
      ["다윗 피신","다윗이 예루살렘을 떠나 마하나임으로 피함",""],
      ["반역 진압","압살롬이 죽고 반역이 끝남",""]
    ],
    scriptureRefs:[
      ["사무엘하 13~19장","압살롬의 반역과 다윗의 피난, 압살롬의 죽음"],
      ["사무엘하 18:33","다윗이 압살롬의 죽음을 슬퍼함"]
    ],
    visualItems:["예루살렘","헤브론","마하나임","에브라임 수풀"]
  }
});

Object.assign(EVENT_MAP_CROPS, {
  "saul-disobedience":"assets/maps/118_saul_disobedience_map.png",
  "david-fugitive-life":"assets/maps/119_david_fugitive_life_map.png",
  "absalom-rebellion":"assets/maps/120_absalom_rebellion_map.png"
});

Object.assign(ORIGINAL_INFOGRAPHICS, {
  "saul-disobedience":"assets/infographics/118_saul_disobedience.png",
  "david-fugitive-life":"assets/infographics/119_david_fugitive_life.png",
  "absalom-rebellion":"assets/infographics/120_absalom_rebellion.png"
});

Object.assign(EVENT_EXPLORE, {
  "saul-disobedience":{
    title:"8. 연결탐험",
    items:[
      {title:"순종", desc:"하나님 말씀에 대한 온전한 반응", ref:"삼상 15:22"},
      {title:"제사", desc:"형식보다 순종이 우선", ref:"삼상 15:22"},
      {title:"왕권", desc:"왕도 말씀 아래 있음", ref:"삼상 15:26"},
      {title:"다윗 선택", desc:"사울 이후 새 왕을 준비하심", ref:"삼상 16장"}
    ]
  },
  "david-fugitive-life":{
    title:"8. 연결탐험",
    items:[
      {title:"광야", desc:"약속의 사람을 준비하는 장소", ref:"삼상 22장"},
      {title:"요나단", desc:"언약적 우정과 보호", ref:"삼상 20장"},
      {title:"보복 거절", desc:"하나님의 때를 기다림", ref:"삼상 24장"},
      {title:"그리스도 왕권", desc:"고난받는 왕의 예표", ref:"눅 24:26"}
    ]
  },
  "absalom-rebellion":{
    title:"8. 연결탐험",
    items:[
      {title:"죄의 결과", desc:"다윗 집안에 남은 상처", ref:"삼하 12장"},
      {title:"반역", desc:"왕권을 빼앗으려는 욕망", ref:"삼하 15장"},
      {title:"왕의 눈물", desc:"심판 속 자비의 마음", ref:"삼하 18:33"},
      {title:"참된 왕", desc:"자기 백성을 위해 우시는 그리스도", ref:"눅 19:41"}
    ]
  }
});


// v70 분열왕국 시대 추가 핵심사건
Object.assign(EVENTS, {
  "ahab-jezebel-idolatry":{
    title:"아합왕과 이세벨의 우상숭배",
    era:"분열왕국",
    year:"BC 874~853경",
    scripture:"열왕기상 16~18장, 21장",
    place:"북이스라엘 사마리아, 이스르엘, 갈멜산",
    people:["아합","이세벨","엘리야","바알 선지자들","나봇"],
    summary:"북이스라엘 아합 왕과 이세벨이 바알 숭배를 국가적으로 확산시키며 이스라엘의 영적 타락을 심화시킨 사건입니다.",
    core:["아합이 이세벨과 결혼하고 바알 숭배를 도입함","사마리아에 바알 제단과 아세라를 세움","이세벨이 여호와의 선지자들을 박해함","엘리야가 가뭄 심판을 선포함","갈멜산 대결로 여호와만 참 하나님이심이 드러남","나봇의 포도원 사건으로 왕권의 탐욕과 불의가 드러남"],
    meaning:["우상숭배는 개인 문제가 아니라 공동체 전체를 무너뜨림","하나님은 타락한 권력과 거짓 예배를 심판하심","참된 예배와 말씀의 회복이 필요함"],
    connect:["우상숭배","바알","엘리야","갈멜산","참된 예배"],
    visual:"사마리아·이스르엘·갈멜산 위치 지도",
    image:"assets/infographics/121_ahab_jezebel_idolatry.png"
  },
  "naaman-healing":{
    title:"나아만 장군의 문둥병 치유",
    era:"분열왕국",
    year:"BC 850경",
    scripture:"열왕기하 5장",
    place:"아람, 사마리아, 요단강",
    people:["나아만","엘리사","이스라엘 소녀","게하시","아람 왕"],
    summary:"아람의 군대 장관 나아만이 엘리사의 말에 순종하여 요단강에 일곱 번 몸을 씻고 나병을 치유받은 사건입니다.",
    core:["나아만이 나병에 걸림","이스라엘 소녀가 엘리사를 소개함","나아만이 사마리아로 감","엘리사가 요단강에 일곱 번 씻으라 명함","나아만이 분노했으나 종들의 권면을 듣고 순종함","나아만이 치유받고 여호와만 참 하나님이심을 고백함"],
    meaning:["구원과 치유는 인간의 자격이 아니라 하나님의 은혜로 주어짐","겸손한 순종이 믿음의 길임","이방인에게도 하나님의 은혜가 열려 있음을 보여줌"],
    connect:["요단강","순종","치유","이방인 구원","은혜"],
    visual:"아람에서 사마리아와 요단강까지 이동 지도",
    image:"assets/infographics/122_naaman_healing.png"
  }
});

Object.assign(EVENT_ENRICH, {
  "ahab-jezebel-idolatry":{
    flowTitle:"아합과 이세벨의 우상숭배 흐름",
    flow:[
      ["바알 도입","아합이 이세벨과 결혼하고 바알 숭배를 북이스라엘에 들임",""],
      ["국가적 타락","사마리아에 바알 제단과 아세라가 세워짐",""],
      ["선지자 박해","이세벨이 여호와의 선지자들을 박해함",""],
      ["가뭄 심판","엘리야가 하나님의 심판으로 가뭄을 선포함",""],
      ["갈멜산 대결","여호와만 참 하나님이심이 드러남",""],
      ["불의의 왕권","나봇의 포도원 사건으로 탐욕과 불의가 폭로됨",""]
    ],
    scriptureRefs:[["열왕기상 16:29~34","아합이 바알 숭배를 도입하고 여호와 보시기에 악을 행함"],["열왕기상 18장","엘리야와 바알 선지자들의 갈멜산 대결"],["열왕기상 21장","나봇의 포도원 사건과 아합 집안에 대한 심판 선포"]],
    visualItems:["사마리아","이스르엘","갈멜산","바알 숭배"]
  },
  "naaman-healing":{
    flowTitle:"나아만 치유 흐름",
    flow:[
      ["고통","아람의 장군 나아만이 나병에 걸림",""],
      ["증언","이스라엘 소녀가 엘리사를 소개함",""],
      ["방문","나아만이 사마리아로 가서 엘리사를 찾음",""],
      ["말씀","엘리사가 요단강에 일곱 번 씻으라 명함",""],
      ["순종","나아만이 낮아져 요단강에 몸을 씻음",""],
      ["치유와 고백","나아만이 깨끗해지고 여호와만 참 하나님이심을 고백함",""]
    ],
    scriptureRefs:[["열왕기하 5장","나아만이 엘리사의 말씀에 순종하여 요단강에서 치유받음"],["누가복음 4:27","예수께서 나아만 사건을 언급하시며 하나님의 은혜가 이방인에게도 임함을 보여주심"]],
    visualItems:["아람","사마리아","요단강","일곱 번 씻음"]
  }
});

Object.assign(EVENT_MAP_CROPS, {
  "ahab-jezebel-idolatry":"assets/maps/121_ahab_jezebel_idolatry_map.png",
  "naaman-healing":"assets/maps/122_naaman_healing_map.png"
});

Object.assign(ORIGINAL_INFOGRAPHICS, {
  "ahab-jezebel-idolatry":"assets/infographics/121_ahab_jezebel_idolatry.png",
  "naaman-healing":"assets/infographics/122_naaman_healing.png"
});

Object.assign(EVENT_EXPLORE, {
  "ahab-jezebel-idolatry":{
    title:"8. 연결탐험",
    items:[
      {title:"바알 숭배", desc:"하나님을 대체한 거짓 예배", ref:"왕상 16장"},
      {title:"갈멜산", desc:"참 하나님이 드러난 대결", ref:"왕상 18장"},
      {title:"탐욕의 권력", desc:"나봇의 포도원 사건", ref:"왕상 21장"},
      {title:"참된 예배", desc:"하나님께 돌아가는 길", ref:"요 4:24"}
    ]
  },
  "naaman-healing":{
    title:"8. 연결탐험",
    items:[
      {title:"요단강", desc:"겸손한 순종의 자리", ref:"왕하 5장"},
      {title:"이방인 은혜", desc:"하나님의 구원은 국경을 넘음", ref:"눅 4:27"},
      {title:"말씀 순종", desc:"단순한 말씀에 순종함", ref:"왕하 5:10"},
      {title:"치유와 고백", desc:"여호와만 참 하나님", ref:"왕하 5:15"}
    ]
  }
});


Object.assign(EVENTS,{
  "cyrus-decree":{
    title:"고레스 왕의 조서",
    era:"유다멸망과 포로",
    year:"BC 539년경",
    scripture:"에스라 1장",
    place:"바벨론 → 예루살렘",
    people:["고레스 왕","스룹바벨","유다 백성"],
    summary:"바사 왕 고레스가 유다 백성의 귀환과 성전 재건을 허락한 사건입니다.",
    image:"assets/infographics/123_cyrus_decree.png"
  }
});

Object.assign(EVENT_ENRICH,{
  "cyrus-decree":{
    flowTitle:"고레스 왕의 조서 흐름",
    flow:[
      ["바벨론 멸망","바사가 바벨론을 정복함",""],
      ["조서 발표","고레스 왕이 귀환을 허락함",""],
      ["귀환 준비","백성들이 예루살렘 귀환을 준비함",""],
      ["성전 재건","귀환 후 성전 재건이 시작됨",""]
    ]
  }
});

Object.assign(EVENT_MAP_CROPS,{
  "cyrus-decree":"assets/maps/123_cyrus_decree_map.png"
});

Object.assign(ORIGINAL_INFOGRAPHICS,{
  "cyrus-decree":"assets/infographics/123_cyrus_decree.png"
});
