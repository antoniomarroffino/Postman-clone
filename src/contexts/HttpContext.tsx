import {createContext} from "react";
import {HttpState} from "../types/model/HttpState";

type HttpContextType = {
    state: HttpState;
    actions: {
        setMethod: (method: string) => void;
        setUri: (uri: string) => void;
        setHeader: (key: string, value: string) => void;
        removeHeader: (key: string) => void;
        setBody: (body: string) => void;
        sendRequest: () => Promise<void>;
    };
};

export const HttpContext = createContext<HttpContextType | undefined>(undefined);