import { FC } from "react";

interface RequestBodyProps {
    value: string;
    onChange: (value: string) => void;
}

const RequestBody: FC<RequestBodyProps> = ({ value, onChange }) => {
    return (
        <div className="flex-1 flex flex-col">
            <h3 className="font-bold text-lg mb-2">Request Body</h3>
            <textarea
                className="textarea h-full bg-base-200 w-full"
                placeholder="Raw content"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default RequestBody;