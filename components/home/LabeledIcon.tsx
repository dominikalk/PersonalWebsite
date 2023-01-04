type LabeledIconProps = {
  icon: string;
  label: string;
  onClick?: () => void;
  size?: "small" | "large";
};

const LabeledIcon = ({
  icon,
  label,
  size = "small",
  onClick,
}: LabeledIconProps) => {
  return (
    <div
      className="group relative flex justify-center cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute top-0 -mt-14 bg-[#414141] border-white border rounded-md p-1 px-2 text-white whitespace-nowrap hidden md:group-hover:block">
        {label}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={icon} alt={label} className="w-7 h-7" />
    </div>
  );
};

export default LabeledIcon;
