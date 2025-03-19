import { useContext } from "react";
import { CollectionsContext } from "../contexts/CollectionsContext";

export const useCollections = () => {
    const context = useContext(CollectionsContext);
    if (!context) {
      throw new Error("useCollections deve essere utilizzato all'interno di un CollectionsProvider");
    }
    return context;
}