"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      name: "Musinsa Radar",
      company: "SOTATEK",
      description: "High-throughput scraping engine with similarity matching algorithms.",
      techStack: ["React", "NestJS", "Kafka", "AWS", "Puppeteer", "MongoDB"],
      link: "#"
    },
    {
      name: "FPT iViec",
      company: "FPT",
      description: "Mobile recruitment app featuring an AI chatbot, CV parsing, and real-time eKYC integration.",
      techStack: ["React Native", "PostgreSQL", "RabbitMQ", "Socket.IO"],
      link: "#"
    },
    {
      name: "Meup",
      company: "FPT",
      description: "TikTok Shop profit and marketing software.",
      techStack: ["React", "Bun", "Zustand", "Tailwind"],
      link: "#"
    },
    {
      name: "akaAT TestOps Platform",
      company: "FPT Software",
      description: "Comprehensive Test Management and Data ETL verification platform.",
      techStack: ["React", "Node.js", "Electron", "Docker"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
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
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A selection of complex systems and applications I&apos;ve built or contributed to.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Card className="h-full bg-white/5 border-white/10 hover:border-primary/50 transition-colors group overflow-hidden relative">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {project.company}
                    </span>
                    <div className="flex gap-2">
                      <a href={project.link} className="text-muted-foreground hover:text-foreground transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href={project.link} className="text-muted-foreground hover:text-foreground transition-colors">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.name}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 pt-4 mt-auto">
                    {project.techStack.map(tech => (
                      <Badge key={tech} variant="outline" className="border-white/10 text-xs text-muted-foreground">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
