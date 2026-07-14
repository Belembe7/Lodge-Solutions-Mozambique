import type {
  FaqItem,
  NavItem,
  ProjectItem,
  SectorSolution,
  ServiceItem,
  SolutionMenuItem,
  StatItem,
} from "@/types";

export const SITE_NAME = "LSM — Lodge Solutions Mozambique";
export const SITE_TAGLINE =
  "Innovative Energy & Construction Solutions for Sustainable Living";

export const CONTACT = {
  phone: "+258 84 000 0000",
  email: "contacto@lsmcompanyp.co.mz",
  whatsapp: "258840000000",
  address: "Inhambane, Moçambique",
  // TODO: inserir localização exacta do escritório em Inhambane
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Inhambane%2C+Mozambique&hl=pt&z=13&output=embed",
};

export const NAV_LINKS: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contacto", href: "#contacto" },
];

export const SOLUTION_MENU: SolutionMenuItem[] = [
  {
    title: "Energia Solar",
    description: "Sistemas fotovoltaicos de alta performance",
    href: "#servicos",
    icon: "Sun",
  },
  {
    title: "Baterias",
    description: "Armazenamento seguro e eficiente",
    href: "#servicos",
    icon: "BatteryCharging",
  },
  {
    title: "Off-grid",
    description: "Autonomia energética em zonas remotas",
    href: "#servicos",
    icon: "Home",
  },
  {
    title: "Híbridos",
    description: "Integração rede + solar inteligente",
    href: "#servicos",
    icon: "Zap",
  },
  {
    title: "Construção Sustentável",
    description: "Obras com baixo impacto ambiental",
    href: "#servicos",
    icon: "Building2",
  },
  {
    title: "Purificação de Água",
    description: "Água limpa com energia solar",
    href: "#servicos",
    icon: "Droplets",
  },
];

// substituir por dado real ou remover se não houver métricas verificadas
export const STATS: StatItem[] = [
  { value: 17, suffix: "+", label: "Anos de Experiência" },
  { value: 500, suffix: "+", label: "Projetos Concluídos" },
  { value: 100, suffix: "%", label: "Energia Sustentável" },
  { value: 24, suffix: "/7", label: "Suporte Técnico" },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Energia Solar",
    description:
      "Projeto e instalação de sistemas fotovoltaicos para residências, comércio e indústria.",
    icon: "Sun",
  },
  {
    title: "Baterias",
    description:
      "Soluções de armazenamento com tecnologia de ponta para autonomia e segurança energética.",
    icon: "BatteryCharging",
  },
  {
    title: "Sistemas Off-grid",
    description:
      "Energia independente da rede para lodges, comunidades e operações remotas.",
    icon: "Home",
  },
  {
    title: "Sistemas Híbridos",
    description:
      "Combinação inteligente de rede elétrica e solar para máxima eficiência.",
    icon: "Zap",
  },
  {
    title: "Construção Sustentável",
    description:
      "Engenharia e construção com materiais e práticas de baixo impacto ambiental.",
    icon: "Building2",
  },
  {
    title: "Purificação de Água",
    description:
      "Sistemas de tratamento e purificação alimentados por energia solar.",
    icon: "Droplets",
  },
];

export const SECTOR_SOLUTIONS: SectorSolution[] = [
  {
    id: "residencial",
    title: "Residencial",
    description:
      "Autonomia energética e redução de custos para casas e condomínios.",
    // TODO: substituir por imagem real do cliente
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "comercial",
    title: "Comercial",
    description:
      "Soluções escaláveis para escritórios, lojas e centros de negócio.",
    // TODO: substituir por imagem real do cliente
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "industrial",
    title: "Industrial",
    description:
      "Sistemas robustos para fábrica, armazém e operações de alta demanda.",
    // TODO: substituir por imagem real do cliente
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "turismo",
    title: "Turismo",
    description:
      "Energia fiável e sustentável para lodges, resorts e eco-turismo.",
    // TODO: substituir por imagem real do cliente
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "hospitais",
    title: "Hospitais",
    description:
      "Continuidade de serviço crítico com backup solar e baterias.",
    // TODO: substituir por imagem real do cliente
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ongs",
    title: "ONGs",
    description:
      "Projetos sociais e comunitários com impacto ambiental positivo.",
    // TODO: substituir por imagem real do cliente
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80",
  },
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Consulta",
    description: "Avaliamos necessidades energéticas e o contexto do local.",
  },
  {
    step: 2,
    title: "Projeto",
    description: "Desenhamos a solução técnica à medida, com orçamento claro.",
  },
  {
    step: 3,
    title: "Instalação",
    description: "Equipas especializadas executam com segurança e qualidade.",
  },
  {
    step: 4,
    title: "Testes",
    description: "Validamos desempenho, segurança e conformidade do sistema.",
  },
  {
    step: 5,
    title: "Monitorização",
    description: "Acompanhamento contínuo e suporte técnico 24/7.",
  },
];

export const PARTNERS = [
  {
    name: "BYD",
    logo: "/images/partners/byd.png",
  },
  {
    name: "Victron Energy",
    logo: "/images/partners/victron.png",
  },
  {
    name: "Palmex",
    logo: "/images/partners/palmex.png",
  },
] as const;

export const WHY_CHOOSE_US = [
  "Mais de 17 anos",
  "Engenharia especializada",
  "Soluções completas",
  "Parceiros internacionais",
  "Projetos personalizados",
  "Baixo impacto ambiental",
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "1",
    title: "Instalação Solar Residencial — Inhambane",
    category: "Solar",
    image: "/images/projects/solar-instalacao.png",
  },
  {
    id: "2",
    title: "Lodge Eco — Inhambane",
    category: "Lodges",
    // TODO: substituir por imagem real do cliente
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "3",
    title: "BYD Battery-Box",
    category: "Baterias",
    image: "/images/projects/byd-baterias.png",
  },
  {
    id: "4",
    title: "Edifício Sustentável — Inhambane",
    category: "Construção",
    // TODO: substituir por imagem real do cliente
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "5",
    title: "Sistema Off-grid Rural",
    category: "Solar",
    // TODO: substituir por imagem real do cliente
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "6",
    title: "Resort Costeiro — Inhambane",
    category: "Lodges",
    // TODO: substituir por imagem real do cliente
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80",
  },
];

// TODO: confirmar respostas reais com o cliente
export const FAQ_ITEMS: FaqItem[] = [
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
];

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com", icon: "Facebook" },
  { label: "Instagram", href: "https://instagram.com", icon: "Instagram" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  {
    label: "WhatsApp",
    href: `https://wa.me/${CONTACT.whatsapp}`,
    icon: "MessageCircle",
  },
];
