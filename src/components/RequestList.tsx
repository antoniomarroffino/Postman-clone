import { useRequest } from "../hooks/useRequest";
import Request from "./Request";

const RequestList: React.FC = () => {
  const { requests, isLoading, error } = useRequest();

  if (isLoading) {
    return <div>Caricamento...</div>;
  }

  if (error) {
    return <div>Errore nel caricamento delle requests.</div>;
  }

  return (
    <div className="flex flex-col gap-4 p-2">
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
        <div>Nessuna request trovata</div>
      )}
    </div>
  );
};

export default RequestList;
