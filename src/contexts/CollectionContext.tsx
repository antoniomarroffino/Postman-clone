import {createContext} from "react";
import RequestCollection from "../types/model/RequestCollection";

type CollectionContextType = {
    collections: RequestCollection[];
    isLoading: boolean;
    error: unknown;
    refetch: () => void;
    addNewCollection: (newCollection: RequestCollection) => void;
};

export const CollectionsContext = createContext<
    CollectionContextType | undefined
>(undefined);
