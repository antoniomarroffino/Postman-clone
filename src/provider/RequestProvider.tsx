import { useCallback, useEffect, useState } from "react";
import { RequestContext } from "../contexts/RequestContext";
import RequestDTO from "../types/model/RequestDTO";
import { apiKey } from "../config/config";

interface RequestProviderProps {
  collectionId: number;
  children: React.ReactNode;
}

export const RequestProvider: React.FC<RequestProviderProps> = ({
  collectionId,
  children,
}) => {
  const [requests, setRequests] = useState<RequestDTO[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  const fetchRequest = useCallback(async () => {
    if (!collectionId) return;
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://supsi-ticket.cloudns.org/supsi-http-client/bff/collections/${collectionId}/requests?apiKey=${apiKey}`
      );
      if (!response.ok) throw new Error("Errore nel recupero delle Requests");
      const data = await response.json();
      setRequests(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRequest();
  }, []);

  const value = { requests, isLoading, error, refetch: fetchRequest };

  return (
    <RequestContext.Provider value={value}>{children}</RequestContext.Provider>
  );
};
