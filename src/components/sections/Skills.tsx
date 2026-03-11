"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { 
  LayoutTemplate, 
  Paintbrush, 
  Server, 
  Database, 
  CloudCog, 
  Zap, 
  Wrench, 
  Bot,
  Smartphone
} from "lucide-react";
import { cn } from "@/lib/utils";

const categoryConfig: Record<string, { icon: React.ReactNode, color: string, bgGlow: string }> = {
  frontend: {
    icon: <LayoutTemplate className="w-8 h-8" />,
    color: "text-blue-400",
    bgGlow: "group-hover:bg-blue-400/10 group-hover:border-blue-400/50",
  },
  ui: {
    icon: <Paintbrush className="w-8 h-8" />,
    color: "text-pink-400",
    bgGlow: "group-hover:bg-pink-400/10 group-hover:border-pink-400/50",
  },
  backend: {
    icon: <Server className="w-8 h-8" />,
    color: "text-emerald-400",
    bgGlow: "group-hover:bg-emerald-400/10 group-hover:border-emerald-400/50",
  },
  databases: {
    icon: <Database className="w-8 h-8" />,
    color: "text-amber-400",
    bgGlow: "group-hover:bg-amber-400/10 group-hover:border-amber-400/50",
  },
  devops: {
    icon: <CloudCog className="w-8 h-8" />,
    color: "text-indigo-400",
    bgGlow: "group-hover:bg-indigo-400/10 group-hover:border-indigo-400/50",
  },
  messaging: {
    icon: <Zap className="w-8 h-8" />,
    color: "text-yellow-400",
    bgGlow: "group-hover:bg-yellow-400/10 group-hover:border-yellow-400/50",
  },
  mobile: {
    icon: <Smartphone className="w-8 h-8" />,
    color: "text-rose-400",
    bgGlow: "group-hover:bg-rose-400/10 group-hover:border-rose-400/50",
  },
  ai: {
    icon: <Bot className="w-8 h-8" />,
    color: "text-[#8D5CF6]",
    bgGlow: "group-hover:bg-[#8D5CF6]/10 group-hover:border-[#8D5CF6]/50",
  },
};

export function Skills() {
  const categories = Object.entries(portfolioData.technicalSkills);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-black/40 border-y border-white/5 overflow-hidden">
      {/* Background blobs for visual interest */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none -z-10 mix-blend-screen" />

      <div className="container px-4 md:px-6 mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-6 mb-16 text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Wrench className="h-4 w-4 mr-2" />
            Arsenal
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A comprehensive overview of my technical stack and the specialized tools I leverage to build scalable, high-performance applications.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated SVG Connections - Hidden on small screens to avoid messiness */}
          <div className="absolute inset-0 pointer-events-none hidden md:block z-0 opacity-40">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(141, 92, 246, 0.1)" />
                  <stop offset="50%" stopColor="rgba(141, 92, 246, 0.8)" />
                  <stop offset="100%" stopColor="rgba(141, 92, 246, 0.1)" />
                </linearGradient>
              </defs>
              
              {/* Path 1: Top Left to Top Right */}
              <motion.path
                d="M 25% 15% C 50% 15%, 50% 15%, 75% 15%"
                stroke="url(#line-gradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path
                d="M 25% 15% C 50% 15%, 50% 15%, 75% 15%"
                stroke="white"
                strokeWidth="2"
                fill="none"
                initial={{ strokeDasharray: "0 100", strokeDashoffset: 0 }}
                animate={{ strokeDasharray: "15 85", strokeDashoffset: -100 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              {/* Path 2: Bottom Left to Bottom Right */}
              <motion.path
                d="M 25% 85% C 50% 85%, 50% 85%, 75% 85%"
                stroke="url(#line-gradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.path
                d="M 25% 85% C 50% 85%, 50% 85%, 75% 85%"
                stroke="white"
                strokeWidth="2"
                fill="none"
                initial={{ strokeDasharray: "0 100", strokeDashoffset: 0 }}
                animate={{ strokeDasharray: "15 85", strokeDashoffset: -100 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
              />

              {/* Path 3: Criss-Cross Pattern Left to Right */}
              <motion.path
                d="M 25% 40% C 50% 40%, 50% 60%, 75% 60%"
                stroke="url(#line-gradient)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
              />
              <motion.path
                d="M 25% 40% C 50% 40%, 50% 60%, 75% 60%"
                stroke="url(#line-gradient)"
                strokeWidth="3"
                fill="none"
                initial={{ strokeDasharray: "0 100", strokeDashoffset: 0 }}
                animate={{ strokeDasharray: "10 90", strokeDashoffset: -100 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />

              {/* Path 4: Vertical Right Side */}
              <motion.path
                d="M 75% 25% L 75% 75%"
                stroke="url(#line-gradient)"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
              />
            </svg>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-6 relative z-10"
          >
            {categories.map(([key, skills], index) => {
              const config = categoryConfig[key] || {
                icon: <Wrench className="w-8 h-8" />,
                color: "text-primary",
                bgGlow: "group-hover:bg-primary/10 group-hover:border-primary/50",
              };

              // Alternating floating speeds and delays to make it look organic
              const floatDelay = index * 0.2;
              const floatDuration = 4 + (index % 3);

              return (
                <motion.div 
                  key={key} 
                  variants={{
                    hidden: { opacity: 0, scale: 0.9, y: 20 },
                    show: { 
                      opacity: 1, 
                      scale: 1,
                      y: [0, -8, 0],
                      transition: { 
                        opacity: { duration: 0.5 },
                        scale: { duration: 0.5, type: "spring" },
                        y: {
                          duration: floatDuration,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: floatDelay
                        }
                      } 
                    }
                  }}
                  className={cn(
                    "glass-card p-6 md:p-8 flex flex-col gap-6 group transition-all duration-300 relative overflow-hidden border border-white/5 hover:shadow-2xl hover:border-white/20 bg-black/60",
                    config.bgGlow
                  )}
                >
                  {/* Large Background Watermark Icon */}
                  <div className={cn(
                    "absolute -bottom-6 -right-6 opacity-5 group-hover:opacity-10 transition-all duration-500 scale-150 group-hover:scale-[2] rotate-12 group-hover:rotate-0 pointer-events-none",
                    config.color
                  )}>
                    {config.icon}
                  </div>

                  <div className="flex items-center gap-4 relative z-10">
                    <div className={cn("p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-inner", config.color)}>
                      {config.icon}
                    </div>
                    <div>
                      <h3 className={cn("text-2xl font-bold capitalize transition-colors duration-300", config.color)}>
                        {key}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5 relative z-10 mt-2">
                    {skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-black/40 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-all duration-300 border border-white/5 hover:border-white/20 font-medium py-1.5 px-3 backdrop-blur-md cursor-default hover:scale-105"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
