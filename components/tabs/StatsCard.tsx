import React from "react";
import Card from "components/common/Card";
import StatRow from "components/home/StatRow";

type StatsCardProps = {
  onClose: () => void;
  className: string;
};

const StatsCard = ({ onClose, className }: StatsCardProps) => {
  return (
    <Card
      title="Statistics"
      onClose={onClose}
      className={`tab-animation ${className}`}
    >
      <StatRow
        title="Commits (Last Year)"
        value="1k"
        icon="/icons/commit.svg"
      />
      <StatRow
        title="Pull Requests Opened"
        value="532"
        icon="/icons/pull-request.svg"
      />
      <StatRow
        title="Itch.io Game Views"
        value="4k"
        icon="/icons/itch-io.svg"
      />
      <StatRow
        title="Itch.io Game Downloads"
        value="500"
        icon="/icons/download.svg"
        className="mb-0"
      />
    </Card>
  );
};

export default StatsCard;
