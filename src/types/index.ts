export type NavItem = {
  label: string;
  href: string;
};

export type SolutionMenuItem = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: string;
};

export type SectorSolution = {
  id: string;
  title: string;
  description: string;
  // TODO: substituir por imagem real do cliente
  image: string;
};

export type ProjectItem = {
  id: string;
  title: string;
  category: "Solar" | "Construção" | "Baterias" | "Lodges";
  // TODO: substituir por imagem real do cliente
  image: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type StatItem = {
  value: number;
  suffix: string;
  label: string;
  /** Prefixo opcional (ex: "~") */
  prefix?: string;
};
