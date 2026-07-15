import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionDetailView } from "@/components/SolutionDetailView";
import { Footer, Header } from "@/sections";
import {
  SOLUTION_SLUGS,
  getSolutionBySlug,
} from "@/lib/solutionDetails";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SOLUTION_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return { title: "Solução não encontrada" };
  }

  return {
    title: solution.title,
    description: solution.intro,
  };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <SolutionDetailView solution={solution} />
      </main>
      <Footer />
    </>
  );
}
