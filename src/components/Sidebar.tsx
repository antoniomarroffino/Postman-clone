import React from "react";
import SidebarProps from "../types/SidebarProps";
import { FiMenu } from "react-icons/fi";

const Sidebar: React.FC<SidebarProps> = ({ showSearch, isOpen, onToggle }) => {
  return (
    <div className="bg-gray-100 h-full border-r border-gray-200 flex flex-col transition-all duration-300">
      <div className="flex items-center justify-between p-4">
        {isOpen && <h2 className="text-lg font-bold">Collections</h2>}
        <button onClick={onToggle} className="btn btn-ghost">
          <FiMenu size={20} />
        </button>
      </div>
      {showSearch && isOpen && (
        <div className="p-4">
          <input
            type="text"
            placeholder="Cerca..."
            className="input input-bordered w-full"
          />
        </div>
      )}
      {/* Aggiungi altri elementi se necessario */}
      <ul className="menu p-4">
        <li className="mb-2">
          <a>Request 1</a>
        </li>
        <li className="mb-2">
          <a>Request 2</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
