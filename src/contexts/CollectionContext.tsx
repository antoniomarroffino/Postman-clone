import { createContext } from "react";
import RequestCollection from "../types/model/RequestCollection";

export interface CollectionContextProps {
  collections: RequestCollection[];
  isLoading: boolean;
  error: unknown;
  refetch: () => void;
}

export const CollectionsContext = createContext<
  CollectionContextProps | undefined
>(undefined);
