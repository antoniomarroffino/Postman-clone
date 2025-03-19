import React from "react";
import Collection from "./Collection";
import { useCollection } from "../../hooks/useCollection";
import { RequestProvider } from "../../provider/RequestProvider";

const CollectionList: React.FC = () => {
  const { collections, isLoading, error } = useCollection();

  if (isLoading) {
    return <div>Caricamento...</div>;
  }

  if (error) {
    return <div>Errore nel caricamento delle collections.</div>;
  }

  //TODO: Assolutamente da sistemare!!

  return (
    <div className="flex flex-col gap-1.5">
      {collections && collections.length > 0 ? (
        collections.map((col) => (
          <RequestProvider key={col.id} collectionId={col.id}>
            <Collection key={col.id} id={col.id} name={col.name} />
          </RequestProvider>
        ))
      ) : (
        <div>Nessuna collection trovata</div>
      )}
    </div>
  );
};

export default CollectionList;
