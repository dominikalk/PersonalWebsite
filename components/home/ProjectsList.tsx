import ScrambleText from "components/common/ScrambleText";
import { Project, projects } from "public/data/projects";
import { Dispatch, SetStateAction } from "react";

type ProjectsListProps = {
  setCurrentProject: Dispatch<SetStateAction<Project | undefined>>;
};

const ProjectsList = ({ setCurrentProject }: ProjectsListProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {projects.map((project: Project) => (
        <div
          key={project.title}
          onClick={() => setCurrentProject(project)}
          className="aspect-square flex items-center justify-center bg-no-repeat bg-cover bg-center bg-[#b5b5b5] hover:bg-white group rounded-lg cursor-pointer"
          style={{
            backgroundImage: `url("${project.image}")`,
            backgroundBlendMode: "multiply",
          }}
        >
          <ScrambleText
            as="p"
            className="text-center text-xl group-hover:text-2xl pt-1 px-2 rounded bg-[#969696] bg-opacity-75"
          >
            {project.title}
          </ScrambleText>
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
