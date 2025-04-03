import React from 'react';

interface RawButtonProps {
    isActive: boolean;
    onClick: () => void;
}

const RawButton: React.FC<RawButtonProps> = ({ isActive, onClick }) => {
    return (
        <button
            className={`btn btn-sm ${isActive ? 'btn-active font-bold border border-blue-500' : 'btn-outline font-light opacity-70'}`}
            onClick={onClick}
        >
            <span className="mr-1">📄</span>
            Raw
        </button>
    );
};

export default RawButton;