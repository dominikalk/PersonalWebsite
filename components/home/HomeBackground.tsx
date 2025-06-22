import ScrambleText from "components/common/ScrambleText";
import { background_code } from "public/data/backgroundCode";

const HomeBackground = () => {
  return (
    <>
      <p className="absolute inset-0 overflow-hidden font-fasthand opacity-20 text-lg text-justify">
        {background_code.repeat(3)}
      </p>
      <div className="relative z-10 w-full h-screen flex justify-center items-center pb-20">
        <div>
          <ScrambleText
            as="h1"
            className="text-secondary text-center text-4xl mb-4 font-typewriter"
          >
            Hi! I&apos;m Dominik
          </ScrambleText>
          <ScrambleText
            as="h3"
            className="text-center text-2xl font-typewriter px-8"
          >
            I&apos;m a .NET developer based in the UK
          </ScrambleText>
        </div>
      </div>
    </>
  );
};

export default HomeBackground;
