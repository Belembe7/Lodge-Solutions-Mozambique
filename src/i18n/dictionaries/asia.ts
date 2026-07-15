import type { Dictionary } from "./core";
import { en } from "./core";
import { fromEnglish } from "./merge";

export const zh: Dictionary = fromEnglish(en, {
  nav: {
    home: "首页",
    about: "关于我们",
    solutions: "解决方案",
    epc: "EPC 模式",
    byd: "BYD",
    victron: "Victron",
    catalog: "产品目录",
    projects: "项目",
    contact: "联系方式",
    requestQuote: "获取报价",
  },
  solutionsMenu: [
    { title: "EPC 模式", description: "Engineering, Procurement & Construction" },
    { title: "BYD 在莫桑比克", description: "锂电池与本地支持" },
    { title: "Victron Supplier", description: "Victron 设备供应" },
    { title: "Technical Support", description: "专业技术支持" },
  ],
  hero: {
    title: "可持续能源智能解决方案",
    subtitle: "我们为住宅、企业及偏远项目设计、安装并维护高性能太阳能系统。",
    ctaQuote: "获取报价",
    ctaExplore: "探索方案",
  },
  stats: [
    { label: "年行业经验" },
    { label: "已完成项目" },
    { label: "可持续能源" },
    { label: "技术支持" },
  ],
  about: {
    eyebrow: "关于我们",
    title: "莫桑比克工程服务清洁能源",
    description:
      "LSM — Lodge Solutions Mozambique 专注于太阳能、工程与可持续建筑，提供可靠、定制且持久的解决方案。",
    highlights: ["工程", "太阳能", "可持续建筑", "完整方案"],
  },
  solutions: {
    eyebrow: "太阳能解决方案",
    title: "为每个行业匹配合适能源",
    sectors: [
      {
        title: "Modelo EPC (Engineering, Procurement & Construction)",
        description: "从设计到交钥匙交付——工程、采购与安装统一负责。",
      },
      {
        title: "BYD 在莫桑比克",
        description: "世界级锂电池，配备本地库存与技术支持。",
      },
      {
        title: "Victron Supplier",
        description: "Victron 逆变器与控制器，适用于离网与混合系统。",
      },
      {
        title: "Technical Support",
        description: "专业技术支持、维护与持续系统服务。",
      },
    ],
  },
  epc: {
    eyebrow: "EPC 模式",
    description: "覆盖从工程到施工全周期的一体化模式，统一责任，结果可衡量。",
    steps: [
      {
        letter: "E",
        title: "Engineering",
        description: "根据现场与能源需求进行技术研究、系统选型与施工图设计。",
      },
      {
        letter: "P",
        title: "Procurement",
        description: "采购认证设备（BYD、Victron 及合作伙伴）并保障高效物流。",
      },
      {
        letter: "C",
        title: "Construction",
        description: "由专业团队完成安装、调试与交钥匙交付，并持续督导。",
      },
    ],
  },
  byd: {
    eyebrow: "官方合作伙伴",
    title: "BYD 在莫桑比克",
    description:
      "作为 BYD 合作伙伴，LSM 提供世界级锂电池，并配备本地技术支持与莫桑比克库存。",
    benefits: [
      "高密度锂电池",
      "国际厂商质保",
      "LSM 本地技术支持",
      "莫桑比克现货供应",
    ],
    cta: "查看 BYD 目录",
  },
  victron: {
    eyebrow: "授权供应商",
    description:
      "我们供应 Victron Energy 设备，并为逆变器、控制器及离网/混合系统提供专业技术支持。",
    benefits: [
      "Victron 逆变器与控制器",
      "专业技术协助",
      "备件与组件供应",
      "面向安装商与客户的培训",
    ],
    cta: "查看 Victron 目录",
  },
  catalog: {
    eyebrow: "产品目录",
    title: "解决方案目录",
    description: "按类别浏览设备与套件。按品牌或类型筛选，并下载完整目录。",
    filters: ["全部", "BYD", "Victron", "太阳能套件", "配件"],
    downloadCta: "下载完整目录（PDF）",
  },
  projects: {
    eyebrow: "项目",
    title: "莫桑比克交付组合",
    filters: ["全部", "太阳能", "建筑", "电池", "旅馆"],
  },
  contact: {
    eyebrow: "联系方式",
    title: "聊聊您的项目",
    description: "申请报价或预约技术咨询。",
    name: "姓名",
    email: "邮箱",
    phone: "电话",
    subject: "主题",
    message: "留言",
    send: "发送留言",
    success: "留言已发送，我们会尽快回复。",
    error: "发送失败，请重试或通过 WhatsApp 联系我们。",
    phoneLabel: "电话",
    emailLabel: "邮箱",
    whatsappValue: "在 WhatsApp 沟通",
    addressLabel: "地址",
    address: "莫桑比克，伊尼扬巴内",
  },
  footer: {
    blurb: "Lodge Solutions Mozambique — 创新能源与可持续建筑解决方案。",
    quickLinks: "快捷链接",
    social: "社交媒体",
    partners: "合作伙伴",
    contacts: "联系方式",
    rights: "版权所有。",
  },
  language: "语言",
});

