import { createContext } from "react";
import RequestDTO from "../types/model/RequestDTO";

export interface RequestContextProps {
  requests: RequestDTO[];
  isLoading: boolean;
  error: unknown;
  refetch: () => void;
  deleteRequest: (idRequest: string) => void;
}

export const RequestContext = createContext<RequestContextProps | undefined>(
  undefined
);
