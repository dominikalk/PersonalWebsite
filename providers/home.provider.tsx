import React, { SetStateAction, useContext, useState } from "react";

type Stats = {
  itchViews: number | undefined;
  itchDownloads: number | undefined;
};

const initStats = {
  itchViews: undefined,
  itchDownloads: undefined,
};

type HomeContextType = {
  isTextScrambled: boolean;
  setIsTextScrambled: React.Dispatch<SetStateAction<boolean>>;
  stats: Stats;
  setStats: React.Dispatch<SetStateAction<Stats>>;
};

/* eslint-disable */
export const HomeContext = React.createContext<HomeContextType>({
  isTextScrambled: false,
  setIsTextScrambled: () => {},
  stats: initStats,
  setStats: () => {},
});

type HomeProviderProps = { children: React.ReactNode };

const HomeProvider = ({ children }: HomeProviderProps) => {
  const [isTextScrambled, setIsTextScrambled] = useState<boolean>(false);
  const [stats, setStats] = useState<Stats>(initStats);

  return (
    <HomeContext.Provider
      value={{
        isTextScrambled,
        setIsTextScrambled,
        stats,
        setStats,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => useContext(HomeContext);

export default HomeProvider;
