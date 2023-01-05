import { Project } from "public/data/projects";
import Image from "next/image";
import ScrambleText from "components/common/ScrambleText";

type SingleProjectProps = {
  project: Project;
  closeCurrentProject: () => void;
};

const SingleProject = ({
  project,
  closeCurrentProject,
}: SingleProjectProps) => {
  return (
    <div>
      <Image
        src="/icons/angle-left-white.svg"
        alt="Back"
        className="w-6 h-6 mb-4 cursor-pointer"
        width={32}
        height={32}
        onClick={closeCurrentProject}
      />
      <div className="flex flex-col xs:flex-row gap-8">
        <div className="w-full xs:w-1/3 relative">
          <Image
            src={project.image}
            alt="project thumbnail"
            className="rounded-lg w-full"
            width={400}
            height={400}
          />
        </div>
        <div className="xs:w-2/3">
          <ScrambleText as="h1" className="text-2xl mb-4">
            {project.title}
          </ScrambleText>
          <ScrambleText as="p" className="text-lg">
            {project.description}
          </ScrambleText>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
