import Tab from "components/common/Tab";
import ProjectsList from "components/home/ProjectsList";
import SingleProject from "components/home/SingleProject";
import { Project } from "public/data/projects";
import { useState } from "react";

type ProjectsTabProps = {
  onClose: () => void;
  className: string;
};

const ProjectsTab = ({ onClose, className }: ProjectsTabProps) => {
  const [currentProject, setCurrentProject] = useState<Project | undefined>(
    undefined
  );

  return (
    <Tab
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
    </Tab>
  );
};

export default ProjectsTab;
