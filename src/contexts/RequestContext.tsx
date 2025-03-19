import { createContext } from "react";
import RequestDTO from "../types/model/RequestDTO";

export interface RequestContextProps {
  requests: RequestDTO[] | undefined;
  isLoading: boolean;
  error: unknown;
  refetch: () => void;
}

export const RequestContext = createContext<RequestContextProps | undefined>(
  undefined
);
