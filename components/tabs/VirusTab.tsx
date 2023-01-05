import Tab from "components/common/Tab";
import { useHomeContext } from "components/home/home.provider";
import { useEffect } from "react";

type VirusTabProps = {
  onClose: () => void;
  className: string;
};

const VirusTab = ({ onClose, className }: VirusTabProps) => {
  const { isTextScrambled, setIsTextScrambled } = useHomeContext();
  useEffect(() => {
    setIsTextScrambled(!isTextScrambled);
  }, []);

  return (
    <Tab
      title="You have a virus!!!"
      scrambleTitle={false}
      onClose={onClose}
      className={`tab-animation ${className}`}
    >
      <p>
        Your computer has been locked and encrypted! To unlock it and get all
        your data back, hire Dominik. (Or find the antivirus software).
      </p>
    </Tab>
  );
};

export default VirusTab;
