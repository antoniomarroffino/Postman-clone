import MethodDropdown from "./home/MethodDropdown.tsx";
import UriInput from "./home/UriInput.tsx";
import SendButton from "./home/SendButton.tsx";
import HeadersTable from "./home/HeadersTable.tsx";
import RequestBody from "./home/RequestBody.tsx";
import ResponseSection from "./home/ResponseSection.tsx";

const Home = () => {

    return (
        <div className="p-4 h-full flex flex-col gap-4">
            <div className="flex gap-2">
                <MethodDropdown />
                <UriInput />
                <SendButton />
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