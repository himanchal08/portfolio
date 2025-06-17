"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
// import { SmoothCorners } from 'react-smooth-corners'
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number] & {
  imagePath: string;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  imagePath,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className=" group mb-3 sm:mb-8 last:mb-0 w-full max-w-full sm:max-w-[42rem]"
    >
      <Link href={imagePath}>
        <section className="group bg-gray-100 w-full max-w-full sm:max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 hover:bg-gray-200 transition rounded-xl dark:text-white dark:bg-white/10 dark:hover:bg-white/20 px-2 sm:px-0">
          <div className="pt-4 pb-7 px-2 sm:pl-10 sm:pr-2 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8">
            <div className="w-full sm:w-1/2 text-center sm:text-left flex flex-col justify-center">
              <h3 className="text-lg sm:text-2xl font-semibold mb-2">
                {title}
              </h3>
              <p className="mt-1 sm:mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-sm sm:text-base">
                {description}
              </p>
              <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                {tags.map((tag, index) => (
                  <li
                    className="bg-black/[0.7] px-2 sm:px-3 py-1 text-[0.65rem] sm:text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full sm:w-1/2 flex justify-center items-center">
              <Image
                src={imageUrl}
                alt={title}
                quality={95}
                className="w-full max-w-xs xs:max-w-sm sm:max-w-[16rem] md:max-w-[20rem] lg:max-w-[24rem] object-cover rounded-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:rotate-2"
              />
            </div>
          </div>
        </section>
      </Link>
    </motion.div>
  );
}
