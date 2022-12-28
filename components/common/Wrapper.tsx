type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className={`max-w-[960px] mx-auto px-4 ${className}`}>{children}</div>
  );
};

export default Wrapper;
