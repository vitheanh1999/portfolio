import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { AIAutomation } from "@/components/sections/AIAutomation";
import { Contact } from "@/components/sections/Contact";
import { Particles } from "@/components/animations/particles";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative">
      <Particles />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <AIAutomation />
      <Projects />
      <Contact />
    </main>
  );
}
