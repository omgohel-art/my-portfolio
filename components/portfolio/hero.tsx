"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Avatar3D = dynamic(() => import("./Avatar3D"), { ssr: false });

export function Hero() {
  const [currentRole, setCurrentRole] = useState("DEVELOPER");
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setOpacity(1), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const roles = ["DEVELOPER", "DESIGNER", "CREATOR"];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % roles.length;
      setCurrentRole(roles[i]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-screen bg-[#000000] overflow-hidden flex items-center justify-center pt-20"
    >
      {/* Background Purple Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#7C3AED] rounded-full blur-[150px] opacity-20 pointer-events-none mix-blend-screen" />

      {/* 3D Character Avatar Wrapper */}
      <div 
        style={{ opacity: opacity, transition: "opacity 1.5s ease-in-out" }}
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[700px] z-10 pointer-events-auto"
      >
        <div style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(124,58,237,0.5) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(80px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 9,
          pointerEvents: "none",
        }} />
        
        <div style={{
          position: "absolute",
          width: "600px",
          height: "700px",
          left: "50%",
          transform: "translateX(-50%)",
          top: "0px",
          zIndex: 10,
          overflow: "visible",
        }}>
          <Avatar3D />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 h-full items-center pointer-events-none">
        
        {/* Left Side: Name */}
        <div className="flex flex-col justify-center items-start">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#888] text-sm uppercase tracking-widest mb-2"
          >
            Hello! I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter"
          >
            OM<br />GOHEL
          </motion.h1>
        </div>

        {/* Center: Empty Space for 3D Character */}
        <div className="hidden md:block"></div>

        {/* Right Side: Role */}
        <div className="flex flex-col justify-center items-end text-right mt-20 md:mt-0">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[#888] text-sm uppercase tracking-widest mb-2"
          >
            A Creative
          </motion.p>
          <motion.h2
            key={currentRole}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-[#7C3AED] to-white bg-[length:200%_auto] animate-shimmer"
            style={{
              animation: "shimmer 3s linear infinite"
            }}
          >
            {currentRole}
          </motion.h2>
        </div>

      </div>
      
      <style jsx global>{`
        @keyframes shimmer {
          to {
            background-position: 200% center;
          }
        }
        @keyframes purpleGlow {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
        }
      `}</style>
    </section>
  );
}
