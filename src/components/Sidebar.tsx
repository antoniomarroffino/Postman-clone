import React, {useEffect, useState} from "react";
import SidebarProps from "../types/props/SidebarProps";
import {FiFolder, FiMenu, FiSearch, FiX} from "react-icons/fi";
import CollectionList from "./sidebar/CollectionList";
import ImportButton from "./sidebar/ImportButton.tsx";

const Sidebar: React.FC<SidebarProps> = ({showSearch, isOpen, onToggle}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchQuery(searchQuery);
        }, 300);

        return () => clearTimeout(handler);
    }, [searchQuery]);

    return (
        <div
            className={
                "bg-gray-100 h-full border-r border-gray-200 flex flex-col transition-all duration-700"
            }
        >
            {/* Header */}
            <div className="p-4 border-b border-gray-300">
                {isOpen ? (
                    <>
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-bold">Collections</h2>
                            <button onClick={onToggle} className="btn btn-ghost">
                                <FiX size={15}/>
                            </button>
                        </div>
                        {showSearch && (
                            <div className="mt-4">
                                <div className="relative">
                                    <FiSearch
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                                    <input
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
                    // Stato chiuso: mostra solo i pulsanti come icone
                    <div className="flex flex-col items-center space-y-4">
                        <button onClick={onToggle} className="btn btn-ghost p-2">
                            <FiMenu size={15}/>
                        </button>
                        {showSearch && (
                            <button className="btn btn-ghost p-2">
                                <FiSearch size={15}/>
                            </button>
                        )}
                        <button className="btn btn-ghost p-2">
                            <FiFolder size={15}/>
                        </button>
                    </div>
                )}
            </div>
            {/* Mostra la lista delle collection solo se aperta */}
            {isOpen && (
                <div className="flex-1 overflow-y-auto p-2">
                    <CollectionList searchQuery={debouncedSearchQuery}/>
                    <div className="mt-4 p-2 border-t border-gray-200">
                        <ImportButton/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
