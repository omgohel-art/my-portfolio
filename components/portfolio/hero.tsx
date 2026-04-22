"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (orbRef.current) {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 30;
        const y = (clientY / window.innerHeight - 0.5) * 30;
        orbRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />

      {/* Gradient orb */}
      <div
        ref={orbRef}
        className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full transition-transform duration-[2000ms] ease-out"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, oklch(0.65 0.15 250 / 0.3), oklch(0.5 0.2 280 / 0.1), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-700">
          <p className="text-primary text-sm uppercase tracking-widest font-medium">
            Undergraduate Junior Developer
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
            Om Gohel
          </h1>
          <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
            Passionate undergraduate developer actively seeking internships and real-world opportunities to apply my skills in building impactful digital solutions.
          </p>

          <div className="flex gap-4 pt-4">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-border hover:border-primary/50 rounded-full px-6 transition-all duration-300 hover:scale-105"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>

        {/* User Profile Image */}
        <div className="hidden lg:flex items-center justify-center animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
          <div className="relative w-96 h-[500px]">
            {/* Background decorative elements */}
            <div className="absolute inset-x-[-10%] inset-y-[-5%] bg-gradient-to-tr from-primary/10 to-transparent blur-3xl -z-10 rounded-full" />
            
            {/* Image Container with premium mask */}
            <div className="w-full h-full relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              <img
                src="/profile.jpg"
                alt="Om Gohel"
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 border border-border/50"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
                  e.currentTarget.className = e.currentTarget.className + " opacity-20";
                }}
              />
              
              {/* Floating accent elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/30 rounded-br-2xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
