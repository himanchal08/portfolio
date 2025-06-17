"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="mb-12 sm:mb-20 md:mb-28 w-full max-w-full sm:max-w-[50rem] text-center scroll-mt-20 px-2 sm:px-6 md:px-8"
    >
      <div className="flex items-center justify-center mb-4">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/photo.png"
              alt="Himanchal"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-20 w-20 xs:h-24 xs:w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-lg xs:text-xl sm:text-2xl md:text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-6 sm:mb-10 mt-4 text-lg xs:text-xl sm:text-2xl md:text-4xl font-medium !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Himanchal Khattri.</span> I'm a{" "}
        <span className="font-bold">full-stack developer, </span> enjoy building{" "}
        <span className="italic"> websites and apps</span> that are both
        <span className="font-bold">
          {" "}
          highly animated and fully functional.
        </span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-base sm:text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {/* Add responsive call-to-action buttons or links here if needed */}
      </motion.div>
    </section>
  );
}
