import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { ExternalProjects } from "@/components/sections/ExternalProjects";
import { AIAutomation } from "@/components/sections/AIAutomation";
import { Contact } from "@/components/sections/Contact";
import { Particles } from "@/components/animations/particles";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative">
      <Particles />
      <Hero />
      <TechStack />
      <About />
      <Skills />
      <Experience />
      <ExternalProjects />
      <AIAutomation />
      <Contact />
    </main>
  );
}