export const ar: Dictionary = fromEnglish(en, {
  nav: {
    home: "الرئيسية",
    about: "من نحن",
    solutions: "الحلول",
    epc: "نموذج EPC",
    catalog: "الكتالوج",
    projects: "المشاريع",
    contact: "جهات الاتصال",
    requestQuote: "طلب عرض سعر",
  },
  solutionsMenu: [
    { title: "نموذج EPC", description: "Engineering, Procurement & Construction" },
    { title: "BYD في موزمبيق", description: "بطاريات ليثيوم ودعم محلي" },
    { title: "Victron Supplier", description: "معدات Victron Energy" },
    { title: "Technical Support", description: "دعم فني متخصص" },
  ],
  hero: {
    title: "حلول ذكية للطاقة المستدامة",
    subtitle:
      "نصمم ونركب ونصون أنظمة شمسية عالية الأداء للمنازل والشركات والمشاريع النائية.",
    ctaQuote: "طلب عرض سعر",
    ctaExplore: "استكشاف الحلول",
  },
  stats: [
    { label: "سنوات خبرة" },
    { label: "مشاريع منجزة" },
    { label: "طاقة مستدامة" },
    { label: "دعم فني" },
  ],
  about: {
    eyebrow: "من نحن",
    title: "هندسة موزمبيقية لخدمة الطاقة النظيفة",
    description:
      "تتخصص LSM — Lodge Solutions Mozambique في الطاقة الشمسية والهندسة والبناء المستدام، لتقديم حلول موثوقة ومخصصة وطويلة الأمد.",
    highlights: ["هندسة", "طاقة شمسية", "بناء مستدام", "حلول متكاملة"],
  },
  solutions: {
    eyebrow: "حلول الطاقة الشمسية",
    title: "الطاقة المناسبة لكل قطاع",
  },
  epc: {
    eyebrow: "نموذج EPC",
    description:
      "نموذج متكامل يغطي دورة المشروع بالكامل — من الهندسة إلى الإنشاء — بمسؤولية موحدة.",
  },
  byd: {
    eyebrow: "شريك رسمي",
    title: "BYD في موزمبيق",
    cta: "عرض كتالوج BYD",
  },
  victron: {
    eyebrow: "مورد معتمد",
    cta: "عرض كتالوج Victron",
  },
  catalog: {
    eyebrow: "الكتالوج",
    title: "كتالوج الحلول",
    filters: ["الكل", "BYD", "Victron", "أطقم شمسية", "ملحقات"],
    downloadCta: "تحميل الكتالوج الكامل (PDF)",
  },
  projects: {
    eyebrow: "المشاريع",
    title: "محفظة الإنجازات في موزمبيق",
    filters: ["الكل", "شمسي", "بناء", "بطاريات", "نزل"],
  },
  contact: {
    eyebrow: "جهات الاتصال",
    title: "لنتحدث عن مشروعك",
    description: "اطلب عرض سعر أو احجز استشارة فنية مع فريقنا.",
    name: "الاسم",
    email: "البريد",
    phone: "الهاتف",
    subject: "الموضوع",
    message: "الرسالة",
    send: "إرسال الرسالة",
    success: "تم إرسال الرسالة بنجاح. سنعود إليك قريباً.",
    error: "تعذر الإرسال. حاول مجدداً أو تواصل عبر واتساب.",
    phoneLabel: "الهاتف",
    emailLabel: "البريد",
    whatsappValue: "الدردشة عبر واتساب",
    addressLabel: "العنوان",
    address: "إينهامباني، موزمبيق",
  },
  footer: {
    blurb: "Lodge Solutions Mozambique — حلول مبتكرة للطاقة والبناء المستدام.",
    quickLinks: "روابط سريعة",
    social: "وسائل التواصل",
    partners: "الشركاء",
    contacts: "جهات الاتصال",
    rights: "جميع الحقوق محفوظة.",
  },
  language: "اللغة",
});

