import { Skill } from "components/tabs/SkillsTab";
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
  selectedSkill: Skill | undefined;
  setSelectedSkill: React.Dispatch<SetStateAction<Skill | undefined>>;
};

/* eslint-disable */
export const HomeContext = React.createContext<HomeContextType>({
  isTextScrambled: false,
  setIsTextScrambled: () => {},
  stats: initStats,
  setStats: () => {},
  selectedSkill: undefined,
  setSelectedSkill: () => {},
});

type HomeProviderProps = { children: React.ReactNode };

const HomeProvider = ({ children }: HomeProviderProps) => {
  const [isTextScrambled, setIsTextScrambled] = useState<boolean>(false);
  const [stats, setStats] = useState<Stats>(initStats);
  const [selectedSkill, setSelectedSkill] = useState<Skill | undefined>(
    undefined
  );

  return (
    <HomeContext.Provider
      value={{
        isTextScrambled,
        setIsTextScrambled,
        stats,
        setStats,
        selectedSkill,
        setSelectedSkill,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => useContext(HomeContext);

export default HomeProvider;
