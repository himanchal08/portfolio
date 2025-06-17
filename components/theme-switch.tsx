"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="hidden sm:fixed sm:top-5 sm:right-5 sm:bg-white sm:w-[3rem] sm:h-[3rem] sm:bg-opacity-80 sm:backdrop-blur-[0.5rem] sm:border-solid sm:borderBlack sm:shadow-xl sm:overflow-hidden sm:rounded-full sm:flex sm:items-center sm:justify-center sm:hover:scale-[1.15] sm:active:scale-105 sm:transition-all sm:dark:bg-gray-950 sm:dark:text-gray-50"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
