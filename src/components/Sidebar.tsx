import React, {useEffect, useRef, useState} from "react";
import SidebarProps from "../types/props/SidebarProps";
import {FiFolder, FiMenu, FiSearch, FiUpload, FiX} from "react-icons/fi";
import CollectionList from "./sidebar/CollectionList";
import ImportButton from "./sidebar/ImportButton.tsx";

const Sidebar: React.FC<SidebarProps> = ({showSearch, isOpen, onToggle}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
    const [lastAction, setLastAction] = useState<
        "menu" | "search" | "folder" | "import" | null
    >(null);

    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchQuery(searchQuery);
        }, 300);
        return () => clearTimeout(handler);
    }, [searchQuery]);

    useEffect(() => {
        if (isOpen && lastAction) {
            switch (lastAction) {
                case "search":
                    searchInputRef.current?.focus();
                    break;
            }
            setLastAction(null);
        }
    }, [isOpen, lastAction]);

    return (
        <div
            className={`bg-gray-100 h-full border-r border-gray-200 flex flex-col 
            transition-all duration-300 ease-in-out`}
        >
            {/* Top Section */}
            <div className="p-4 border-b border-gray-300 h-[120px] flex-shrink-0">
                {isOpen ? (
                    <>
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold">Collections</h2>
                            <button
                                onClick={() => {
                                    onToggle();
                                    setLastAction(null);
                                }}
                                className="btn btn-ghost"
                            >
                                <FiX size={15}/>
                            </button>
                        </div>
                        {showSearch && (
                            <div className="mt-4">
                                <div className="relative">
                                    <FiSearch
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                                    <input
                                        ref={searchInputRef}
                                        type="text"
                                        placeholder="Cerca..."
                                        className="input input-bordered w-full pl-10"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex flex-col items-center space-y-4">
                            <button
                                onClick={() => {
                                    onToggle();
                                    setLastAction("menu");
                                }}
                                className="btn btn-ghost p-2"
                            >
                                <FiMenu size={15}/>
                            </button>
                            {showSearch && (
                                <button
                                    onClick={() => {
                                        onToggle();
                                        setLastAction("search");
                                    }}
                                    className="btn btn-ghost p-2"
                                >
                                    <FiSearch size={15}/>
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Scrollable Content + Import Button */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {isOpen ? (
                    <>
                        <div className="flex-1 overflow-y-auto p-2">
                            <CollectionList searchQuery={debouncedSearchQuery}/>
                        </div>
                        <div className="sticky bottom-0 bg-gray-100 border-t border-gray-200 p-4 mt-auto">
                            <ImportButton/>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex-1 justify-center overflow-y-auto p-2">
                            <button
                                onClick={() => {
                                    onToggle();
                                    setLastAction("folder");
                                }}
                                className="btn btn-ghost p-2"
                            >
                                <FiFolder size={15}/>
                            </button>
                        </div>
                        <div className="sticky bottom-0 bg-gray-100 border-t border-gray-200 p-4 mt-auto">
                            <button
                                onClick={() => {
                                    onToggle();
                                    setLastAction("import");
                                }}
                                className="btn btn-ghost p-2"
                            >
                                <FiUpload/>
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
