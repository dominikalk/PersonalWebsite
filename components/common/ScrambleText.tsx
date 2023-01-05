import { scrambleText } from "helpers/scrambleText";
import { ElementType } from "react";

type ScrambleTextProps = {
  children: string;
  as?: ElementType;
  className?: string;
};

const ScrambleText = ({ children, as = "p", className }: ScrambleTextProps) => {
  const Element = as;

  return (
    <Element className={className}>{scrambleText(children, false)}</Element>
  );
};

export default ScrambleText;
