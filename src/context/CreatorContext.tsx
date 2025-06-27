/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// context/CreatorContext.js
import { createContext, useContext, useState } from 'react';

interface CreatorContextType {
  creatorForm: Record<string, any>;
  setCreatorForm: React.Dispatch<React.SetStateAction<Record<string, any>>>;
}

const CreatorContext = createContext<CreatorContextType>({
  creatorForm: {},
  setCreatorForm: () => {},
});

export const CreatorProvider = ({ children }: { children: React.ReactNode }) => {
  const [creatorForm, setCreatorForm] = useState({});

  return (
    <CreatorContext.Provider value={{ creatorForm, setCreatorForm }}>
      {children}
    </CreatorContext.Provider>
  );
};

export const useCreator = () => useContext(CreatorContext);
