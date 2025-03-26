import {useContext} from "react";
import {PreviewContext} from "../contexts/PreviewContext";

export const usePreview = () => {
    const context = useContext(PreviewContext);
    if (!context) {
        throw new Error("usePreview deve essere utilizzato all'interno di un PreviewProvider");
    }
    return context;
}