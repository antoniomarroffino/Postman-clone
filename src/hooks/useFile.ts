import {useContext} from "react";
import {FileContext} from "../contexts/FileContext.tsx";

export const useFile = () => {
    const context = useContext(FileContext);
    if (!context) {
        throw new Error("useFile deve essere utilizzato all'interno di un FileProvider");
    }
    return context;
}