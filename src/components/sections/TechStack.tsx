"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";
import { portfolioData } from "@/data/portfolio";

export function TechStack() {
  // Flatten and prepare the technical skills list
  const { frontend, backend, databases, devops, messaging, mobile, ai } = portfolioData.technicalSkills;
  
  // Combine all skills and remove duplicates
  const allSkills = Array.from(new Set([
    ...frontend,
    ...backend,
    ...databases,
    ...ai,
    ...devops,
    ...messaging,
    ...mobile
  ]));

  // Split into two halves for two opposing rows
  const half = Math.ceil(allSkills.length / 2);
  const firstRow = allSkills.slice(0, half);
  const secondRow = allSkills.slice(half);

  const SkillPill = ({ name }: { name: string }) => (
    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 px-6 text-sm font-medium text-white/80 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white shrink-0">
      {name}
    </div>
  );

  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6 mb-10 text-center relative z-10">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
         >
           <h2 className="text-sm font-semibold tracking-wider text-[#8D5CF6] uppercase mb-3">Core Expertise</h2>
           <p className="text-3xl md:text-4xl font-bold text-white">The Engine Behind The Magic</p>
         </motion.div>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        {/* First Row: Moving Left */}
        <Marquee pauseOnHover className="[--duration:50s]">
          {firstRow.map((skill) => (
            <SkillPill key={skill} name={skill} />
          ))}
        </Marquee>

        {/* Second Row: Moving Right */}
        <Marquee reverse pauseOnHover className="[--duration:50s] mt-4">
          {secondRow.map((skill) => (
            <SkillPill key={skill} name={skill} />
          ))}
        </Marquee>

        {/* Vignette fade effect on left and right edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent dark:from-background"></div>
      </div>
    </section>
  );
}
