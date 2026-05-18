"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn, LiveProjectButton } from './reusable';

const projects = [
  {
    num: "01",
    label: "Personal",
    name: "Nexis AI",
    col1Img1: {
      src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
      alt: "AI neural network"
    },
    col1Img2: {
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
      alt: "AI chip"
    },
    col2Img: {
      src: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&q=80",
      alt: "AI interface"
    }
  },
  {
    num: "02",
    label: "Client",
    name: "Web Designing",
    col1Img1: {
      src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
      alt: "Web design"
    },
    col1Img2: {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
      alt: "Code"
    },
    col2Img: {
      src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
      alt: "UI design"
    }
  },
  {
    num: "03",
    label: "Personal",
    name: "3D Websites",
    col1Img1: {
      src: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=600&q=80",
      alt: "3D render"
    },
    col1Img2: {
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
      alt: "3D abstract"
    },
    col2Img: {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      alt: "3D space"
    }
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2 className="hero-heading font-black uppercase tracking-tight text-[clamp(3rem,12vw,160px)] leading-none">
            Project
          </h2>
        </FadeIn>

        {/* Sticky Stacking Cards Container */}
        <div className="w-full flex flex-col gap-10 pb-20">
          {projects.map((proj, idx) => (
            <ProjectCard key={proj.num} project={proj} index={idx} totalCards={projects.length} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  totalCards: number;
}

function ProjectCard({ project, index, totalCards }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="h-[85vh] w-full flex items-start justify-center">
      <motion.div
        style={{
          scale,
          top: `calc(6rem + ${index * 28}px)`
        }}
        className="sticky w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 shadow-2xl overflow-hidden"
      >
        {/* Top Row */}
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[rgba(215,226,234,0.2)] pb-6 sm:pb-8">
          <div className="flex items-center gap-4 sm:gap-8">
            <span className="font-black text-[#D7E2EA] text-[clamp(3rem,8vw,100px)] leading-none select-none">
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm font-light">
                {project.label}
              </span>
              <h3 className="font-bold uppercase text-[#D7E2EA] text-[clamp(1.25rem,3vw,2.5rem)] leading-tight">
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton href="#" />
        </div>

        {/* Bottom Row: Two-column Image Grid */}
        <div className="w-full flex flex-col md:flex-row gap-4 sm:gap-6">
          {/* Left Column (40%) */}
          <div className="w-full md:w-[40%] flex flex-col gap-4 sm:gap-6">
            <div className="w-full h-[clamp(130px,16vw,230px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#161616]">
              <img
                src={project.col1Img1.src}
                alt={project.col1Img1.alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="w-full h-[clamp(160px,22vw,340px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#161616]">
              <img
                src={project.col1Img2.src}
                alt={project.col1Img2.alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column (60%) */}
          <div className="w-full md:w-[60%] h-[clamp(300px,40vw,594px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#161616]">
            <img
              src={project.col2Img.src}
              alt={project.col2Img.alt}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}


