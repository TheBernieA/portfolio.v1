import { otherProjects } from "@/database";
import OtherProjectsCard from "@/shared/components/OtherProjectsCard";

const OtherPojects = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl font-ovo my-20 capitalize">
        other projects
      </h2>
      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
      </ul>
    </div>
  );
};

export default OtherPojects;
