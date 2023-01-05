import AppIcon from "components/common/AppIcon";
import Tab from "components/common/Tab";
import { Tab as TabType } from "pages/index";
import { Dispatch, SetStateAction } from "react";

type ContactTabProps = {
  onClose: () => void;
  setCurrentTab: Dispatch<SetStateAction<TabType>>;
  className: string;
};

const ContactTab = ({ onClose, setCurrentTab, className }: ContactTabProps) => {
  const handleGithubClicked = () => {
    window.open("https://github.com/dominikalk", "_blank");
  };

  return (
    <Tab
      title="Apps"
      onClose={onClose}
      className={`tab-animation ${className}`}
    >
      <div className="flex gap-4 flex-wrap justify-center">
        <AppIcon
          name="About Me"
          icon="/icons/user.svg"
          onClick={() => setCurrentTab("about")}
          labelType="visible"
        />
        <AppIcon
          name="Projects"
          icon="/icons/code.svg"
          onClick={() => setCurrentTab("projects")}
          labelType="visible"
        />
        <AppIcon
          name="Skills"
          icon="/icons/lightbulb.svg"
          onClick={() => setCurrentTab("skills")}
          labelType="visible"
        />
        <AppIcon
          name="Contact Me"
          icon="/icons/envelope.svg"
          onClick={() => setCurrentTab("contact")}
          labelType="visible"
        />
        <AppIcon
          name="Games"
          icon="/icons/gamepad.svg"
          onClick={() => setCurrentTab("games")}
          labelType="visible"
        />
        <AppIcon
          name="Stats"
          icon="/icons/graph.svg"
          onClick={() => setCurrentTab("stats")}
          labelType="visible"
        />
        <AppIcon
          name="GitHub Link"
          icon="/icons/github.svg"
          onClick={() => handleGithubClicked()}
          labelType="visible"
        />
        <AppIcon
          name="Don't Click This"
          icon="/icons/question.svg"
          onClick={() => setCurrentTab("virus")}
          labelType="visible"
        />
      </div>
    </Tab>
  );
};

export default ContactTab;
