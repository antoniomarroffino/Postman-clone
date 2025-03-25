import { useRequestsList } from "../../hooks/request/useRequestList";
import Request from "./Request";
import React from "react";
import {FaExclamationTriangle} from "react-icons/fa";

interface RequestListProps {
    collectionId: number;
}

const RequestList: React.FC<RequestListProps> = ({collectionId}) => {
    const { data: requests, isLoading, error } = useRequestsList(collectionId);

    if (isLoading) {
        return (
            <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="skeleton h-16 rounded-box bg-base-200"></div>
                ))}
            </div>
        );
    }

    if (error) {
        return (
            <div className="alert alert-error shadow-lg">
                <FaExclamationTriangle className="text-xl"/>
                <span>Errore nel caricamento delle requests!</span>
            </div>
        );
    }

    return (
        <div className="space-y-3 px-1">
            {requests && requests.length > 0 ? (
                requests.map((req) => (
                    <Request
                        key={req.id}
                        requestDTO={req}
                    />
                ))
            ) : (
                <div className="text-center p-2 text-base-content/60 font-medium">
                    ✨ Nessuna request trovata
                </div>
            )}
        </div>
    );
};

export default RequestList;
