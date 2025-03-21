import { createContext } from "react";
import RequestDTO from "../types/model/RequestDTO";

type RequestContextType = {
  requests: RequestDTO[];
  isLoading: boolean;
  error: unknown;
  refetch: () => void;
  deleteRequest: (idRequest: string) => void;
};

export const RequestContext = createContext<RequestContextType | undefined>(
  undefined
);
