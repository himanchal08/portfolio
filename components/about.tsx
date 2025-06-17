"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  const text = `heelo`;

  return (
    <motion.section
      ref={ref}
      className="mb-16 sm:mb-28 md:mb-40 w-full max-w-full sm:max-w-[45rem] text-center leading-8 px-2 sm:px-6 md:px-8 scroll-mt-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 dark:text-white/80 md:block hidden ">
        Hey, I’m Himanchal — your one-stop solution for everything digital.{" "}
        <br />
        <br />
        From building high-performance web apps, stunning landing pages, and
        seamless admin panels to crafting custom logos, UI/UX designs, SEO
        optimization, and secure hosting — I handle it all so you don’t have to
        juggle multiple freelancers. <br />
        <br />
        Whether you're a startup, brand, agency, or just an individual with a
        vision — I help bring your ideas to life with clean code, smart design,
        and a touch of animation magic. <br />
        <br />I work across platforms like{" "}
        <span className="font-medium">WordPress</span>,{" "}
        <span className="font-medium">Wix</span>, and{" "}
        <span className="font-medium">Shopify</span> to build scalable, visually
        striking, and fully responsive websites. Combine that with{" "}
        <span className="font-medium">full-stack development</span> and top-tier
        performance, and you get an online presence that not only looks great —
        but actually works. <br />
        <br />
        <span className="font-semibold">
          Let’s build something that’s not just functional, but unforgettable.
        </span>
      </p>
      <p className="md:hidden sm:text-base text-gray-800 dark:text-white/80 sm:block">
        I’m Himanchal — your all-in-one digital creator. Websites, apps, logos,
        SEO, hosting — I do it all. From WordPress to Shopify to custom code — I
        build sleek, fast, responsive sites with stunning design & smooth
        animations. Let’s make something unforgettable.
      </p>
    </motion.section>
  );
}
