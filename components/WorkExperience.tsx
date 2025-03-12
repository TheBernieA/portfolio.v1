"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { experiences } from "@/database";
import Link from "next/link";

const WorkExperience = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [activeJob, setActiveJob] = useState("Tech Fusion");

  const [title, company] = experiences[activeJob]?.title
    .split("@")
    .map((part: any) => part.trim());

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="experience"
      className="w-full px-[12%] py-10 scroll-mt-20 md:max-w-[85%] mx-auto"
    >
      <h2 className="text-center text-5xl font-ovo my-20 capitalize">
        where i've worked
      </h2>

      <div className="flex flex-col md:flex-row text-white min-h-[35rem] md:p-10">
        <div className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-gray-700 pr-5">
          <ul className="flex md:flex-col overflow-x-auto">
            {Object.keys(experiences).map((company) => (
              <li
                key={company}
                className={`cursor-pointer py-2 px-3 rounded-md text-gray-900 whitespace-nowrap ${
                  activeJob === company
                    ? "bg-orange-400 text-gray-900"
                    : "hover:bg-gray-700/50 hover:text-white"
                } dark:text-white`}
                onClick={() => setActiveJob(company)}
              >
                {company}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-3/4 pl-5 pt-5 md:pt-0 sm:mt-0">
          <h2 className="text-xl font-bold text-black/90 dark:text-white">
            {title}&nbsp;
            <Link
              href={company.companyLink || "#"}
              target="_blank"
              className="text-orange-400"
            >
              @&nbsp;{company}
            </Link>{" "}
          </h2>
          <p className="text-gray-400 mb-4 capitalize">
            {experiences[activeJob].date}
          </p>
          <ul className="space-y-3 text-black dark:text-white">
            {experiences[activeJob].details.map(
              (detail: any, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-orange-400 mr-2">▸</span> {detail}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkExperience;
