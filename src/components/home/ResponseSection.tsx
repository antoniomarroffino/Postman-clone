import { FC, useEffect, useState } from "react";
import { useHttp } from "../../hooks/useHttp.ts";
import { usePreview } from "../../hooks/usePreview.ts";
import { DefaultPreviewStrategy } from "./previewStrategy/strategy/DefaultPreviewStrategy.tsx";
import { getContentType } from "../../utils/contentTypeUtils.ts";
import { useSelectedRequest } from "../../hooks/request/useSelectedRequest.ts";
import { HttpResponseDTO } from "../../types/model/HttpResponseDTO.ts";
import { StatusBadge } from "./StatusBadge.tsx";

interface ResponseSectionProps {
    onResponseMessageClick: (response: HttpResponseDTO) => void;
}

const ResponseSection: FC<ResponseSectionProps> = ({ onResponseMessageClick }) => {
    const { state } = useHttp();
    const { strategies } = usePreview();
    const [viewMode, setViewMode] = useState<"raw" | "preview">("raw");
    const response = state.response;
    const { selectedRequest } = useSelectedRequest();

    useEffect(() => {
        setViewMode("raw");
    }, [selectedRequest?.id]);

    const formatSize = (bytes: number) => {
        if (bytes === 0) return "0 B";
        const k = 1024;
        const sizes = ["B", "KB", "MB", "GB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };

    const renderContent = () => {
        if (!response) return null;

        return (
            <div className="response-container flex-1 min-h-[300px] flex flex-col overflow-auto">
                {viewMode === "raw" ? (
                    <pre className="bg-base-200 p-4 rounded-lg overflow-auto border border-base-300 flex-1">
                        {response.data}
                    </pre>
                ) : (
                    <div className="bg-base-200 p-4 rounded-lg overflow-auto border border-base-300 flex-1">
                        {(() => {
                            const contentType = getContentType(response.headers);
                            const strategy =
                                strategies.find((s) => s.supports(contentType)) ||
                                new DefaultPreviewStrategy();
                            return strategy.render(response.data, state.request.uri, response.headers);
                        })()}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="flex flex-col gap-2 flex-1 border-t border-base-300 pt-4 h-full overflow-hidden">
            {(state.response || state.error) && (
                <div className="flex justify-between items-center p-4 bg-base-200 rounded-lg shadow-sm">
                    <div className="flex gap-4 items-center">
                        {state.response && (
                            <>
                                <StatusBadge status={state.response.status} />
                                <div className="flex gap-4 text-sm">
                                    <div className="tooltip" data-tip="Response time">
                                        <span className="text-base-content/80">
                                            ⏱ {state.response.time.toFixed(2)}ms
                                        </span>
                                    </div>
                                    <div className="tooltip" data-tip="Response size">
                                        <span className="text-base-content/80">
                                            📦 {formatSize(state.response.size)}
                                        </span>
                                    </div>
                                </div>
                            </>
                        )}
                        {state.error && (
                            <div className="badge badge-error gap-2">
                                <span>⚠️ Error</span>
                            </div>
                        )}
                    </div>

                    <div className="p-4">
                        <button
                            className="btn btn-primary text-black"
                            onClick={() => response && onResponseMessageClick(response)}
                        >
                            Call function
                        </button>
                    </div>

                    {state.response && (
                        <div className="btn-group">
                            <button
                                className={`btn btn-sm ${
                                    viewMode === "preview"
                                        ? "btn-active font-bold"
                                        : "btn-outline font-light opacity-70"
                                }`}
                                onClick={() => setViewMode("preview")}
                            >
                                <span className="mr-2">👁️</span>
                                Preview
                            </button>
                            <button
                                className={`btn btn-sm ${
                                    viewMode === "raw"
                                        ? "btn-active font-bold"
                                        : "btn-outline font-light opacity-70"
                                }`}
                                onClick={() => setViewMode("raw")}
                            >
                                <span className="mr-2">📄</span>
                                Raw
                            </button>
                        </div>
                    )}
                </div>
            )}

            {state.response && <div className="flex-1 flex flex-col overflow-hidden">{renderContent()}</div>}

            {state.error && (
                <div className="alert alert-error mt-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span className="font-medium">{state.error}</span>
                </div>
            )}
        </div>
    );
};

export default ResponseSection;
