import ScrambleText from "components/common/ScrambleText";
import Tab from "components/common/Tab";
import Image from "next/image";
import { experiences } from "public/data/experiences";

type ExperienceTabProps = {
  onClose: () => void;
  className: string;
};

const ExperienceTab = ({ onClose, className }: ExperienceTabProps) => {
  return (
    <Tab
      title="Experience"
      onClose={onClose}
      className={`tab-animation ${className}`}
    >
      <div className="flex relative">
        <div className="min-h-full flex-none w-1 ml-4 mr-8 bg-white rounded" />
        <div className="flex flex-col gap-4 my-2">
          {experiences.map(experience => (
            <div className="flex flex-col gap-1" key={experience.title}>
              <Image
                src={experience.image}
                alt={`${experience.title} icon`}
                className="bg-white rounded absolute left-0"
                width={36}
                height={36}
              />
              <div className="flex items-center gap-2 mt-1">
                <ScrambleText as="h2" className="text-lg">
                  {experience.title}
                </ScrambleText>
                ·
                <ScrambleText as="p" className="text-lg">
                  <a href={experience.company.url} target="_blank" rel="noreferrer">{experience.company.name}</a>
                </ScrambleText>
              </div>
              <div className="flex items-center gap-2">
                <ScrambleText as="p">
                  {experience.from} - {experience.to}
                </ScrambleText>
                ·
                <ScrambleText as="p" className="opacity-[65%]">
                  {experience.type}
                </ScrambleText>
              </div>
              <ScrambleText as="p" >
                {experience.description}
              </ScrambleText>
              {experience.tags &&
                <div className="flex gap-2 opacity-[65%]">
                  {experience.tags.map((tag, i) => (
                    <>
                      {i !== 0 && <span>•</span>}
                      <ScrambleText as="span" className="text-sm">{tag}</ScrambleText>
                    </>
                  ))}
                </div>
              }
            </div>
          ))}
        </div>
      </div>
    </Tab>
  );
};

export default ExperienceTab;
