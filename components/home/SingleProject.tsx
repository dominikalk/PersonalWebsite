import { Project } from "public/data/projects";
import Image from "next/image";
import ScrambleText from "components/common/ScrambleText";

type SingleProjectProps = {
  project: Project;
  closeCurrentProject: () => void;
};

const SingleProject = ({
  project,
  closeCurrentProject,
}: SingleProjectProps) => {
  return (
    <div className="relative">
      <div 
        className="w-8 h-8 cursor-pointer rounded absolute z-10 bg-white flex justify-center items-center top-2 left-2" 
        onClick={closeCurrentProject}
      >
        <Image
          src="/icons/angle-left.svg"
          alt="Back"
          className="w-6 h-6"
          width={32}
          height={32}
        />
      </div>
      <div className="flex flex-col xs:flex-row gap-8">
        <div className="w-full xs:w-1/3 relative">
          <Image
            src={project.image}
            alt="project thumbnail"
            className="rounded-lg w-full bg-white"
            width={400}
            height={400}
          />
          <div className="mt-6 text-center">
            {project.links?.map((link, i) => (
              <>
                {i !== 0 && <span className="mx-1"> • </span>}
                <ScrambleText as="span">
                  <a href={link.url} target="_blank" className="text-lg inline-block">
                    {link.title}
                  </a>
                </ScrambleText>
              </>
            ))}
          </div>
        </div>
        <div className="xs:w-2/3 flex flex-col gap-y-2">
          <ScrambleText as="h1" className="text-2xl mb-2">
            {project.title}
          </ScrambleText>
          {project.description.map(paragraph =>
            <ScrambleText as="p" className="text-lg">
              {paragraph}
            </ScrambleText>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
