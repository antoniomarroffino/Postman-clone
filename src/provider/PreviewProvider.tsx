import React, { useState, useCallback, useMemo } from "react";
import { PreviewContext } from "../contexts/PreviewContext";
import { IPreviewStrategy } from "../components/home/previewStrategy/strategy/IPreviewStrategy";

export const PreviewProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [strategies, setStrategies] = useState<IPreviewStrategy[]>([]);

  const registerStrategy = useCallback((strategy: IPreviewStrategy) => {
    if (!strategy) return;
    setStrategies((prev) => {
      if (prev.includes(strategy)) return prev;
      return [...prev, strategy];
    });
  }, []);

  const value = useMemo(() => ({
    strategies,
    registerStrategy,
  }), [strategies, registerStrategy]);

  return (
      <PreviewContext.Provider value={value}>
        {children}
      </PreviewContext.Provider>
  );
};
