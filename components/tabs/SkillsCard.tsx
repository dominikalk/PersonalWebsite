import React from "react";
import Card from "components/common/Card";

type SkillsCardProps = {
  onClose: () => void;
  className: string;
};

const SkillsCard = ({ onClose, className }: SkillsCardProps) => {
  return (
    <Card
      title="Skills"
      onClose={onClose}
      className={`tab-animation ${className}`}
    >
      <p className="text-2xl text-center my-20">Coming Soon ...</p>
    </Card>
  );
};

export default SkillsCard;
