// Request.tsx
import React from "react";
import {FaTrash} from "react-icons/fa";
import RequestDTO from "../../types/model/RequestDTO";
import {methodBgColors} from "../../config/config";
import {useRequest} from "../../hooks/useRequest.ts";

const Request: React.FC<RequestDTO> = ({id, name, method}) => {
    const {deleteRequest} = useRequest();

    return (
        <div
            className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3">
        <span
            className={`px-3 py-1 rounded-full ${methodBgColors[method]} text-white font-semibold text-sm`}
        >
          {method}
        </span>
                <span className="text-gray-900 font-medium">{name}</span>
            </div>
            <button
                onClick={() => deleteRequest(id)}
                className="text-red-500 hover:text-red-600 transition-colors"
            >
                <FaTrash size={18}/>
            </button>
        </div>
    );
};

export default Request;
