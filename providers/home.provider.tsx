import React, { SetStateAction, useContext, useState } from "react";

type HomeContextType = {
  isTextScrambled: boolean;
  setIsTextScrambled: React.Dispatch<SetStateAction<boolean>>;
};

/* eslint-disable */
export const HomeContext = React.createContext<HomeContextType>({
  isTextScrambled: false,
  setIsTextScrambled: () => {},
});

type HomeProviderProps = { children: React.ReactNode };

const HomeProvider = ({ children }: HomeProviderProps) => {
  const [isTextScrambled, setIsTextScrambled] = useState<boolean>(false);

  return (
    <HomeContext.Provider
      value={{
        isTextScrambled,
        setIsTextScrambled,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => useContext(HomeContext);

export default HomeProvider;
