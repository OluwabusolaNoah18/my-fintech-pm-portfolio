import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SpotlightSection from "@/components/portfolio/SpotlightSection";
import ApproachSection from "@/components/portfolio/ApproachSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ApproachSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
