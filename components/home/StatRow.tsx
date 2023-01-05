import ScrambleText from "components/common/ScrambleText";
import Image from "next/image";

type StatRowProps = {
  title: string;
  value: string;
  icon: string;
  className?: string;
};

const StatRow = ({ title, value, icon, className }: StatRowProps) => {
  return (
    <div className={`flex align-center mb-4 ${className}`}>
      <Image
        src={icon}
        alt={`${title} icon`}
        className="w-6 h-6 mr-4"
        width={24}
        height={24}
      />
      <ScrambleText as="span">{`${title}: ${value}`}</ScrambleText>
    </div>
  );
};

export default StatRow;
