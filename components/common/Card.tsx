type CardProps = {
  title?: string;
  text?: string;
  children?: React.ReactNode;
  className: string;
};

const Card = ({ title, text, children, className }: CardProps) => {
  const buttonColours = ["mac-red", "mac-yellow", "mac-green"];

  return (
    <div className={`bg-dark2 p-4 rounded-md ${className}`}>
      <div className="flex -mt-1 mb-2">
        <div className={`rounded-full w-2 h-2 mr-1 bg-mac-red`} />
        <div className={`rounded-full w-2 h-2 mr-1 bg-mac-yellow`} />
        <div className={`rounded-full w-2 h-2 mr-1 bg-mac-green`} />
      </div>
      {title && <h2 className="text-white mb-1">{title}</h2>}
      {text && <p className="text-white text-sm">{text}</p>}
      {children && children}
    </div>
  );
};

export default Card;
