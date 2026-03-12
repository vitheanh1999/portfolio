"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

// SVG Badge components for store links
function AppStoreBadge() {
  return (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="h-[22px] w-auto">
      <rect width="120" height="40" rx="8" fill="#FFFFFF" />
      <path d="M16.5 20.1c0-3.5 2.9-5.2 3-5.3-1.6-2.4-4.2-2.7-5.1-2.7-2.1-.2-4.2 1.3-5.3 1.3-1.1 0-2.8-1.2-4.6-1.2-2.3 0-4.5 1.4-5.7 3.5-2.4 4.2-.6 10.5 1.7 13.9 1.2 1.7 2.5 3.5 4.3 3.4 1.7-.1 2.4-1.1 4.5-1.1s2.7 1.1 4.6 1.1c1.9-.1 3-1.7 4.2-3.4 1.3-1.9 1.8-3.8 1.8-3.9-.1 0-3.4-1.3-3.4-5.6z" fill="#000" transform="translate(8,4) scale(0.65)" />
      <path d="M27.5 8.2C25.1 5.4 21.5 3.9 18.2 3.7c-.3 2.9 1 5.8 2.9 7.8 1.9 2 4.9 3.6 7.8 3.4.4-3.1-.9-6.2-1.4-6.7z" fill="#000" transform="translate(8,4) scale(0.65)" />
      <text x="38" y="15" fill="#000" fontSize="7" fontFamily="sans-serif" fontWeight="600">Download on the</text>
      <text x="38" y="28" fill="#000" fontSize="11" fontFamily="sans-serif" fontWeight="800">App Store</text>
    </svg>
  );
}

function GooglePlayBadge() {
  return (
    <svg viewBox="0 0 135 40" xmlns="http://www.w3.org/2000/svg" className="h-[22px] w-auto">
      <rect width="135" height="40" rx="8" fill="#FFFFFF" />
      <path d="M12 8L28 18L12 28V8Z" fill="#EA4335" transform="translate(4,2) scale(1.1)" />
      <text x="38" y="15" fill="#000" fontSize="7" fontFamily="sans-serif" fontWeight="600">GET IT ON</text>
      <text x="38" y="28" fill="#000" fontSize="11" fontFamily="sans-serif" fontWeight="800">Google Play</text>
    </svg>
  );
}

type ExternalProject = {
  name: string;
  role?: string;
  description: string;
  techStack: string[];
  image?: string;
  icon?: string;
  appStore?: string;
  googlePlay?: string;
  featured?: boolean;
};

export function ExternalProjects() {
  const { externalProjects } = portfolioData as { externalProjects: ExternalProject[] };

  if (!externalProjects || externalProjects.length === 0) return null;

  return (
    <section
      id="external-projects"
      className="py-16 relative overflow-hidden bg-black"
    >
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        {/* Landin-style Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">External Projects</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-white max-w-3xl leading-tight font-display"
          >
            Independently built, <br /><span className="text-muted-foreground">globally deployed.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl leading-relaxed"
          >
            A high-level overview of applications and solutions I&apos;ve engineered outside of full-time commitments.
          </motion.p>
        </div>

        {/* Bento Grid Layout - Ultra Compact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[240px] md:auto-rows-[280px]">
          {externalProjects.map((project, idx) => {
            const isFeatured = !!project.featured;

            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`
                  relative group overflow-hidden rounded-[24px] border border-white/10 bg-white/5 transition-all duration-500
                  ${isFeatured ? "md:col-span-8 md:row-span-2" : "md:col-span-4 md:row-span-1"}
                `}
              >
                {/* Background Image / Decoration */}
                {project.image && (
                  <div className={`absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105 ${isFeatured ? 'opacity-40' : 'opacity-20'}`}>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
                  </div>
                )}

                {/* Card Content */}
                <div className="relative z-10 h-full p-6 md:p-7 flex flex-col justify-end">
                  {/* Floating Icon Area - Featured Only */}
                  {isFeatured && project.icon && (
                    <div className="absolute top-5 left-5">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="p-1 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
                      >
                        <img src={project.icon} alt="Icon" className="w-12 h-12 rounded-lg" />
                      </motion.div>
                    </div>
                  )}

                  {/* Badges for Featured */}
                  {isFeatured && (
                    <div className="absolute top-5 right-5 flex gap-2">
                      <div className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md">
                        <span className="text-[10px] font-bold text-primary uppercase">Published</span>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2 max-w-xl">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <h3 className={`font-black tracking-tight text-white transition-colors group-hover:text-primary ${isFeatured ? 'text-xl md:text-2xl' : 'text-base md:text-lg'}`}>
                          {project.name}
                        </h3>
                        {/* Inline Link Icon for Non-featured */}
                        {!isFeatured && <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />}
                      </div>
                      {project.role && (
                        <p className="text-primary/70 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                          {project.role}
                        </p>
                      )}
                    </div>

                    <p className={`text-muted-foreground leading-relaxed ${isFeatured ? 'text-base md:text-lg line-clamp-3' : 'text-xs md:text-sm line-clamp-2'}`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white/60 uppercase tracking-tighter"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                      {/* Store Links - Immersive Style */}
                      {isFeatured && (project.appStore || project.googlePlay) && (
                        <div className="flex flex-wrap gap-3 pt-4">
                        {project.appStore && (
                          <a href={project.appStore} target="_blank" rel="noopener" className="hover:scale-105 active:scale-95 transition-transform">
                            <AppStoreBadge />
                          </a>
                        )}
                        {project.googlePlay && (
                          <a href={project.googlePlay} target="_blank" rel="noopener" className="hover:scale-105 active:scale-95 transition-transform">
                            <GooglePlayBadge />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 border-[2px] border-primary/0 group-hover:border-primary/20 rounded-[24px] transition-all duration-500 pointer-events-none" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
