/* =========================================================
   Brightfield Bioresearch — translations (ru / kk / en)
   Редактируйте тексты здесь. HTML внутри строк допустим
   только в ключе form.consent.
   ========================================================= */
window.I18N = {

  /* ======================= RUSSIAN ======================= */
  ru: {
    meta: {
      title: "Brightfield Bioresearch — контрактные исследования в онкологии",
      desc: "Brightfield Bioresearch — исследовательская команда из Казахстана. Доклинические и трансляционные исследования для разработчиков терапии рака лёгкого, желудка и печени."
    },
    a11y: { skip: "К содержанию" },
    nav: {
      areas: "Направления", services: "Услуги", why: "Принципы", process: "Процесс",
      team: "Команда", contact: "Контакты", cta: "Обсудить проект"
    },
    hero: {
      kicker: "Контрактные исследования в онкологии · Казахстан",
      title: "Доклинические исследования в онкологии на аутсорсе",
      lead: "Brightfield Bioresearch берёт на себя доклинический и трансляционный этап разработки терапии рака лёгкого, желудка и печени: от дизайна эксперимента до отчёта, готового к публикации и регуляторной подаче.",
      cta1: "Обсудить проект", cta2: "Наши услуги"
    },
    stats: {
      s1: "онкологических направления в фокусе",
      s2: "валидированных клеточных моделей",
      s3: "ответ на запрос в рабочие дни", s3suffix: " ч",
      s4: "проектов под NDA и с передачей сырых данных"
    },
    areas: {
      title: "Направления исследований",
      lead: "Три нозологии, в которых мы знаем модели, их ограничения и релевантные клинические вопросы.",
      rowLabels: ["Клеточные линии", "Драйверы и маркеры", "Модели", "Ключевые readouts"],
      items: [
        {
          index: "Показание 01",
          title: "Рак лёгкого",
          text: "Немелкоклеточный и мелкоклеточный рак лёгкого — ведущая причина онкологической смертности в мире. Работаем с моделями, отражающими ключевые драйверные мутации.",
          rows: ["A549, NCI-H1299, NCI-H460, PC-9", "EGFR, ALK, KRAS, ROS1, PD-L1", "Подкожные и ортотопические ксенографты, модели приобретённой резистентности к ингибиторам EGFR", "IC50, апоптоз, миграция и инвазия, ИГХ, объём опухоли in vivo"]
        },
        {
          index: "Показание 02",
          title: "Рак желудка",
          text: "В Казахстане и Центральной Азии рак желудка остаётся одной из самых частых онкопатологий. Изучаем HER2-положительные и диффузные подтипы, ответ на иммунотерапию и роль опухолевого микроокружения.",
          rows: ["AGS, MKN-45, NCI-N87, HGC-27", "HER2, MSI, PD-L1, CLDN18.2", "Органоиды и 3D-культуры из опухолевой ткани, ксенографты, комбинированные схемы химио- и таргетной терапии", "Цитотоксичность, пролиферация, экспрессия маркеров, ответ на комбинации"]
        },
        {
          index: "Показание 03",
          title: "Рак печени",
          text: "Гепатоцеллюлярная карцинома развивается на фоне хронических заболеваний печени и требует моделей, учитывающих фиброз и метаболический контекст.",
          rows: ["HepG2, Huh-7, Hep3B, SNU-449", "AFP, VEGF, β-катенин, PD-L1", "Модели на фоне фиброза и стеатогепатита, ортотопические ксенографты", "Эффективность параллельно с гепатотоксичностью, PK/PD, гистология"]
        }
      ]
    },
    services: {
      title: "Что мы делаем",
      lead: "Полный цикл доклинических работ — от первичного скрининга до отчёта. Берём проект целиком или закрываем отдельный этап в вашей программе разработки.",
      items: [
        { title: "In vitro скрининг", text: "Цитотоксичность, IC50, пролиферация, апоптоз, миграция и инвазия на панели валидированных клеточных линий. Быстрый отбор кандидатов до перехода к животным моделям.", tags: ["MTT / CCK-8", "Apoptosis", "Wound healing"] },
        { title: "In vivo модели", text: "Ксенографтные, PDX и ортотопические модели опухолей. Оценка эффективности, фармакокинетики и переносимости с ветеринарным и этическим контролем.", tags: ["Xenograft", "PDX", "PK / PD"] },
        { title: "Биомаркеры и молекулярный анализ", text: "Иммуногистохимия, ПЦР в реальном времени, вестерн-блот, проточная цитометрия и NGS для подтверждения механизма действия.", tags: ["IHC", "qPCR", "NGS"] },
        { title: "Биоинформатика и статистика", text: "Анализ транскриптомных и геномных данных, статистическое планирование, визуализация результатов и воспроизводимые пайплайны.", tags: ["RNA-seq", "R / Python", "Stat design"] },
        { title: "Дизайн исследований", text: "Разработка протоколов, расчёт объёма выборки, литературный обзор и научное сопровождение проекта на всех этапах.", tags: ["Protocol", "Literature review", "SOP"] },
        { title: "Управление проектом и отчётность", text: "Единый менеджер, еженедельные статусы, отчёт на русском и английском языке — готовый к публикации, гранту или регуляторной подаче.", tags: ["Weekly status", "RU / EN", "Publication-ready"] },
        { title: "Фармакопейный контроль качества онкологических субстанций и препаратов", text: "Подлинность, количественное определение, родственные примеси и тест растворения по монографиям USP, Ph. Eur., ГФ РК и Фармакопеи ЕАЭС. Все испытания выполняются с использованием фармакопейных стандартных образцов. Верификация методик и сравнительная кинетика растворения для дженериков.", tags: ["USP / Ph. Eur.", "HPLC", "Dissolution"] }
      ]
    },
    why: {
      title: "Принципы работы",
      quality: { tab: "Качество", list: [
        "Стандартные операционные процедуры на каждом этапе — от приёма образцов до архивирования данных",
        "Планируем исследования, ориентируясь на принципы GLP и рекомендации ICH",
        "Внутренний контроль качества и независимая проверка результатов перед выдачей отчёта"
      ]},
      time: { tab: "Сроки", list: [
        "Фиксируем сроки в договоре и сообщаем о рисках заранее, а не постфактум",
        "Пилотный in vitro этап — от 4 недель с момента утверждения протокола",
        "Параллельное планирование этапов, чтобы сократить общий цикл проекта"
      ]},
      transparency: { tab: "Прозрачность", list: [
        "NDA до начала обсуждения деталей проекта",
        "Еженедельные статусы и доступ к промежуточным данным",
        "Сырые данные, протоколы и статистические скрипты передаются заказчику вместе с отчётом"
      ]},
      expertise: { tab: "Экспертиза", list: [
        "Команда с опытом в молекулярной онкологии, патоморфологии и биоинформатике",
        "Фокус на трёх нозологиях позволяет глубоко знать модели и их ограничения",
        "Партнёрская сеть лабораторий и клиник в Казахстане и за рубежом"
      ]}
    },
    process: {
      title: "Как мы работаем",
      lead: "Четыре понятных этапа. На каждом вы знаете, что происходит, сколько это стоит и когда будет результат.",
      steps: [
        { title: "Запрос и NDA", text: "Вы описываете задачу, мы подписываем соглашение о конфиденциальности и уточняем цели исследования." },
        { title: "Дизайн и смета", text: "Предлагаем дизайн эксперимента, модели, объём выборки, сроки и фиксированную стоимость." },
        { title: "Исследование", text: "Выполняем работы по утверждённому протоколу, присылаем еженедельные статусы и промежуточные данные." },
        { title: "Отчёт и данные", text: "Передаём итоговый отчёт, сырые данные, статистику и рекомендации по следующему этапу." }
      ]
    },
    mission: {
      label: "Миссия",
      title: "Поднимаем биотех в Казахстане",
      text: "Мы — команда учёных и инженеров из Казахстана, которая верит, что сильная биотехнологическая отрасль в стране начинается с качественной прикладной науки. Каждый проект для нас — вклад в компетенции, инфраструктуру и репутацию казахстанского биотеха на международном рынке."
    },
    team: {
      title: "Команда",
      lead: "Небольшая команда с академическим и индустриальным опытом. Мы работаем в одном контуре — без передачи задач между отделами и потери контекста.",
      roles: [
        { title: "Научное руководство", text: "Молекулярные онкологи с опытом работы в академических и индустриальных проектах." },
        { title: "Лабораторная команда", text: "Специалисты по клеточным культурам, гистологии и in vivo моделям." },
        { title: "Биоинформатика", text: "Аналитики данных, работающие с секвенированием и статистикой в R и Python." },
        { title: "Проектный офис", text: "Менеджеры, которые держат сроки, документацию и коммуникацию с заказчиком." }
      ],
      principlesTitle: "Чем руководствуемся",
      principles: [
        "Честные результаты — в том числе отрицательные",
        "Воспроизводимость важнее скорости",
        "Данные принадлежат заказчику",
        "Открытая коммуникация на трёх языках",
        "Развитие локальных компетенций и кадров",
        "Этичное обращение с животными и биоматериалом"
      ]
    },
    contact: {
      title: "Связаться с нами",
      lead: "Опишите задачу — мы вернёмся с предложением по дизайну исследования, срокам и стоимости в течение одного рабочего дня.",
      emailLabel: "Email", locationLabel: "Локация", location: "Казахстан",
      hoursLabel: "Часы работы", hours: "Пн–Пт, 9:00–18:00 (GMT+5)",
      legal: [
        ["Юридическое лицо", "ТОО «Брайтфилд Биоресерч»"],
        ["БИН", "260940037559"],
        ["Юридический адрес", "Казахстан, Карагандинская область, г. Караганда, район Әлихан Бөкейхан, ул. Донская, д. 49, кв. 2, M03A7G6"],
        ["Руководитель", "Глухов Андрей Сергеевич"]
      ]
    },
    form: {
      topic: "Тема запроса",
      topicPlaceholder: "Выберите тему",
      topics: ["Доклиническое исследование", "In vitro скрининг", "In vivo модели", "Биомаркеры и анализ данных", "Фармакопейный анализ", "Партнёрство", "Другое"],
      name: "ФИО", email: "Рабочий email", phone: "Телефон", company: "Компания",
      position: "Должность", message: "Описание задачи",
      consent: 'Я даю согласие на обработку персональных данных и соглашаюсь с условиями <a href="privacy.html">политики конфиденциальности</a>.',
      submit: "Отправить запрос",
      sending: "Отправляем…",
      success: "Спасибо! Мы получили запрос и свяжемся с вами в ближайшее время.",
      mailto: "Откроется ваша почтовая программа с готовым письмом.",
      error: "Не удалось отправить. Напишите нам напрямую на email.",
      invalid: "Проверьте обязательные поля."
    },
    footer: {
      tagline: "Контрактные доклинические и трансляционные исследования в онкологии. Казахстан.",
      rights: "Все права защищены.",
      privacy: "Политика конфиденциальности"
    },
    privacy: {
      title: "Политика конфиденциальности",
      updated: "Обновлено",
      p: [
        "Настоящая политика описывает, как Brightfield Bioresearch обрабатывает персональные данные, которые вы передаёте через форму обратной связи или по электронной почте.",
        "Мы собираем только те данные, которые вы указываете сами: имя, контактные данные, компанию, должность и описание запроса. Данные используются исключительно для ответа на ваш запрос и подготовки коммерческого предложения.",
        "Мы не передаём персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством Республики Казахстан. Данные хранятся не дольше, чем это необходимо для целей обработки.",
        "Сайт не использует сторонние трекеры и рекламные cookie. Выбранный язык сохраняется локально в вашем браузере.",
        "Вы можете запросить уточнение, изменение или удаление своих данных, написав нам на контактный email."
      ],
      back: "На главную"
    }
  },

  /* ======================= KAZAKH ======================= */
  kk: {
    meta: {
      title: "Brightfield Bioresearch — онкологиядағы келісімшарттық зерттеулер",
      desc: "Brightfield Bioresearch — Қазақстаннан шыққан зерттеу командасы. Өкпе, асқазан және бауыр обырын емдеу әдістерін әзірлеушілер үшін клиникаға дейінгі және трансляциялық зерттеулер."
    },
    a11y: { skip: "Мазмұнға өту" },
    nav: {
      areas: "Бағыттар", services: "Қызметтер", why: "Қағидаттар", process: "Үдеріс",
      team: "Команда", contact: "Байланыс", cta: "Жобаны талқылау"
    },
    hero: {
      kicker: "Онкологиядағы келісімшарттық зерттеулер · Қазақстан",
      title: "Онкологиядағы клиникаға дейінгі зерттеулер аутсорсингте",
      lead: "Brightfield Bioresearch өкпе, асқазан және бауыр обырын емдеу әдістерін әзірлеудің клиникаға дейінгі және трансляциялық кезеңін өз мойнына алады: эксперимент дизайнынан бастап жариялауға және реттеуші органдарға тапсыруға дайын есепке дейін.",
      cta1: "Жобаны талқылау", cta2: "Біздің қызметтер"
    },
    stats: {
      s1: "назардағы онкологиялық бағыт",
      s2: "валидацияланған жасушалық модель",
      s3: "жұмыс күндері сұрауға жауап", s3suffix: " сағ",
      s4: "жоба NDA аясында және бастапқы деректерді тапсырумен"
    },
    areas: {
      title: "Зерттеу бағыттары",
      lead: "Модельдерін, олардың шектеулерін және өзекті клиникалық сұрақтарын жақсы білетін үш нозология.",
      rowLabels: ["Жасуша желілері", "Драйверлер мен маркерлер", "Модельдер", "Негізгі readouts"],
      items: [
        {
          index: "Көрсетілім 01",
          title: "Өкпе обыры",
          text: "Ұсақ жасушалы емес және ұсақ жасушалы өкпе обыры — әлемдегі онкологиялық өлім-жітімнің басты себебі. Негізгі драйверлік мутацияларды көрсететін модельдермен жұмыс істейміз.",
          rows: ["A549, NCI-H1299, NCI-H460, PC-9", "EGFR, ALK, KRAS, ROS1, PD-L1", "Тері астылық және ортотопиялық ксенографттар, EGFR ингибиторларына жүре пайда болған резистенттілік модельдері", "IC50, апоптоз, миграция және инвазия, ИГХ, in vivo ісік көлемі"]
        },
        {
          index: "Көрсетілім 02",
          title: "Асқазан обыры",
          text: "Қазақстан мен Орталық Азияда асқазан обыры ең жиі кездесетін онкопатологиялардың бірі болып қала береді. HER2-оң және диффузды кіші түрлерін, иммунотерапияға жауапты және ісік микроортасының рөлін зерттейміз.",
          rows: ["AGS, MKN-45, NCI-N87, HGC-27", "HER2, MSI, PD-L1, CLDN18.2", "Ісік тінінен алынған органоидтар мен 3D-культуралар, ксенографттар, химио- және таргетті терапияның құрамдастырылған схемалары", "Цитоуыттылық, пролиферация, маркерлер экспрессиясы, құрамдастыруларға жауап"]
        },
        {
          index: "Көрсетілім 03",
          title: "Бауыр обыры",
          text: "Гепатоцеллюлярлық карцинома созылмалы бауыр аурулары аясында дамиды және фиброз бен метаболикалық контексті ескеретін модельдерді қажет етеді.",
          rows: ["HepG2, Huh-7, Hep3B, SNU-449", "AFP, VEGF, β-катенин, PD-L1", "Фиброз және стеатогепатит аясындағы модельдер, ортотопиялық ксенографттар", "Гепатоуыттылықпен қатар тиімділік, PK/PD, гистология"]
        }
      ]
    },
    services: {
      title: "Біз не істейміз",
      lead: "Клиникаға дейінгі жұмыстардың толық циклі — бастапқы скринингтен есепке дейін. Жобаны толығымен аламыз немесе сіздің әзірлеу бағдарламаңыздағы жеке кезеңді жабамыз.",
      items: [
        { title: "In vitro скрининг", text: "Валидацияланған жасуша желілері панелінде цитоуыттылық, IC50, пролиферация, апоптоз, миграция және инвазия. Жануар модельдеріне көшер алдында кандидаттарды жылдам іріктеу.", tags: ["MTT / CCK-8", "Apoptosis", "Wound healing"] },
        { title: "In vivo модельдер", text: "Ксенографттық, PDX және ортотопиялық ісік модельдері. Ветеринарлық және этикалық бақылаумен тиімділікті, фармакокинетиканы және көтерімділікті бағалау.", tags: ["Xenograft", "PDX", "PK / PD"] },
        { title: "Биомаркерлер және молекулалық талдау", text: "Әсер ету механизмін растау үшін иммуногистохимия, нақты уақыттағы ПТР, вестерн-блот, ағынды цитометрия және NGS.", tags: ["IHC", "qPCR", "NGS"] },
        { title: "Биоинформатика және статистика", text: "Транскриптомдық және геномдық деректерді талдау, статистикалық жоспарлау, нәтижелерді визуализациялау және қайталанатын пайплайндар.", tags: ["RNA-seq", "R / Python", "Stat design"] },
        { title: "Зерттеу дизайны", text: "Хаттамаларды әзірлеу, іріктеме көлемін есептеу, әдеби шолу және жобаны барлық кезеңдерде ғылыми сүйемелдеу.", tags: ["Protocol", "Literature review", "SOP"] },
        { title: "Жобаны басқару және есептілік", text: "Бірыңғай менеджер, апта сайынғы статустар, орыс және ағылшын тілдеріндегі есеп — жариялауға, грантқа немесе реттеуші органдарға тапсыруға дайын.", tags: ["Weekly status", "RU / EN", "Publication-ready"] },
        { title: "Онкологиялық субстанциялар мен препараттардың фармакопеялық сапа бақылауы", text: "USP, Ph. Eur., ҚР МФ және ЕАЭО Фармакопеясының монографиялары бойынша түпнұсқалық, сандық анықтау, туыстас қоспалар және еру тесті. Барлық сынақтар фармакопеялық стандартты үлгілерді қолдана отырып орындалады. Әдістемелерді верификациялау және дженериктер үшін салыстырмалы еру кинетикасы.", tags: ["USP / Ph. Eur.", "HPLC", "Dissolution"] }
      ]
    },
    why: {
      title: "Жұмыс қағидаттары",
      quality: { tab: "Сапа", list: [
        "Әр кезеңдегі стандартты операциялық рәсімдер — үлгілерді қабылдаудан деректерді мұрағаттауға дейін",
        "Зерттеулерді GLP қағидаттары мен ICH ұсынымдарына бағдарланып жоспарлаймыз",
        "Есепті бермес бұрын ішкі сапа бақылауы және нәтижелерді тәуелсіз тексеру"
      ]},
      time: { tab: "Мерзімдер", list: [
        "Мерзімдерді шартта бекітеміз және тәуекелдер туралы кейін емес, алдын ала хабарлаймыз",
        "Пилоттық in vitro кезеңі — хаттама бекітілген сәттен бастап 4 аптадан",
        "Жобаның жалпы циклін қысқарту үшін кезеңдерді қатар жоспарлау"
      ]},
      transparency: { tab: "Ашықтық", list: [
        "Жоба мәліметтерін талқылауды бастамас бұрын NDA",
        "Апта сайынғы статустар және аралық деректерге қолжетімділік",
        "Бастапқы деректер, хаттамалар және статистикалық скриптер есеппен бірге тапсырыс берушіге беріледі"
      ]},
      expertise: { tab: "Сараптама", list: [
        "Молекулалық онкология, патоморфология және биоинформатика саласында тәжірибесі бар команда",
        "Үш нозологияға шоғырлану модельдер мен олардың шектеулерін терең білуге мүмкіндік береді",
        "Қазақстандағы және шетелдегі зертханалар мен клиникалардың серіктестік желісі"
      ]}
    },
    process: {
      title: "Біз қалай жұмыс істейміз",
      lead: "Төрт түсінікті кезең. Әрқайсысында не болып жатқанын, қанша тұратынын және нәтиже қашан болатынын білесіз.",
      steps: [
        { title: "Сұрау және NDA", text: "Сіз міндетті сипаттайсыз, біз құпиялылық келісіміне қол қоямыз және зерттеу мақсаттарын нақтылаймыз." },
        { title: "Дизайн және смета", text: "Эксперимент дизайнын, модельдерді, іріктеме көлемін, мерзімдерді және бекітілген құнды ұсынамыз." },
        { title: "Зерттеу", text: "Бекітілген хаттама бойынша жұмыстарды орындаймыз, апта сайынғы статустар мен аралық деректерді жібереміз." },
        { title: "Есеп және деректер", text: "Қорытынды есепті, бастапқы деректерді, статистиканы және келесі кезең бойынша ұсынымдарды тапсырамыз." }
      ]
    },
    mission: {
      label: "Миссия",
      title: "Биотехті Қазақстанда көтереміз",
      text: "Біз — Қазақстаннан шыққан ғалымдар мен инженерлер командасымыз. Елдегі күшті биотехнологиялық сала сапалы қолданбалы ғылымнан басталатынына сенеміз. Біз үшін әр жоба — қазақстандық биотехтің құзыреттеріне, инфрақұрылымына және халықаралық нарықтағы беделіне қосқан үлес."
    },
    team: {
      title: "Команда",
      lead: "Академиялық және индустриялық тәжірибесі бар шағын команда. Бір контурда жұмыс істейміз — бөлімдер арасында тапсырма беру мен контекстті жоғалтусыз.",
      roles: [
        { title: "Ғылыми жетекшілік", text: "Академиялық және индустриялық жобаларда тәжірибесі бар молекулалық онкологтар." },
        { title: "Зертханалық команда", text: "Жасуша культуралары, гистология және in vivo модельдер бойынша мамандар." },
        { title: "Биоинформатика", text: "R және Python тілдерінде секвенирлеу және статистикамен жұмыс істейтін деректер талдаушылары." },
        { title: "Жобалық кеңсе", text: "Мерзімдерді, құжаттаманы және тапсырыс берушімен байланысты қадағалайтын менеджерлер." }
      ],
      principlesTitle: "Нені басшылыққа аламыз",
      principles: [
        "Адал нәтижелер — оның ішінде теріс нәтижелер де",
        "Қайталанғыштық жылдамдықтан маңызды",
        "Деректер тапсырыс берушіге тиесілі",
        "Үш тілде ашық коммуникация",
        "Жергілікті құзыреттер мен кадрларды дамыту",
        "Жануарлар мен биоматериалға этикалық қарым-қатынас"
      ]
    },
    contact: {
      title: "Бізбен байланысыңыз",
      lead: "Міндетті сипаттаңыз — бір жұмыс күні ішінде зерттеу дизайны, мерзімдері мен құны бойынша ұсыныспен ораламыз.",
      emailLabel: "Email", locationLabel: "Орналасқан жері", location: "Қазақстан",
      hoursLabel: "Жұмыс уақыты", hours: "Дс–Жм, 9:00–18:00 (GMT+5)",
      legal: [
        ["Заңды тұлға", "«Брайтфилд Биоресерч» ЖШС"],
        ["БСН", "260940037559"],
        ["Заңды мекенжайы", "Қазақстан, Қарағанды облысы, Қарағанды қ., Әлихан Бөкейхан ауданы, Донская к-сі, 49-үй, 2-пәтер, M03A7G6"],
        ["Басшы", "Глухов Андрей Сергеевич"]
      ]
    },
    form: {
      topic: "Сұрау тақырыбы",
      topicPlaceholder: "Тақырыпты таңдаңыз",
      topics: ["Клиникаға дейінгі зерттеу", "In vitro скрининг", "In vivo модельдер", "Биомаркерлер және деректерді талдау", "Фармакопеялық талдау", "Серіктестік", "Басқа"],
      name: "Аты-жөні", email: "Жұмыс email", phone: "Телефон", company: "Компания",
      position: "Лауазымы", message: "Міндеттің сипаттамасы",
      consent: 'Дербес деректерімді өңдеуге келісім беремін және <a href="privacy.html">құпиялылық саясатының</a> шарттарымен келісемін.',
      submit: "Сұрау жіберу",
      sending: "Жіберілуде…",
      success: "Рақмет! Сұрауыңызды алдық және жақын арада сізбен байланысамыз.",
      mailto: "Дайын хатпен пошта бағдарламаңыз ашылады.",
      error: "Жіберу мүмкін болмады. Бізге тікелей email арқылы жазыңыз.",
      invalid: "Міндетті өрістерді тексеріңіз."
    },
    footer: {
      tagline: "Онкологиядағы келісімшарттық клиникаға дейінгі және трансляциялық зерттеулер. Қазақстан.",
      rights: "Барлық құқықтар қорғалған.",
      privacy: "Құпиялылық саясаты"
    },
    privacy: {
      title: "Құпиялылық саясаты",
      updated: "Жаңартылды",
      p: [
        "Бұл саясат Brightfield Bioresearch компаниясының кері байланыс формасы немесе электрондық пошта арқылы берген дербес деректеріңізді қалай өңдейтінін сипаттайды.",
        "Біз тек өзіңіз көрсеткен деректерді жинаймыз: аты-жөні, байланыс деректері, компания, лауазым және сұраудың сипаттамасы. Деректер тек сұрауыңызға жауап беру және коммерциялық ұсыныс дайындау үшін пайдаланылады.",
        "Қазақстан Республикасының заңнамасында көзделген жағдайларды қоспағанда, дербес деректерді үшінші тұлғаларға бермейміз. Деректер өңдеу мақсаттары үшін қажетті мерзімнен ұзақ сақталмайды.",
        "Сайт бөгде трекерлер мен жарнамалық cookie-файлдарды пайдаланбайды. Таңдалған тіл браузеріңізде жергілікті сақталады.",
        "Байланыс email-ге жазу арқылы деректеріңізді нақтылауды, өзгертуді немесе жоюды сұрай аласыз."
      ],
      back: "Басты бетке"
    }
  },

  /* ======================= ENGLISH ======================= */
  en: {
    meta: {
      title: "Brightfield Bioresearch — Contract Oncology Research",
      desc: "Brightfield Bioresearch is a research team from Kazakhstan providing preclinical and translational studies for developers of lung, gastric and liver cancer therapies."
    },
    a11y: { skip: "Skip to content" },
    nav: {
      areas: "Focus areas", services: "Services", why: "Principles", process: "Process",
      team: "Team", contact: "Contact", cta: "Discuss a project"
    },
    hero: {
      kicker: "Contract research in oncology · Kazakhstan",
      title: "Outsourced preclinical research in oncology",
      lead: "Brightfield Bioresearch takes on the preclinical and translational stage of developing therapies for lung, gastric and liver cancer: from experimental design to a report ready for publication and regulatory submission.",
      cta1: "Discuss a project", cta2: "Our services"
    },
    stats: {
      s1: "oncology indications in focus",
      s2: "validated cell models",
      s3: "response to inquiries on business days", s3suffix: " h",
      s4: "of projects under NDA with raw data handover"
    },
    areas: {
      title: "Research focus areas",
      lead: "Three indications where we know the models, their limitations and the relevant clinical questions.",
      rowLabels: ["Cell lines", "Drivers and markers", "Models", "Key readouts"],
      items: [
        {
          index: "Indication 01",
          title: "Lung cancer",
          text: "Non-small cell and small cell lung cancer remain the leading cause of cancer mortality worldwide. We work with models that reflect the key driver mutations.",
          rows: ["A549, NCI-H1299, NCI-H460, PC-9", "EGFR, ALK, KRAS, ROS1, PD-L1", "Subcutaneous and orthotopic xenografts, models of acquired resistance to EGFR inhibitors", "IC50, apoptosis, migration and invasion, IHC, in vivo tumor volume"]
        },
        {
          index: "Indication 02",
          title: "Gastric cancer",
          text: "In Kazakhstan and Central Asia, gastric cancer remains one of the most common malignancies. We study HER2-positive and diffuse subtypes, response to immunotherapy and the role of the tumor microenvironment.",
          rows: ["AGS, MKN-45, NCI-N87, HGC-27", "HER2, MSI, PD-L1, CLDN18.2", "Organoids and 3D cultures from tumor tissue, xenografts, combination regimens of chemo- and targeted therapy", "Cytotoxicity, proliferation, marker expression, response to combinations"]
        },
        {
          index: "Indication 03",
          title: "Liver cancer",
          text: "Hepatocellular carcinoma develops against a background of chronic liver disease and requires models that account for fibrosis and metabolic context.",
          rows: ["HepG2, Huh-7, Hep3B, SNU-449", "AFP, VEGF, β-catenin, PD-L1", "Models on a background of fibrosis and steatohepatitis, orthotopic xenografts", "Efficacy alongside hepatotoxicity, PK/PD, histology"]
        }
      ]
    },
    services: {
      title: "What we do",
      lead: "The full preclinical cycle — from primary screening to the final report. We take on an entire project or close a single stage within your development program.",
      items: [
        { title: "In vitro screening", text: "Cytotoxicity, IC50, proliferation, apoptosis, migration and invasion across a panel of validated cell lines. Rapid candidate selection before moving to animal models.", tags: ["MTT / CCK-8", "Apoptosis", "Wound healing"] },
        { title: "In vivo models", text: "Xenograft, PDX and orthotopic tumor models. Efficacy, pharmacokinetics and tolerability assessment under veterinary and ethical oversight.", tags: ["Xenograft", "PDX", "PK / PD"] },
        { title: "Biomarkers and molecular analysis", text: "Immunohistochemistry, real-time PCR, western blot, flow cytometry and NGS to confirm the mechanism of action.", tags: ["IHC", "qPCR", "NGS"] },
        { title: "Bioinformatics and statistics", text: "Transcriptomic and genomic data analysis, statistical planning, result visualization and reproducible pipelines.", tags: ["RNA-seq", "R / Python", "Stat design"] },
        { title: "Study design", text: "Protocol development, sample size calculation, literature review and scientific support at every stage of the project.", tags: ["Protocol", "Literature review", "SOP"] },
        { title: "Project management and reporting", text: "A single point of contact, weekly status updates, and a report in Russian and English — ready for publication, grant or regulatory submission.", tags: ["Weekly status", "RU / EN", "Publication-ready"] },
        { title: "Pharmacopoeial quality control of oncology APIs and drug products", text: "Identification, assay, related substances and dissolution testing according to USP, Ph. Eur., the State Pharmacopoeia of Kazakhstan and the EAEU Pharmacopoeia monographs. All tests are performed using pharmacopoeial reference standards. Method verification and comparative dissolution profiling for generics.", tags: ["USP / Ph. Eur.", "HPLC", "Dissolution"] }
      ]
    },
    why: {
      title: "How we work",
      quality: { tab: "Quality", list: [
        "Standard operating procedures at every stage — from sample intake to data archiving",
        "Studies are planned with GLP principles and ICH guidelines in mind",
        "Internal quality control and independent verification of results before the report is issued"
      ]},
      time: { tab: "Timelines", list: [
        "Deadlines are fixed in the contract; risks are communicated in advance, not after the fact",
        "Pilot in vitro stage — from 4 weeks after protocol approval",
        "Parallel planning of stages to shorten the overall project cycle"
      ]},
      transparency: { tab: "Transparency", list: [
        "NDA before any project details are discussed",
        "Weekly status updates and access to interim data",
        "Raw data, protocols and statistical scripts are handed over to the client with the report"
      ]},
      expertise: { tab: "Expertise", list: [
        "A team with experience in molecular oncology, pathology and bioinformatics",
        "Focus on three indications means deep knowledge of the models and their limitations",
        "A partner network of laboratories and clinics in Kazakhstan and abroad"
      ]}
    },
    process: {
      title: "Project workflow",
      lead: "Four clear stages. At each one you know what is happening, what it costs and when to expect results.",
      steps: [
        { title: "Inquiry and NDA", text: "You describe the task, we sign a non-disclosure agreement and clarify the study objectives." },
        { title: "Design and quote", text: "We propose the experimental design, models, sample size, timeline and a fixed price." },
        { title: "Study", text: "We perform the work under the approved protocol and send weekly status updates and interim data." },
        { title: "Report and data", text: "We deliver the final report, raw data, statistics and recommendations for the next stage." }
      ]
    },
    mission: {
      label: "Mission",
      title: "Building biotech in Kazakhstan",
      text: "We are a team of scientists and engineers from Kazakhstan who believe that a strong national biotech industry starts with high-quality applied science. Every project is a contribution to the skills, infrastructure and international reputation of Kazakhstani biotech."
    },
    team: {
      title: "Team",
      lead: "A small team with academic and industry experience. We work in a single loop — no hand-offs between departments and no lost context.",
      roles: [
        { title: "Scientific leadership", text: "Molecular oncologists with experience in academic and industry projects." },
        { title: "Laboratory team", text: "Specialists in cell culture, histology and in vivo models." },
        { title: "Bioinformatics", text: "Data analysts working with sequencing and statistics in R and Python." },
        { title: "Project office", text: "Managers who keep timelines, documentation and client communication on track." }
      ],
      principlesTitle: "What guides us",
      principles: [
        "Honest results — including negative ones",
        "Reproducibility over speed",
        "The data belongs to the client",
        "Open communication in three languages",
        "Developing local expertise and talent",
        "Ethical treatment of animals and biomaterial"
      ]
    },
    contact: {
      title: "Get in touch",
      lead: "Describe your task and we will come back with a proposal on study design, timeline and cost within one business day.",
      emailLabel: "Email", locationLabel: "Location", location: "Kazakhstan",
      hoursLabel: "Working hours", hours: "Mon–Fri, 9:00–18:00 (GMT+5)",
      legal: [
        ["Legal entity", "Brightfield Bioresearch LLP"],
        ["BIN", "260940037559"],
        ["Registered address", "Apt. 2, 49 Donskaya St., Alikhan Bokeikhan District, Karaganda, Karaganda Region, Kazakhstan, M03A7G6"],
        ["Director", "Andrey Glukhov"]
      ]
    },
    form: {
      topic: "Topic",
      topicPlaceholder: "Select a topic",
      topics: ["Preclinical study", "In vitro screening", "In vivo models", "Biomarkers and data analysis", "Pharmacopoeial analysis", "Partnership", "Other"],
      name: "Full name", email: "Work email", phone: "Phone", company: "Company",
      position: "Position", message: "Describe your task",
      consent: 'I consent to the processing of my personal data and agree to the <a href="privacy.html">privacy policy</a>.',
      submit: "Send request",
      sending: "Sending…",
      success: "Thank you! We have received your request and will get back to you shortly.",
      mailto: "Your email client will open with a pre-filled message.",
      error: "Could not send. Please email us directly.",
      invalid: "Please check the required fields."
    },
    footer: {
      tagline: "Contract preclinical and translational research in oncology. Kazakhstan.",
      rights: "All rights reserved.",
      privacy: "Privacy policy"
    },
    privacy: {
      title: "Privacy policy",
      updated: "Updated",
      p: [
        "This policy describes how Brightfield Bioresearch processes the personal data you submit through the contact form or by email.",
        "We collect only the data you provide yourself: name, contact details, company, position and a description of your request. The data is used solely to respond to your inquiry and prepare a proposal.",
        "We do not share personal data with third parties except where required by the laws of the Republic of Kazakhstan. Data is stored no longer than necessary for the purposes of processing.",
        "The site does not use third-party trackers or advertising cookies. Your selected language is stored locally in your browser.",
        "You may request clarification, correction or deletion of your data by writing to our contact email."
      ],
      back: "Back to home"
    }
  }
};
