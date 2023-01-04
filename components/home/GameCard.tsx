import LabeledIcon from "./LabeledIcon";

type GameCardProps = {
  title: string;
  image: string;
  play?: () => void;
  download?: () => void;
  github?: string;
  itch?: string;
  className?: string;
};

const GameCard = ({
  title,
  image,
  play,
  download,
  github,
  itch,
  className,
}: GameCardProps) => {
  return (
    <div className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={title}
        className="w-full aspect-[63/50] rounded-lg"
      />
      <div className="flex justify-center gap-3 mt-3">
        {!!play && (
          <LabeledIcon icon="/icons/play-white.svg" label="Play In Browser" />
        )}
        {!!download && (
          <LabeledIcon
            icon="/icons/download-white.svg"
            label="Download Standalone"
          />
        )}
        {github && (
          <a href={github} target="_blank">
            <LabeledIcon
              icon="/icons/github-white.svg"
              label="Github Repository"
            />
          </a>
        )}
        {itch && (
          <a href={itch} target="_blank">
            <LabeledIcon
              icon="/icons/itch-io-white.svg"
              label="Itch.io Game Link"
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default GameCard;
