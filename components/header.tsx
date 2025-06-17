"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="z-[999] relative">
      {/* Mobile Header with Hamburger */}
      <div className="sm:hidden fixed top-0 left-0 w-full h-14 max-w-full overflow-x-hidden flex items-center justify-between px-4 bg-white bg-opacity-90 dark:bg-gray-950 z-[1000] shadow-md">
        <span className="font-bold text-lg truncate">Portfolio</span>
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="text-2xl p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Hamburger Mobile Menu Overlay */}
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="sm:hidden fixed top-14 left-0 w-full max-w-full overflow-x-hidden bg-white dark:bg-gray-950 bg-opacity-95 z-[999] shadow-lg"
        >
          <ul className="flex flex-col items-center gap-4 py-6">
            {links.map((link) => (
              <li key={link.hash}>
                <Link
                  className={clsx(
                    "block px-6 py-2 text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-gray-950 dark:hover:text-white transition w-full text-center",
                    {
                      "text-gray-950 dark:text-white":
                        activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                    setMenuOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}

      {/* Desktop Header */}
      <motion.div
        className="hidden sm:block fixed top-6 left-1/2 h-[3.25rem] w-full max-w-[36rem] rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex fixed top-[1.7rem] left-1/2 h-[initial] -translate-x-1/2 py-0 w-full max-w-[36rem]">
        <ul className="flex w-full flex-nowrap items-center justify-center gap-3 sm:gap-5 text-[0.9rem] font-medium text-gray-500 px-2 sm:px-0 overflow-x-auto">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 text-base hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
