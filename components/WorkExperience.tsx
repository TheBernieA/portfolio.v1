import React from "react";
import { motion } from "motion/react";

const WorkExperience = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="experience"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo my-20 capitalize">
        where i've worked
      </h2>
      <p className="text-center mx-auto mt-5 mb-12 max-w-2xl font-ovo">
        I'm an engineer who loves working on challenging problems, cracking them
        into simpler solutions. I build scalable backend applications, using
        state of the art technologies with security in mind. I am a big advocate
        of statecharts and, I love the reactive programming paradigms of rxjs. I
        graduated from Kwame Nkrumah University of Science and Technology with a
        bachelor's in Computer Engineering, and for the past 4+ years, I've been
        among several teams engineering the next big stuff. A glimpse of the
        things I'm experienced with:
      </p>
    </motion.div>
  );
};

export default WorkExperience;
