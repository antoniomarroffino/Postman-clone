import {createContext} from "react";
import {HttpState} from "../types/model/HttpState";
import {HttpActions} from "../types/model/HttpActions.ts";

type HttpContextType = {
    state: HttpState;
    actions: HttpActions;
};
export const HttpContext = createContext<HttpContextType | undefined>(undefined);