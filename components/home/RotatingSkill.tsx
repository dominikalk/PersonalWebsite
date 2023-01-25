import Image from "next/image";

type RotatingSkillProps = {
  icon: string;
  initRotation: number;
  onClick: () => void;
};

const RotatingSkill = ({ icon, initRotation, onClick }: RotatingSkillProps) => {
  return (
    <>
      <div
        className="absolute h-20 w-20"
        style={{ transform: `rotate(${initRotation}deg)` }}
      >
        <div
          className="skills-rotate-negate"
          style={{ transformOrigin: "260px 50%" }}
        >
          <Image
            src={icon}
            alt="skills icon"
            className="w-20 h-20"
            style={{ transform: `rotate(${360 - initRotation}deg)` }}
            width={80}
            height={80}
            onClick={onClick}
          />
        </div>
      </div>
    </>
  );
};

export default RotatingSkill;
