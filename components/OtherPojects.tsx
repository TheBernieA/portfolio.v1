import { otherProjects } from "@/database/otherProject";
import OtherProjectsCard from "@/shared/components/OtherProjectsCard";
import { motion } from "motion/react";

const OtherPojects = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl font-ovo my-20 capitalize">
        other projects
      </h2>
      <motion.ul initial={{ opacity: 0, }}
        whileInView={{ opacity: 1, }}
        transition={{ duration: 1, }}
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-6">
        {otherProjects.map((project, index) => (
          <OtherProjectsCard
            key={index}
            githubLink={project.gitHubLink}
            externalLink={project.externalLink}
            title={project.title}
            description={project.description}
            tools={project.tools}
          />
        ))}
      </motion.ul>
    </div>
  );
};

export default OtherPojects;
