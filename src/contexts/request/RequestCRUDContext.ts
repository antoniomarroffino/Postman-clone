import RequestDTO from "../../types/model/RequestDTO.ts";
import {createContext} from "react";

export type RequestCRUDContextType = {
    createRequest: (collectionId: number, requestDTO: RequestDTO) => Promise<RequestDTO>;
    updateRequest: (collectionId: number, requestId: string, requestDTO: RequestDTO) => Promise<RequestDTO>;
    deleteRequest: (collectionId: number, requestId: string) => Promise<void>;

    isCreatingRequest: () => boolean;
    isUpdatingRequest: () => boolean;
    isDeletingRequest: () => boolean;

    errorCreateRequest: Error | null;
    errorUpdateRequest: Error | null;
    errorDeleteRequest: Error | null;
}

export const RequestCRUDContext = createContext<RequestCRUDContextType | undefined>(undefined);