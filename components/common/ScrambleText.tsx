import { useHomeContext } from "providers/home.provider";
import { scrambleText } from "helpers/scrambleText";
import { CSSProperties, ElementType } from "react";

type ScrambleTextProps = {
  children: string;
  as?: ElementType;
  scramble?: boolean;
  className?: string;
  style?: CSSProperties | undefined;
};

const ScrambleText = ({
  children,
  as = "p",
  scramble,
  className,
  style,
}: ScrambleTextProps) => {
  const Element = as;

  const { isTextScrambled } = useHomeContext();

  return (
    <Element className={className} style={style}>
      {scrambleText(
        children,
        scramble === undefined ? isTextScrambled : scramble
      )}
    </Element>
  );
};

export default ScrambleText;
