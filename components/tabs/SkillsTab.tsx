import Tab from "components/common/Tab";
import PointerPrompt from "components/home/PointerPrompt";
import RotatingSkill from "components/home/RotatingSkill";
import SelectedSkill from "components/home/SelectedSkill";
import { useWindowSize } from "hooks/useWindowResize";
import { useHomeContext } from "providers/home.provider";
import { useEffect } from "react";

type SkillsTabProps = {
  onClose: () => void;
  className: string;
};

type SkillName =
  | "Git"
  | "HTML"
  | "JavaScript & TypeScript"
  | "React"
  | "CSS"
  | "GitHub";

export type Skill = {
  icon: string;
  name: SkillName;
  description: string;
};

const skills: Skill[] = [
  {
    icon: "icons/git-white.svg",
    name: "Git",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis minima alias tempora? Qui repellendus quaerat rem. Officia illo veritatis et!",
  },
  {
    icon: "icons/html-white.svg",
    name: "HTML",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis minima alias tempora? Qui repellendus quaerat rem. Officia illo veritatis et!",
  },
  {
    icon: "icons/javascript-white.svg",
    name: "JavaScript & TypeScript",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis minima alias tempora? Qui repellendus quaerat rem. Officia illo veritatis et!",
  },
  {
    icon: "icons/react-white.svg",
    name: "React",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis minima alias tempora? Qui repellendus quaerat rem. Officia illo veritatis et!",
  },
  {
    icon: "icons/css-white.svg",
    name: "CSS",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis minima alias tempora? Qui repellendus quaerat rem. Officia illo veritatis et!",
  },
  {
    icon: "icons/github-white.svg",
    name: "GitHub",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis minima alias tempora? Qui repellendus quaerat rem. Officia illo veritatis et!",
  },
  // {
  //   icon: "icons/gamepad.svg",
  //   name: "Test",
  //   description: "Test Description",
  // },
  // {
  //   icon: "icons/graph.svg",
  //   name: "Test",
  //   description: "Test Description",
  // },
];

const SkillsTab = ({ onClose, className }: SkillsTabProps) => {
  const { selectedSkill, setSelectedSkill } = useHomeContext();
  const size = useWindowSize();

  useEffect(() => {
    setSelectedSkill(undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tab
      title="Skills"
      onClose={onClose}
      className={`tab-animation ${className}`}
      containerClassName="overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center absolute w-full aspect-square -m-4">
        {selectedSkill ? (
          <SelectedSkill {...selectedSkill} />
        ) : (
          <PointerPrompt />
        )}
      </div>
      <div className="w-full aspect-square flex justify-center items-center skills-rotate">
        {skills.map((skill: Skill, i: number) => (
          <RotatingSkill
            icon={skill.icon}
            initRotation={i * (360 / skills.length)}
            onClick={() => {
              setSelectedSkill(skill);
            }}
            key={skill.name}
          />
        ))}
      </div>
    </Tab>
  );
};

export default SkillsTab;
