import React, {useEffect, useState} from "react";
import Home from "./Home";
import Sidebar from "./Sidebar";
import HttpClientProps from "../types/props/HttpClientProps";
import {CollectionsProvider} from "../provider/CollectionProvider.tsx";
import {SelectedRequestProvider} from "../provider/request/SelectedRequestProvider.tsx";
import {RequestCRUDProvider} from "../provider/request/RequestCRUDProvider.tsx";
import {FileProvider} from "../provider/FileProvider.tsx";
import {HttpProvider} from "../provider/HttpProvider.tsx";
import {PreviewProvider} from "../provider/PreviewProvider.tsx";
import {usePreview} from "../hooks/usePreview.ts";
import {ImagePreviewStrategy} from "./home/previewStrategy/strategy/ImagePreviewStrategy.tsx";
import {HtmlPreviewStrategy} from "./home/previewStrategy/strategy/HtmlPreviewStrategy.tsx";
import {UrlProvider} from "../provider/UrlProvider.tsx";

const PreviewRegistrar: React.FC = () => {
    const {registerStrategy} = usePreview();
    useEffect(() => {
        registerStrategy(new ImagePreviewStrategy());
        registerStrategy(new HtmlPreviewStrategy());
    }, [registerStrategy]);

    return null;
};


const HttpClient: React.FC<HttpClientProps> = ({
                                                   url,
                                                   search,
                                                   collections,
                                                   onResponseMessageClick,
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
        <UrlProvider>
            <CollectionsProvider>
                <SelectedRequestProvider>
                    <RequestCRUDProvider>
                        <FileProvider>
                            <HttpProvider>
                                <PreviewProvider>
                                    <PreviewRegistrar/>
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
                                            <Home url={url} search={search} collections={collections}
                                                  onResponseMessageClick={onResponseMessageClick}/>
                                        </div>
                                    </div>
                                </PreviewProvider>
                            </HttpProvider>
                        </FileProvider>
                    </RequestCRUDProvider>
                </SelectedRequestProvider>
            </CollectionsProvider>
        </UrlProvider>
    );
};

export default HttpClient;
