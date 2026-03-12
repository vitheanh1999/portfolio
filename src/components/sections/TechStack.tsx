"use client";

import React from "react";
import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";
import { portfolioData } from "@/data/portfolio";
import { 
  Code2, 
  Cpu, 
  Terminal,
  Zap,
  Bot
} from "lucide-react";

// Mapping of tech names to icons (Simple Icons slugs or Lucide components)
const techIconMap: Record<string, { icon: string | React.ElementType, color?: string }> = {
  // Frontend
  "ReactJS": { icon: "react", color: "#61DAFB" },
  "Redux": { icon: "redux", color: "#764ABC" },
  "Next.js": { icon: "nextdotjs", color: "#FFFFFF" },
  "Angular": { icon: "angular", color: "#DD0031" },
  "React Native": { icon: "react", color: "#61DAFB" },
  "Tailwind": { icon: "tailwindcss", color: "#06B6D4" },
  "Shadcn UI": { icon: "shadcnui", color: "#FFFFFF" },
  "Ant Design": { icon: "antdesign", color: "#0170FE" },
  
  // Backend
  "Node.js": { icon: "nodedotjs", color: "#339933" },
  "Bun": { icon: "bun", color: "#fbf0df" },
  "NestJS": { icon: "nestjs", color: "#E0234E" },
  "Express.js": { icon: "express", color: "#FFFFFF" },
  "Python": { icon: "python", color: "#3776AB" },
  
  // Databases
  "MongoDB": { icon: "mongodb", color: "#47A248" },
  "PostgreSQL": { icon: "postgresql", color: "#4169E1" },
  "MySQL": { icon: "mysql", color: "#4479A1" },
  "SQLite": { icon: "sqlite", color: "#003B57" },
  "Redis": { icon: "redis", color: "#DC382D" },
  "InfluxDB": { icon: "influxdb", color: "#22ADF6" },
  
  // DevOps
  "Docker": { icon: "docker", color: "#2496ED" },
  "Azure": { icon: "microsoftazure", color: "#0078D4" },
  "Github Actions": { icon: "githubactions", color: "#2088FF" },
  "Jenkins": { icon: "jenkins", color: "#D24939" },
  
  // Messaging
  "Apache Kafka": { icon: "apachekafka", color: "#231F20" },
  "Socket.IO": { icon: "socketdotio", color: "#FFFFFF" },
  "RabbitMQ": { icon: "rabbitmq", color: "#FF6600" },
  
  // AI
  "AI/LLM Integration": { icon: Bot, color: "#10A37F" }, // OpenAI green
  "RAG Systems": { icon: Cpu, color: "#8D5CF6" },
  "AI Agents": { icon: Zap, color: "#FBBF24" },
  "Automated Workflows": { icon: Terminal, color: "#10B981" },
};


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

  const SkillPill = ({ name }: { name: string }) => {
    const techData = techIconMap[name] || { icon: Code2, color: "#8D5CF6" };
    const { icon, color } = techData;
    const isLucide = typeof icon !== "string";

    return (
      <div 
        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 py-2.5 px-5 text-sm font-medium text-white/80 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:text-white shrink-0 group"
        style={{ 
          // @ts-expect-error - dynamic hover border color
          "--hover-border": `${color}33`,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = color + '33';
          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${color}11`;
        } }
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
          (e.currentTarget as HTMLElement).style.boxShadow = 'none';
        }}
      >
        <div className="flex items-center justify-center w-5 h-5 shrink-0 transition-transform duration-300 group-hover:scale-110">
          {isLucide ? (
            React.createElement(icon as React.ElementType, { 
              size: 16, 
              style: { color: color } 
            })
          ) : (
            <img 
              src={`https://cdn.simpleicons.org/${icon}/${color?.replace('#', '')}`} 
              alt={name} 
              className="w-4 h-4 object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          )}
        </div>
        <span>{name}</span>
      </div>
    );
  };

  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      <div className="px-4 md:px-6 mb-10 text-center relative z-10 flex w-full flex-col items-center justify-center">
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
