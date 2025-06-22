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
          <ScrambleText as="p" className="mb-2">Hi! I'm Dominik</ScrambleText>
          <ScrambleText as="p" className="mb-2">
            I'm a .NET developer based in the UK, working at{" "}
            <a href="https://urbanthings.co/" target="_blank" rel="noreferrer">UrbanThings</a>{" "}
            to build transport technology solutions.
          </ScrambleText>
          <ScrambleText as="p" className="mb-2">
            I have experience working on projects from frontend ecommerce, to full-stack monolithic architectures,
            to backend microservices platforms. 
          </ScrambleText>
          <ScrambleText as="p" className="mb-2">
            I have always been passionate in emphasising the importance of following
            developmental best practices, creating robust and scalable solutions, with a specific interest in the balance
            between the rigid following of these VS flexibility and its impact on overall efficiency.
          </ScrambleText>
          <ScrambleText as="p">
            Having achieved a First Class Computer Science BSc with Honours from{" "}
            <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noreferrer">Cardiff University</a>,{" "}
            I continue to strive to increase my knowledge, where I continue to work towards more AWS certifications.
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
