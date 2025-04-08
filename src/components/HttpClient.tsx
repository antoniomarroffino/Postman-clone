import React, {useEffect, useState} from "react";
import Home from "./Home";
import Sidebar from "./Sidebar";
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
import {HttpResponseDTO} from "../types/model/HttpResponseDTO.ts";

const PreviewRegistrar: React.FC = () => {
    const {registerStrategy} = usePreview();
    useEffect(() => {
        registerStrategy(new ImagePreviewStrategy());
        registerStrategy(new HtmlPreviewStrategy());
    }, [registerStrategy]);

    return null;
};


interface HttpClientProps {
    url: string;
    search: boolean;
    collections: boolean;
    onResponseMessageClick: (response: HttpResponseDTO) => void;
}

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
    let homeClass: string;
    if (collections) {
        sidebarClass = isSidebarOpen ? "col-span-3" : "col-span-1";
        homeClass = isSidebarOpen ? "col-span-13" : "col-span-15";
    } else {
        homeClass = "col-span-16";
    }

    return (
        <UrlProvider url={url}>
            <CollectionsProvider>
                <SelectedRequestProvider>
                    <RequestCRUDProvider>
                        <FileProvider>
                            <HttpProvider>
                                <PreviewProvider>
                                    <PreviewRegistrar/>
                                    <div
                                        className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-16 h-screen overflow-hidden">
                                        {collections && (
                                            <div className={`transition-all duration-300 ${sidebarClass} max-w-xs`}>
                                                <Sidebar
                                                    showSearch={search}
                                                    isOpen={isSidebarOpen}
                                                    onToggle={toggleSidebar}
                                                />
                                            </div>
                                        )}
                                        <div className={`${homeClass} max-w-full h-full overflow-auto`}>
                                            <Home
                                                collections={collections}
                                                onResponseMessageClick={onResponseMessageClick}
                                            />
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