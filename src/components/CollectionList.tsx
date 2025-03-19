import React from "react";
import Collection from "./Collection";
import { useCollections } from "../hooks/useCollections";

const CollectionList: React.FC = () => {
  const { collections, isLoading, error } = useCollections();

  if (isLoading) {
    return <div>Caricamento...</div>;
  }

  if (error) {
    return <div>Errore nel caricamento delle collections.</div>;
  }

  return (
    <div className="flex flex-col gap-4 p-2">
      {collections && collections.length > 0 ? (
        collections.map((col) => <Collection key={col.id} name={col.name} />)
      ) : (
        <div>Nessuna collection trovata</div>
      )}
    </div>
  );
};

export default CollectionList;
