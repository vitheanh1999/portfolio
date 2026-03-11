"use client";

import { motion, Variants } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Code2, FolderGit2, Database, BrainCircuit } from "lucide-react";

export function About() {
  const statsContainerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const statCardVars: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  };

  const statItems = [
    {
      icon: <Code2 className="h-6 w-6 text-primary" />,
      value: "5+ Years",
      label: "Full-Stack Dev",
      colSpan: 1
    },
    {
      icon: <FolderGit2 className="h-6 w-6 text-primary" />,
      value: "20+",
      label: "Projects Delivered",
      colSpan: 1
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      value: "Massive Base",
      label: "Scraping & Pipelines",
      colSpan: 1
    },
    {
      icon: <BrainCircuit className="h-6 w-6 text-[#8D5CF6]" />,
      value: "AI / LLM",
      label: "System Integrations",
      colSpan: 1
    }
  ];
  return (
    <section id="about" className="py-20 relative">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display">
              About Me
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center pt-8">
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                As a {portfolioData.personalDetails.roles.join(" and ")}, my core expertise lies in architecting high-throughput data extraction engines and managing large-scale system infrastructure. Over the past 5+ years, I have built specialized pipelines capable of reliably scraping, transforming, and synchronizing massive volumes of real-time e-commerce and competitor pricing data.
              </p>
              <p>
                I thrive on solving complex technical hurdles—such as bypassing robust anti-bot measures, optimizing ingestion queues with Kafka, and ensuring extreme data accuracy. From building comprehensive test management ecosystems to full-stack application development, I bring efficiency and scalable resilience to every system I design.
              </p>
            </div>

            <motion.div 
              variants={statsContainerVars}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 gap-4 relative"
            >
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-primary/20 rounded-full blur-[80px] pointer-events-none -z-10" />
              
              {statItems.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  variants={statCardVars}
                  className="glass-card p-5 space-y-3 relative overflow-hidden group hover:border-primary/40 transition-colors"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">{stat.value}</h4>
                    <p className="text-sm text-muted-foreground mt-1 leading-snug">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
