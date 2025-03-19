import { useContext } from "react";
import { CollectionsContext } from "../contexts/CollectionContext";

export const useCollection = () => {
    const context = useContext(CollectionsContext);
    if (!context) {
      throw new Error("useCollection deve essere utilizzato all'interno di un CollectionProvider");
    }
    return context;
}