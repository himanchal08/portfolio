import React from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  return (
    <button
      type="submit"
      className="flex items-center justify-center gap-2 h-12 sm:h-[3rem] w-32 sm:w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all dark:bg-[#1d2432] text-base sm:text-lg"
    >
      Submit{" "}
      <FaPaperPlane className="text-xs sm:text-sm opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
    </button>
  );
}
