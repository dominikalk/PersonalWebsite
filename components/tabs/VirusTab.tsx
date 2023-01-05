import Tab from "components/common/Tab";

type VirusTabProps = {
  onClose: () => void;
  className: string;
};

const VirusTab = ({ onClose, className }: VirusTabProps) => {
  return (
    <Tab
      title="You have a virus!!!"
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
