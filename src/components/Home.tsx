import {useSelectedRequest} from "../hooks/request/useSelectedRequest";
import MethodDropdown from "./home/MethodDropdown.tsx";
import UriInput from "./home/UriInput.tsx";
import SendButton from "./home/SendButton.tsx";
import HeadersTable from "./home/HeadersTable.tsx";
import RequestBody from "./home/RequestBody.tsx";
import ResponseSection from "./home/ResponseSection.tsx";
import SaveButton from "./home/SaveButton.tsx";
import HttpClientProps from "../types/props/HttpClientProps.ts";
import AnyContent from "./home/AnyContent.tsx";
import React from "react";

const Home: React.FC<HttpClientProps> = ({url, collections, onResponseMessageClick}) => {
    const {selectedRequest} = useSelectedRequest();

    if (collections && !selectedRequest) {
        return (
            <AnyContent/>
        );
    }

    return (
        <div className="p-4 h-full flex flex-col gap-4">
            <div className="flex gap-2 flex-wrap">
                <MethodDropdown/>
                <UriInput url={url}/>
                <div className="flex gap-2">
                    <SendButton onResponseMessageClick={onResponseMessageClick}/>
                    {collections && <SaveButton/>}
                </div>
            </div>

            <div className="flex gap-4 flex-1 overflow-hidden">
                <HeadersTable/>
                <RequestBody/>
            </div>

            <ResponseSection/>
        </div>
    );
};

export default Home;