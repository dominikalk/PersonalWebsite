import Tab from "components/common/Tab";
import StatRow from "components/home/StatRow";

type StatsTabProps = {
  onClose: () => void;
  className: string;
};

const StatsTab = ({ onClose, className }: StatsTabProps) => {
  return (
    <Tab
      title="Statistics"
      onClose={onClose}
      className={`tab-animation ${className}`}
    >
      <StatRow
        title="Commits (Last Year)"
        value="1k"
        icon="/icons/commit-white.svg"
      />
      <StatRow
        title="Pull Requests Opened"
        value="532"
        icon="/icons/pull-request-white.svg"
      />
      <StatRow
        title="Itch.io Game Views"
        value="4k"
        icon="/icons/itch-io-white.svg"
      />
      <StatRow
        title="Itch.io Game Downloads"
        value="500"
        icon="/icons/download-white.svg"
        className="mb-0"
      />
    </Tab>
  );
};

export default StatsTab;
