import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Certifications from "../sections/Certifications";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}
