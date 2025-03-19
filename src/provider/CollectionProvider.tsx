import RequestCollection from "../types/model/RequestCollection";
import {CollectionsContext} from "../contexts/CollectionContext";
import React, {useCallback, useEffect, useState} from "react";

export const CollectionsProvider: React.FC<{ children: React.ReactNode }> = ({
                                                                                 children,
                                                                             }) => {
    const [collections, setCollections] = useState<
        RequestCollection[]
    >([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown>(null);

    const fetchCollections = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                "https://supsi-ticket.cloudns.org/supsi-http-client/bff/collections"
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

    useEffect(() => {
        fetchCollections();
    }, [fetchCollections]);

    const value = {
        collections,
        isLoading,
        error,
        refetch: fetchCollections,
    };

    return (
        <CollectionsContext.Provider value={value}>
            {children}
        </CollectionsContext.Provider>
    );
};
