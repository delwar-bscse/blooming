/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// context/BrandContext.js
import { createContext, useContext, useState } from 'react';

interface BrandContextType {
  brandForm: Record<string, any>;
  setBrandForm: React.Dispatch<React.SetStateAction<Record<string, any>>>;
}

const BrandContext = createContext<BrandContextType>({
  brandForm: {},
  setBrandForm: () => {},
});

export const BrandProvider = ({ children }: { children: React.ReactNode }) => {
  const [brandForm, setBrandForm] = useState({});

  return (
    <BrandContext.Provider value={{ brandForm, setBrandForm }}>
      {children}
    </BrandContext.Provider>
  );
};

export const useBrand = () => useContext(BrandContext);
