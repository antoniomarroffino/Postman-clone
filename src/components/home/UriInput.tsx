import { FC } from "react";

interface UriInputProps {
    value: string;
    onUrlChange: (url: string) => void;
}

const UriInput: FC<UriInputProps> = ({ value, onUrlChange }) => {
    return (
        <input
            type="text"
            placeholder="Enter URL"
            className="input input-bordered flex-1"
            value={value}
            onChange={(e) => onUrlChange(e.target.value)}
        />
    );
};

export default UriInput;