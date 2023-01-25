import Tab from "components/common/Tab";
import RotatingSkill from "components/home/RotatingSkill";

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
      <div className="w-full aspect-square flex justify-center items-center skills-rotate ">
        <RotatingSkill
          icon="/icons/git.svg"
          initRotation={0}
          onClick={() => {}}
        />
        <RotatingSkill
          icon="/icons/html.svg"
          initRotation={45}
          onClick={() => {}}
        />
        <RotatingSkill
          icon="/icons/javascript.svg"
          initRotation={90}
          onClick={() => {}}
        />
        <RotatingSkill
          icon="/icons/react.svg"
          initRotation={135}
          onClick={() => {}}
        />
        <RotatingSkill
          icon="/icons/css.svg"
          initRotation={180}
          onClick={() => {}}
        />
        <RotatingSkill
          icon="/icons/github.svg"
          initRotation={225}
          onClick={() => {}}
        />
        <RotatingSkill
          icon="/icons/gamepad.svg"
          initRotation={270}
          onClick={() => {}}
        />
        <RotatingSkill
          icon="/icons/graph.svg"
          initRotation={315}
          onClick={() => {}}
        />
      </div>
    </Tab>
  );
};

export default SkillsTab;
