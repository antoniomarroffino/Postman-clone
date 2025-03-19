// src/components/Collection.tsx
import React, { useState } from "react";
import { FaFolder, FaChevronDown, FaChevronRight } from "react-icons/fa";

interface RequestProps {
  id: number;
  name: string;
  method: string;
  url: string;
}

interface CollectionProps {
  name: string;
  requests?: RequestProps[];
}

const Collection: React.FC<CollectionProps> = ({ name, requests = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition duration-300">
      <div
        className="flex items-center justify-between px-4 py-3 cursor-pointer"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <div className="flex items-center gap-3">
          <FaFolder className="text-2xl text-blue-500" />
          <span className="font-semibold text-gray-800">{name}</span>
        </div>
        <div className="text-xl text-gray-600">
          {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
        </div>
      </div>
      {isExpanded && (
        <div className="px-6 pb-4">
          {requests.length > 0 ? (
            <ul className="flex flex-col gap-2">
              {requests.map((req) => (
                <li
                  key={req.id}
                  className="flex items-center text-sm bg-white p-2 rounded shadow-sm hover:bg-gray-100 transition"
                >
                  <span className="badge badge-outline mr-2">{req.method}</span>
                  <span className="text-gray-700">{req.name}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-sm text-gray-500">
              Nessuna richiesta salvata
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Collection;
