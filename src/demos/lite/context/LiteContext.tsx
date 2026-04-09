import React, { createContext, useContext, useState } from 'react';
import { liteConfigs, SchoolConfig } from '../config/schoolConfig';

type LiteView = 'general' | 'kinder';

interface LiteContextType {
  view: LiteView;
  setView: (view: LiteView) => void;
  isKinder: boolean;
  config: SchoolConfig;
}

const LiteContext = createContext<LiteContextType | undefined>(undefined);

export const LiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [view, setView] = useState<LiteView>('general');

  return (
    <LiteContext.Provider value={{ view, setView, isKinder: view === 'kinder', config: liteConfigs[view] }}>
      {children}
    </LiteContext.Provider>
  );
};

export const useLite = () => {
  const context = useContext(LiteContext);
  if (!context) throw new Error('useLite must be used within a LiteProvider');
  return context;
};