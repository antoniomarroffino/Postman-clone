import { useRequest } from "../../hooks/useRequest";
import Request from "./Request";
import { FaExclamationTriangle } from "react-icons/fa";
import React from "react";

const RequestList: React.FC = () => {
  const { requests, isLoading, error } = useRequest();

  if (isLoading) {
    return (
      <div className="space-y-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="skeleton h-16 rounded-box bg-base-200"></div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-error shadow-lg">
        <FaExclamationTriangle className="text-xl" />
        <span>Errore nel caricamento delle requests!</span>
      </div>
    );
  }

  return (
    <div className="space-y-3 px-1">
      {requests && requests.length > 0 ? (
        requests.map((req) => (
          <Request
            key={req.id}
            id={req.id}
            name={req.name}
            uri={req.uri}
            method={req.method}
            headers={req.headers}
            body={req.body}
            collectionId={req.collectionId}
          />
        ))
      ) : (
        <div className="text-center p-6 text-base-content/60 font-medium">
          ✨ Nessuna request trovata
        </div>
      )}
    </div>
  );
};

export default RequestList;
