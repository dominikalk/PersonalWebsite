import Image from "next/image";
import { useRef } from "react";

type RotatingSkillProps = {
  icon: string;
  initRotation: number;
  onClick: () => void;
};

const RotatingSkill = ({ icon, initRotation, onClick }: RotatingSkillProps) => {
  const iconRef = useRef<HTMLDivElement>(null);

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
          <div
            ref={iconRef}
            onMouseEnter={() => {
              if (iconRef.current) iconRef.current.className = "scale-110";
            }}
            onMouseLeave={() => {
              if (iconRef.current) iconRef.current.className = "";
            }}
            onClick={onClick}
          >
            <Image
              src={icon}
              alt="skills icon"
              className="w-20 h-20"
              style={{ transform: `rotate(${360 - initRotation}deg)` }}
              width={80}
              height={80}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RotatingSkill;
