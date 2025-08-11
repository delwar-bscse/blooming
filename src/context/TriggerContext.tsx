"use client";

// context/TriggerContext.js
import { createContext, useContext, useState } from 'react';

interface TriggerContextType {
  trigger: Record<string, boolean>;
  setTrigger: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

const TriggerContext = createContext<TriggerContextType>({
  trigger: {},
  setTrigger: () => {},
});

export const TriggerProvider = ({ children }: { children: React.ReactNode }) => {
  const [trigger, setTrigger] = useState<Record<string, boolean>>({
    userTrigger: false,
  });

  return (
    <TriggerContext.Provider value={{ trigger, setTrigger }}>
      {children}
    </TriggerContext.Provider>
  );
};

export const useTrigger = () => useContext(TriggerContext);
