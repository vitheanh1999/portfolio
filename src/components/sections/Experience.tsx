"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 relative bg-white/5 border-y border-white/5">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-6 mb-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display">
              Work Experience
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            My professional journey across different companies and roles.
          </p>
        </motion.div>

        <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12 pb-4">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-background bg-primary" />
              
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground">
                  {exp.company}
                </h3>
                <time className="text-sm font-medium text-muted-foreground bg-white/5 px-2 py-1 rounded-md w-fit">
                  {exp.period}
                </time>
              </div>

              <div className="mt-4 space-y-4">
                {exp.project && (
                  <div className="glass p-4 rounded-xl">
                    <h4 className="font-semibold text-primary mb-1">{exp.project}</h4>
                    {exp.role && <p className="text-sm text-foreground mb-2 font-medium">{exp.role}</p>}
                    {exp.responsibilities && (
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2">
                         {exp.responsibilities.map((res, i) => <li key={i}>{res}</li>)}
                      </ul>
                    )}
                    {exp.techStack && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.techStack.map(t => <span key={t} className="text-xs bg-white/5 text-muted-foreground px-2 py-1 rounded border border-white/5">{t}</span>)}
                      </div>
                    )}
                  </div>
                )}

                {exp.projects && exp.projects.map((proj: { name: string, role?: string, description?: string, responsibilities?: string[], techStack?: string[] }, pIdx: number) => (
                   <div key={pIdx} className="glass p-4 rounded-xl mt-4 first:mt-0">
                      <h4 className="font-semibold text-primary mb-1">{proj.name}</h4>
                      {proj.role && <p className="text-sm text-foreground mb-2 font-medium">{proj.role}</p>}
                      {proj.description && <p className="text-sm text-muted-foreground">{proj.description}</p>}
                      {proj.responsibilities && (
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2">
                           {proj.responsibilities.map((res: string, i: number) => <li key={i}>{res}</li>)}
                        </ul>
                      )}
                      {proj.techStack && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {proj.techStack.map((t: string) => <span key={t} className="text-xs bg-white/5 text-muted-foreground px-2 py-1 rounded border border-white/5">{t}</span>)}
                        </div>
                      )}
                   </div>
                ))}
                

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
