import ScrambleText from "components/common/ScrambleText";
import { isDesktop } from "react-device-detect";
import Image from "next/image";

type ToolTipIconProps = {
  icon: string;
  label: string;
  size?: "small" | "large";
  onClick?: () => void;
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
        className={`absolute top-0 -mt-14 bg-[#414141] border-white border rounded-md p-1 px-2 whitespace-nowrap hidden ${
          isDesktop ? "group-hover:block" : ""
        }`}
      >
        {label}
      </ScrambleText>
      <Image
        src={icon}
        alt={label}
        className={`${size === "small" ? "w-7 h-7" : "w-10 h-10"}`}
        width={size === "small" ? 28 : 40}
        height={size === "small" ? 28 : 40}
      />
    </div>
  );
};

export default ToolTipIcon;
