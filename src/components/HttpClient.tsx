// src/components/HttpClient.tsx
import React, { useState } from "react";
import Sidebar from "./SideBar";
import Home from "./Home";

interface HttpClientProps {
  url: string;
  search: boolean;
  collections: boolean;
}

const HttpClient: React.FC<HttpClientProps> = ({
  url,
  search,
  collections,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  console.log(url);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar: visualizzata solo se collections è true */}
      {collections && (
        <div
          className={`
            transition-all duration-300 
            ${isSidebarOpen ? "w-64 border-r border-base-300" : "w-0"}
            overflow-hidden
          `}
        >
          <Sidebar
            search={search}
            isOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
        </div>
      )}

      {/* Home: occupa tutto lo spazio rimanente */}
      <div className="flex-1">
        <Home />
      </div>
    </div>
  );
};

export default HttpClient;
