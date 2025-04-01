import {FC} from "react";

export const StatusBadge: FC<{ status: string }> = ({status}) => {
    const statusCode = parseInt(status.split(" ")[0]);
    let colorClass = "badge-neutral";

    if (statusCode >= 200 && statusCode < 300) colorClass = "badge-success";
    else if (statusCode >= 300 && statusCode < 400) colorClass = "badge-info";
    else if (statusCode >= 400 && statusCode < 500) colorClass = "badge-warning";
    else if (statusCode >= 500) colorClass = "badge-error";

    return (
        <div className={`badge gap-2 ${colorClass}`}>
            <span className="font-mono">{statusCode}</span>
            <span className="hidden sm:inline">{status.split(" ")[1]}</span>
        </div>
    );
};