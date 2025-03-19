import { useContext } from "react";
import { RequestContext } from "../contexts/RequestContext";

export const useRequest = () => {
    const context = useContext(RequestContext);
    if (!context) {
      throw new Error("useRequest deve essere utilizzato all'interno di un RequestProvider");
    }
    return context;
}