import { useState } from "react";
import { PreviewContext } from "../contexts/PreviewContext";
import { IPreviewStrategy } from "../components/home/previewStrategy/strategy/IPreviewStrategy";

export const PreviewProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [strategies, setStrategies] = useState<IPreviewStrategy[]>([]);

  const registerStrategy = (strategy: IPreviewStrategy) => {
    if (!strategy) return;
    setStrategies((prev) => [...prev, strategy]);
  };

  const value = {
    strategies,
    registerStrategy,
  };

  return (
    <PreviewContext.Provider value={value}>{children}</PreviewContext.Provider>
  );
};
