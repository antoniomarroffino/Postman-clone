import React, {useState} from "react";
import {FaChevronDown, FaFolder, FaFolderOpen, FaPlusCircle} from "react-icons/fa";
import {FiDownload, FiRefreshCw, FiInfo} from "react-icons/fi";
import RequestCollection from "../../types/model/RequestCollection";
import RequestList from "./RequestList";
import {useFile} from "../../hooks/useFile.ts";
import {useRequest} from "../../hooks/useRequest.ts";

const Collection: React.FC<RequestCollection> = ({id, name}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showExportConfirm, setShowExportConfirm] = useState(false);
    const {exportCollection, isExporting} = useFile();
    const {requests} = useRequest();

    const handleCreateRequest = () => {
        //createRequest(id);
    };

    const handleExportClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowExportConfirm(true);
    };

    const confirmExport = () => {
        setShowExportConfirm(false);
        exportCollection({collection: {id, name}, requests: requests});
    };

    return (
        <div className="bg-base-100 rounded-box shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300 group">
            <div className={`modal ${showExportConfirm ? 'modal-open' : ''}`}>
                <div className="modal-box">
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-4 p-3 bg-blue-100 rounded-full">
                            <FiInfo className="w-8 h-8 text-blue-500" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Export Collection</h3>
                        <p className="text-gray-600 mb-6">
                            Export <span className="font-semibold text-gray-900">"{name}"</span>?
                            <br />
                            You'll receive a JSON file with all requests.
                        </p>
                        <div className="modal-action flex gap-3 w-full">
                            <button
                                onClick={() => setShowExportConfirm(false)}
                                className="btn btn-ghost flex-1"
                                aria-label="Cancel export"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmExport}
                                className="btn btn-info flex-1 gap-2"
                                disabled={isExporting}
                                aria-label="Confirm export"
                            >
                                {isExporting ? (
                                    <FiRefreshCw className="w-4 h-4 animate-spin" />
                                ) : (
                                    <FiDownload className="w-4 h-4" />
                                )}
                                Export
                            </button>
                        </div>
                    </div>
                </div>
                <div className="modal-backdrop" onClick={() => setShowExportConfirm(false)}></div>
            </div>

            <div
                className="flex items-center justify-between px-3 py-1 cursor-pointer hover:bg-base-200 transition-all duration-200"
                onClick={() => setIsExpanded((prev) => !prev)}
            >
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div
                            className="absolute -inset-2 bg-primary/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div
                            className="p-2 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 text-white shadow-md"
                        >
                            {isExpanded ? (
                                <FaFolderOpen className="text-1xl"/>
                            ) : (
                                <FaFolder className="text-1xl"/>
                            )}
                        </div>
                    </div>
                    <h2 className="text-l font-semi-bold text-base-content drop-shadow-sm">
                        {name}
                    </h2>
                </div>

                <div className="flex items-center gap-2">
                    <div className="relative">
                        <button
                            onClick={handleExportClick}
                            disabled={isExporting}
                            className={`p-0 m-0 rounded-lg transition-all duration-200 relative ${
                                isExporting
                                    ? "text-primary cursor-wait"
                                    : "text-gray-600 hover:text-primary hover:bg-gray-200/50 hover:scale-105"
                            }`}
                        >
                            {isExporting ? (
                                <FiRefreshCw className="w-4 h-4 animate-spin"/>
                            ) : (
                                <FiDownload className="w-4 h-4"/>
                            )}
                        </button>
                    </div>

                    <div
                        className={`text-base-content/80 transform transition-all duration-300 ${
                            isExpanded ? "rotate-180 text-primary" : ""
                        }`}
                    >
                        <FaChevronDown className="w-4 h-4"/>
                    </div>
                </div>
            </div>

            {isExpanded && (
                <div className="px-1 pb-4 pt-2 space-y-4">
                    <div className="divider m-0 opacity-50"></div>

                    <RequestList/>

                    <button
                        onClick={handleCreateRequest}
                        className="btn btn-block btn-primary transform transition-all active:scale-98"
                    >
                        <FaPlusCircle className="text-l mr-2 -ml-1 text-accent-content"/>
                        <span className="font-semibold tracking-wide text-accent-content">
                            Create Request
                        </span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Collection;