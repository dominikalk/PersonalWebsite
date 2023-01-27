import ScrambleText from "components/common/ScrambleText";
import Image from "next/image";

type PointerPromptProps = {};

const PointerPrompt = ({}: PointerPromptProps) => {
  return (
    <>
      <Image
        src="icons/pointer-white.svg"
        alt="pointer icon"
        className="w-20 h-20 mb-6 pulse-pointer"
        width={80}
        height={80}
      />
      <ScrambleText className="text-xl">Select a Skill</ScrambleText>
    </>
  );
};

export default PointerPrompt;
