export type Dictionary = {
  nav: {
    home: string;
    about: string;
    solutions: string;
    epc: string;
    byd: string;
    victron: string;
    catalog: string;
    projects: string;
    contact: string;
    requestQuote: string;
  };
  solutionsMenu: { title: string; description: string }[];
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaQuote: string;
    ctaExplore: string;
  };
  stats: { label: string }[];
  about: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: string[];
  };
  solutions: {
    eyebrow: string;
    title: string;
    description: string;
    sectors: { title: string; description: string }[];
  };
  epc: {
    eyebrow: string;
    title: string;
    description: string;
    steps: { letter: string; title: string; description: string }[];
  };
  byd: {
    eyebrow: string;
    title: string;
    description: string;
    benefits: string[];
    cta: string;
  };
  victron: {
    eyebrow: string;
    title: string;
    description: string;
    benefits: string[];
    cta: string;
  };
  catalog: {
    eyebrow: string;
    title: string;
    description: string;
    filters: string[];
    items: { title: string; category: string; description: string }[];
    downloadCta: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    filters: string[];
    items: { title: string; category: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    send: string;
    success: string;
    error: string;
    phoneLabel: string;
    emailLabel: string;
    whatsappLabel: string;
    whatsappValue: string;
    addressLabel: string;
    address: string;
  };
  footer: {
    blurb: string;
    quickLinks: string;
    social: string;
    partners: string;
    contacts: string;
    rights: string;
  };
  language: string;
};

const catalogItemsPt = [
  {
    title: "BYD Battery-Box Premium",
    category: "BYD",
    description:
      "Armazenamento de lítio modular para sistemas residenciais e comerciais.",
  },
  {
    title: "Victron MultiPlus Inverter",
    category: "Victron",
    description:
      "Inversor/carregador compacto para sistemas off-grid e híbridos.",
  },
  {
    title: "Kit Solar Residencial 5kW",
    category: "Kits Solares",
    description: "Kit completo com painéis, inversor e estrutura de montagem.",
  },
  {
    title: "Victron SmartSolar MPPT",
    category: "Victron",
    description: "Controlador de carga inteligente com monitorização remota.",
  },
  {
    title: "BYD Comercial HV",
    category: "BYD",
    description: "Solução de baterias de alta tensão para operações comerciais.",
  },
  {
    title: "Acessórios e Cabos DC",
    category: "Acessórios",
    description: "Componentes certificados para instalação segura e duradoura.",
  },
];

