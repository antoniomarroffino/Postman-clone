import React from 'react';

interface PreviewButtonProps {
    isActive: boolean;
    onClick: () => void;
}

const PreviewButton: React.FC<PreviewButtonProps> = ({ isActive, onClick }) => {
    return (
        <button
            className={`btn btn-sm ${isActive ? 'btn-active font-bold border border-blue-500' : 'btn-outline font-light opacity-70 '}`}
            onClick={onClick}
        >
            <span className="mr-1">👁️</span>
            Preview
        </button>
    );
};

export default PreviewButton;