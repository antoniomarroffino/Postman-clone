import { FC } from "react";

interface ResponseSectionProps {
    status: string;
    speed: string;
    size: string;
    content: string;
}

const ResponseSection: FC<ResponseSectionProps> = ({ status, speed, size, content }) => {
    return (
        <div className="flex flex-col gap-2 flex-1">
            <div className="flex justify-between items-center p-2 bg-base-200 rounded-lg">
                <div className="flex gap-4">
                    <span className="badge badge-success">{status}</span>
                    <span>{speed}</span>
                    <span>{size}</span>
                </div>
                <button className="btn btn-disabled btn-xs" disabled>
                    Preview
                </button>
            </div>

            <pre className="bg-base-200 p-4 rounded-lg overflow-auto flex-1">
        {content}
      </pre>
        </div>
    );
};

export default ResponseSection;