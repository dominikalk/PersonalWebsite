import Tab from "components/common/Tab";
import PointerPrompt from "components/home/PointerPrompt";
import RotatingSkill from "components/home/RotatingSkill";

type SkillsTabProps = {
  onClose: () => void;
  className: string;
};

type RotatingSkillType = {
  icon: string;
  name: string;
  description: string;
};

const rotatingSkills: RotatingSkillType[] = [
  {
    icon: "icons/git.svg",
    name: "Git",
    description: "Git Description",
  },
  {
    icon: "icons/html.svg",
    name: "HTML",
    description: "HTML Description",
  },
  {
    icon: "icons/javascript.svg",
    name: "JavaScript & TypeScript",
    description: "JS & TS Description",
  },
  {
    icon: "icons/react.svg",
    name: "React",
    description: "React Description",
  },
  {
    icon: "icons/css.svg",
    name: "CSS",
    description: "CSS Description",
  },
  {
    icon: "icons/github.svg",
    name: "GitHub",
    description: "GitHub Description",
  },
  {
    icon: "icons/gamepad.svg",
    name: "Test",
    description: "Test Description",
  },
  {
    icon: "icons/graph.svg",
    name: "Test",
    description: "Test Description",
  },
];

const SkillsTab = ({ onClose, className }: SkillsTabProps) => {
  return (
    <Tab
      title="Skills"
      onClose={onClose}
      className={`tab-animation ${className}`}
    >
      <div className="flex flex-col justify-center items-center absolute w-full aspect-square -m-4">
        <PointerPrompt />
      </div>
      <div className="w-full aspect-square flex justify-center items-center skills-rotate">
        {rotatingSkills.map((rotatingSkill: RotatingSkillType, i: number) => (
          <RotatingSkill
            icon={rotatingSkill.icon}
            initRotation={i * (360 / rotatingSkills.length)}
            onClick={() => {}}
            key={rotatingSkill.name}
          />
        ))}
      </div>
    </Tab>
  );
};

export default SkillsTab;
