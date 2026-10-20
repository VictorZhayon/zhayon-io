import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { WritingSection } from "@/components/sections/WritingSection";
import { HobbiesSection } from "@/components/sections/HobbiesSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-foreground/15 selection:text-foreground">
      <Navbar />
      <main id="main-content" className="max-w-content mx-auto px-6">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <WritingSection />
        <HobbiesSection />
        <SkillsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;
