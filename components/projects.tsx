"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-10 sm:mb-20 md:mb-28 px-2 sm:px-6 md:px-8 w-full max-w-full"
    >
      <SectionHeading>My Projects</SectionHeading>
      <div className="w-full max-w-full sm:max-w-[42rem] mx-auto flex flex-col gap-6">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
