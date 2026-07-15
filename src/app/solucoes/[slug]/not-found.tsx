import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Footer, Header } from "@/sections";

export default function SolutionNotFound() {
  return (
    <>
      <Header />
      <main className="bg-light-gray py-32">
        <Container className="text-center">
          <h1 className="font-display text-3xl font-bold text-brown-dark">
            Solução não encontrada
          </h1>
          <p className="mt-4 text-dark-gray/75">
            A página que procura não existe ou foi movida.
          </p>
          <div className="mt-8">
            <Button href="/#solucoes" size="lg">
              Voltar às soluções
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
