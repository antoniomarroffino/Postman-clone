import React, { useState } from "react";
import { FaFolder, FaChevronDown, FaChevronRight } from "react-icons/fa";
import RequestCollection from "../types/model/RequestCollection";
import RequestList from "./RequestList";
import { RequestProvider } from "../provider/RequestProvider";

const Collection: React.FC<RequestCollection> = ({ id, name }) => {
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
          <RequestProvider collectionId={id}>
            <RequestList />
          </RequestProvider>
        </div>
      )}
    </div>
  );
};

export default Collection;
