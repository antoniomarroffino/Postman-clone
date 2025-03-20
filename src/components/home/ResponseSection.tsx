import { FC } from "react";
import {useHttp} from "../../hooks/useHttp.ts";

const ResponseSection: FC = () => {
    const { state } = useHttp();

    const formatSize = (bytes: number) => {
        if (bytes === 0) return "0 B";
        const k = 1024;
        const sizes = ["B", "KB", "MB", "GB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };

    return (
        <div className="flex flex-col gap-2 flex-1">
            {(state.response || state.error) && (
                <div className="flex justify-between items-center p-2 bg-base-200 rounded-lg">
                    <div className="flex gap-4">
                        {state.response && (
                            <>
                                <span className="badge badge-success">{state.response.status}</span>
                                <span>{state.response.time.toFixed(2)} ms</span>
                                <span>{formatSize(state.response.size)}</span>
                            </>
                        )}
                        {state.error && (
                            <span className="badge badge-error">Error</span>
                        )}
                    </div>
                </div>
            )}

            {state.response && (
                <pre className="bg-base-200 p-4 rounded-lg overflow-auto flex-1">
          {state.response.data}
        </pre>
            )}

            {state.error && (
                <div className="alert alert-error mt-4">
                    <span>{state.error}</span>
                </div>
            )}
        </div>
    );
};

export default ResponseSection;