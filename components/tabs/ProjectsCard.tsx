import Card from "components/common/Card";
import ProjectsList from "components/home/ProjectsList";
import SingleProject from "components/home/SingleProject";
import { Project } from "public/data/projects";
import { useState } from "react";

type ProjectsCardProps = {
  onClose: () => void;
  className: string;
};

const ProjectsCard = ({ onClose, className }: ProjectsCardProps) => {
  const [currentProject, setCurrentProject] = useState<Project | undefined>(
    undefined
  );

  return (
    <Card
      title="Projects"
      onClose={onClose}
      className={`tab-animation ${className}`}
    >
      {!currentProject ? (
        <ProjectsList setCurrentProject={setCurrentProject} />
      ) : (
        <SingleProject
          project={currentProject}
          closeCurrentProject={() => setCurrentProject(undefined)}
        />
      )}
    </Card>
  );
};

export default ProjectsCard;
