import React from "react";
import Card from "components/common/Card";
import { projects } from "public/data/projects";
import { Project } from "../../public/data/projects";

type ProjectsCardProps = {
  onClose: () => void;
  className: string;
};

const ProjectsCard = ({ onClose, className }: ProjectsCardProps) => {
  return (
    <Card
      title="Projects"
      onClose={onClose}
      className={`tab-animation ${className}`}
    >
      <div className="grid grid-cols-4 -m-4">
        {projects.map((project: Project) => (
          <div
            key={project.title}
            className="aspect-square flex items-center justify-center bg-no-repeat bg-cover bg-opacity-50"
            style={{
              backgroundImage: `url("${project.image}")`,
              backgroundColor: "grey",
              backgroundBlendMode: "multiply",
            }}
          >
            <p className="text-white text-xl">{project.title}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ProjectsCard;
