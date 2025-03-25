import React, {useState} from "react";
import {FiAlertTriangle, FiTrash2} from "react-icons/fi";
import RequestDTO from "../../types/model/RequestDTO";
import {methodBgColors} from "../../config/config";
import {useRequestCRUD} from "../../hooks/request/useRequestCRUD.ts";

interface RequestProps {
    requestDTO: RequestDTO;
}

const Request: React.FC<RequestProps> = ({requestDTO}) => {
    const {deleteRequest} = useRequestCRUD();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleDelete = () => {
        setIsDeleteModalOpen(false);
        deleteRequest(requestDTO.collectionId, requestDTO.id);
    };

    return (
        <>
            <div
                className="flex items-center justify-between p-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-2.5">
                    <span
                        className={`px-2.5 py-1 rounded-full ${methodBgColors[requestDTO.method]} text-white font-semibold text-sm`}>
                        {requestDTO.method}
                    </span>
                    <span className="text-gray-900 font-sm">{requestDTO.name}</span>
                </div>
                <button
                    onClick={() => setIsDeleteModalOpen(true)}
                    className="text-red-500 hover:text-red-600 transition-colors"
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
                                <FiTrash2 className="w-4 h-4" />
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