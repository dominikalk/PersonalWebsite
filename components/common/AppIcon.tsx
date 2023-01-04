import Image from "next/image";

type AppIconProps = {
  name: string;
  icon: string;
  onClick: () => void;
  labelType?: "hover" | "visible";
  active?: boolean;
};

const AppIcon = ({
  name,
  icon,
  onClick,
  labelType = "hover",
  active,
}: AppIconProps) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-center relative group"
    >
      {labelType === "hover" && (
        <div className="absolute top-0 -mt-14 bg-white bg-opacity-20 rounded-md p-1 px-2 whitespace-nowrap hidden md:group-hover:block">
          {name}
        </div>
      )}
      <div
        className={`bg-white rounded-lg ${
          labelType === "hover" ? "h-11 w-11" : "h-16 w-16"
        } flex justify-center items-center group-active:brightness-75`}
      >
        <Image
          src={icon}
          alt={`${name} icon`}
          className={labelType === "hover" ? "w-6 h-6" : "w-8 h-8"}
          width={24}
          height={24}
        />
      </div>
      {labelType === "hover" ? (
        <div
          className={`absolute bottom-0 -mb-2 w-1.5 h-1.5 bg-white bg-opacity-60 rounded-full ${
            active ? "block" : "hidden"
          }`}
        />
      ) : (
        <p className="w-16 h-9 text-center mt-2 overflow-hidden text-ellipsis text-sm">
          {name}
        </p>
      )}
    </div>
  );
};

export default AppIcon;