export const pt: Dictionary = {
  nav: {
    home: "Início",
    about: "Quem Somos",
    solutions: "Soluções",
    epc: "Modelo EPC",
    byd: "BYD",
    victron: "Victron",
    catalog: "Catálogo",
    projects: "Projetos",
    contact: "Contactos",
    requestQuote: "Fale Connosco",
  },
  solutionsMenu: [
    { title: "Modelo EPC", description: "Engineering, Procurement & Construction" },
    { title: "BYD em Moçambique", description: "Baterias de lítio e suporte local" },
    { title: "Victron Supplier", description: "Equipamentos Victron Energy" },
    { title: "Technical Support", description: "Assistência técnica especializada" },
  ],
  hero: {
    eyebrow: "LSM · Lodge Solutions Mozambique",
    title: "Soluções Inteligentes para Energia Sustentável",
    subtitle:
      "Projetamos, instalamos e mantemos sistemas solares de alta performance para residências, empresas e projetos remotos.",
    ctaQuote: "Fale Connosco",
    ctaExplore: "Explorar Soluções",
  },
  stats: [
    { label: "Anos de Experiência" },
    { label: "Projetos Concluídos" },
    { label: "Energia Sustentável" },
    { label: "Suporte Técnico" },
  ],
  about: {
    eyebrow: "Quem Somos",
    title: "Engenharia moçambicana ao serviço da energia limpa",
    description:
      "A LSM — Lodge Solutions Mozambique é uma empresa especializada em energia solar, engenharia e construção sustentável. Unimos experiência técnica e compromisso ambiental para entregar soluções fiáveis, sob medida e de longa duração.",
    highlights: ["Engenharia", "Energia Solar", "Construção Sustentável", "Soluções Completas"],
  },
  solutions: {
    eyebrow: "Soluções de Energia Solar",
    title: "Energia certa para cada sector",
    description:
      "Do modelo EPC aos parceiros BYD e Victron — soluções integradas para autonomia energética em Moçambique.",
    sectors: [
      {
        title: "Modelo EPC (Engineering, Procurement & Construction)",
        description:
          "Do projeto à construção turnkey — engenharia, procurement e instalação com responsabilidade única.",
      },
      {
        title: "BYD em Moçambique",
        description:
          "Baterias de lítio de referência mundial, com stock e suporte técnico local.",
      },
      {
        title: "Victron Supplier",
        description:
          "Inversores e controladores Victron Energy para sistemas off-grid e híbridos.",
      },
      {
        title: "Technical Support",
        description:
          "Assistência técnica especializada, manutenção e suporte contínuo para os seus sistemas.",
      },
    ],
  },
  epc: {
    eyebrow: "Modelo EPC",
    title: "Engineering, Procurement & Construction",
    description:
      "Um modelo integrado que cobre todo o ciclo do projecto — da engenharia à construção — com responsabilidade única e resultados mensuráveis.",
    steps: [
      {
        letter: "E",
        title: "Engineering",
        description:
          "Estudo técnico, dimensionamento e projecto executivo adaptados ao local e às necessidades energéticas.",
      },
      {
        letter: "P",
        title: "Procurement",
        description:
          "Selecção e aquisição de equipamentos certificados (BYD, Victron e parceiros) com logística eficiente.",
      },
      {
        letter: "C",
        title: "Construction",
        description:
          "Instalação, comissionamento e entrega turnkey com equipas especializadas e supervisão contínua.",
      },
    ],
  },
  byd: {
    eyebrow: "Parceiro Oficial",
    title: "BYD em Moçambique",
    description:
      "Como parceiro BYD, a LSM disponibiliza baterias de lítio de referência mundial, com suporte técnico local e stock no mercado moçambicano.",
    benefits: [
      "Baterias de lítio de alta densidade",
      "Garantia internacional do fabricante",
      "Suporte técnico local pela equipa LSM",
      "Stock disponível em Moçambique",
    ],
    cta: "Ver Catálogo BYD",
  },
  victron: {
    eyebrow: "Fornecedor Autorizado",
    title: "Victron Supplier & Technical Support",
    description:
      "Fornecemos equipamentos Victron Energy e suporte técnico especializado para inversores, controladores e sistemas off-grid/híbridos.",
    benefits: [
      "Inversores e controladores Victron",
      "Assistência técnica especializada",
      "Peças e componentes disponíveis",
      "Formação para instaladores e clientes",
    ],
    cta: "Ver Catálogo Victron",
  },
  catalog: {
    eyebrow: "Catálogo",
    title: "Catálogo de Soluções",
    description:
      "Explore equipamentos e kits por categoria. Filtre por marca ou tipo de solução e descarregue o catálogo completo.",
    filters: ["Todos", "BYD", "Victron", "Kits Solares", "Acessórios"],
    items: catalogItemsPt,
    downloadCta: "Descarregar Catálogo Completo (PDF)",
  },
  projects: {
    eyebrow: "Projetos",
    title: "Portfólio de entregas em Moçambique",
    description:
      "Uma seleção de projetos solares, de construção e energia autonomizada para diferentes sectores.",
    filters: ["Todos", "Solar", "Construção", "Baterias", "Lodges"],
    items: [
      { title: "Instalação Solar Residencial — Inhambane", category: "Solar" },
      { title: "Lodge Eco — Inhambane", category: "Lodges" },
      { title: "BYD Battery-Box", category: "Baterias" },
      { title: "Edifício Sustentável — Inhambane", category: "Construção" },
      { title: "Sistema Off-grid Rural", category: "Solar" },
      { title: "Resort Costeiro — Inhambane", category: "Lodges" },
    ],
  },
  contact: {
    eyebrow: "Contactos",
    title: "Vamos conversar sobre o seu projeto",
    description: "Peça um orçamento ou agende uma consulta técnica com a nossa equipa.",
    name: "Nome",
    email: "Email",
    phone: "Telefone",
    subject: "Assunto",
    message: "Mensagem",
    send: "Enviar Mensagem",
    success: "Mensagem enviada com sucesso. Entraremos em contacto em breve.",
    error: "Não foi possível enviar. Tente novamente ou contacte-nos por WhatsApp.",
    phoneLabel: "Telefone",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    whatsappValue: "Conversar no WhatsApp",
    addressLabel: "Morada",
    address: "Inhambane, Moçambique",
  },
  footer: {
    blurb:
      "Lodge Solutions Mozambique — innovative energy & construction solutions for sustainable living.",
    quickLinks: "Links rápidos",
    social: "Redes sociais",
    partners: "Parceiros",
    contacts: "Contactos",
    rights: "Todos os direitos reservados.",
  },
  language: "Idioma",
};

