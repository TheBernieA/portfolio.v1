import { aboutMe, backend, database, frontend, tools } from "@/database";
import { assets } from "@/public/assets";
import { motion } from "motion/react";
import Image from "next/image";

const About = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        About me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt=""
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-ovo">{aboutMe}</p>
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-3"
          >
            A glimpse of the things I'm experienced with:
          </motion.h4>
          <div className="w-full grid grid-cols-3 md:grid-cols-5 gap-36">
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
              className="flex flex-col gap-1"
            >
              <h4 className="capitalize mb-4">frontend</h4>
              {frontend.map((tool, index) => (
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  key={index}
                  className="cursor-pointer whitespace-nowrap capitalize"
                >
                  <span className="text-orange-400 mr-2">▸</span> {tool}
                </motion.li>
              ))}
            </motion.ul>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
              className="flex flex-col gap-1"
            >
              <h4 className="capitalize mb-4">backend</h4>
              {backend.map((tool, index) => (
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  key={index}
                  className="cursor-pointer whitespace-nowrap capitalize"
                >
                  <span className="text-orange-400 mr-2">▸</span> {tool}
                </motion.li>
              ))}
            </motion.ul>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
              className="flex flex-col gap-1"
            >
              <h4 className="capitalize mb-4">database</h4>
              {database.map((tool, index) => (
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  key={index}
                  className="cursor-pointer whitespace-nowrap capitalize"
                >
                  <span className="text-orange-400 mr-2">▸</span> {tool}
                </motion.li>
              ))}
            </motion.ul>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
              className="flex flex-col gap-1"
            >
              <h4 className="capitalize mb-4">tools</h4>
              {tools.map((tool, index) => (
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  key={index}
                  className="cursor-pointer whitespace-nowrap capitalize"
                >
                  <span className="text-orange-400 mr-2">▸</span> {tool}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
