import { Project } from "public/data/projects";
import Image from "next/image";

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
      <div className="flex flex-col md:flex-row gap-8">
        <Image
          src={project.image}
          alt="project thumbnail"
          className="md:w-1/3 rounded-lg"
          width={400}
          height={400}
        />
        <div className="md:w-2/3">
          <h1 className="text-2xl mb-4">{project.title}</h1>
          <p className="text-lg">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
