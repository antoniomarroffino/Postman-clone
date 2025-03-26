import {createContext} from "react";
import {IPreviewStrategy} from "../components/home/previewStrategy/strategy/IPreviewStrategy";

type PreviewContextType = {
    strategies: IPreviewStrategy[];
    registerStrategy: (strategy: IPreviewStrategy) => void;
};

export const PreviewContext = createContext<PreviewContextType | undefined>(
    undefined
);
