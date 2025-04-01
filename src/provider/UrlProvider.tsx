import React from "react";
import {UrlContext} from "../contexts/UrlContext";


export const UrlProvider: React.FC<{ children: React.ReactNode, url?: string }> = ({children, url}) => {

    const backendUrl = url || `${
        import.meta.env.VITE_BACKEND_BASE_URL
    }`;

    const value = {url: backendUrl};

    return (
        <UrlContext.Provider value={value}>
            {children}
        </UrlContext.Provider>
    );
};
