import Tab from "components/common/Tab";

type ContactTabProps = {
  onClose: () => void;
  className: string;
};

const ContactTab = ({ onClose, className }: ContactTabProps) => {
  return (
    <Tab
      title="Contact Me"
      onClose={onClose}
      className={`tab-animation ${className}`}
    >
      <p className="text-2xl text-center my-20">Coming Soon ...</p>
    </Tab>
  );
};

export default ContactTab;
