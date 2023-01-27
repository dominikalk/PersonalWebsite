import Tab from "components/common/Tab";
import PointerPrompt from "components/home/PointerPrompt";
import RotatingSkill from "components/home/RotatingSkill";
import SelectedSkill from "components/home/SelectedSkill";
import { useWindowSize } from "hooks/useWindowResize";
import { useHomeContext } from "providers/home.provider";
import { Skill, skills } from "public/data/skills";
import { useEffect } from "react";

type SkillsTabProps = {
  onClose: () => void;
  className: string;
};

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
