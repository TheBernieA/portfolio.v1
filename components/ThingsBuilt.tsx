import React from "react";
import { workData } from "@/database";
import { assets } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import ThingsBuiltCard from "@/shared/components/ThingsBuiltCard";

const ThingsBuilt = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-[90%] mx-auto px-[12%] py-10 scroll-mt-20 md:max-w-[70%]"
    >
      <h2 className="text-center text-5xl font-ovo my-20 capitalize">
        some things i've built
      </h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="grid grid-cols-1 my-10 gap-5"
      >
        {workData.map((project, index) => (
          <ThingsBuiltCard key={index} {...project} />
        ))}
      </motion.div>
      <button
        disabled
        className={`capitalize w-max flex items-center justify-center gap-2 text-gray-700 border-[.5px] rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:border-white dark:text-white disabled:cursor-not-allowed`}
      >
        show more{" "}
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt=""
          className="w-4"
        />
      </button>
    </motion.div>
  );
};

export default ThingsBuilt;
