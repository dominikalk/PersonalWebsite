import ScrambleText from "components/common/ScrambleText";
import Tab from "components/common/Tab";
import Image from "next/image";
import profilePic from "public/images/profile.png";

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
      <div className="flex items-center flex-col sm:flex-row sm:gap-8">
        <div className="w-full mb-4 sm:w-3/5 sm:mb-0">
          <ScrambleText as="p">Hi! I&apos;m Dominik</ScrambleText>
          <ScrambleText as="span">
            I&apos;m a React and React Native developer based in the UK and have
            been employed at
          </ScrambleText>{" "}
          <a href="https://3sidedcube.com/" target="_blank" rel="noreferrer">
            <ScrambleText as="span">3 Sided Cube</ScrambleText>
          </a>{" "}
          <ScrambleText as="span">
            and their sister company since October 2019 as a mid-level
            developer. Previously I had a work experience placement at
          </ScrambleText>{" "}
          <a href="https://www.amuzo.com/" target="_blank" rel="noreferrer">
            <ScrambleText as="span">Amuzo</ScrambleText>
          </a>{" "}
          <ScrambleText as="span">
            developing games with the Unity game engine and have been developing
            personal games since. As well as developing web apps and games in my
            free time, I am studying Computer Science at Cardiff University and
            will graduate in 2024. My goal in Web and App Development is to
            create clean and efficient code bases as to reduce the probability
            of bugs being incorporated, whilst keeping the design responsive,
            and I&apos;m also looking into getting into full-stack development,
            hence why I&apos;m currently teaching myself NestJS.
          </ScrambleText>
        </div>
        <Image
          src={profilePic}
          alt="Profile"
          className="rounded-lg w-full sm:w-2/5 h-full object-cover ml-auto"
        />
      </div>
    </Tab>
  );
};

export default AboutMeTab;
