import React from "react";
import Tab from "components/common/Tab";
import ScrambleText from "components/common/ScrambleText";

type SkillsTabProps = {
  onClose: () => void;
  className: string;
};

const SkillsTab = ({ onClose, className }: SkillsTabProps) => {
  return (
    <Tab
      title="Skills"
      onClose={onClose}
      className={`tab-animation ${className}`}
    >
      <ScrambleText as="p" className="text-2xl text-center my-20">
        Coming Soon ...
      </ScrambleText>
    </Tab>
  );
};

export default SkillsTab;
