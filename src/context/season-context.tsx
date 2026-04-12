import React, { createContext, useContext, useState, useCallback } from 'react';

export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

interface SeasonContextType {
  season: Season;
  setSeason: (s: Season) => void;
}

const SeasonContext = createContext<SeasonContextType>({
  season: 'autumn',
  setSeason: () => {},
});

export const useSeason = () => useContext(SeasonContext);

export const seasonEmoji: Record<Season, string> = {
  spring: '🌸',
  summer: '☀️',
  autumn: '🍂',
  winter: '❄️',
};

export const seasonLabels: Record<Season, string> = {
  spring: 'Spring',
  summer: 'Summer',
  autumn: 'Autumn',
  winter: 'Winter',
};

export const SeasonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [season, setSeasonState] = useState<Season>('autumn');

  const setSeason = useCallback((s: Season) => {
    setSeasonState(s);
  }, []);

  return (
    <SeasonContext.Provider value={{ season, setSeason }}>
      {children}
    </SeasonContext.Provider>
  );
};
