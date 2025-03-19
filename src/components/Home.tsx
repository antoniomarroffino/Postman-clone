import { useState } from "react";

const Home = () => {
    const [method, setMethod] = useState("GET");
    const [url, setUrl] = useState("");
    const [headers, setHeaders] = useState([{ key: "", value: "" }]);
    const [requestBody, setRequestBody] = useState("");
    const [response] = useState({
        status: "200 OK",
        speed: "523 ms",
        size: "8.74KB",
        content: "<html>...</html>"
    });

    const addHeaderRow = () => {
        setHeaders([...headers, { key: "", value: "" }]);
    };

    const handleSendRequest = () => {
        // Logica per inviare la richiesta
        console.log({ method, url, headers, requestBody });
    };

    return (
        <div className="p-4 h-full flex flex-col gap-4">
            {/* Sezione 1 - Controlli richiesta */}
            <div className="flex gap-2">
                <select
                    className="select select-bordered w-32"
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                >
                    <option>GET</option>
                    <option>POST</option>
                    <option>PUT</option>
                    <option>DELETE</option>
                </select>

                <input
                    type="text"
                    placeholder="Enter URL"
                    className="input input-bordered flex-1"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />

                <button
                    className="btn btn-primary"
                    onClick={handleSendRequest}
                >
                    Send
                </button>
            </div>

            {/* Sezione 2 - Headers e Body */}
            <div className="flex gap-4 flex-1">
                {/* Headers Table */}
                <div className="w-1/2 flex flex-col">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold">Headers</h3>
                        <button
                            className="btn btn-circle btn-xs"
                            onClick={addHeaderRow}
                        >
                            +
                        </button>
                    </div>

                    <div className="overflow-x-auto bg-base-200 rounded-lg flex-1">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Key</th>
                                <th>Value</th>
                            </tr>
                            </thead>
                            <tbody>
                            {headers.map((_header, index) => (
                                <tr key={index}>
                                    <td>
                                        <input
                                            type="text"
                                            className="input input-ghost input-xs w-full"
                                            placeholder="Header"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            className="input input-ghost input-xs w-full"
                                            placeholder="Value"
                                        />
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Request Body */}
                <div className="w-1/2 flex flex-col">
                    <h3 className="font-bold mb-2">Request Body</h3>
                    <textarea
                        className="textarea h-full bg-base-200"
                        placeholder="Raw content"
                        value={requestBody}
                        onChange={(e) => setRequestBody(e.target.value)}
                    />
                </div>
            </div>

            {/* Sezione 3 - Risposta */}
            <div className="flex flex-col gap-2 flex-1">
                {/* Status Bar */}
                <div className="flex justify-between items-center p-2 bg-base-200 rounded-lg">
                    <div className="flex gap-4">
                        <span className="badge badge-success">{response.status}</span>
                        <span>{response.speed}</span>
                        <span>{response.size}</span>
                    </div>
                    <button
                        className="btn btn-disabled btn-xs"
                        disabled
                    >
                        Preview
                    </button>
                </div>

                {/* Response Content */}
                <pre className="bg-base-200 p-4 rounded-lg overflow-auto flex-1">
          {response.content}
        </pre>
            </div>
        </div>
    );
};

export default Home;