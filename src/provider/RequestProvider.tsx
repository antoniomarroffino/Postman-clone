import React, { useCallback, useEffect, useState } from "react";
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
  const [requests, setRequests] = useState<RequestDTO[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  const fetchRequest = useCallback(async () => {
    if (!collectionId) return;
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_BASE_URL
        }/bff/collections/${collectionId}/requests?apiKey=${apiKey}`
      );
      if (!response.ok) throw new Error("Errore nel recupero delle Requests");
      const data = await response.json();
      setRequests(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [collectionId]);

  const deleteRequest = async (idRequest: string) => {
    if (!idRequest) return;
    setError(null);
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_BASE_URL
        }/bff/requests/${idRequest}?apiKey=${apiKey}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) throw new Error("Errore nella delete della Request");
      setRequests((prev) => prev.filter((req) => req.id !== idRequest));
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, [fetchRequest]);

  const value = {
    requests,
    isLoading,
    error,
    refetch: fetchRequest,
    deleteRequest,
  };

  return (
    <RequestContext.Provider value={value}>{children}</RequestContext.Provider>
  );
};
