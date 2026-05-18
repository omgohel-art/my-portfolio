"use client";

import React from 'react';
import { FadeIn } from './reusable';

const services = [
  {
    num: "01",
    name: "3D Modeling",
    desc: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations."
  },
  {
    num: "02",
    name: "Rendering",
    desc: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life."
  },
  {
    num: "03",
    name: "Full Stack Development",
    desc: "Full-stack development services include designing and developing both front-end and back-end applications using modern technologies. From user interfaces to server-side logic, I create seamless, scalable, and efficient web applications tailored to your specific needs."
  },
  {
    num: "04",
    name: "UI & UX Design through AI",
    desc: "I specialize in designing intuitive, user-friendly interfaces and seamless user experiences for web and mobile applications. My approach combines creativity with the latest AI-powered design tools to deliver visually stunning and highly functional interfaces that enhance user engagement and drive business results."
  },
  {
    num: "05",
    name: "Web Design",
    desc: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      <div className="max-w-5xl mx-auto w-full flex flex-col">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2 className="font-black uppercase tracking-tight text-[clamp(3rem,12vw,160px)] leading-none text-[#0C0C0C]">
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="w-full flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {services.map((service, i) => (
            <FadeIn
              key={service.num}
              delay={i * 0.1}
              y={30}
              className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] gap-4 sm:gap-8"
            >
              {/* Number */}
              <div className="font-black text-[#0C0C0C] text-[clamp(3rem,10vw,140px)] leading-none select-none flex-shrink-0 sm:w-[25%] md:w-[30%]">
                {service.num}
              </div>

              {/* Name & Description */}
              <div className="flex flex-col gap-2 sm:gap-3 flex-grow sm:w-[75%] md:w-[70%]">
                <h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] text-[#0C0C0C] leading-tight">
                  {service.name}
                </h3>
                <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] text-[#0C0C0C] opacity-60">
                  {service.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
