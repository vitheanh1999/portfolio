"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function About() {
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

            <div className="glass-card p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-10 -mt-10" />
              <h3 className="text-xl font-semibold text-foreground">Quick Stats</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="font-medium text-foreground">5+ Years</span>
                  <span className="text-muted-foreground">of Experience</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="font-medium text-foreground">Full-Stack</span>
                  <span className="text-muted-foreground">Development</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="font-medium text-foreground">AI / LLM</span>
                  <span className="text-muted-foreground">System Integration</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
