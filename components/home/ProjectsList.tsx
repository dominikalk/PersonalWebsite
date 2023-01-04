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
          className="aspect-square flex items-center justify-center bg-no-repeat bg-cover bg-center hover:brightness-125 group rounded-lg cursor-pointer"
          style={{
            backgroundImage: `url("${project.image}")`,
            backgroundColor: "grey",
            backgroundBlendMode: "multiply",
          }}
        >
          <p className="text-white text-center text-xl group-hover:text-2xl">
            {project.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
