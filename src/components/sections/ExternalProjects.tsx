"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { FolderGit2, ExternalLink } from "lucide-react";
import { useState } from "react";

export function ExternalProjects() {
  const { externalProjects } = portfolioData;
  const [isHovered, setIsHovered] = useState(false);

  if (!externalProjects || externalProjects.length === 0) return null;

  // Duplicate items for the endless loop effect if there are too few
  const loopedProjects = [...externalProjects, ...externalProjects, ...externalProjects];

  return (
    <section 
      id="external-projects" 
      className="py-20 relative border-t border-white/5 overflow-hidden"
    >
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display flex items-center gap-3">
                <FolderGit2 className="w-8 h-8 text-primary" />
                External & Freelance
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Independent projects, consulting work, and freelance applications I&apos;ve built outside of full-time roles.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Infinite Scroll Ticker Container */}
      <div 
        className="w-full relative flex -mx-4 md:mx-0 pt-4 pb-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <motion.div 
          className="flex gap-6 px-6"
          animate={{ x: isHovered ? "-0%" : "-50%" }} // Scroll to the middle of the triple-duplicated list
          transition={{
            duration: 80, // Total speed
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop", // Continuous
          }}
          // If hovered, pause the animation at the current spot using a custom variant
          // Actually, pausing a running framer motion animation cleanly is done by halting `x` or setting animation state.
          // To keep it perfectly smooth, we use a CSS style approach or keyframes.
          style={{ width: "max-content", paddingLeft: "1.5rem" }}
        >
          {loopedProjects.map((project, idx) => (
            <div
              key={`${project.name}-${idx}`}
              className="w-[85vw] md:w-[45vw] lg:w-[400px] flex-shrink-0 glass p-0 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              
              {/* Image Banner */}
              {project.image && (
                <div className="relative h-48 w-full overflow-hidden shrink-0 z-10">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute top-4 right-4 p-2 rounded-xl bg-black/30 backdrop-blur-md text-white border border-white/10">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                </div>
              )}

              <div className="relative z-20 flex flex-col p-6 pt-2 h-[240px]">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1 pr-4">
                    {project.name}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 flex-shrink-0" />
                </div>
                
                {project.role && (
                  <p className="text-sm font-medium text-primary/80 mb-3">
                    {project.role}
                  </p>
                )}
                
                <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto overflow-hidden h-6">
                  {project.techStack.map((tech, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2.5 py-1 flex items-center justify-center rounded-md bg-white/5 text-xs font-medium text-foreground/80 border border-white/10 whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
