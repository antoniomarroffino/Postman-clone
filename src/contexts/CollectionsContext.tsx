import { createContext } from "react";
import RequestsCollection from "../types/model/RequestsCollection";

export interface CollectionsContextProps {
  collections: RequestsCollection[] | undefined;
  isLoading: boolean;
  error: unknown;
  refetch: () => void;
}

export const CollectionsContext = createContext<
  CollectionsContextProps | undefined
>(undefined);
