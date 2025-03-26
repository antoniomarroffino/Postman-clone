import {SelectedRequestContext} from "../../contexts/request/SelectedRequestContext.tsx";
import React, {useState} from "react";
import RequestDTO from "../../types/model/RequestDTO.ts";

export const SelectedRequestProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [selectedRequest, setSelectedRequest] = useState<RequestDTO | null>(null);

    const value = {
        selectedRequest,
        setSelectedRequest,
        deselectRequest: () => setSelectedRequest(null),
    }

    return (
        <SelectedRequestContext.Provider value={value}>
            {children}
        </SelectedRequestContext.Provider>
    );
};