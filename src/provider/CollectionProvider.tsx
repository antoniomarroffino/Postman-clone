import RequestCollection from "../types/model/RequestCollection";
import {CollectionsContext} from "../contexts/CollectionContext";
import React, {useCallback, useEffect, useState} from "react";
import {useUrl} from "../hooks/useUrl.ts";

export const CollectionsProvider: React.FC<{ children: React.ReactNode }> = ({
                                                                                 children,
                                                                             }) => {
    const [collections, setCollections] = useState<RequestCollection[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown>(null);
    const {url} = useUrl();

    const fetchCollections = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                `${url}/bff/collections`
            );
            if (!response.ok)
                throw new Error("Errore nel recupero delle collections");
            const data = await response.json();
            setCollections(data);
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const addNewCollection = async (newCollection: RequestCollection) => {
        if (!newCollection) throw new Error("Collection is null");

        setCollections((prev) => [...prev, newCollection]);
    };

    const isCollectionIdUnique = (collectionId: number): boolean => {
        return collections.filter((col) => col.id === collectionId).length === 0;
    };

    useEffect(() => {
        fetchCollections();
    }, [fetchCollections]);

    const value = {
        collections,
        isLoading,
        error,
        refetch: fetchCollections,
        addNewCollection,
        isCollectionIdUnique,
    };

    return (
        <CollectionsContext.Provider value={value}>
            {children}
        </CollectionsContext.Provider>
    );
};
