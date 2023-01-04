import React from "react";
import Card from "components/common/Card";
import GameCard from "components/home/GameCard";

type GamesCardProps = {
  onClose: () => void;
  className: string;
};

const GamesCard = ({ onClose, className }: GamesCardProps) => {
  return (
    <Card
      title="Games"
      onClose={onClose}
      className={`tab-animation ${className}`}
    >
      <div className="flex gap-4 flex-col min-[525px]:flex-row">
        <GameCard
          title="EvoSim"
          image="https://img.itch.zone/aW1nLzMxOTk2OTIucG5n/315x250%23c/fLN0ip.png"
          download={() => {}}
          github="https://github.com/dominikalk/EvolutionSim"
          itch="https://dominikalk.itch.io/evosim"
          className="min-[525px]:w-1/2"
        />
        <GameCard
          title="Pack Yak Bandit"
          image="https://img.itch.zone/aW1nLzMzNzk4MjcucG5n/315x250%23c/zEXlqN.png"
          play={() => {}}
          download={() => {}}
          github="https://github.com/dominikalk/PackYakBandit"
          itch="https://dominikalk.itch.io/pack-yak-bandit"
          className="min-[525px]:w-1/2"
        />
      </div>
    </Card>
  );
};

export default GamesCard;
