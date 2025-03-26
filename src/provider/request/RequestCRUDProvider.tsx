import {RequestCRUDContext} from "../../contexts/request/RequestCRUDContext.tsx";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import RequestDTO from "../../types/model/RequestDTO.ts";
import {apiKey} from "../../config/config.ts";
import RequestCreationDTO from "../../types/model/RequestCreationDTO.ts";
import {useSelectedRequest} from "../../hooks/request/useSelectedRequest.ts";

export const RequestCRUDProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const queryClient = useQueryClient();
    const {selectedRequest, setSelectedRequest, deselectRequest} = useSelectedRequest();

    const createMutation = useMutation({
        mutationFn: async ({collectionId, requestCreationDTO}: {
            collectionId: number,
            requestCreationDTO: RequestCreationDTO
        }) => {
            const response = await fetch(
                `${
                    import.meta.env.VITE_BACKEND_BASE_URL
                }/bff/collections/${collectionId}/requests?apiKey=${apiKey}`,
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(requestCreationDTO),
                }
            );
            if (!response.ok) {
                throw new Error("Failed to create request");
            }
            return await response.json();
        },
        onSuccess: (_data, variables) => {
            queryClient.invalidateQueries({
                queryKey: ['requests', variables.collectionId]
            });
        }
    });

    const updateMutation = useMutation({
        mutationFn: async ({requestId, requestDTO}: {
            collectionId: number,
            requestId: string,
            requestDTO: RequestDTO
        }) => {
            const response = await fetch(
                `${
                    import.meta.env.VITE_BACKEND_BASE_URL
                }/bff/requests/${requestId}?apiKey=${apiKey}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(requestDTO),
                }
            );
            if (!response.ok) {
                throw new Error("Failed to update request");
            }
            return await response.json();
        },
        onSuccess: (data, variables) => {
            queryClient.setQueryData(
                ['requests', variables.collectionId],
                (old: RequestDTO[] | undefined) =>
                    old?.map(request =>
                        request.id === variables.requestId ? data : request
                    ) || []
            );
            setSelectedRequest(variables.requestDTO);
        }
    });

    const deleteMutation = useMutation<void, Error, { collectionId: number, requestId: string }>({
        mutationFn: async ({requestId}) => {
            await fetch(
                `${
                    import.meta.env.VITE_BACKEND_BASE_URL
                }/bff/requests/${requestId}?apiKey=${apiKey}`,
                {
                    method: "DELETE",
                }
            );
        },
        onSuccess: (_data, variables) => {
            queryClient.setQueryData(['requests', variables.collectionId],
                (oldData: RequestDTO[] | undefined) =>
                    oldData?.filter(request => request.id !== variables.requestId) || []
            );

            if (selectedRequest?.id === variables.requestId)
                deselectRequest();
        }
    });

    const createRequest = async (collectionId: number, requestCreationDTO: RequestCreationDTO) => {
        return createMutation.mutateAsync({collectionId, requestCreationDTO});
    };

    const updateRequest = async (collectionId: number, requestId: string, requestDTO: RequestDTO) => {
        return updateMutation.mutateAsync({collectionId, requestId, requestDTO});
    };

    const deleteRequest = async (collectionId: number, requestId: string) => {
        return deleteMutation.mutateAsync({collectionId, requestId});
    };

    const value = {
        createRequest,
        updateRequest,
        deleteRequest,
        isCreatingRequest: createMutation.isPending,
        isUpdatingRequest: updateMutation.isPending,
        isDeletingRequest: deleteMutation.isPending,
        errorCreateRequest: createMutation.error,
        errorUpdateRequest: updateMutation.error,
        errorDeleteRequest: deleteMutation.error,
    };

    return (
        <RequestCRUDContext.Provider value={value}>
            {children}
        </RequestCRUDContext.Provider>
    );
};