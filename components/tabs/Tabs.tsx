import { Dispatch, SetStateAction } from "react";
import { Tab } from "pages/index";
import AboutMeTab from "components/tabs/AboutMeTab";
import ProjectsTab from "components/tabs/ProjectsTab";
import VirusTab from "components/tabs/VirusTab";
import ContactTab from "components/tabs/ContactTab";
import SkillsTab from "components/tabs/SkillsTab";
import GamesTab from "components/tabs/GamesTab";
import StatsTab from "components/tabs/StatsTab";
import AllTab from "components/tabs/AllTab";

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
        <AboutMeTab
          onClose={() => setCurrentTab(undefined)}
          className="w-[800px]"
        />
      )}
      {currentTab === "projects" && (
        <ProjectsTab
          onClose={() => setCurrentTab(undefined)}
          className="w-[90%] lg:w-3/5"
        />
      )}
      {currentTab === "skills" && (
        <SkillsTab
          onClose={() => setCurrentTab(undefined)}
          className="w-[600px]"
        />
      )}
      {currentTab === "contact" && (
        <ContactTab
          onClose={() => setCurrentTab(undefined)}
          className="w-[400px]"
        />
      )}
      {currentTab === "virus" && (
        <VirusTab
          onClose={() => setCurrentTab(undefined)}
          className="w-[400px]"
        />
      )}
      {currentTab === "games" && (
        <GamesTab
          onClose={() => setCurrentTab(undefined)}
          className="w-[600px]"
        />
      )}
      {currentTab === "stats" && (
        <StatsTab
          onClose={() => setCurrentTab(undefined)}
          className="w-[400px]"
        />
      )}
      {currentTab === "all" && (
        <AllTab
          onClose={() => setCurrentTab(undefined)}
          setCurrentTab={setCurrentTab}
          className="w-[340px]"
        />
      )}
    </div>
  );
};

export default Tabs;