export const ru: Dictionary = fromEnglish(en, {
  nav: {
    home: "Главная",
    about: "О нас",
    solutions: "Решения",
    epc: "Модель EPC",
    catalog: "Каталог",
    projects: "Проекты",
    contact: "Контакты",
    requestQuote: "Запросить расчёт",
  },
  solutionsMenu: [
    { title: "Модель EPC", description: "Engineering, Procurement & Construction" },
    { title: "BYD в Мозамбике", description: "Литиевые батареи и локальная поддержка" },
    { title: "Victron Supplier", description: "Оборудование Victron Energy" },
    { title: "Technical Support", description: "Специализированная техподдержка" },
  ],
  hero: {
    title: "Умные решения для устойчивой энергетики",
    subtitle:
      "Мы проектируем, устанавливаем и обслуживаем высокопроизводительные солнечные системы для домов, бизнеса и удалённых объектов.",
    ctaQuote: "Запросить расчёт",
    ctaExplore: "Изучить решения",
  },
  stats: [
    { label: "Лет опыта" },
    { label: "Завершённых проектов" },
    { label: "Устойчивая энергия" },
    { label: "Техподдержка" },
  ],
  about: {
    eyebrow: "О нас",
    title: "Мозамбикская инженерия на службе чистой энергии",
    highlights: ["Инженерия", "Солнечная энергия", "Устойчивое строительство", "Полные решения"],
  },
  solutions: {
    eyebrow: "Солнечные решения",
    title: "Подходящая энергия для каждого сектора",
  },
  epc: {
    eyebrow: "Модель EPC",
    description:
      "Интегрированная модель полного цикла — от инженерии до строительства — с единой зоной ответственности.",
  },
  byd: {
    eyebrow: "Официальный партнёр",
    title: "BYD в Мозамбике",
    cta: "Смотреть каталог BYD",
  },
  victron: {
    eyebrow: "Авторизованный поставщик",
    cta: "Смотреть каталог Victron",
  },
  catalog: {
    eyebrow: "Каталог",
    title: "Каталог решений",
    filters: ["Все", "BYD", "Victron", "Солнечные комплекты", "Аксессуары"],
    downloadCta: "Скачать полный каталог (PDF)",
  },
  projects: {
    eyebrow: "Проекты",
    title: "Портфолио реализаций в Мозамбике",
    filters: ["Все", "Солнце", "Строительство", "Батареи", "Лоджи"],
  },
  contact: {
    eyebrow: "Контакты",
    title: "Давайте обсудим ваш проект",
    description: "Запросите расчёт или запишитесь на техническую консультацию.",
    name: "Имя",
    email: "Email",
    phone: "Телефон",
    subject: "Тема",
    message: "Сообщение",
    send: "Отправить сообщение",
    success: "Сообщение отправлено. Мы скоро свяжемся с вами.",
    error: "Не удалось отправить. Попробуйте снова или напишите в WhatsApp.",
    phoneLabel: "Телефон",
    emailLabel: "Email",
    whatsappValue: "Написать в WhatsApp",
    addressLabel: "Адрес",
    address: "Иньямбане, Мозамбик",
  },
  footer: {
    blurb: "Lodge Solutions Mozambique — инновационные решения в энергетике и строительстве.",
    quickLinks: "Быстрые ссылки",
    social: "Соцсети",
    partners: "Партнёры",
    contacts: "Контакты",
    rights: "Все права защищены.",
  },
  language: "Язык",
});

