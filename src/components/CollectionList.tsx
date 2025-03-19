import React from "react";
import Collection from "./Collection";
import { useCollection } from "../hooks/useCollection";

const CollectionList: React.FC = () => {
  const { collections, isLoading, error } = useCollection();

  if (isLoading) {
    return <div>Caricamento...</div>;
  }

  if (error) {
    return <div>Errore nel caricamento delle collections.</div>;
  }

  return (
    <div className="flex flex-col gap-4 p-2">
      {collections && collections.length > 0 ? (
        collections.map((col) => (
          <Collection key={col.id} id={col.id} name={col.name} />
        ))
      ) : (
        <div>Nessuna collection trovata</div>
      )}
    </div>
  );
};

export default CollectionList;
