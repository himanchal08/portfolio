import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-2 sm:px-4 w-full max-w-full overflow-x-hidden overflow-y-auto">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
