import React, { useState } from "react";
import {
  FaFolderOpen,
  FaFolder,
  FaChevronDown,
  FaPlusCircle,
} from "react-icons/fa";
import RequestCollection from "../../types/model/RequestCollection";
import RequestList from "./RequestList";

const Collection: React.FC<RequestCollection> = ({ id, name }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  console.log(id);

  const handleCreateRequest = () => {
    //createRequest(id);
  };

  return (
    <div className="bg-base-100 rounded-box shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 group">
      <div
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-base-200 transition-all duration-200"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute -inset-2 bg-primary/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-primary-focus text-primary-content shadow-md">
              {isExpanded ? (
                <FaFolderOpen className="text-2xl" />
              ) : (
                <FaFolder className="text-2xl" />
              )}
            </div>
          </div>
          <h2 className="text-xl font-bold text-base-content drop-shadow-sm">
            {name}
          </h2>
        </div>
        <div
          className={`text-base-content/80 transform transition-all duration-300 ${
            isExpanded ? "rotate-180 text-primary" : ""
          }`}
        >
          <FaChevronDown className="w-6 h-6" />
        </div>
      </div>

      {isExpanded && (
        <div className="px-4 pb-4 pt-2 space-y-4">
          <div className="divider m-0 opacity-50"></div>

          <RequestList />

          <button
            onClick={handleCreateRequest}
            className="btn btn-block btn-primary transform transition-all hover:scale-[1.02] active:scale-95"
          >
            <FaPlusCircle className="text-xl mr-2 -ml-1 text-accent-content" />
            <span className="font-bold tracking-wide text-accent-content">
              Create Request
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Collection;
