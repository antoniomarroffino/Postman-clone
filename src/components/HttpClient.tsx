import React, { useState } from "react";
import Home from "./Home";
import Sidebar from "./Sidebar";
import HttpClientProps from "../types/HttpClientProps";

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
    sidebarClass = isSidebarOpen ? "col-span-2" : "col-span-1";
    homeClass = isSidebarOpen ? "col-span-10" : "col-span-11";
  } else {
    homeClass = "col-span-12";
  }

  return (
    <div className="grid grid-cols-12 h-screen w-full m-0 p-0">
      {collections && (
        <div className={`transition-all duration-300 ${sidebarClass} h-full`}>
          <Sidebar
            showSearch={search}
            isOpen={isSidebarOpen}
            onToggle={toggleSidebar}
          />
        </div>
      )}
      <div className={`bg-blue-200 ${homeClass} h-full`}>
        <Home />
      </div>
    </div>
  );
};

export default HttpClient;
