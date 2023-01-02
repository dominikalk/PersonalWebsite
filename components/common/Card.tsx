type CardProps = {
  title?: string;
  text?: string;
  children?: React.ReactNode;
  onClose: () => void;
  className: string;
};

const Card = ({ title, text, children, onClose, className }: CardProps) => {
  return (
    <div
      className={`bg-white bg-opacity-10 rounded-lg backdrop-blur-md max-h-[80%] max-w-[90%] overflow-scroll ${className}`}
    >
      <div className="flex items-center p-4 pb-3 sticky top-0 backdrop-brightness-125 backdrop-blur-lg">
        <div className="flex group">
          <div
            className={`rounded-full w-3 h-3 mr-2 bg-mac-red flex justify-center items-center`}
            onClick={onClose}
          >
            <img
              src="/icons/x.svg"
              alt="cross"
              className="w-2.5 h-2.5 hidden group-hover:block"
            />
          </div>
          <div className={`rounded-full w-3 h-3 mr-2 bg-mac-yellow`} />
          <div className={`rounded-full w-3 h-3 bg-mac-green`} />
        </div>
        {title && <h2 className="text-2xl text-white ml-4">{title}</h2>}
      </div>
      <div className="p-4">
        {text && <p className="text-white">{text}</p>}
        {children && children}
      </div>
    </div>
  );
};

export default Card;
