import { useSelectedRequest } from "../hooks/request/useSelectedRequest";
import MethodDropdown from "./home/MethodDropdown.tsx";
import UriInput from "./home/UriInput.tsx";
import SendButton from "./home/SendButton.tsx";
import HeadersTable from "./home/HeadersTable.tsx";
import RequestBody from "./home/RequestBody.tsx";
import ResponseSection from "./home/ResponseSection.tsx";
import {FaRocket} from "react-icons/fa";
import SaveButton from "./home/SaveButton.tsx";
import HttpClientProps from "../types/props/HttpClientProps.ts";

const Home: React.FC<HttpClientProps> = ({url, search, collections, onResponseMessageClick}) => {
    const { selectedRequest } = useSelectedRequest();

    if (!selectedRequest) {
        return (
            <div className="flex-1 flex mt-9 justify-center bg-gradient-to-br h-full">
                <div className="text-center max-w-2xl p-8 space-y-6">
                    <div className="animate-float">
                        <FaRocket className="w-24 h-24 text-primary mx-auto opacity-80" />
                    </div>

                    <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pb-1 leading-[1.2]">
                        Ready to Explore?
                    </h1>

                    <p className="text-xl text-base-content/80">
                        Select an existing request from the sidebar or create a new one to get started!
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="p-4 h-full flex flex-col gap-4">
            <div className="flex gap-2 flex-wrap">
                <MethodDropdown />
                <UriInput />
                <div className="flex gap-2">
                    <SendButton onResponseMessageClick={onResponseMessageClick}/>
                    <SaveButton />
                </div>
            </div>

            <div className="flex gap-4 flex-1 overflow-hidden">
                <HeadersTable />
                <RequestBody />
            </div>

            <ResponseSection />
        </div>
    );
};

export default Home;