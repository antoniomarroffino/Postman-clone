import {useState} from "react";
import MethodDropdown from "./home/MethodDropdown.tsx";
import UriInput from "./home/UriInput.tsx";
import SendButton from "./home/SendButton.tsx";
import HeadersTable from "./home/HeadersTable.tsx";
import RequestBody from "./home/RequestBody.tsx";
import ResponseSection from "./home/ResponseSection.tsx";

const Home = () => {
    const [method, setMethod] = useState("GET");
    const [url, setUrl] = useState("");
    const [headers, setHeaders] = useState([{key: "", value: ""}]);
    const [requestBody, setRequestBody] = useState("");
    const [response] = useState({
        status: "200 OK",
        speed: "523 ms",
        size: "8.74KB",
        content: "<html>...</html>"
    });

    const handleAddHeader = () => {
        setHeaders([...headers, {key: "", value: ""}]);
    };

    const handleHeaderChange = (index: number, field: 'key' | 'value', value: string) => {
        const newHeaders = [...headers];
        newHeaders[index][field] = value;
        setHeaders(newHeaders);
    };

    const handleSendRequest = () => {
        console.log("SEND REQUEST");
    };

    const handleRemoveHeader = (index: number) => {
        setHeaders(headers.filter((_, i) => i !== index));
    };

    return (
        <div className="p-4 h-full flex flex-col gap-4">

            <div className="flex gap-2">
                <MethodDropdown
                    selectedMethod={method}
                    onMethodChange={setMethod}
                />

                <UriInput
                    value={url}
                    onUrlChange={setUrl}
                />

                <SendButton onClick={handleSendRequest}/>
            </div>

            {/* Sezione 2 - Headers e Body */}
            <div className="flex gap-4 flex-1">
                <HeadersTable
                    headers={headers}
                    onAddHeader={handleAddHeader}
                    onHeaderChange={handleHeaderChange}
                    onRemoveHeader={handleRemoveHeader}
                />

                <RequestBody
                    value={requestBody}
                    onChange={setRequestBody}
                />
            </div>

            {/* Sezione 3 - Risposta */}
            <ResponseSection
                status={response.status}
                speed={response.speed}
                size={response.size}
                content={response.content}
            />
        </div>
    );
};

export default Home;