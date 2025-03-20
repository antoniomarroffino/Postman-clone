import React, { useState } from "react";
import Home from "./Home";
import Sidebar from "./Sidebar";
import HttpClientProps from "../types/props/HttpClientProps";

const HttpClient: React.FC<HttpClientProps> = ({
  url,
  search,
  collections,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  let sidebarClass = "";
  let homeClass = "";
  if (collections) {
    sidebarClass = isSidebarOpen ? "col-span-3" : "col-span-1";
    homeClass = isSidebarOpen ? "col-span-13" : "col-span-15";
  } else {
    homeClass = "col-span-16";
  }

  return (
    <div className="grid grid-cols-16 h-screen">
      {collections && (
        <div className={`${sidebarClass}`}>
          <Sidebar
            showSearch={search}
            isOpen={isSidebarOpen}
            onToggle={toggleSidebar}
          />
        </div>
      )}
      <div className={`${homeClass}`}>
        <Home />
      </div>
    </div>
  );
};

export default HttpClient;
