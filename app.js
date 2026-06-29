// Multi-language translation dataset
const translations = {
  ko: {
    // Navigation
    nav_about: "브랜드 소개",
    nav_spaces: "시설 안내",
    nav_programs: "프로그램",
    nav_location: "오시는 길",
    nav_reserve: "예약 문의",

    // Hero Section
    hero_tagline: "도시의 속도를 늦추는 곳",
    hero_title: "온전한 휴식을 위한<br>도심 속 오아시스",
    hero_desc: "을지로 한복판에서 마주하는 아늑한 웰니스 스파. 전통적인 미학과 현대적인 편안함이 어우러진 풋쌤 동대문점에서 지친 몸과 마음의 균형을 되찾으세요.",
    hero_btn_reserve: "지금 예약하기",
    hero_btn_explore: "공간 둘러보기",

    // About Section
    about_subtitle: "About Footsam",
    about_title: "을지로 3층에 마련된<span>아늑한 쉼터</span>",
    about_desc: "풋쌤 동대문점은 바쁜 일상을 살아가는 현대인들을 위한 프리미엄 테라피 공간입니다. 따뜻한 원목 인테리어와 간접 조명이 자아내는 차분한 분위기 속에서, 전문 테라피스트들의 정성 어린 관리가 제공됩니다. 몸의 피로뿐만 아니라 마음에 쌓인 스트레스까지 완전히 해소될 수 있도록 모든 디테일을 디자인했습니다.",
    about_h1: "전문 자격 테라피스트 직접 관리",
    about_h2: "매일 철저한 위생 및 소독 관리",
    about_h3: "아늑한 1인실 및 커플/단체실 완비",

    // Spaces Section
    spaces_subtitle: "Our Spaces",
    spaces_title: "머무는 것만으로도 치유가 되는 공간",
    tab_footbath: "웰컴 족욕",
    tab_lounge: "발 마사지 존",
    tab_rooms: "프라이빗 룸",
    
    space_fb_name: "편백나무 웰컴 족욕대",
    space_fb_desc: "관리를 시작하기 전, 따뜻한 물에 발을 담그고 차 한 잔과 함께 긴장을 푸는 웰컴 공간입니다. 친환경 편백나무로 제작되어 은은한 나무 향이 퍼지며, 은은한 간접 조명이 일상의 소음을 잊게 해줍니다.",
    space_fb_f1: "친환경 편백나무 온수 족욕",
    space_fb_f2: "체온을 높여 혈액순환을 돕는 웰컴 티 서비스",
    space_fb_f3: "동시 최대 5인 이용 가능한 여유로운 전용 석",

    space_lg_name: "오리엔탈 발 마사지 존",
    space_lg_desc: "편안하게 기울어지는 리클라이너 체어에 누워 집중 관리를 받는 메인 라운지입니다. 벽면에는 단아한 한국 전통 한복 미니어처 액자들이 걸려 있어 동양적인 미학을 선사하며, 넓은 통창을 통해 도심의 전경을 편안하게 조망할 수 있습니다.",
    space_lg_f1: "최고급 메모리폼 리클라이너 체어",
    space_lg_f2: "전통 미학이 살아있는 단아한 인테리어",
    space_lg_f3: "관리 중 시각적 편안함을 제공하는 조명 조도",

    space_rm_name: "프라이빗 테라피 룸",
    space_rm_desc: "온전히 나만의 시간에 집중할 수 있는 프라이빗한 개인 룸과 연인, 가족, 친구와 함께 이용하기 좋은 2인실 및 단체실이 준비되어 있습니다. 부드러운 패브릭 톤의 정갈한 침대 베드에서 최상의 아로마 및 바디 관리를 경험해 보세요.",
    space_rm_f1: "완벽한 프라이버시가 보장되는 1인실",
    space_rm_f2: "동반 예약 시 아늑함을 더하는 2인실 및 단체실",
    space_rm_f3: "파우더룸 및 개인 락커룸 구비",

    // Programs Section
    programs_subtitle: "Therapy Menu",
    programs_title: "정교한 맞춤형 프로그램",
    
    prog_type_foot: "Focus Therapy",
    prog_name_foot: "시그니처 발 마사지",
    prog_desc_foot: "발바닥의 반사구를 자극하여 피로를 빠르게 해소하고 신체 전반의 장기 기능을 촉진하는 풋쌤의 시그니처 웰컴 프로그램입니다. (족욕 포함)",
    prog_time_foot: "40분",
    prog_price_foot: "35,000",
    prog_price_unit: "원",

    prog_type_body: "Body Balance",
    prog_name_body: "스포츠 전신 테라피",
    prog_desc_body: "목, 어깨, 허리 등 뭉친 근육을 부드러우면서도 강력하게 풀어주어 만성 피로와 근육통 완화에 탁월한 맞춤형 전신 바디 케어입니다.",
    prog_time_body: "60분",
    prog_price_body: "60,000",

    prog_type_aroma: "Premium Relax",
    prog_name_aroma: "스페셜 아로마 테라피",
    prog_desc_aroma: "천연 아로마 오일을 사용하여 림프 순환을 돕고 스트레스를 심층적으로 케어하는 릴랙싱 코스입니다. 심신의 깊은 안정과 피부 보습에 이상적입니다.",
    prog_time_aroma: "80분",
    prog_price_aroma: "80,000",

    // Contact Section
    contact_subtitle: "Location & Contact",
    contact_title: "당신의 발걸음이 머무는 곳",
    contact_addr_title: "찾아오시는 길",
    contact_addr_desc: "서울 중구 을지로 256 3층<br>(동대문역사문화공원역 12번 출구에서 도보 1분)",
    contact_time_title: "영업 시간",
    contact_time_desc: "매일 오전 11:00 ~ 새벽 01:00<br>(마지막 예약 접수: 밤 12:00)",
    contact_call_title: "예약 및 문의",
    contact_call_desc: "010-7789-6899<br>0507-1382-6899",
    contact_btn_map: "네이버 지도 열기",
    contact_btn_call: "전화 바로 걸기",

    // Footer
    footer_desc: "을지로 3층에 위치한 도심 속 프리미엄 발/전신 테라피 샵. 전문적인 테라피스트들이 당신의 지친 일상에 깊은 쉼표를 찍어드립니다.",
    footer_explore: "카테고리",
    footer_legal: "법적 고지",
    footer_terms: "이용 약관",
    footer_privacy: "개인정보 처리방침",
    footer_copy: "© 2026 풋쌤 동대문점 (Mr. Foot). All rights reserved."
  },
  en: {
    // Navigation
    nav_about: "About",
    nav_spaces: "Spaces",
    nav_programs: "Programs",
    nav_location: "Location",
    nav_reserve: "Inquiry",

    // Hero Section
    hero_tagline: "Slowing Down the Pace of the City",
    hero_title: "An Urban Oasis<br>for Complete Relaxation",
    hero_desc: "A cozy wellness spa located in the heart of Euljiro. Restore balance to your body and mind at Footsam Dongdaemun, where traditional aesthetics meet modern comfort.",
    hero_btn_reserve: "Book a Session",
    hero_btn_explore: "Explore Space",

    // About Section
    about_subtitle: "About Footsam",
    about_title: "A Cozy Sanctuary<span>On Euljiro 3rd Floor</span>",
    about_desc: "Footsam Dongdaemun is a premium therapy sanctuary designed for busy modern souls. Inside a soothing space shaped by warm wood textures and amber ambient lighting, our certified therapists deliver meticulous, tailored care. We have designed every subtle detail to ensure not just your body, but also your mind is completely unburdened.",
    about_h1: "Direct Care by Certified Therapists",
    about_h2: "Thorough Daily Hygiene & Sanitization",
    about_h3: "Private 1-Person & Couples/Group Rooms",

    // Spaces Section
    spaces_subtitle: "Our Spaces",
    spaces_title: "A Space Where Staying is Healing",
    tab_footbath: "Foot Bath",
    tab_lounge: "Foot Lounge",
    tab_rooms: "Private Rooms",
    
    space_fb_name: "Hinoki Welcome Foot Bath",
    space_fb_desc: "Before starting your therapy, soak your feet in warm water and unwind with a cup of soothing tea. Crafted with eco-friendly Hinoki wood, the space is filled with a gentle forest scent, while the amber lighting lets you forget the noise of the city.",
    space_fb_f1: "Eco-friendly Hinoki hot water soak",
    space_fb_f2: "Complimentary wellness tea to boost circulation",
    space_fb_f3: "Spacious dedicated seats for up to 5 people simultaneously",

    space_lg_name: "Oriental Foot Therapy Lounge",
    space_lg_desc: "Lie back in our premium memory foam recliner chairs for focused foot therapy. The walls are adorned with elegant miniature Korean traditional Hanbok art frames, providing a unique cultural touch, while large windows offer a quiet view of the cityscape.",
    space_lg_f1: "Premium ergonomic memory foam recliners",
    space_lg_f2: "Serene interior with traditional Korean design elements",
    space_lg_f3: "Calibrated ambient light levels for visual relaxation",

    space_rm_name: "Private Therapy Rooms",
    space_rm_desc: "We offer private individual rooms to fully focus on your personal recovery, as well as cozy 2-person and group suites perfect for couples, family, or friends. Enjoy our premier body oil massages on immaculate, soft fabric beds.",
    space_rm_f1: "1-Person rooms ensuring ultimate privacy",
    space_rm_f2: "Cozy double and group rooms for shared sessions",
    space_rm_f3: "Equipped with a powder room and private lockers",

    // Programs Section
    programs_subtitle: "Therapy Menu",
    programs_title: "Exquisitely Tailored Programs",
    
    prog_type_foot: "Focus Therapy",
    prog_name_foot: "Signature Foot Massage",
    prog_desc_foot: "Our signature routine designed to stimulate reflex zones on the soles, rapidly relieving fatigue and promoting overall body wellness. (Includes Hinoki foot bath)",
    prog_time_foot: "40 min",
    prog_price_foot: "35,000",
    prog_price_unit: "KRW",

    prog_type_body: "Body Balance",
    prog_name_body: "Deep Tissue Sport Therapy",
    prog_desc_body: "A customized body massage targeting tight muscle knots in the neck, shoulders, and back. Highly effective for relieving chronic fatigue and muscle soreness.",
    prog_time_body: "60 min",
    prog_price_body: "60,000",

    prog_type_aroma: "Premium Relax",
    prog_name_aroma: "Special Aroma Oil Therapy",
    prog_desc_aroma: "A deeply relaxing session using organic aromatic essential oils to promote lymphatic drainage and melt away mental tension. Ideal for skin hydration and mental serenity.",
    prog_time_aroma: "80 min",
    prog_price_aroma: "80,000",

    // Contact Section
    contact_subtitle: "Location & Contact",
    contact_title: "Where Your Steps Calm Down",
    contact_addr_title: "Address",
    contact_addr_desc: "3F, 256 Eulji-ro, Jung-gu, Seoul<br>(1-minute walk from Dongdeemun History & Culture Park Station Exit 12)",
    contact_time_title: "Opening Hours",
    contact_time_desc: "Daily 11:00 AM ~ 01:00 AM (Next Day)<br>(Last booking: 12:00 AM)",
    contact_call_title: "Reservation & Inquiry",
    contact_call_desc: "+82 10-7789-6899<br>+82 507-1382-6899",
    contact_btn_map: "Open Naver Map",
    contact_btn_call: "Call Now",

    // Footer
    footer_desc: "A premium foot and body wellness therapy salon on the 3rd floor in Euljiro. Our certified therapists provide a deep comma to your exhausting everyday routine.",
    footer_explore: "Explore",
    footer_legal: "Legal Info",
    footer_terms: "Terms of Service",
    footer_privacy: "Privacy Policy",
    footer_copy: "© 2026 Footsam Dongdaemun (Mr. Foot). All rights reserved."
  },
  ja: {
    // Navigation
    nav_about: "ブランド紹介",
    nav_spaces: "施設案内",
    nav_programs: "メニュー",
    nav_location: "アクセス",
    nav_reserve: "ご予約",

    // Hero Section
    hero_tagline: "都市のテンポをゆるめる場所",
    hero_title: "心身を解きほぐす<br>都会のオアシス",
    hero_desc: "乙支路の真ん中で出会う居心地の良い癒しのスパ。伝統的な美学と現代的な快適さが調和した『フットセム東大門店』で、疲れた身体と心のバランスを整えてください。",
    hero_btn_reserve: "今すぐ予約",
    hero_btn_explore: "空間を見る",

    // About Section
    about_subtitle: "About Footsam",
    about_title: "乙支路3階に佇む<span>安らぎの隠れ家</span>",
    about_desc: "フットセム東大門店は、忙しい日常を送る現代人のためのプレミアムセラピー空間です。温かみのある木目調のインテリアと優しい間接照明が醸し出す落ち着いた雰囲気の中で、熟練のセラピストが心を込めて施術いたします。身体の疲労だけでなく、心に溜まったストレスまで完全にリセットされるよう、すべてのディテールにこだわりました。",
    about_h1: "国家資格保有レベルの専属セラピスト管理",
    about_h2: "毎日の徹底した衛生・消毒管理",
    about_h3: "落ち着いた個室、ペア室、団体室完備",

    // Spaces Section
    spaces_subtitle: "Our Spaces",
    spaces_title: "滞在するだけで癒される空間設計",
    tab_footbath: "アロマ足湯",
    tab_lounge: "フットラウンジ",
    tab_rooms: "プライベートルーム",
    
    space_fb_name: "檜（ヒノキ）のウェルカム足湯",
    space_fb_desc: "施術を始める前に、温かいお湯に足を浸し、ハーブティーを飲みながら緊張をほぐす特別なウェルカムスペースです。環境に優しいヒノキを使用しているため、ほのかな森の香りが漂い、都会の喧騒を忘れさせてくれます。",
    space_fb_f1: "天然ヒノキ香る温水足湯",
    space_fb_f2: "血行を促進し心身を温めるウェルカムティー",
    space_fb_f3: "最大5名様まで同時にゆったり利用可能な空間",

    space_lg_name: "オリエンタルフットラウンジ",
    space_lg_desc: "リクライニングシートに身を任せ、フットケアを堪能するメインラウンジです。壁面には端正な韓国伝統衣装「韓服」のミニチュア額縁が飾られ、オリエンタルな情緒を演出。大きな窓からはソウルの都市の風景をゆったりと眺めることができます。",
    space_lg_f1: "最高級メモリーフォームリクライニングチェア",
    space_lg_f2: "伝統美を取り入れたモダンで洗練されたデザイン",
    space_lg_f3: "目の疲れを和らげる計算された間接照明",

    space_rm_name: "プライベートセラピールーム",
    space_rm_desc: "自分だけの時間に浸れるプライベートな個室と、カップルやご友人、ご家族でのご利用に最適なペア室・グループルームをご用意。肌触りの良いリネンが敷かれた清潔なベッドで、上質なボディケアをご体験ください。",
    space_rm_f1: "完全なプライバシーを重視したシングルルーム",
    space_rm_f2: "ペアやグループ利用に最適な居心地の良いルーム",
    space_rm_f3: "メイクスペース・個人ロッカー完備",

    // Programs Section
    programs_subtitle: "Therapy Menu",
    programs_title: "洗練されたカスタマイズメニュー",
    
    prog_type_foot: "Focus Therapy",
    prog_name_foot: "極上シグネチャー足つぼ",
    prog_desc_foot: "足裏の反射区を刺激して内臓機能を活性化させ、一日の歩行疲れを劇的に和らげるフットセムの代表コースです。（足湯付き）",
    prog_time_foot: "40分",
    prog_price_foot: "35,000",
    prog_price_unit: "ウォン",

    prog_type_body: "Body Balance",
    prog_name_body: "全身スポーツ整体ケア",
    prog_desc_body: "首、肩、腰など、コリ固まった筋肉を的確に捉え、しっかりと揉みほぐします。慢性疲労や体の歪み、筋肉痛の解消に最適です。",
    prog_time_body: "60分",
    prog_price_body: "60,000",

    prog_type_aroma: "Premium Relax",
    prog_name_aroma: "高級アロマリンパセラピー",
    prog_desc_aroma: "上質な天然オーガニックアロマオイルを使用し、全身のリンパを流すリラクゼーションコースです。深い安らぎと肌の保湿を同時にもたらします。",
    prog_time_aroma: "80分",
    prog_price_aroma: "80,000",

    // Contact Section
    contact_subtitle: "Location & Contact",
    contact_title: "旅と日常が交差するオアシス",
    contact_addr_title: "アクセス",
    contact_addr_desc: "ソウル特別市 中区 乙支路 256 3階<br>(東大門歴史文化公園駅12番出口から徒歩1分)",
    contact_time_title: "営業時間",
    contact_time_desc: "年中無休 午前 11:00 ~ 翌午前 01:00<br>(最終受付：夜 12:00)",
    contact_call_title: "ご予約・お問い合わせ",
    contact_call_desc: "010-7789-6899<br>0507-1382-6899",
    contact_btn_map: "Naverマップを開く",
    contact_btn_call: "電話をかける",

    // Footer
    footer_desc: "乙支路の3階に佇む、プレミアムな足・全身マッサージの専門店。熟練のセラピストたちが、お客様の日常に深い「休息」をお届けします。",
    footer_explore: "ナビゲーション",
    footer_legal: "リーガルポリシー",
    footer_terms: "利用規約",
    footer_privacy: "個人情報保護方針",
    footer_copy: "© 2026 フットセム東大門店 (Mr. Foot). All rights reserved."
  },
  zh: {
    // Navigation
    nav_about: "品牌介绍",
    nav_spaces: "设施服务",
    nav_programs: "项目价格",
    nav_location: "如何抵达",
    nav_reserve: "预约咨询",

    // Hero Section
    hero_tagline: "减缓城市快节奏的世外桃源",
    hero_title: "置身都市绿洲<br>沉浸放松身心",
    hero_desc: "坐落于首尔东大门乙支路中心的温馨健康水疗中心。在传统美学与现代舒适完美交融的『FOOTSAM东大门分店』，让疲惫的身体和心灵重获平衡与活力。",
    hero_btn_reserve: "立即预约",
    hero_btn_explore: "参观空间",

    // About Section
    about_subtitle: "About Footsam",
    about_title: "在乙支路3楼<span>寻得一方静谧</span>",
    about_desc: "FOOTSAM东大门分店是专为忙碌的都市人打造的高端理疗养生空间。在暖色木质装潢与温和柔光营造的舒适氛围里，由持有专业资质的理疗师为您提供细致入微的舒压按摩。从身体的酸痛释放到心灵的压力舒缓，每一个细节设计均只为您的彻底放松。",
    about_h1: "专业资质理疗师量身服务",
    about_h2: "每日严格执行店面清洁与消毒",
    about_h3: "配备私密单人房、双人闺蜜/情侣房及团体房",

    // Spaces Section
    spaces_subtitle: "Our Spaces",
    spaces_title: "驻足即是疗愈的空间美学",
    tab_footbath: "芳香足浴",
    tab_lounge: "足疗大厅",
    tab_rooms: "私密包厢",
    
    space_fb_name: "桧木天然足浴区",
    space_fb_desc: "在开始正式按摩前，将双脚浸入温暖的温水中，伴随着清茶一杯，缓缓卸下疲劳。全区采用环保桧木搭建，隐隐散发树木清香，柔和的间接照明让您瞬间远离城市喧嚣。",
    space_fb_f1: "环保桧木温水浸泡足浴",
    space_fb_f2: "免费奉上特制养生热茶以促进血液循环",
    space_fb_f3: "可同时容纳5人使用的宽敞专属座位",

    space_lg_name: "东方足疗调理大厅",
    space_lg_desc: "舒适地平躺在高端太空棉真皮躺椅上接受足底穴位护理。墙上装饰着精美的韩国传统韩服微型画框，散发浓郁东方韵味。大面积落地窗则让您在不受打扰的前提下悠然俯瞰城市风景。",
    space_lg_f1: "符合人体工程学的顶级记忆棉躺椅",
    space_lg_f2: "融合传统儒雅韩风的优雅环境设计",
    space_lg_f3: "精心调校的背景照明亮度以保护视力放松",

    space_rm_name: "私密全身理疗包厢",
    space_rm_desc: "为了让您能全神贯注地享受独处放松时光，我们准备了精装私密单人房，以及适合情侣、闺蜜或家人共享的舒适双人房和多床房。干净柔软的面料床铺上，体验顶级香薰精油全身护理。",
    space_rm_f1: "保证绝佳隐私的独立单人包厢",
    space_rm_f2: "舒适的双人及多人家庭式包厢",
    space_rm_f3: "配备化妆镜台及个人电子储物柜",

    // Programs Section
    programs_subtitle: "Therapy Menu",
    programs_title: "精心定制的理疗方案",
    
    prog_type_foot: "Focus Therapy",
    prog_name_foot: "经典招牌足疗",
    prog_desc_foot: "刺激足底反射区以快速缓解双腿酸胀肿痛，并促进身体微循环的店长推荐特色护理项目。（含桧木足浴）",
    prog_time_foot: "40分钟",
    prog_price_foot: "35,000",
    prog_price_unit: "韩元",

    prog_type_body: "Body Balance",
    prog_name_body: "全身中式推拿/运动拉伸",
    prog_desc_body: "精准针对肩颈、腰背等劳损部位，用适当的力度松解紧绷肌肉块，极佳地缓解慢性疲劳和肌腱酸痛。",
    prog_time_body: "60分钟",
    prog_price_body: "60,000",

    prog_type_aroma: "Premium Relax",
    prog_name_aroma: "高端香薰植物精油SPA",
    prog_desc_aroma: "选用纯天然植物香薰精油，通过轻柔的手法促进淋巴排毒，深度舒缓精神紧绷。滋润干燥肌肤，重塑内心宁静。",
    prog_time_aroma: "80分钟",
    prog_price_aroma: "80,000",

    // Contact Section
    contact_subtitle: "Location & Contact",
    contact_title: "让疲惫步履停歇的港湾",
    contact_addr_title: "地址指南",
    contact_addr_desc: "首尔特别市 中区 乙支路 256 3楼<br>(东大门历史文化公园站12号出口步行仅需1分钟)",
    contact_time_title: "营业时间",
    contact_time_desc: "全年无休 上午 11:00 ~ 次日凌晨 01:00<br>(最后预约时间：午夜 12:00)",
    contact_call_title: "预约及咨询",
    contact_call_desc: "010-7789-6899<br>0507-1382-6899",
    contact_btn_map: "打开Naver地图",
    contact_btn_call: "立即拨打电话",

    // Footer
    footer_desc: "位于东大门乙支路三楼的高品质足疗及全身调理沙龙。持有专业证书的高水平理疗师们，在您繁忙的日程中印下一个深深的顿号。",
    footer_explore: "浏览网站",
    footer_legal: "法律声明",
    footer_terms: "服务条款",
    footer_privacy: "隐私政策",
    footer_copy: "© 2026 FOOTSAM东大门分店 (Mr. Foot). 版权所有。"
  }
};

