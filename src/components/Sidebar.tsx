import React from "react";
import SidebarProps from "../types/props/SidebarProps";
import { FiChevronLeft, FiChevronRight, FiSearch } from "react-icons/fi";
import CollectionList from "./CollectionList";

const Sidebar: React.FC<SidebarProps> = ({ showSearch, isOpen, onToggle }) => {
  return (
    <div
      className={`bg-gray-100 h-full border-r border-gray-200 flex flex-col transition-all duration-700 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-300">
        {isOpen && <h2 className="text-lg font-bold">Collections</h2>}
        <button onClick={onToggle} className="btn btn-ghost">
          {isOpen ? <FiChevronLeft size={24} /> : <FiChevronRight size={24} />}
        </button>
      </div>
      {showSearch && isOpen && (
        <div className="p-4">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cerca..."
              className="input input-bordered w-full pl-10"
            />
          </div>
        </div>
      )}
      <div className="flex-1 overflow-y-auto p-4">
        <CollectionList />
      </div>
    </div>
  );
};

export default Sidebar;
