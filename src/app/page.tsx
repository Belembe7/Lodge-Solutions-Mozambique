import {
  AboutSection,
  BydSection,
  CatalogSection,
  ContactSection,
  EpcSection,
  Footer,
  Header,
  Hero,
  ProjectsSection,
  SolarSolutionsSection,
  StatsSection,
  VictronSection,
} from "@/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <AboutSection />
        <SolarSolutionsSection />
        <EpcSection />
        <BydSection />
        <VictronSection />
        <CatalogSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
