"use client";

import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { Code2, PenTool, Layers, MonitorSmartphone } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Web Development",
    desc: "Building blazing fast, scalable, and secure web applications.",
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "UI/UX Design",
    desc: "Crafting intuitive and immersive user experiences with bold aesthetics.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "3D Integration",
    desc: "Embedding interactive 3D elements to make your brand stand out.",
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6" />,
    title: "Responsive Design",
    desc: "Ensuring pixel-perfect layouts across all devices and screen sizes.",
  },
];

export function WhatIDo() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-[#000000] flex items-center justify-center py-24 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10">
        
        {/* Left Side: 3D Spline + Title */}
        <div className="relative h-[600px] w-full flex items-center">
          <div className="absolute top-10 left-0 z-20 pointer-events-none">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-7xl md:text-8xl font-black text-white leading-[0.9]"
            >
              WHAT<br />I DO
            </motion.h2>
          </div>
          
          <div className="absolute inset-0 w-full h-full z-10">
            {/* Note: Replace this scene URL with a 3D character at desk URL */}
            <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
          </div>
          
          {/* Subtle glow behind Spline */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#7C3AED] rounded-full blur-[100px] opacity-30 pointer-events-none" />
        </div>

        {/* Right Side: Services with decorative brackets */}
        <div className="relative p-10 h-full flex flex-col justify-center">
          {/* Decorative Dashed Brackets */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-dashed border-[#888] opacity-50" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-dashed border-[#888] opacity-50" />
          
          <div className="space-y-8 mt-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full border border-[#333] flex items-center justify-center bg-[#0a0a0a] group-hover:bg-[#7C3AED] group-hover:border-[#7C3AED] transition-colors duration-300 text-white">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#7C3AED] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#888] leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
