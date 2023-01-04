import React from "react";
import Tab from "components/common/Tab";

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
      <p className="text-2xl text-center my-20">Coming Soon ...</p>
    </Tab>
  );
};

export default SkillsTab;
