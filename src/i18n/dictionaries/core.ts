export type Dictionary = {
  nav: {
    home: string;
    about: string;
    services: string;
    solutions: string;
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
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; description: string }[];
  };
  solutions: {
    eyebrow: string;
    title: string;
    description: string;
    sectors: { title: string; description: string }[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    description: string;
    steps: { title: string; description: string }[];
  };
  partners: {
    eyebrow: string;
    title: string;
    description: string;
  };
  whyUs: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    filters: string[];
    items: { title: string; category: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: { question: string; answer: string }[];
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

export const pt: Dictionary = {
  nav: {
    home: "Início",
    about: "Sobre Nós",
    services: "Serviços",
    solutions: "Soluções",
    projects: "Projetos",
    contact: "Contacto",
    requestQuote: "Solicitar Orçamento",
  },
  solutionsMenu: [
    { title: "Energia Solar", description: "Sistemas fotovoltaicos de alta performance" },
    { title: "Baterias", description: "Armazenamento seguro e eficiente" },
    { title: "Off-grid", description: "Autonomia energética em zonas remotas" },
    { title: "Híbridos", description: "Integração rede + solar inteligente" },
    { title: "Construção Sustentável", description: "Obras com baixo impacto ambiental" },
    { title: "Purificação de Água", description: "Água limpa com energia solar" },
  ],
  hero: {
    eyebrow: "LSM · Lodge Solutions Mozambique",
    title: "Soluções Inteligentes para Energia Sustentável",
    subtitle:
      "Projetamos, instalamos e mantemos sistemas solares de alta performance para residências, empresas e projetos remotos.",
    ctaQuote: "Solicitar Orçamento",
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
  services: {
    eyebrow: "Os Nossos Serviços",
    title: "Soluções completas de energia e construção",
    description:
      "Do projeto à monitorização, cobrimos todo o ciclo de vida das suas necessidades energéticas e de infraestrutura sustentável.",
    items: [
      { title: "Energia Solar", description: "Projeto e instalação de sistemas fotovoltaicos para residências, comércio e indústria." },
      { title: "Baterias", description: "Soluções de armazenamento com tecnologia de ponta para autonomia e segurança energética." },
      { title: "Sistemas Off-grid", description: "Energia independente da rede para lodges, comunidades e operações remotas." },
      { title: "Sistemas Híbridos", description: "Combinação inteligente de rede elétrica e solar para máxima eficiência." },
      { title: "Construção Sustentável", description: "Engenharia e construção com materiais e práticas de baixo impacto ambiental." },
      { title: "Purificação de Água", description: "Sistemas de tratamento e purificação alimentados por energia solar." },
    ],
  },
  solutions: {
    eyebrow: "Soluções de Energia",
    title: "Energia certa para cada sector",
    description:
      "Soluções adaptadas ao contexto operacional de residências, empresas, indústria, turismo, saúde e organizações sociais.",
    sectors: [
      { title: "Residencial", description: "Autonomia energética e redução de custos para casas e condomínios." },
      { title: "Comercial", description: "Soluções escaláveis para escritórios, lojas e centros de negócio." },
      { title: "Industrial", description: "Sistemas robustos para fábrica, armazém e operações de alta demanda." },
      { title: "Turismo", description: "Energia fiável e sustentável para lodges, resorts e eco-turismo." },
      { title: "Hospitais", description: "Continuidade de serviço crítico com backup solar e baterias." },
      { title: "ONGs", description: "Projetos sociais e comunitários com impacto ambiental positivo." },
    ],
  },
  howItWorks: {
    eyebrow: "Como Funciona",
    title: "Do primeiro contacto à monitorização contínua",
    description: "Um processo claro e transparente, desenhado para garantir qualidade em cada etapa.",
    steps: [
      { title: "Consulta", description: "Avaliamos necessidades energéticas e o contexto do local." },
      { title: "Projeto", description: "Desenhamos a solução técnica à medida, com orçamento claro." },
      { title: "Instalação", description: "Equipas especializadas executam com segurança e qualidade." },
      { title: "Testes", description: "Validamos desempenho, segurança e conformidade do sistema." },
      { title: "Monitorização", description: "Acompanhamento contínuo e suporte técnico 24/7." },
    ],
  },
  partners: {
    eyebrow: "Parceiros",
    title: "Tecnologia de marcas de referência",
    description:
      "Colaboramos com parceiros internacionais para entregar sistemas fiáveis e de elevada performance.",
  },
  whyUs: {
    eyebrow: "Porque Escolher a LSM",
    title: "Experiência, engenharia e compromisso sustentável",
    description:
      "Mais do que instalar equipamentos — acompanhamos o ciclo completo da sua solução energética.",
    items: [
      "Mais de 17 anos",
      "Engenharia especializada",
      "Soluções completas",
      "Parceiros internacionais",
      "Projetos personalizados",
      "Baixo impacto ambiental",
    ],
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
  faq: {
    eyebrow: "FAQ",
    title: "Perguntas frequentes",
    description:
      "Esclarecimentos sobre instalação, garantias e funcionamento dos sistemas solares.",
    items: [
      {
        question: "Quanto tempo demora a instalação?",
        answer:
          "O prazo varia conforme a dimensão do projeto. Instalações residenciais tipicamente concluem-se em poucos dias após a aprovação do projeto; projetos comerciais ou industriais podem necessitar de semanas.",
      },
      {
        question: "Que garantias oferecem?",
        answer:
          "Trabalhamos com equipamentos de marcas reconhecidas e oferecemos garantia de equipamento e de instalação. Os prazos exactos dependem do fabricante e do tipo de sistema.",
      },
      {
        question: "Funciona em caso de falha de energia da rede?",
        answer:
          "Sim. Com sistemas híbridos ou off-grid com baterias, a instalação pode continuar a fornecer energia mesmo quando a rede pública falha.",
      },
      {
        question: "A LSM também faz manutenção?",
        answer:
          "Sim. Disponibilizamos planos de manutenção preventiva e suporte técnico para garantir o desempenho contínuo do sistema.",
      },
      {
        question: "É necessário autorização ou licenças?",
        answer:
          "Dependendo da localização e da potência, podem ser necessárias autorizações locais. A nossa equipa orienta o cliente em todo o processo.",
      },
      {
        question: "Os sistemas funcionam bem no clima moçambicano?",
        answer:
          "Absolutamente. Dimensionamos soluções para o irradimento solar local e condições climáticos da região, maximizando produtividade e durabilidade.",
      },
    ],
  },
  contact: {
    eyebrow: "Contacto",
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

/** Mesma estrutura — traduções das 9 línguas restantes */
export const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About Us",
    services: "Services",
    solutions: "Solutions",
    projects: "Projects",
    contact: "Contact",
    requestQuote: "Request a Quote",
  },
  solutionsMenu: [
    { title: "Solar Energy", description: "High-performance photovoltaic systems" },
    { title: "Batteries", description: "Safe and efficient energy storage" },
    { title: "Off-grid", description: "Energy autonomy for remote areas" },
    { title: "Hybrid", description: "Smart grid + solar integration" },
    { title: "Sustainable Construction", description: "Low environmental impact builds" },
    { title: "Water Purification", description: "Clean water powered by solar" },
  ],
  hero: {
    eyebrow: "LSM · Lodge Solutions Mozambique",
    title: "Smart Solutions for Sustainable Energy",
    subtitle:
      "We design, install and maintain high-performance solar systems for homes, businesses and remote projects.",
    ctaQuote: "Request a Quote",
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
  services: {
    eyebrow: "Our Services",
    title: "Complete energy and construction solutions",
    description:
      "From design to monitoring, we cover the full lifecycle of your energy and sustainable infrastructure needs.",
    items: [
      { title: "Solar Energy", description: "Design and installation of photovoltaic systems for homes, commerce and industry." },
      { title: "Batteries", description: "State-of-the-art storage solutions for autonomy and energy security." },
      { title: "Off-grid Systems", description: "Grid-independent power for lodges, communities and remote operations." },
      { title: "Hybrid Systems", description: "Smart combination of grid and solar for maximum efficiency." },
      { title: "Sustainable Construction", description: "Engineering and builds with low-impact materials and practices." },
      { title: "Water Purification", description: "Solar-powered treatment and purification systems." },
    ],
  },
  solutions: {
    eyebrow: "Energy Solutions",
    title: "The right energy for every sector",
    description:
      "Solutions tailored to homes, businesses, industry, tourism, healthcare and social organizations.",
    sectors: [
      { title: "Residential", description: "Energy autonomy and cost savings for homes and condominiums." },
      { title: "Commercial", description: "Scalable solutions for offices, shops and business centers." },
      { title: "Industrial", description: "Robust systems for factories, warehouses and high-demand operations." },
      { title: "Tourism", description: "Reliable sustainable power for lodges, resorts and eco-tourism." },
      { title: "Hospitals", description: "Critical continuity with solar backup and batteries." },
      { title: "NGOs", description: "Community projects with positive environmental impact." },
    ],
  },
  howItWorks: {
    eyebrow: "How It Works",
    title: "From first contact to continuous monitoring",
    description: "A clear, transparent process designed to ensure quality at every step.",
    steps: [
      { title: "Consultation", description: "We assess energy needs and site context." },
      { title: "Design", description: "We craft a tailored technical solution with a clear budget." },
      { title: "Installation", description: "Specialist teams deliver safely and to a high standard." },
      { title: "Testing", description: "We validate performance, safety and system compliance." },
      { title: "Monitoring", description: "Ongoing follow-up and 24/7 technical support." },
    ],
  },
  partners: {
    eyebrow: "Partners",
    title: "Reference-brand technology",
    description: "We work with international partners to deliver reliable, high-performance systems.",
  },
  whyUs: {
    eyebrow: "Why Choose LSM",
    title: "Experience, engineering and sustainable commitment",
    description: "More than installing equipment — we support the full lifecycle of your energy solution.",
    items: [
      "Over 17 years",
      "Specialized engineering",
      "Complete solutions",
      "International partners",
      "Custom projects",
      "Low environmental impact",
    ],
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
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    description: "Clear answers on installation, warranties and how solar systems work.",
    items: [
      { question: "How long does installation take?", answer: "Timelines depend on project size. Residential installs typically finish within a few days after design approval; commercial or industrial projects may take weeks." },
      { question: "What warranties do you offer?", answer: "We use recognized brands and provide equipment and installation warranties. Exact terms depend on the manufacturer and system type." },
      { question: "Does it work during grid outages?", answer: "Yes. With hybrid or off-grid systems and batteries, power can continue when the public grid fails." },
      { question: "Does LSM provide maintenance?", answer: "Yes. We offer preventive maintenance plans and technical support to keep systems performing." },
      { question: "Are permits required?", answer: "Depending on location and capacity, local authorizations may be needed. Our team guides you through the process." },
      { question: "Do systems work well in Mozambique’s climate?", answer: "Absolutely. We size solutions for local solar irradiance and climate conditions to maximize output and durability." },
    ],
  },
  contact: {
    eyebrow: "Contact",
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
    about: "À propos",
    services: "Services",
    solutions: "Solutions",
    projects: "Projets",
    contact: "Contact",
    requestQuote: "Demander un devis",
  },
  solutionsMenu: [
    { title: "Énergie solaire", description: "Systèmes photovoltaïques haute performance" },
    { title: "Batteries", description: "Stockage sûr et efficace" },
    { title: "Hors réseau", description: "Autonomie énergétique en zones isolées" },
    { title: "Hybrides", description: "Intégration intelligente réseau + solaire" },
    { title: "Construction durable", description: "Ouvrages à faible impact environnemental" },
    { title: "Purification de l’eau", description: "Eau propre alimentée par le solaire" },
  ],
  hero: {
    eyebrow: "LSM · Lodge Solutions Mozambique",
    title: "Solutions intelligentes pour une énergie durable",
    subtitle:
      "Nous concevons, installons et maintenons des systèmes solaires haute performance pour logements, entreprises et projets isolés.",
    ctaQuote: "Demander un devis",
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
  services: {
    eyebrow: "Nos services",
    title: "Solutions complètes d’énergie et de construction",
    description:
      "De la conception au monitoring, nous couvrons tout le cycle de vos besoins énergétiques et d’infrastructure durable.",
    items: [
      { title: "Énergie solaire", description: "Conception et installation de systèmes photovoltaïques pour logements, commerces et industrie." },
      { title: "Batteries", description: "Solutions de stockage avancées pour l’autonomie et la sécurité énergétique." },
      { title: "Systèmes hors réseau", description: "Énergie indépendante pour lodges, communautés et sites isolés." },
      { title: "Systèmes hybrides", description: "Combinaison intelligente du réseau et du solaire." },
      { title: "Construction durable", description: "Ingénierie et construction à faible impact environnemental." },
      { title: "Purification de l’eau", description: "Traitement et purification alimentés par le solaire." },
    ],
  },
  solutions: {
    eyebrow: "Solutions énergétiques",
    title: "La bonne énergie pour chaque secteur",
    description:
      "Des solutions adaptées aux logements, entreprises, industrie, tourisme, santé et ONG.",
    sectors: [
      { title: "Résidentiel", description: "Autonomie énergétique et réduction des coûts pour maisons et copropriétés." },
      { title: "Commercial", description: "Solutions évolutives pour bureaux, commerces et centres d’affaires." },
      { title: "Industriel", description: "Systèmes robustes pour usines, entrepôts et fortes demandes." },
      { title: "Tourisme", description: "Énergie fiable et durable pour lodges, resorts et écotourisme." },
      { title: "Hôpitaux", description: "Continuité critique avec secours solaire et batteries." },
      { title: "ONG", description: "Projets sociaux à impact environnemental positif." },
    ],
  },
  howItWorks: {
    eyebrow: "Comment ça marche",
    title: "Du premier contact au suivi continu",
    description: "Un processus clair et transparent pour garantir la qualité à chaque étape.",
    steps: [
      { title: "Consultation", description: "Nous évaluons les besoins énergétiques et le site." },
      { title: "Conception", description: "Nous concevons une solution technique sur mesure avec budget clair." },
      { title: "Installation", description: "Des équipes spécialisées exécutent en sécurité et qualité." },
      { title: "Tests", description: "Nous validons performance, sécurité et conformité." },
      { title: "Monitoring", description: "Suivi continu et support technique 24/7." },
    ],
  },
  partners: {
    eyebrow: "Partenaires",
    title: "Technologie de marques de référence",
    description: "Nous collaborons avec des partenaires internationaux pour des systèmes fiables et performants.",
  },
  whyUs: {
    eyebrow: "Pourquoi choisir LSM",
    title: "Expérience, ingénierie et engagement durable",
    description: "Plus qu’installer des équipements — nous accompagnons tout le cycle de votre solution.",
    items: [
      "Plus de 17 ans",
      "Ingénierie spécialisée",
      "Solutions complètes",
      "Partenaires internationaux",
      "Projets sur mesure",
      "Faible impact environnemental",
    ],
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
  faq: {
    eyebrow: "FAQ",
    title: "Questions fréquentes",
    description: "Réponses sur l’installation, les garanties et le fonctionnement des systèmes solaires.",
    items: [
      { question: "Combien de temps dure l’installation ?", answer: "Les délais dépendent de la taille du projet. Les installations résidentielles se terminent souvent en quelques jours après validation ; les projets commerciaux ou industriels peuvent prendre des semaines." },
      { question: "Quelles garanties offrez-vous ?", answer: "Nous travaillons avec des marques reconnues et offrons des garanties d’équipement et d’installation." },
      { question: "Cela fonctionne-t-il en cas de panne du réseau ?", answer: "Oui. Avec des systèmes hybrides ou hors réseau et des batteries, l’alimentation peut continuer." },
      { question: "LSM assure-t-elle la maintenance ?", answer: "Oui. Nous proposons des plans de maintenance préventive et un support technique." },
      { question: "Faut-il des autorisations ?", answer: "Selon le lieu et la puissance, des autorisations locales peuvent être nécessaires. Notre équipe vous guide." },
      { question: "Les systèmes conviennent-ils au climat mozambicain ?", answer: "Absolument. Nous dimensionnons pour l’irradiation solaire locale et le climat régional." },
    ],
  },
  contact: {
    eyebrow: "Contact",
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
