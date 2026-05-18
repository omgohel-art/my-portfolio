import { HeroSection } from "@/components/portfolio/hero-section";
import { MarqueeSection } from "@/components/portfolio/marquee-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { ServicesSection } from "@/components/portfolio/services-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { Contact } from "@/components/portfolio/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] selection:bg-[#7C3AED] selection:text-white overflow-x-clip">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <Contact />
      
      {/* Minimal Footer */}
      <footer className="w-full py-6 border-t border-[#111] bg-[#0C0C0C] text-center text-xs text-[#555] uppercase tracking-widest">
        © {new Date().getFullYear()} Om Gohel. All rights reserved.
      </footer>
    </main>
  );
}
