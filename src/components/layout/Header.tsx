"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Derive animation values
  const headerY = useTransform(scrollY, [0, 50], [-100, 0]);
  const headerOpacity = useTransform(scrollY, [0, 50], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      style={{
        y: headerY,
        opacity: headerOpacity,
      }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${isScrolled ? "bg-background/60 backdrop-blur-lg border-b border-white/10" : ""}`}
    >
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold font-display border border-primary/30">
          V
        </div>
        <span className="font-semibold text-lg hidden sm:block tracking-tight">
          {portfolioData.personalDetails.name}
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
        <a href="#about" className="hover:text-foreground transition-colors">About</a>
        <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
        <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
        <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
      </nav>

      <div className="flex items-center gap-3">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2">
          <Github className="h-5 w-5" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2">
          <Linkedin className="h-5 w-5" />
        </a>
        <a href={`mailto:${portfolioData.personalDetails.email}`} className="text-muted-foreground hover:text-foreground transition-colors p-2 hidden sm:block">
          <Mail className="h-5 w-5" />
        </a>
      </div>
    </motion.header>
  );
}