export const en: Dictionary = {
  nav: {
    home: "Home",
    about: "Who We Are",
    solutions: "Solutions",
    epc: "EPC Model",
    byd: "BYD",
    victron: "Victron",
    catalog: "Catalog",
    projects: "Projects",
    contact: "Contacts",
    requestQuote: "Talk to Us",
  },
  solutionsMenu: [
    { title: "EPC Model", description: "Engineering, Procurement & Construction" },
    { title: "BYD in Mozambique", description: "Lithium batteries and local support" },
    { title: "Victron Supplier", description: "Victron Energy equipment" },
    { title: "Technical Support", description: "Specialized technical assistance" },
  ],
  hero: {
    eyebrow: "LSM · Lodge Solutions Mozambique",
    title: "Smart Solutions for Sustainable Energy",
    subtitle:
      "We design, install and maintain high-performance solar systems for homes, businesses and remote projects.",
    ctaQuote: "Talk to Us",
    ctaExplore: "Explore Solutions",
  },
  stats: [
    { label: "Years of Experience" },
    { label: "Completed Projects" },
    { label: "Sustainable Energy" },
    { label: "Technical Support" },
  ],
  about: {
    eyebrow: "Who We Are",
    title: "Mozambican engineering for clean energy",
    description:
      "LSM — Lodge Solutions Mozambique specializes in solar energy, engineering and sustainable construction. We combine technical expertise and environmental commitment to deliver reliable, tailored and lasting solutions.",
    highlights: ["Engineering", "Solar Energy", "Sustainable Construction", "Complete Solutions"],
  },
  solutions: {
    eyebrow: "Solar Energy Solutions",
    title: "The right energy for every sector",
    description:
      "From the EPC model to BYD and Victron partners — integrated solutions for energy autonomy in Mozambique.",
    sectors: [
      {
        title: "Modelo EPC (Engineering, Procurement & Construction)",
        description:
          "From design to turnkey construction — engineering, procurement and installation with single-point accountability.",
      },
      {
        title: "BYD in Mozambique",
        description:
          "World-class lithium batteries with local stock and technical support.",
      },
      {
        title: "Victron Supplier",
        description:
          "Victron Energy inverters and controllers for off-grid and hybrid systems.",
      },
      {
        title: "Technical Support",
        description:
          "Specialized technical assistance, maintenance and ongoing support for your systems.",
      },
    ],
  },
  epc: {
    eyebrow: "EPC Model",
    title: "Engineering, Procurement & Construction",
    description:
      "An integrated model covering the full project cycle — from engineering to construction — with single-point accountability.",
    steps: [
      {
        letter: "E",
        title: "Engineering",
        description:
          "Technical study, system sizing and executive design tailored to the site and energy needs.",
      },
      {
        letter: "P",
        title: "Procurement",
        description:
          "Sourcing certified equipment (BYD, Victron and partners) with efficient logistics.",
      },
      {
        letter: "C",
        title: "Construction",
        description:
          "Installation, commissioning and turnkey delivery by specialized teams with ongoing supervision.",
      },
    ],
  },
  byd: {
    eyebrow: "Official Partner",
    title: "BYD in Mozambique",
    description:
      "As a BYD partner, LSM provides world-class lithium batteries with local technical support and stock in the Mozambican market.",
    benefits: [
      "High-density lithium batteries",
      "International manufacturer warranty",
      "Local technical support by the LSM team",
      "Stock available in Mozambique",
    ],
    cta: "View BYD Catalog",
  },
  victron: {
    eyebrow: "Authorized Supplier",
    title: "Victron Supplier & Technical Support",
    description:
      "We supply Victron Energy equipment and specialized technical support for inverters, controllers and off-grid/hybrid systems.",
    benefits: [
      "Victron inverters and charge controllers",
      "Specialized technical assistance",
      "Parts and components available",
      "Training for installers and clients",
    ],
    cta: "View Victron Catalog",
  },
  catalog: {
    eyebrow: "Catalog",
    title: "Solutions Catalog",
    description:
      "Browse equipment and kits by category. Filter by brand or solution type and download the full catalog.",
    filters: ["All", "BYD", "Victron", "Solar Kits", "Accessories"],
    items: [
      {
        title: "BYD Battery-Box Premium",
        category: "BYD",
        description: "Modular lithium storage for residential and commercial systems.",
      },
      {
        title: "Victron MultiPlus Inverter",
        category: "Victron",
        description: "Compact inverter/charger for off-grid and hybrid systems.",
      },
      {
        title: "Residential Solar Kit 5kW",
        category: "Solar Kits",
        description: "Complete kit with panels, inverter and mounting structure.",
      },
      {
        title: "Victron SmartSolar MPPT",
        category: "Victron",
        description: "Smart charge controller with remote monitoring.",
      },
      {
        title: "BYD Commercial HV",
        category: "BYD",
        description: "High-voltage battery solution for commercial operations.",
      },
      {
        title: "DC Accessories & Cables",
        category: "Accessories",
        description: "Certified components for safe, durable installations.",
      },
    ],
    downloadCta: "Download Full Catalog (PDF)",
  },
  projects: {
    eyebrow: "Projects",
    title: "Delivery portfolio in Mozambique",
    description: "A selection of solar, construction and autonomous energy projects across sectors.",
    filters: ["All", "Solar", "Construction", "Batteries", "Lodges"],
    items: [
      { title: "Residential Solar Install — Inhambane", category: "Solar" },
      { title: "Eco Lodge — Inhambane", category: "Lodges" },
      { title: "BYD Battery-Box", category: "Batteries" },
      { title: "Sustainable Building — Inhambane", category: "Construction" },
      { title: "Rural Off-grid System", category: "Solar" },
      { title: "Coastal Resort — Inhambane", category: "Lodges" },
    ],
  },
  contact: {
    eyebrow: "Contacts",
    title: "Let’s talk about your project",
    description: "Request a quote or book a technical consultation with our team.",
    name: "Name",
    email: "Email",
    phone: "Phone",
    subject: "Subject",
    message: "Message",
    send: "Send Message",
    success: "Message sent successfully. We’ll get back to you soon.",
    error: "Could not send. Please try again or reach us on WhatsApp.",
    phoneLabel: "Phone",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    whatsappValue: "Chat on WhatsApp",
    addressLabel: "Address",
    address: "Inhambane, Mozambique",
  },
  footer: {
    blurb: "Lodge Solutions Mozambique — innovative energy & construction solutions for sustainable living.",
    quickLinks: "Quick links",
    social: "Social media",
    partners: "Partners",
    contacts: "Contacts",
    rights: "All rights reserved.",
  },
  language: "Language",
};

