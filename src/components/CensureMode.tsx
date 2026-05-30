"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface CensureContextType {
  active: boolean;
  toggle: () => void;
  setActive: (v: boolean) => void;
}

const CensureContext = createContext<CensureContextType>({
  active: false,
  toggle: () => {},
  setActive: () => {},
});

export function CensureProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("censure-mode", active);
  }, [active]);

  return (
    <CensureContext.Provider value={{ active, toggle: () => setActive((p) => !p), setActive }}>
      {active && (
        <>
          <div className="noise-overlay" />
          <div className="censure-overlay fixed inset-0 pointer-events-none z-[9998]" />
        </>
      )}
      {children}
    </CensureContext.Provider>
  );
}

export const useCensure = () => useContext(CensureContext);
