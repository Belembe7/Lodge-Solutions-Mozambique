import {
  AboutSection,
  ContactSection,
  FaqSection,
  Footer,
  Header,
  Hero,
  HowItWorksSection,
  PartnersSection,
  ProjectsSection,
  ServicesSection,
  SolutionsSection,
  StatsSection,
  WhyChooseUsSection,
} from "@/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <SolutionsSection />
        <HowItWorksSection />
        <PartnersSection />
        <WhyChooseUsSection />
        <ProjectsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
