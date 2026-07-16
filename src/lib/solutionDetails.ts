export type SolutionDetailBlock = {
  title: string;
  description?: string;
  items: string[];
};

export type SolutionDetail = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageContain?: boolean;
  blocks: SolutionDetailBlock[];
  benefitsTitle?: string;
  benefits?: string[];
};

export const SOLUTION_DETAILS: SolutionDetail[] = [
  {
    slug: "energia-solar",
    eyebrow: "Soluções Completas",
    title: "Energia solar",
    intro:
      "Projetamos, fornecemos e implementamos soluções completas de energia solar para residências, hotéis e indústrias. Da análise inicial à monitorização contínua, entregamos sistemas fiáveis adaptados a cada contexto em Moçambique.",
    image: "/images/solutions/energia-solar.png",
    blocks: [
      {
        title: "O que incluímos",
        items: [
          "Estudo energético e dimensionamento",
          "Fornecimento de painéis e inversores",
          "Integração com armazenamento (BYD)",
          "Instalação e comissionamento",
          "Monitorização e manutenção",
        ],
      },
      {
        title: "Aplicações",
        items: [
          "Residências e condominios",
          "Hotéis e lodges",
          "Indústria e comércio",
          "Projetos off grid e híbridos",
        ],
      },
    ],
    benefitsTitle: "Benefícios",
    benefits: [
      "Redução da fatura energética",
      "Autonomia em redes instáveis",
      "Soluções à medida do consumo",
      "Suporte técnico local",
    ],
  },
  {
    slug: "epc",
    eyebrow: "Soluções EPC para Energia Solar",
    title: "Engineering, Procurement & Construction (EPC)",
    intro:
      "A LSM Lodge Solutions Mozambique presta serviços completos de EPC (Engineering, Procurement & Construction) para sistemas de energia solar, desde a auditoria energética e conceção do sistema até ao comissionamento e manutenção, garantindo desempenho e fiabilidade a longo prazo para clientes residenciais, comerciais e institucionais.",
    image: "/images/solutions/modelo-epc.png",
    blocks: [
      {
        title: "Os nossos serviços incluem",
        items: [
          "Auditoria energética",
          "Conceção de sistemas solares",
          "Comissionamento",
          "Manutenção",
          "Sistemas Off Grid",
          "Sistemas Grid Tied",
          "Sistemas Híbridos",
          "Integração de armazenamento de energia",
          "Monitorização e otimização de sistemas energéticos",
        ],
      },
    ],
  },
  {
    slug: "byd",
    eyebrow: "Distribuidor Exclusivo BYD Battery Box",
    title: "BYD em Moçambique",
    intro:
      "A LSM é Distribuidor Exclusivo das soluções BYD Battery Box, oferecendo tecnologia premium de armazenamento de energia para aplicações residenciais, comerciais e industriais.",
    image: "/images/partners/byd-battery-box.png",
    imageContain: true,
    blocks: [],
    benefitsTitle: "Benefícios",
    benefits: [
      "Tecnologia premium para armazenamento de energia",
      "Soluções robustas e de longa duração",
      "Disponibilidade de energia 24 horas por dia",
      "Soluções de 5 kWh até 2,6 MWh",
    ],
  },
  {
    slug: "victron",
    eyebrow: "Parceiro de Projeto",
    title: "Victron Energy",
    intro:
      "A LSM trabalha em parceria com a Victron Energy, disponibilizando o ecossistema Blue Power, composto por equipamentos de elevada qualidade para sistemas de energia.",
    image: "/images/partners/victron-blue-power.png",
    imageContain: true,
    blocks: [
      {
        title: "Soluções Victron",
        items: ["Inversores", "Carregadores", "Sistemas de monitorização"],
      },
    ],
    benefitsTitle: "Benefícios",
    benefits: [
      "Fornecimento de energia estável",
      "Gestão inteligente da energia",
      "Maior resiliência dos sistemas",
    ],
  },
  {
    slug: "technical-support",
    eyebrow: "Suporte Técnico Especializado",
    title: "Technical Support",
    intro:
      "Além do fornecimento, a LSM presta suporte técnico especializado em todas as fases do projeto:",
    image: "/images/solutions/technical-support.png",
    blocks: [
      {
        title: "Consultoria Técnica",
        items: [
          "Dimensionamento do sistema",
          "Seleção dos equipamentos",
          "Estudos energéticos",
          "Cálculo da capacidade das baterias",
        ],
      },
      {
        title: "Instalação",
        items: [
          "Montagem",
          "Configuração",
          "Integração entre equipamentos Victron e BYD",
          "Testes funcionais",
        ],
      },
      {
        title: "Comissionamento",
        items: [
          "Verificação do desempenho",
          "Parametrização",
          "Atualização de firmware",
          "Otimização do sistema",
        ],
      },
      {
        title: "Monitorização",
        description:
          "Utilização do ecossistema Victron Blue Power, permitindo:",
        items: [
          "Monitorização remota",
          "Diagnóstico em tempo real",
          "Gestão inteligente da energia",
          "Alertas automáticos",
          "Relatórios de desempenho",
        ],
      },
    ],
  },
];

export const SOLUTION_SLUGS = SOLUTION_DETAILS.map((s) => s.slug);

export function getSolutionBySlug(slug: string) {
  return SOLUTION_DETAILS.find((s) => s.slug === slug);
}
