import ScrambleText from "components/common/ScrambleText";

type StatRowProps = {
  title: string;
  value: string;
  icon: string;
  className?: string;
};

const StatRow = ({ title, value, icon, className }: StatRowProps) => {
  return (
    <div className={`flex align-center mb-4 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={icon} alt={`${title} icon`} className="w-6 h-6 mr-4" />
      <ScrambleText as="span">{`${title}: ${value}`}</ScrambleText>
    </div>
  );
};

export default StatRow;