// Application State
let currentLang = 'ko';

// DOM Elements
const header = document.querySelector('header');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('nav');
const tabButtons = document.querySelectorAll('.tab-btn');
const spacePanels = document.querySelectorAll('.space-panel');
const langButtons = document.querySelectorAll('.lang-btn');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  // Check for saved language, default to 'ko'
  const savedLang = localStorage.getItem('footsam_lang');
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
  } else {
    // Detect browser language
    const browserLang = navigator.language.slice(0, 2);
    if (translations[browserLang]) {
      currentLang = browserLang;
    }
  }

  // Set active class on active lang button
  langButtons.forEach(btn => {
    if (btn.dataset.lang === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Apply translations
  applyLanguage(currentLang);

  // Initialize Scroll Event listener
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger initial scroll check

  // Initialize Scroll Animation Observer
  initScrollReveal();
});

// Switch Language Function
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('footsam_lang', lang);

  // Find all translatable elements
  const translatableElements = document.querySelectorAll('[data-i18n]');
  translatableElements.forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      // Check if it's an input or has special attributes
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });

  // Highlight active lang buttons
  langButtons.forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Close mobile navigation menu if open
  nav.classList.remove('active');
  mobileNavToggle.classList.remove('active');
}

// Lang button listeners
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    applyLanguage(btn.dataset.lang);
  });
});

// Scroll Header effect
function handleScroll() {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// Mobile Menu Toggle
mobileNavToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  mobileNavToggle.classList.toggle('active');
});

// Close Mobile Nav when clicking links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    mobileNavToggle.classList.remove('active');
  });
});

// Facility Tab Swapping Logic
tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active state from other tabs
    tabButtons.forEach(b => b.classList.remove('active'));
    // Add active state to clicked tab
    btn.classList.add('active');

    const targetTab = btn.dataset.tab;

    // Show corresponding panel and hide others
    spacePanels.forEach(panel => {
      if (panel.id === targetTab) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  });
});

// Intersection Observer for scroll animation (Fade up)
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Once animated, no need to watch it anymore
        observer.unobserve(entry.target);
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, {
    root: null, // viewport
    threshold: 0.15, // trigger when 15% of the element is visible
    rootMargin: "0px 0px -50px 0px" // trigger slightly before entering viewport
  });

  reveals.forEach(el => revealObserver.observe(el));
}
