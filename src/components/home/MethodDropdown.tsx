import { FC } from "react";

interface MethodDropdownProps {
    selectedMethod: string;
    onMethodChange: (method: string) => void;
}

const MethodDropdown: FC<MethodDropdownProps> = ({ selectedMethod, onMethodChange }) => {
    return (
        <select
            className="select select-bordered w-32 bordered bordered-black"
            value={selectedMethod}
            onChange={(e) => onMethodChange(e.target.value)}
        >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
        </select>
    );
};

export default MethodDropdown;