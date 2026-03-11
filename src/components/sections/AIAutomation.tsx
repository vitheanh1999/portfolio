"use client";

import { motion } from "framer-motion";
import { Bot, Code2, Cpu, Workflow } from "lucide-react";

export function AIAutomation() {
  const capabilities = [
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI Tools & LLM Integration",
      description: "Leveraging powerful LLMs and AI tools to enhance workflows, optimize data processing, and build intelligent features into existing software."
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: "Data Scraping & Pipelines",
      description: "Architecting high-throughput scraping engines using Puppeteer, Kafka, and Python to extract, normalize, and pipeline massive datasets resiliently."
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "React & Next.js Best Practices",
      description: "Extensive experience optimizing performance by eliminating waterfalls, caching efficiently, and managing bundle sizes following Vercel's latest architectural principles."
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Advanced Composition Patterns",
      description: "Designing scalable frontend architectures using compound components, dependency injection, and decoupled state management to build resilient UIs."
    }
  ];

  return (
    <section id="ai" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full point-events-none -z-10" />

      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-6 mb-16 text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Bot className="h-4 w-4 mr-2" />
            Specialized Skills
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display">
            AI Integrations & Automation
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Beyond traditional full-stack development, I focus on integrating cutting-edge AI models and LLM tools to automate complex workflows and boost productivity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 relative">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {cap.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{cap.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
