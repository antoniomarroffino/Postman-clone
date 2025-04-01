import {useContext} from "react";
import {UrlContext} from "../contexts/UrlContext.tsx";

export const useUrl = () => {
    const context = useContext(UrlContext);
    if (!context) {
        throw new Error("useUrl deve essere utilizzato all'interno di un UrlProvider");
    }
    return context;
}