import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { email } from "@/database";

const Contact = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-ovo capitalize">
        what's next
      </h4>
      <div className="w-full flex flex-col gap-6 items-center justify-center">
        <h2 className="capitalize text-center text-5xl font-ovo">
          Get in touch
        </h2>
        <p className="mb-10 max-w-xl font-ovo text-center">
          I have a thing for enabling environments where innovation meets genius
          minds . Whether for a potential project or just to say hi, I usually
          answer within a few hours!
        </p>
        <Link
          href={`mailto:${email}`}
          className="capitalize border border-gray-700 px-4 py-2 hover:bg-lightHover duration-500 dark:border-white dark:hover:text-black"
        >
          Say Hello
        </Link>
      </div>
    </motion.div>
  );
};

export default Contact;
