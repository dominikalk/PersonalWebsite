import { useHomeContext } from "providers/home.provider";
import { scrambleText } from "helpers/scrambleText";
import { cloneElement, CSSProperties, ElementType, ReactElement, useMemo } from "react";

type Children = string | ReactElement | (string | ReactElement)[]

type ScrambleTextProps = {
  children: Children;
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

  const { isTextScrambled: isTextScrambledGlobal } = useHomeContext();

  const isTextScrambled: boolean = useMemo(() =>
    scramble === undefined ? isTextScrambledGlobal : scramble,
    [isTextScrambledGlobal, scramble])

  const scrambleChild = (child: string | ReactElement): string | ReactElement => {
    if (typeof child === 'string') {
      return scrambleText(child, true);
    }

    return cloneElement(child, {}, scrambleText(child.props.children, true))
  }

  const scrambleChildren = (children: Children): Children => {
    if (children instanceof Array) {
      return children.map(scrambleChild);
    }

    return scrambleChild(children);
  }

  return (
    <Element className={className} style={style}>
      {isTextScrambled ? scrambleChildren(children) : children}
    </Element>
  );
};

export default ScrambleText;
