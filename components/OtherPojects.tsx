import { infoList } from "@/database";
import Image from "next/image";
import React from "react";

const OtherPojects = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl font-ovo my-20 capitalize">
        other projects
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
        {infoList.map((info, index) => (
          <li
            key={index}
            className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:bg-darkHover/50"
          >
            <Image
              src={isDarkMode ? info.iconDark : info.icon}
              alt={info.title}
              className="w-7 mt-3"
            />
            <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
              {info.title}
            </h3>
            <p className="text-gray-600 text-sm dark:text-white">
              {info.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OtherPojects;
