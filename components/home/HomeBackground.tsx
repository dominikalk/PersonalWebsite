import { background_code } from "public/data/backgroundCode";

const HomeBackground = () => {
  const backgroundCode = background_code.repeat(3).split(" ");

  return (
    <>
      <p className="absolute inset-0 overflow-hidden font-fasthand text-white opacity-20 text-lg text-justify">
        {background_code}
        {background_code}
        {background_code}
      </p>
      {/* <div className="absolute inset-0 overflow-hidden font-fasthand text-lg text-justify">
        {backgroundCode.map((word: string, i: number) => (
          <>
            <span
              key={word + i}
              className="text-white opacity-20 hover:text-secondary hover:opacity-100"
            >
              {word}
            </span>{" "}
          </>
        ))}
      </div> */}
      <div className="relative z-10 w-full h-screen flex justify-center items-center">
        <div>
          <h1 className="text-primary text-center text-4xl mb-4 font-typewriter">
            Hi! I&apos;m Dominik
          </h1>
          <h3 className="text-white text-center text-2xl font-typewriter px-8">
            I&apos;m a React and React native developer based in the UK
          </h3>
        </div>
      </div>
    </>
  );
};

export default HomeBackground;
