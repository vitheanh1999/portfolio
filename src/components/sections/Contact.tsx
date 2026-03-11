"use client";

import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <footer id="contact" className="py-12 border-t border-white/10 relative overflow-hidden bg-black/40">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold tracking-tight font-display text-gradient mb-2">
            Let&apos;s build something amazing.
          </h2>
          <p className="text-muted-foreground">
            Currently available for new opportunities.
          </p>
        </div>

        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center justify-center h-12 w-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-muted-foreground hover:text-foreground">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center justify-center h-12 w-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-muted-foreground hover:text-foreground">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href={`mailto:${portfolioData.personalDetails.email}`} className="flex items-center justify-center h-12 w-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-muted-foreground hover:text-foreground">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>

      </div>
      <div className="mt-12 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} {portfolioData.personalDetails.name}. All rights reserved.</p>
        <p className="mt-1 text-xs opacity-50">Built with Next.js, Tailwind, and Framer Motion.</p>
      </div>
    </footer>
  );
}