export const fr: Dictionary = {
  nav: {
    home: "Accueil",
    about: "Qui sommes-nous",
    solutions: "Solutions",
    epc: "Modèle EPC",
    byd: "BYD",
    victron: "Victron",
    catalog: "Catalogue",
    projects: "Projets",
    contact: "Contacts",
    requestQuote: "Parlons-en",
  },
  solutionsMenu: [
    { title: "Modèle EPC", description: "Engineering, Procurement & Construction" },
    { title: "BYD au Mozambique", description: "Batteries lithium et support local" },
    { title: "Victron Supplier", description: "Équipements Victron Energy" },
    { title: "Technical Support", description: "Assistance technique spécialisée" },
  ],
  hero: {
    eyebrow: "LSM · Lodge Solutions Mozambique",
    title: "Solutions intelligentes pour une énergie durable",
    subtitle:
      "Nous concevons, installons et maintenons des systèmes solaires haute performance pour logements, entreprises et projets isolés.",
    ctaQuote: "Parlons-en",
    ctaExplore: "Explorer les solutions",
  },
  stats: [
    { label: "Années d’expérience" },
    { label: "Projets réalisés" },
    { label: "Énergie durable" },
    { label: "Support technique" },
  ],
  about: {
    eyebrow: "Qui sommes-nous",
    title: "L’ingénierie mozambicaine au service de l’énergie propre",
    description:
      "LSM — Lodge Solutions Mozambique est spécialisée dans l’énergie solaire, l’ingénierie et la construction durable. Nous offrons des solutions fiables, sur mesure et durables.",
    highlights: ["Ingénierie", "Énergie solaire", "Construction durable", "Solutions complètes"],
  },
  solutions: {
    eyebrow: "Solutions d’énergie solaire",
    title: "La bonne énergie pour chaque secteur",
    description:
      "Du modèle EPC aux partenaires BYD et Victron — des solutions intégrées pour l’autonomie énergétique au Mozambique.",
    sectors: [
      {
        title: "Modelo EPC (Engineering, Procurement & Construction)",
        description:
          "De la conception à la construction clé en main — ingénierie, procurement et installation avec responsabilité unique.",
      },
      {
        title: "BYD au Mozambique",
        description:
          "Batteries lithium de référence mondiale, avec stock et support technique local.",
      },
      {
        title: "Victron Supplier",
        description:
          "Onduleurs et régulateurs Victron Energy pour systèmes hors réseau et hybrides.",
      },
      {
        title: "Technical Support",
        description:
          "Assistance technique spécialisée, maintenance et support continu pour vos systèmes.",
      },
    ],
  },
  epc: {
    eyebrow: "Modèle EPC",
    title: "Engineering, Procurement & Construction",
    description:
      "Un modèle intégré couvrant tout le cycle du projet — de l’ingénierie à la construction — avec une responsabilité unique.",
    steps: [
      {
        letter: "E",
        title: "Engineering",
        description:
          "Étude technique, dimensionnement et conception exécutive adaptés au site et aux besoins énergétiques.",
      },
      {
        letter: "P",
        title: "Procurement",
        description:
          "Sélection et acquisition d’équipements certifiés (BYD, Victron et partenaires) avec logistique efficace.",
      },
      {
        letter: "C",
        title: "Construction",
        description:
          "Installation, mise en service et livraison clé en main par des équipes spécialisées.",
      },
    ],
  },
  byd: {
    eyebrow: "Partenaire officiel",
    title: "BYD au Mozambique",
    description:
      "En tant que partenaire BYD, LSM fournit des batteries lithium de référence mondiale, avec support technique local et stock sur le marché mozambicain.",
    benefits: [
      "Batteries lithium haute densité",
      "Garantie internationale du fabricant",
      "Support technique local par l’équipe LSM",
      "Stock disponible au Mozambique",
    ],
    cta: "Voir le catalogue BYD",
  },
  victron: {
    eyebrow: "Fournisseur autorisé",
    title: "Victron Supplier & Technical Support",
    description:
      "Nous fournissons des équipements Victron Energy et un support technique spécialisé pour onduleurs, régulateurs et systèmes hors réseau/hybrides.",
    benefits: [
      "Onduleurs et régulateurs Victron",
      "Assistance technique spécialisée",
      "Pièces et composants disponibles",
      "Formation pour installateurs et clients",
    ],
    cta: "Voir le catalogue Victron",
  },
  catalog: {
    eyebrow: "Catalogue",
    title: "Catalogue de solutions",
    description:
      "Parcourez les équipements et kits par catégorie. Filtrez par marque ou type de solution et téléchargez le catalogue complet.",
    filters: ["Tous", "BYD", "Victron", "Kits solaires", "Accessoires"],
    items: [
      {
        title: "BYD Battery-Box Premium",
        category: "BYD",
        description: "Stockage lithium modulaire pour systèmes résidentiels et commerciaux.",
      },
      {
        title: "Victron MultiPlus Inverter",
        category: "Victron",
        description: "Onduleur/chargeur compact pour systèmes hors réseau et hybrides.",
      },
      {
        title: "Kit solaire résidentiel 5kW",
        category: "Kits solaires",
        description: "Kit complet avec panneaux, onduleur et structure de montage.",
      },
      {
        title: "Victron SmartSolar MPPT",
        category: "Victron",
        description: "Régulateur de charge intelligent avec monitoring à distance.",
      },
      {
        title: "BYD Commercial HV",
        category: "BYD",
        description: "Solution batteries haute tension pour opérations commerciales.",
      },
      {
        title: "Accessoires et câbles DC",
        category: "Accessoires",
        description: "Composants certifiés pour une installation sûre et durable.",
      },
    ],
    downloadCta: "Télécharger le catalogue complet (PDF)",
  },
  projects: {
    eyebrow: "Projets",
    title: "Portfolio de réalisations au Mozambique",
    description: "Une sélection de projets solaires, de construction et d’énergie autonome.",
    filters: ["Tous", "Solaire", "Construction", "Batteries", "Lodges"],
    items: [
      { title: "Installation solaire résidentielle — Inhambane", category: "Solaire" },
      { title: "Lodge écologique — Inhambane", category: "Lodges" },
      { title: "BYD Battery-Box", category: "Batteries" },
      { title: "Bâtiment durable — Inhambane", category: "Construction" },
      { title: "Système hors réseau rural", category: "Solaire" },
      { title: "Resort côtier — Inhambane", category: "Lodges" },
    ],
  },
  contact: {
    eyebrow: "Contacts",
    title: "Parlons de votre projet",
    description: "Demandez un devis ou planifiez une consultation technique.",
    name: "Nom",
    email: "E-mail",
    phone: "Téléphone",
    subject: "Sujet",
    message: "Message",
    send: "Envoyer le message",
    success: "Message envoyé avec succès. Nous vous répondrons bientôt.",
    error: "Envoi impossible. Réessayez ou contactez-nous sur WhatsApp.",
    phoneLabel: "Téléphone",
    emailLabel: "E-mail",
    whatsappLabel: "WhatsApp",
    whatsappValue: "Discuter sur WhatsApp",
    addressLabel: "Adresse",
    address: "Inhambane, Mozambique",
  },
  footer: {
    blurb: "Lodge Solutions Mozambique — solutions innovantes d’énergie et de construction durable.",
    quickLinks: "Liens rapides",
    social: "Réseaux sociaux",
    partners: "Partenaires",
    contacts: "Contacts",
    rights: "Tous droits réservés.",
  },
  language: "Langue",
};
