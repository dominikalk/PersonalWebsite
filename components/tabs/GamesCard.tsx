import React from "react";
import Card from "components/common/Card";

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
      <p className="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad facilis
        totam laudantium inventore velit. Qui, minus? Et, labore, necessitatibus
        quod debitis repudiandae quos veritatis dolores qui nostrum illum
        aperiam quas suscipit molestiae, tempora quae at facere? Asperiores eum
        quas dolore ipsum suscipit delectus, vitae sint, doloribus aspernatur
        quod, magnam quo! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ad facilis totam laudantium inventore velit. Qui, minus? Et,
        labore, necessitatibus quod debitis repudiandae quos veritatis dolores
        qui nostrum illum aperiam quas suscipit molestiae, tempora quae at
        facere? Asperiores eum quas dolore ipsum suscipit delectus, vitae sint,
        doloribus aspernatur quod, magnam quo!
      </p>
    </Card>
  );
};

export default GamesCard;
