import Tab from "components/common/Tab";
import Image from "next/image";
import profilePic from "public/images/profile.jpeg";

type AboutMeTabProps = {
  onClose: () => void;
  className: string;
};

const AboutMeTab = ({ onClose, className }: AboutMeTabProps) => {
  return (
    <Tab
      title="About Me"
      onClose={onClose}
      className={`tab-animation ${className}`}
    >
      <div className="flex items-center flex-col md:flex-row md:gap-8">
        <div className="w-full mb-4 md:w-3/5 md:mb-0">
          <p>Hi! I&apos;m Dominik</p>
          <p>
            I&apos;m a React and React Native developer based in the UK and have
            been employed at{" "}
            <a href="https://3sidedcube.com/" target="_blank" rel="noreferrer">
              3 Sided Cube
            </a>{" "}
            and their sister company since October 2019 as a mid-level
            developer. Previously I had a work experience placement at{" "}
            <a href="https://www.amuzo.com/" target="_blank" rel="noreferrer">
              Amuzo
            </a>{" "}
            developing games with the Unity game engine and have been developing
            personal games since. As well as developing web apps and games in my
            free time, I am studying Computer Science at Cardiff University and
            will graduate in 2024. My goal in Web and App Development is to
            create clean and efficient code bases as to reduce the probability
            of bugs being incorporated, whilst keeping the design responsive,
            and I&apos;m also looking into getting into full-stack development,
            hence why I&apos;m currently teaching myself NestJS.
          </p>
        </div>
        <Image
          src={profilePic}
          alt="Profile"
          className="rounded-lg w-full md:w-2/5 h-full object-cover ml-auto"
        />
      </div>
    </Tab>
  );
};

export default AboutMeTab;
