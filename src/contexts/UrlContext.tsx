import {createContext} from "react";

type UrlContextType = {
    url: string;
};

export const UrlContext = createContext<UrlContextType | undefined>(undefined);
