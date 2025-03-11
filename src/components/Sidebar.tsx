import React from "react";
import CollectionList from "./CollectionList";

interface SidebarProps {
  search: boolean;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ search, isOpen, toggleSidebar }) => {
  return (
    <div className="bg-base-200 h-screen p-4">
      <h2>Collections</h2>
      {/* Pulsante per aprire/chiudere la sidebar */}
      <button className="btn btn-primary mb-4" onClick={toggleSidebar}>
        {isOpen ? "Chiudi Sidebar" : "Apri Sidebar"}
      </button>

      {/* Menu visualizzato solo quando la sidebar è aperta */}
      {isOpen && (
        <>
          {search && (
            <div className="mb-4">
              <input
                type="text"
                placeholder="Cerca..."
                className="input input-bordered w-full"
              />
            </div>
          )}
          <CollectionList />
        </>
      )}
    </div>
  );
};

export default Sidebar;
