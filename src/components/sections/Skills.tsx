"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const categories = Object.entries(portfolioData.technicalSkills);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 relative bg-white/5 border-y border-white/5">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-6 mb-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display">
              Technical Expertise
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A comprehensive overview of my technical stack and tools I use to build scalable applications.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map(([key, skills]) => (
            <motion.div key={key} variants={item} className="glass-card p-6 flex flex-col gap-4 group hover:border-primary/50 transition-colors">
              <h3 className="text-lg font-semibold capitalize text-foreground group-hover:text-primary transition-colors">
                {key}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-all border-none font-normal"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
