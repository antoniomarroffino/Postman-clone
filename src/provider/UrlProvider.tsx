import React from "react";
import { UrlContext } from "../contexts/UrlContext";

export const UrlProvider: React.FC<{ children: React.ReactNode }> = ({
                                                                         children,
                                                                     }) => {
    const value = {

    };
    return (
        <UrlContext.Provider value={value}>
            {children}
        </UrlContext.Provider>
    );
};
