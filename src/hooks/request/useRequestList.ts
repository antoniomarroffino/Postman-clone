import {useQuery} from "@tanstack/react-query";
import {apiKey} from "../../config/config.ts";
import RequestDTO from "../../types/model/RequestDTO.ts";
import {useUrl} from "../useUrl.ts";

export const useRequestsList = (collectionId: number) => {
    const {url} = useUrl();
    return useQuery<RequestDTO[], Error>({
        queryKey: ['requests', collectionId],
        queryFn: async () => {
            const response = await fetch(
                `${url}/bff/collections/${collectionId}/requests?apiKey=${apiKey}`
            );
            if (!response.ok) throw new Error("Errore nel recupero delle richieste");
            return response.json();
        },
        staleTime: 1000 * 60 * 5
    });
};