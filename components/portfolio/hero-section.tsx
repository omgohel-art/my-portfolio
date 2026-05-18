"use client";

import React from 'react';
import { ContactButton, FadeIn, Magnet } from './reusable';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="header" className="w-full px-6 md:px-10 pt-6 md:pt-8 z-20">
        <nav className="flex justify-between items-center w-full">
          {[
            { name: "About", id: "about" },
            { name: "Price", id: "services" },
            { name: "Projects", id: "projects" },
            { name: "Contact", id: "contact" }
          ].map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer bg-transparent border-none p-0"
            >
              {link.name}
            </button>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="w-full overflow-hidden px-6 md:px-10 z-20 mt-6 sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40} as="div">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            Hi, i’m OM GOHEL
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      <FadeIn
        delay={0.6}
        y={30}
        as="div"
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <div className="relative inline-block w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]">
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Om Gohel Portrait"
              className="w-full h-auto object-contain pointer-events-none select-none"
              style={{ filter: 'brightness(1.05) saturate(1.1)' }}
            />
            <div
              className="absolute pointer-events-none"
              style={{
                top: '45%',
                left: '30%',
                width: '40%',
                height: '30%',
                background: 'radial-gradient(circle, #ffccaa 0%, transparent 70%)',
                mixBlendMode: 'screen',
                opacity: 0.15,
              }}
            />
          </div>
        </Magnet>
      </FadeIn>

      {/* Bottom bar */}
      <div className="w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        <FadeIn delay={0.35} y={20} as="div">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-[clamp(0.75rem,1.4vw,1.5rem)]">
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} as="div">
          <ContactButton onClick={() => scrollToSection('contact')} />
        </FadeIn>
      </div>
    </section>
  );
}
