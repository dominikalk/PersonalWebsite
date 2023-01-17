import Tab from "components/common/Tab";
import ToolTipIcon from "components/home/ToolTipIcon";

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
      <div className="flex justify-center py-14 gap-6">
        <ToolTipIcon
          icon="/icons/envelope-white.svg"
          label="Email"
          size="large"
        />
        <ToolTipIcon
          icon="/icons/linkedin-white.svg"
          label="LinkedIn"
          size="large"
        />
        <ToolTipIcon
          icon="/icons/github-white.svg"
          label="GitHub"
          size="large"
        />
        <ToolTipIcon
          icon="/icons/itch-io-white.svg"
          label="Itch.io"
          size="large"
        />
      </div>
    </Tab>
  );
};

export default ContactTab;
