import Tab from "components/common/Tab";
import { useHomeContext } from "providers/home.provider";

type VirusTabProps = {
  onClose: () => void;
  className: string;
};

const VirusTab = ({ onClose, className }: VirusTabProps) => {
  const { isTextScrambled } = useHomeContext();

  return (
    <Tab
      title={isTextScrambled ? "You have a virus!!!" : "You found the it!!!"}
      scrambleTitle={false}
      onClose={onClose}
      className={`tab-animation ${className}`}
    >
      <p>
        {isTextScrambled
          ? "Your computer has been locked and encrypted! To unlock it and get all your data back, hire Dominik. (Or find the antivirus software)."
          : "All of the data on your computer has been decrypted."}
      </p>
    </Tab>
  );
};

export default VirusTab;
