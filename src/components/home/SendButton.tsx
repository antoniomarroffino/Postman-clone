import { FC } from "react";

interface SendButtonProps {
    onClick: () => void;
}

const SendButton: FC<SendButtonProps> = ({ onClick }) => {
    return (
        <button className="btn btn-primary" onClick={onClick}>
            Send
        </button>
    );
};

export default SendButton;