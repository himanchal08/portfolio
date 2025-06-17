"use client";

import React, { useEffect} from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion';
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section 
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 
      sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y: 0}}
      transition={{ delay: 0.175}}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hey, I’m Himanchal — your one-stop solution for everything digital. <br /><br />
        From building high-performance web apps, stunning landing pages, and seamless admin panels to crafting custom logos, UI/UX designs, SEO optimization, and secure hosting — I handle it all so you don’t have to juggle multiple freelancers. <br /><br />
        Whether you're a startup, brand, agency, or just an individual with a vision — I help bring your ideas to life with clean code, smart design, and a touch of animation magic. <br /><br />
        I work across platforms like <span className="font-medium">WordPress</span>, <span className="font-medium">Wix</span>, and <span className="font-medium">Shopify</span> to build scalable, visually striking, and fully responsive websites. Combine that with <span className="font-medium">full-stack development</span> and top-tier performance, and you get an online presence that not only looks great — but actually works. <br /><br />
        <span className="font-semibold">Let’s build something that’s not just functional, but unforgettable.</span>
      </p>



      
    </motion.section>
  )
}
