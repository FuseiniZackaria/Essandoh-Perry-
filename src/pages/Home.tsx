import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ExpertiseSection from "../components/ExpertiseSection";
import ProjectsSection from "../components/ProjectsSection";
import SpeakingSection from "../components/SpeakingSection";
import WhyPerrySection from "../components/WhyPerrySection";
import CurrentlySection from "../components/CurrentlySection";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ExpertiseSection />
      <ProjectsSection />
      <SpeakingSection />
      <WhyPerrySection />
      <CurrentlySection />
      <CTASection />
    </>
  );
}
