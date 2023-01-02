type NavbarProps = {
  children: React.ReactNode;
};

const Navbar = ({ children }: NavbarProps) => {
  return (
    <div className="fixed bottom-0 mb-4 min-w-[40px] h-16 rounded-2xl p-2.5 bg-white bg-opacity-20 gap-x-4 flex">
      {children}
    </div>
  );
};

export default Navbar;
