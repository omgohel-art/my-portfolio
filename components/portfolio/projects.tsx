"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    id: "01",
    name: "NEXIS AI",
    category: "Fullstack AI Application",
    tools: ["React", "Node.js", "Groq API", "Tailwind"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "02",
    name: "CREAMY SPOON",
    category: "Luxury Restaurant Website",
    tools: ["Next.js", "GSAP", "Tailwind", "Supabase"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "03",
    name: "FINANCE DASH",
    category: "Fintech Dashboard",
    tools: ["React", "Recharts", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "04",
    name: "3D PORTFOLIO",
    category: "Web3 Immersive Site",
    tools: ["Three.js", "React Three Fiber", "Lenis"],
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",
  },
];

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = gsap.utils.toArray(".project-card");
    
    cards.forEach((card: any) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t: any) => t.kill());
    };
  }, []);

  return (
    <section
      id="work"
      ref={containerRef}
      className="bg-[#0a0a0a] h-auto flex flex-col justify-center overflow-hidden py-32"
    >
      <div className="max-w-[1400px] mx-auto w-full px-6 mb-12">
        <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter">
          My <span className="text-[#7C3AED] italic font-serif lowercase">Work</span>
        </h2>
      </div>

      <div className="flex flex-col gap-8 w-full max-w-[1400px] mx-auto px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card w-full flex items-center justify-center"
          >
            <div className="group relative w-full max-w-[1400px] h-[500px] bg-[#111] rounded-2xl overflow-hidden flex flex-col md:flex-row transition-transform duration-500 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(124,58,237,0.15)] border border-[#222]">
              
              {/* Left Details */}
              <div className="w-full md:w-1/3 p-10 flex flex-col justify-between z-10 border-r border-[#222]">
                <div>
                  <span className="text-[#7C3AED] text-6xl font-black">{project.id}</span>
                  <p className="text-[#888] text-sm uppercase tracking-widest mt-6 mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-4xl font-bold text-white mb-8">
                    {project.name}
                  </h3>
                </div>

                <div>
                  <p className="text-[#555] text-xs uppercase tracking-widest mb-3">
                    Tools & Features
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <li
                        key={i}
                        className="text-xs text-[#aaa] border border-[#333] rounded-full px-4 py-1"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Image */}
              <div className="w-full md:w-2/3 h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Circular link button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <a href="#" className="w-24 h-24 rounded-full bg-[#7C3AED] text-white flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                    <ArrowUpRight className="w-10 h-10" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
