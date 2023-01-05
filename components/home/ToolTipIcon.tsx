import ScrambleText from "components/common/ScrambleText";

type ToolTipIconProps = {
  icon: string;
  label: string;
  onClick?: () => void;
  size?: "small" | "large";
};

const ToolTipIcon = ({
  icon,
  label,
  size = "small",
  onClick,
}: ToolTipIconProps) => {
  return (
    <div
      className="group relative flex justify-center cursor-pointer"
      onClick={onClick}
    >
      <ScrambleText
        as="div"
        className="absolute top-0 -mt-14 bg-[#414141] border-white border rounded-md p-1 px-2 whitespace-nowrap hidden md:group-hover:block"
      >
        {label}
      </ScrambleText>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={icon} alt={label} className="w-7 h-7" />
    </div>
  );
};

export default ToolTipIcon;
