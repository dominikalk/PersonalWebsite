import { useHomeContext } from "providers/home.provider";
import { scrambleText } from "helpers/scrambleText";
import { ElementType } from "react";

type ScrambleTextProps = {
  children: string;
  as?: ElementType;
  scramble?: boolean;
  className?: string;
};

const ScrambleText = ({
  children,
  as = "p",
  scramble,
  className,
}: ScrambleTextProps) => {
  const Element = as;

  const { isTextScrambled } = useHomeContext();

  return (
    <Element className={className}>
      {scrambleText(
        children,
        scramble === undefined ? isTextScrambled : scramble
      )}
    </Element>
  );
};

export default ScrambleText;