export const ja: Dictionary = fromEnglish(en, {
  nav: {
    home: "ホーム",
    about: "私たちについて",
    solutions: "ソリューション",
    epc: "EPCモデル",
    catalog: "カタログ",
    projects: "プロジェクト",
    contact: "お問い合わせ",
    requestQuote: "見積もりを依頼",
  },
  solutionsMenu: [
    { title: "EPCモデル", description: "Engineering, Procurement & Construction" },
    { title: "モザンビークのBYD", description: "リチウム電池と現地サポート" },
    { title: "Victron Supplier", description: "Victron Energy機器" },
    { title: "Technical Support", description: "専門テクニカルサポート" },
  ],
  hero: {
    title: "持続可能なエネルギーのためのスマートソリューション",
    subtitle:
      "住宅、企業、遠隔プロジェクト向けに高性能太陽光発電システムの設計・設置・保守を行います。",
    ctaQuote: "見積もりを依頼",
    ctaExplore: "ソリューションを見る",
  },
  stats: [
    { label: "年の経験" },
    { label: "完了プロジェクト" },
    { label: "持続可能なエネルギー" },
    { label: "テクニカルサポート" },
  ],
  about: {
    eyebrow: "私たちについて",
    title: "クリーンエネルギーのためのモザンビーク工学",
    highlights: ["エンジニアリング", "太陽光エネルギー", "持続可能な建設", "ワンストップソリューション"],
  },
  solutions: {
    eyebrow: "太陽光エネルギーソリューション",
    title: "あらゆる分野に最適なエネルギー",
  },
  epc: {
    eyebrow: "EPCモデル",
    description:
      "エンジニアリングから建設までを一貫して担う統合モデルで、責任の所在を明確にします。",
  },
  byd: {
    eyebrow: "公式パートナー",
    title: "モザンビークのBYD",
    cta: "BYDカタログを見る",
  },
  victron: {
    eyebrow: "正規サプライヤー",
    cta: "Victronカタログを見る",
  },
  catalog: {
    eyebrow: "カタログ",
    title: "ソリューションカタログ",
    filters: ["すべて", "BYD", "Victron", "太陽光キット", "アクセサリー"],
    downloadCta: "完全カタログをダウンロード（PDF）",
  },
  projects: {
    eyebrow: "プロジェクト",
    title: "モザンビークでの実績ポートフォリオ",
    filters: ["すべて", "太陽光", "建設", "バッテリー", "ロッジ"],
  },
  contact: {
    eyebrow: "お問い合わせ",
    title: "プロジェクトについてご相談ください",
    description: "見積もり依頼または技術相談をご予約ください。",
    name: "お名前",
    email: "メール",
    phone: "電話",
    subject: "件名",
    message: "メッセージ",
    send: "メッセージを送信",
    success: "メッセージを送信しました。すぐにご連絡します。",
    error: "送信できませんでした。再試行するかWhatsAppでご連絡ください。",
    phoneLabel: "電話",
    emailLabel: "メール",
    whatsappValue: "WhatsAppでチャット",
    addressLabel: "住所",
    address: "モザンビーク、イニャンバネ",
  },
  footer: {
    blurb: "Lodge Solutions Mozambique — 持続可能な生活のための革新的なエネルギー＆建設ソリューション。",
    quickLinks: "クイックリンク",
    social: "ソーシャル",
    partners: "パートナー",
    contacts: "お問い合わせ",
    rights: "無断転載を禁じます。",
  },
  language: "言語",
});
