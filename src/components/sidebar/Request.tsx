import React, {useState} from "react";
import {FiAlertTriangle, FiTrash2} from "react-icons/fi";
import RequestDTO from "../../types/model/RequestDTO";
import {methodBgColors} from "../../config/config";
import {useRequestCRUD} from "../../hooks/request/useRequestCRUD.ts";
import {useSelectedRequest} from "../../hooks/request/useSelectedRequest.ts";
import clsx from "clsx";

interface RequestProps {
    requestDTO: RequestDTO;
}

const Request: React.FC<RequestProps> = ({requestDTO}) => {
    const {deleteRequest} = useRequestCRUD();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const {selectedRequest, setSelectedRequest, deselectRequest} = useSelectedRequest();

    const isSelected = selectedRequest?.id === requestDTO.id;

    const handleClick = () => {
        if (isSelected)
            deselectRequest();
        else
            setSelectedRequest(requestDTO);
    };

    const handleDelete = () => {
        setIsDeleteModalOpen(false);
        deleteRequest(requestDTO.collectionId, requestDTO.id);
    };

    return (
        <>
            <div
                className={clsx(
                    "flex items-center justify-between p-2 bg-white border rounded-lg",
                    "shadow-sm hover:shadow-md transition-all duration-300",
                    {
                        "border-primary bg-gradient-to-r from-primary/10 to-primary/5": isSelected,
                        "border-gray-200": !isSelected
                    }
                )}
            >
                <div className="flex items-center gap-2.5 flex-1">
    <span
        className={`px-2.5 py-1 rounded-full ${
            methodBgColors[requestDTO.method]
        } text-white font-semibold text-sm`}
    >
      {requestDTO.method}
    </span>
                    <span
                        onClick={handleClick}
                        className="text-gray-900 font-sm cursor-pointer flex items-center gap-2 group"
                    >
      {requestDTO.name}
    </span>
                </div>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsDeleteModalOpen(true);
                    }}
                    className="text-red-500 hover:text-red-600 transition-colors bg-transparent"
                    aria-label="Delete request"
                >
                    <FiTrash2 size={15}/>
                </button>
            </div>

            <dialog open={isDeleteModalOpen} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-4 p-3 bg-red-100 rounded-full">
                            <FiAlertTriangle className="w-8 h-8 text-red-500"/>
                        </div>
                        <h3 className="text-lg font-bold mb-2">Delete Request</h3>
                        <p className="text-gray-600 mb-6">
                            Are you sure you want to delete <span className="font-semibold">"{requestDTO.name}"</span>?
                            <br/>
                            This action cannot be undone.
                        </p>
                        <div className="modal-action flex gap-3 w-full">
                            <button
                                onClick={() => setIsDeleteModalOpen(false)}
                                className="btn btn-ghost flex-1"
                                aria-label="Cancel deletion"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                className="btn btn-error flex-1 gap-2 text-red-500"
                                aria-label="Confirm deletion"
                            >
                                <FiTrash2 className="w-4 h-4"/>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default Request;