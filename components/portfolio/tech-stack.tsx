"use client";
import { useEffect, useRef, useState } from "react";

const technologies = [
  { name: "React",     color: "#61DAFB", textColor: "#000", top: "15%", left: "8%"  },
  { name: "JS",        color: "#F7DF1E", textColor: "#000", top: "10%", left: "75%" },
  { name: "TS",        color: "#3178C6", textColor: "#fff", top: "45%", left: "20%" },
  { name: "Next.js",   color: "#333333", textColor: "#fff", top: "25%", left: "50%" },
  { name: "CSS",       color: "#1572B6", textColor: "#fff", top: "60%", left: "65%" },
  { name: "Tailwind",  color: "#06B6D4", textColor: "#000", top: "70%", left: "10%" },
  { name: "Node",      color: "#339933", textColor: "#fff", top: "35%", left: "80%" },
  { name: "GSAP",      color: "#88CE02", textColor: "#000", top: "20%", left: "35%" },
  { name: "Figma",     color: "#F24E1E", textColor: "#fff", top: "55%", left: "42%" },
  { name: "Supabase",  color: "#3ECF8E", textColor: "#000", top: "72%", left: "55%" },
];

export function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offsets, setOffsets] = useState<{x: number, y: number}[]>(
    technologies.map(() => ({ x: 0, y: 0 }))
  );
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    
    let animationFrameId: number;
    
    const updatePhysics = () => {
      const rect = container.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      setOffsets(prevOffsets => {
        return prevOffsets.map((prev, index) => {
          const tech = technologies[index];
          const leftPercent = parseFloat(tech.left) / 100;
          const topPercent = parseFloat(tech.top) / 100;
          
          const ballX = width * leftPercent + 50 + prev.x;
          const ballY = height * topPercent + 50 + prev.y;

          const dx = ballX - mousePos.x;
          const dy = ballY - mousePos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          let targetX = 0;
          let targetY = 0;

          if (distance < 150) {
            const force = (150 - distance) / 150; 
            const angle = Math.atan2(dy, dx);
            const pushDist = force * 80; 
            targetX = Math.cos(angle) * pushDist;
            targetY = Math.sin(angle) * pushDist;
          }

          const newX = prev.x + (targetX - prev.x) * 0.1;
          const newY = prev.y + (targetY - prev.y) * 0.1;

          return { x: newX, y: newY };
        });
      });

      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    animationFrameId = requestAnimationFrame(updatePhysics);

    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos]);

  return (
    <section id="skills" style={{ background: "#000000", padding: "128px 0", borderTop: "1px solid #111" }}>
      <style>
        {`
          @keyframes float0 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(10px,-20px)} }
          @keyframes float1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-15px,-25px)} }
          @keyframes float2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(12px,-18px)} }
          @keyframes float3 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-10px,-22px)} }
          @keyframes float4 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(8px,-15px)} }
          @keyframes float5 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-12px,-20px)} }
          @keyframes float6 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(15px,-18px)} }
          @keyframes float7 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-8px,-24px)} }
          @keyframes float8 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(10px,-16px)} }
          @keyframes float9 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-14px,-20px)} }
        `}
      </style>

      <div className="max-w-[1400px] mx-auto px-6 text-center" style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "clamp(3rem, 7vw, 5rem)", fontWeight: 900, textAlign: "center", margin: 0, textTransform: "uppercase", color: "#fff", lineHeight: 1 }}>
          MY TECH STACK
        </h2>
        <p className="text-[#888] uppercase tracking-widest text-sm" style={{ marginTop: "16px", marginBottom: 0 }}>
          (Interact with the elements below)
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6">
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            width: "100%",
            height: "600px",
            position: "relative",
            overflow: "hidden",
            background: "#0a0a0a",
            borderRadius: "24px",
            border: "1px solid #222"
          }}
        >
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              style={{
                position: "absolute",
                top: tech.top,
                left: tech.left,
                transform: `translate(${offsets[index].x}px, ${offsets[index].y}px)`,
                willChange: "transform",
                zIndex: 10
              }}
            >
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: tech.color,
                  color: tech.textColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "13px",
                  boxShadow: "inset -4px -4px 8px rgba(0,0,0,0.3), inset 2px 2px 6px rgba(255,255,255,0.4), 0 8px 32px rgba(0,0,0,0.4)",
                  animation: `float${index} ${3 + index * 0.3}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`,
                  cursor: "default",
                  userSelect: "none"
                }}
              >
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
