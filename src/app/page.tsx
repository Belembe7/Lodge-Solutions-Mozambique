import {
  AboutSection,
  CatalogSection,
  ContactSection,
  Footer,
  Header,
  Hero,
  PartnersSection,
  ProjectsSection,
  SolarSolutionsSection,
} from "@/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <SolarSolutionsSection />
        <CatalogSection />
        <ProjectsSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
