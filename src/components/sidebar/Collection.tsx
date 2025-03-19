import React, { useState } from "react";
import { FaChevronDown, FaFolder, FaFolderOpen, FaPlusCircle } from "react-icons/fa";
import { FiDownload, FiRefreshCw } from "react-icons/fi";
import RequestCollection from "../../types/model/RequestCollection";
import RequestList from "./RequestList";
import { useFile } from "../../hooks/useFile.ts";
import { useRequest } from "../../hooks/useRequest.ts";

const Collection: React.FC<RequestCollection> = ({ id, name }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { exportCollection, isExporting } = useFile();
    const { requests } = useRequest();

    const handleCreateRequest = () => {
        //createRequest(id);
    };

    const handleExportClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        exportCollection({ collection: { id, name }, requests: requests });
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

                <div className="flex items-center gap-2">
                    <div className="relative">
                        <button
                            onClick={handleExportClick}
                            disabled={isExporting}
                            className={`p-2 rounded-lg transition-all duration-200 relative ${
                                isExporting
                                    ? "text-primary cursor-wait"
                                    : "text-gray-600 hover:text-primary hover:bg-gray-200/50 hover:scale-110"
                            }`}
                        >
                            {isExporting ? (
                                <FiRefreshCw className="w-5 h-5 animate-spin" />
                            ) : (
                                <FiDownload className="w-5 h-5" />
                            )}

                            {/* Effetto hover avanzato */}
                            {!isExporting && (
                                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/10" />
                            )}
                        </button>
                    </div>

                    <div
                        className={`text-base-content/80 transform transition-all duration-300 ${
                            isExpanded ? "rotate-180 text-primary" : ""
                        }`}
                    >
                        <FaChevronDown className="w-6 h-6" />
                    </div>
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