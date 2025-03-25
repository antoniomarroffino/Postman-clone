import {useContext} from "react";
import {RequestCRUDContext} from "../../contexts/request/RequestCRUDContext.ts";

export const useRequestCRUD = () => {
    const context = useContext(RequestCRUDContext);
    if (context === undefined) {
        throw new Error('useRequestCRUD must be used within a RequestCRUDProvider');
    }
    return context;

}