"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, useScroll, useTransform } from "framer-motion";

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * index,
    },
  }),
};
export default function Skills() {
  const { ref } = useSectionInView("Services");

  return (
    <section
      id="services"
      ref={ref}
      className="mb-10 sm:mb-16 max-w-full sm:max-w-[53rem] scroll-mt-20 text-center px-2 sm:px-6 md:px-8"
      style={{ overflowX: "hidden" }}
    >
      <SectionHeading>Services Offered</SectionHeading>
      <ul className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 w-full max-w-2xl mx-auto overflow-x-hidden overflow-y-hidden">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/10 rounded-xl px-4 py-3 dark:bg-white/10 dark:text-white/80 dark:border-none text-sm sm:text-base md:text-lg shadow-sm flex items-center justify-center min-h-[3rem]"
            key={index}
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
