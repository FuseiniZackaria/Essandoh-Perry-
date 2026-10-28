import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ExpertiseSection from "../components/ExpertiseSection";
import ProjectsSection from "../components/ProjectsSection";
import SpeakingSection from "../components/SpeakingSection";
import WhyPerrySection from "../components/WhyPerrySection";
import CurrentlySection from "../components/CurrentlySection";
import CTASection from "../components/CTASection";
import { CommunitiesSection, ConsultationSection, EventsSection, FAQSection, SectorsSection } from "../components/NewSections";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ExpertiseSection />
      <SectorsSection />
      <ConsultationSection />
      <CommunitiesSection />
      <EventsSection />
      <FAQSection />
      <ProjectsSection />
      <SpeakingSection />
      <WhyPerrySection />
      <CurrentlySection />
      <CTASection />
    </>
  );
}
