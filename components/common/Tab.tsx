import ScrambleText from "components/common/ScrambleText";
import Image from "next/image";
import { isDesktop } from "react-device-detect";

type TabProps = {
  title: string;
  onClose: () => void;
  children?: React.ReactNode;
  scrambleTitle?: boolean;
  className?: string;
};

const Tab = ({
  title,
  onClose,
  children,
  scrambleTitle,
  className,
}: TabProps) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`bg-white bg-opacity-10 rounded-lg backdrop-blur-md max-h-[80%] max-w-[90%] overflow-scroll z-20 mb-20 ${className}`}
    >
      <div className="flex items-center p-4 pb-3 sticky top-0 bg-[#414141] z-30">
        <div className="flex group">
          <div
            className="flex items-center justify-center w-5 h-5 -m-1 mr-1 cursor-pointer"
            onClick={onClose}
          >
            <div
              className={`rounded-full w-3 h-3 bg-mac-red flex justify-center items-center`}
            >
              <Image
                src="/icons/x.svg"
                alt="cross"
                className={`w-2.5 h-2.5 md:hidden ${
                  isDesktop ? "group-hover:block" : ""
                }`}
                width={10}
                height={10}
              />
            </div>
          </div>
          <div className={`rounded-full w-3 h-3 mr-2 bg-mac-yellow`} />
          <div className={`rounded-full w-3 h-3 bg-mac-green`} />
        </div>
        {title && (
          <ScrambleText
            scramble={scrambleTitle}
            as="h2"
            className="text-2xl ml-4"
          >
            {title}
          </ScrambleText>
        )}
      </div>
      <div className="p-4">{children && children}</div>
    </div>
  );
};

export default Tab;
