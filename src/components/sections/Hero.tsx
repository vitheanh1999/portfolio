"use client";

import { motion, Variants } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const { name, roles } = portfolioData.personalDetails;
  const { summary } = portfolioData;

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 as const } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="max-w-3xl space-y-8"
        >
          <motion.div variants={itemVars} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium backdrop-blur-md">
             <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
             Available for new opportunities
          </motion.div>
          
          <motion.h1 variants={itemVars} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gradient font-display">
            Hi, I&apos;m {name} <br/>
            <span className="text-foreground">Building AI-powered <br/> <span className="text-transparent bg-clip-text bg-linear-to-r from-neutral-200 to-neutral-500">Digital Experiences.</span></span>
          </motion.h1>

          <motion.p variants={itemVars} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            I&apos;m a {roles.join(" & ")}. {summary.split('.')[0]}.
          </motion.p>

          <motion.div variants={itemVars} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="rounded-full h-12 px-8 group relative overflow-hidden bg-white text-black hover:bg-neutral-200 transition-all">
              <span className="relative z-10 flex items-center font-medium">
                View My Work <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-12 px-8 border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all text-white">
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </motion.div>

          <motion.div variants={itemVars} className="flex items-center justify-center gap-6 pt-10 text-muted-foreground">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors p-2 hover:bg-white/5 rounded-full">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors p-2 hover:bg-white/5 rounded-full">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={`mailto:${portfolioData.personalDetails.email}`} className="hover:text-foreground transition-colors p-2 hover:bg-white/5 rounded-full">
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
