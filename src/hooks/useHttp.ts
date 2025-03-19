import {useContext} from "react";
import {HttpContext} from "../contexts/HttpContext"

export const useHttp = () => {
    const context = useContext(HttpContext);
    if (!context) throw new Error("useHttp must be used within HttpProvider");
    return context;
};