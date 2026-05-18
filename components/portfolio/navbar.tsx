"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "ABOUT" },
  { href: "#work", label: "WORK" },
  { href: "#contact", label: "CONTACT" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      )}
    >
      <nav className="max-w-[1400px] mx-auto px-6 grid grid-cols-3 items-center">
        {/* Left: Email */}
        <div className="hidden md:flex justify-start">
          <a
            href="mailto:omjigneshgohel@gmail.com"
            className="text-xs text-[#888] hover:text-white transition-colors tracking-widest lowercase"
          >
            omjigneshgohel@gmail.com
          </a>
        </div>

        {/* Center: Logo */}
        <div className="flex justify-start md:justify-center">
          <a
            href="#home"
            className="text-lg font-bold text-white tracking-widest uppercase hover:text-[#7C3AED] transition-colors"
          >
            omgohel.dev
          </a>
        </div>

        {/* Right: Navigation Links */}
        <div className="flex justify-end">
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs font-semibold text-[#888] hover:text-white uppercase tracking-widest transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#7C3AED] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
