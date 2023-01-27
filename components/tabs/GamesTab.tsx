import Tab from "components/common/Tab";
import GameTab from "components/home/GameCard";

type GamesTabProps = {
  onClose: () => void;
  className: string;
};

const GamesTab = ({ onClose, className }: GamesTabProps) => {
  return (
    <Tab
      title="Games"
      onClose={onClose}
      className={`tab-animation ${className}`}
    >
      <div className="flex gap-4 flex-col min-[525px]:flex-row">
        <GameTab
          title="EvoSim"
          image="https://img.itch.zone/aW1nLzMxOTk2OTIucG5n/315x250%23c/fLN0ip.png"
          github="https://github.com/dominikalk/EvolutionSim"
          itch="https://dominikalk.itch.io/evosim"
          className="min-[525px]:w-1/2"
        />
        <GameTab
          title="Pack Yak Bandit"
          image="https://img.itch.zone/aW1nLzMzNzk4MjcucG5n/315x250%23c/zEXlqN.png"
          github="https://github.com/dominikalk/PackYakBandit"
          itch="https://dominikalk.itch.io/pack-yak-bandit"
          className="min-[525px]:w-1/2"
        />
      </div>
    </Tab>
  );
};

export default GamesTab;
