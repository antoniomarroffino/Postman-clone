import { createContext } from "react";
import RequestCollection from "../types/model/RequestCollection";

export interface CollectionContextProps {
  collections: RequestCollection[] | undefined;
  isLoading: boolean;
  error: unknown;
  refetch: () => void;
}

export const CollectionsContext = createContext<
  CollectionContextProps | undefined
>(undefined);
