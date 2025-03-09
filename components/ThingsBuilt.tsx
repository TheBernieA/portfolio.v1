import React from "react";
import { workData } from "@/database";
import { assets } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const ThingsBuilt = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <h2 className="text-center text-5xl font-ovo my-20 capitalize">
        some things i've built
      </h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-5"
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage.src})` }}
          >
            <div className="flex items-center justify-between px-3 py-2 bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 duration-500 group-hover:bottom-7">
              <div className="">
                <h2 className="font-semibold dark:text-black">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image src={assets.send_icon} alt="" className="w-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <Link
        href={``}
        className="capitalize w-max flex items-center justify-center gap-2 text-gray-700 border-[.5px] rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:border-white dark:text-white"
      >
        show more{" "}
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt=""
          className="w-4"
        />
      </Link>
    </motion.div>
  );
};

export default ThingsBuilt;
