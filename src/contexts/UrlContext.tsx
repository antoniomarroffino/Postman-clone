import {createContext} from "react";

type UrlContextType = {};

export const UrlContext = createContext<UrlContextType | undefined>(undefined);
