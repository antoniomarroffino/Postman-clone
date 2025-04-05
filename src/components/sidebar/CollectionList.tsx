import React from "react";
import Collection from "./Collection";
import {useCollection} from "../../hooks/useCollection";

interface CollectionListProps {
    searchQuery: string;
}

const CollectionList: React.FC<CollectionListProps> = ({searchQuery}) => {
    const {collections, isLoading, error} = useCollection();

    if (isLoading) {
        return <div>Caricamento...</div>;
    }

    if (error) {
        return <div>Errore nel caricamento delle collections.</div>;
    }

    return (
        <div className="flex flex-col gap-1.5">
            {collections && collections.length > 0 ? (
                collections.filter(col =>
                    col.name.toLowerCase().includes(searchQuery.toLowerCase())).map((col) => (
                    <Collection key={col.id} id={col.id} name={col.name}/>
                ))
            ) : (
                <div>Nessuna collection trovata</div>
            )}
        </div>
    );
};

export default CollectionList;
