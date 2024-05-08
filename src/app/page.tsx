import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <div className="min-h-screen w-full ">
      <AuroraBackground>
        <HeroSection />
        <SkillSection />
        <ProjectSection />
        <ExperienceSection />
      </AuroraBackground>
    </div>
  );
}
