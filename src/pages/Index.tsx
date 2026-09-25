import { FixedSidebar } from "@/components/FixedSidebar";
import { CursorGlow } from "@/components/CursorGlow";
import { TechBackground } from "@/components/TechBackground";
import { BackToTop } from "@/components/BackToTop";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ClientWorkSection } from "@/components/sections/ClientWorkSection";
import { WritingSection } from "@/components/sections/WritingSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <TechBackground />
      <CursorGlow />
      <FixedSidebar />
      <main id="main-content" className="lg:ml-[35%] lg:max-w-[65%] px-6 sm:px-12 lg:px-16 xl:px-24 pt-20 lg:pt-0">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ClientWorkSection />
        <WritingSection />
        <ContactSection />
        <FooterSection />
      </main>
      <BackToTop />
    </div>
  );
};

export default Index;
