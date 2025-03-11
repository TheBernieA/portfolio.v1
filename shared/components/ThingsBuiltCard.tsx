import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface ThingsBuiltCardProps {
  bgImage: any;
  title: string;
  description: string;
  githubLink: string;
  externalLink: string;
  tools: string[];
}

const ThingsBuiltCard = (project: ThingsBuiltCardProps) => {
  return (
    <motion.div className="w-full flex flex-col lg:flex-row gap-4 rounded-lg border-white/10  shadow-md glass-effect backdrop-blur-lg backdrop-filter overflow-hidden">
      <Image
        src={project.bgImage}
        alt=""
        className="w-full lg:w-2/5 h-[15rem] object-cover aspect-square rounded-md"
      />
      <div className="flex-1 flex flex-col justify-between px-3 py-4">
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col">
            <small className="uppercase text-orange-400">
              Featured Project
            </small>
            <Link
              href={project.externalLink}
              target="_blank"
              className="text-2xl font-semibold capitalize hover:text-orange-400 transition-colors duration-300"
            >
              {project.title}
            </Link>
          </div>
          <div className="flex gap-6 mr-6 items-center">
            {project.githubLink !== "" && (
              <Link
                href={project.githubLink || "#"}
                target="_blank"
                className="py-1 px-3 rounded-full border-2 border-black/70 dark:border-white/70 capitalize"
              >
                github repository
              </Link>
            )}
            {project.externalLink !== "" && (
              <Link href={project.externalLink || "#"} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-box-arrow-up-right hover:text-orange-400 transition duration-300"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                  />
                  <path
                    fillRule="evenodd"
                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
        <p className="text-sm text-gray-700 dark:text-white">
          {project.description}
        </p>
        <ul className="flex gap-2 flex-wrap">
          {project.tools.map((tool, index) => (
            <li
              key={index}
              className="uppercase px-3 py-1 text-xs dark:text-black/90 font-light bg-gray-200 rounded-full"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ThingsBuiltCard;
