"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = formRef.current!;
    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "581c80c0-fa7e-476c-8884-0b130e0d3a20",
        name: formData.get("name"),
        email: formData.get("senderEmail"),
        message: formData.get("message"),
      }),
    });

    const result = await response.json();

    if (result.success) {
      toast.success("Email sent successfully!");
      form.reset();
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-12 sm:mb-20 md:mb-28 w-full max-w-full sm:max-w-[38rem] text-center px-2 sm:px-6 md:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-4 dark:text-white/80 text-sm sm:text-base mb-4">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:himanchalkhattri@gmail.com">
          himanchalkhattri@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-4 flex flex-col gap-3 sm:gap-4 md:gap-6 w-full max-w-md mx-auto"
      >
        {/* Name */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          <label
            htmlFor="name"
            className="w-24 font-medium dark:text-white text-sm sm:text-base text-black"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="bg-transparent w-full sm:flex-1 h-10 sm:h-12 px-3 sm:px-4 rounded-lg border border-gray-300 dark:bg-white dark:bg-opacity-10  transition-all dark:outline-none text-sm sm:text-base"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          <label
            htmlFor="senderEmail"
            className="w-24 font-medium dark:text-white text-sm sm:text-base text-black"
          >
            Email
          </label>
          <input
            type="email"
            name="senderEmail"
            required
            maxLength={500}
            placeholder="email@example.com"
            className="w-full sm:flex-1 h-10 sm:h-12 px-3 sm:px-4 rounded-lg border border-gray-300 dark:bg-white dark:bg-opacity-10  transition-all dark:outline-none text-sm sm:text-base"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
          <label
            htmlFor="message"
            className="w-24 font-medium dark:text-white text-sm sm:text-base text-black"
          >
            Message
          </label>
          <textarea
            name="message"
            required
            maxLength={5000}
            rows={4}
            placeholder="Enter your message"
            className="w-full sm:flex-1 p-3 sm:p-4 rounded-lg border border-gray-300 dark:bg-[#f3f4f6] dark:bg-opacity-10 transition-all dark:outline-none text-sm sm:text-base"
          />
        </div>

        {/* Submit Button */}
        <div className="sm:ml-[6.5rem] mt-2 sm:mt-0">
          <SubmitBtn />
        </div>
      </form>
    </motion.section>
  );
}
