import Tab from "components/common/Tab";
import StatRow from "components/home/StatRow";
import { useHomeContext } from "providers/home.provider";

type StatsTabProps = {
  onClose: () => void;
  className: string;
};

const StatsTab = ({ onClose, className }: StatsTabProps) => {
  const { stats } = useHomeContext();

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
      {stats.itchViews && (
        <StatRow
          title="Itch.io Game Views"
          value={stats.itchViews.toString()}
          icon="/icons/itch-io-white.svg"
        />
      )}
      {stats.itchDownloads && (
        <StatRow
          title="Itch.io Game Downloads"
          value={stats.itchDownloads.toString()}
          icon="/icons/download-white.svg"
          className="mb-0"
        />
      )}
    </Tab>
  );
};

export default StatsTab;
