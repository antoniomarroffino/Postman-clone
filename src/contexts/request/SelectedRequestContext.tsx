import RequestDTO from "../../types/model/RequestDTO.ts";
import {createContext} from "react";

export type SelectedRequestContextType = {
    selectedRequest: RequestDTO | null;
    setSelectedRequest: (request: RequestDTO | null) => void;
    deselectRequest: () => void;
}

export const SelectedRequestContext = createContext<SelectedRequestContextType | undefined>(undefined);