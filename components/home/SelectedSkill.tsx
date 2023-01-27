import ScrambleText from "components/common/ScrambleText";
import Image from "next/image";

type SelectedSkillProps = {
  icon: string;
  name: string;
  description: string;
};

const SelectedSkill = ({ icon, name, description }: SelectedSkillProps) => {
  return (
    <>
      <Image
        src={icon}
        alt={`${name} icon`}
        className="w-20 h-20 mb-6 -mt-6"
        width={80}
        height={80}
      />
      <ScrambleText className="text-center max-w-[50%] text-xl mb-6">
        {name}
      </ScrambleText>
      <ScrambleText className="text-center max-w-[50%]">
        {description}
      </ScrambleText>
    </>
  );
};

export default SelectedSkill;
