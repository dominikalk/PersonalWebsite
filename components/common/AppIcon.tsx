type AppIconProps = {
  name: string;
  icon: string;
  active?: boolean;
  onClick: () => void;
};

const AppIcon = ({ name, icon, active, onClick }: AppIconProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg h-11 w-11 flex justify-center items-center relative group active:brightness-75"
    >
      <div className="absolute top-0 -mt-14 bg-white bg-opacity-20 rounded-md p-1 px-2 text-white whitespace-nowrap hidden md:group-hover:block">
        {name}
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={icon} alt={`${name} icon`} className="w-6 h-6" />
      <div
        className={`absolute bottom-0 -mb-2 w-1.5 h-1.5 bg-white bg-opacity-60 rounded-full ${
          active ? "block" : "hidden"
        }`}
      />
    </div>
  );
};

export default AppIcon;
