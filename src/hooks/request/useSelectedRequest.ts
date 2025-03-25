import {useContext} from "react";
import {SelectedRequestContext} from "../../contexts/request/SelectedRequestContext.tsx";

export const useSelectedRequest = () => {
    const context = useContext(SelectedRequestContext);
    if (!context) {
        throw new Error('useSelectedRequest must be used within a SelectedRequestProvider');
    }
    return context;
};