import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import raised from '@/public/raised.png'
import voice from '@/public/voice.png'
import bmw from '@/public/bmw.png'
import carbon from '@/public/carbon.png'


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Services",
    hash: "#services",
  },
  
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Product Designer",
    location: "Delhi, India",
    description:
      "Led the product design management for an e-learning Mobile & Web application, overseeing the implementation of various features to enhance user experience.",
    icon: React.createElement(CgWorkAlt),
    date: "2022-2023",
  },
  {
    title: "Post Graduate in Software Development",
    location: "Bangalore, India",
    description:
      "I enrolled in software development course with Upgard, also upskilled to the full stack.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Master in Computer Science",
    location: "London, UK",
    description:
      "I enrolled for master's in Computer Science in Liverpool John Moore's University.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
  {
    title: "Frontend Developer",
    location: "Delhi, India",
    description:
      "Developed 10+ Projects in frontend. My stack includes React, Next.js, TypeScript, Tailwind, Sanity and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - 2024",
  },
  {
    title: "Full Stack Developer",
    location: "Delhi, India",
    description:
      "I'm now a up skilling myself to backend developement. Learning MongoDB, MySql and much more in my pipeline.",
    icon: React.createElement(FaServer),
    date: "2024 - present",
  }, 
] as const;

export const projectsData = [
  {
    title: "Raised Apparels",
    description:
      "A modern, fully responsive e-commerce website for a custom clothing brand. Designed and developed using web technologies with a focus on brand identity, seamless UI, and scalability for future features.",
    tags: [],
    imageUrl: raised,
    imagePath: "https://raisedapparels.com/",
  },
  
  {
    title: "Voice To Notes",
    description:
      "An AI-powered web app that converts speech to text in real-time. Built for productivity, it supports multiple languages, speaker detection, and is optimized for clarity, accessibility, and speed.",
    tags: [],
    imageUrl: voice,
    imagePath: "http://voicetonotes.ai"
  },
  
  {
    title: "NIFSE Gorakhpur",
    description:
      "Developed the official website for the National Institute of Fire and Safety Engineering, Gorakhpur. Showcases courses, admission info, and contact features with a clean, responsive design.",
    tags: [],
    imageUrl: bmw,
    imagePath: "https://www.bmw-academy.in/"
  },
  {
    title: "Carbon Crunch",
    description:
      "A sustainability-focused platform that helps users track, analyze, and reduce their carbon footprint. Features interactive dashboards, personalized insights, and a clean, data-driven UI to promote eco-friendly living.",
    tags: [],
    imageUrl: carbon,
    imagePath: "https://www.carboncrunch.in/"
  },
  
] as const;

export const skillsData = [
  "Full Stack Web Devlopment",
  "UI/UX Design",
  "Wordpress",
  "Wix",
  "Admin Panel",
  "E-commerce Dashboard",
  "SEO","Maintenace and Tech Support",
  "Custom Web Animation","Mobile Responsive Design",
  "Logo And Branding","Landing Page Design"
] as const;