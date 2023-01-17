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
        <a
          href="mailto:dominik.alk@hotmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <ToolTipIcon
            icon="/icons/envelope-white.svg"
            label="Email"
            size="large"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/dominik-alkhovik-052897243/"
          target="_blank"
          rel="noreferrer"
        >
          <ToolTipIcon
            icon="/icons/linkedin-white.svg"
            label="LinkedIn"
            size="large"
          />
        </a>
        <a
          href="https://github.com/dominikalk"
          target="_blank"
          rel="noreferrer"
        >
          <ToolTipIcon
            icon="/icons/github-white.svg"
            label="GitHub"
            size="large"
          />
        </a>
        <a href="https://dominikalk.itch.io" target="_blank" rel="noreferrer">
          <ToolTipIcon
            icon="/icons/itch-io-white.svg"
            label="Itch.io"
            size="large"
          />
        </a>
      </div>
    </Tab>
  );
};

export default ContactTab;
