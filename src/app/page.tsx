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
import { SectionDivider } from "@/components/SectionDivider";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionDivider from="white" to="white" className="h-6 sm:h-8" />
        <AboutSection />
        <SectionDivider from="white" to="light" />
        <SolarSolutionsSection />
        <SectionDivider from="light" to="light" className="h-6" />
        <CatalogSection />
        <SectionDivider from="light" to="white" />
        <ProjectsSection />
        <SectionDivider from="white" to="white" className="h-6" />
        <PartnersSection />
        <SectionDivider from="white" to="white" className="h-6" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
