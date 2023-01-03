import React, { Dispatch, SetStateAction } from "react";
import { Tab } from "pages/index";
import AboutMeCard from "components/tabs/AboutMeCard";
import ProjectsCard from "components/tabs/ProjectsCard";
import VirusCard from "components/tabs/VirusCard";
import ContactCard from "components/tabs/ContactCard";
import SkillsCard from "components/tabs/SkillsCard";

type TabsProps = {
  currentTab: Tab;
  setCurrentTab: Dispatch<SetStateAction<Tab>>;
};

const Tabs = ({ currentTab, setCurrentTab }: TabsProps) => {
  return (
    <div
      className={`absolute inset-0 flex justify-center items-center z-20 ${
        currentTab === undefined && "hidden"
      }`}
      onClick={() => setCurrentTab(undefined)}
    >
      {currentTab === "about" && (
        <AboutMeCard
          onClose={() => setCurrentTab(undefined)}
          className="w-[800px] mb-20"
        />
      )}
      {currentTab === "projects" && (
        <ProjectsCard
          onClose={() => setCurrentTab(undefined)}
          className="w-[90%] md:w-4/5 mb-20"
        />
      )}
      {currentTab === "skills" && (
        <SkillsCard
          onClose={() => setCurrentTab(undefined)}
          className="w-[600px] mb-20"
        />
      )}
      {currentTab === "contact" && (
        <ContactCard
          onClose={() => setCurrentTab(undefined)}
          className="w-[600px] mb-20"
        />
      )}
      {currentTab === "virus" && (
        <VirusCard
          onClose={() => setCurrentTab(undefined)}
          className="w-[400px] mb-20"
        />
      )}
    </div>
  );
};

export default Tabs;
