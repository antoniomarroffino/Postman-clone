import React, {useRef} from 'react';
import {FiRefreshCw, FiUpload} from 'react-icons/fi';
import {useFile} from "../../hooks/useFile.ts";

const ImportButton: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const {importCollection, isImporting} = useFile();

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            await importCollection(file);
            if (fileInputRef.current) fileInputRef.current.value = '';
        }
    };

    return (
        <div className="w-full group relative">
            <input
                type="file"
                accept=".json"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                disabled={isImporting}
            />
            <button
                onClick={() => fileInputRef.current?.click()}
                className={`btn w-full gap-2 transition-all 
                ${isImporting
                    ? 'border-solid bg-gray-100 cursor-wait'
                    : 'border-dashed hover:border-solid hover:bg-gray-50'}
                ${!isImporting && 'hover:shadow-md'}
                relative overflow-hidden`}
                disabled={isImporting}
                aria-disabled={isImporting}
            >
                <div className="flex items-center gap-2">
                    {isImporting ? (
                        <FiRefreshCw className="text-lg animate-spin text-primary"/>
                    ) : (
                        <FiUpload className="text-lg"/>
                    )}
                    <span className="font-medium">
                        {isImporting ? 'Importing Collection...' : 'Import Collection'}
                    </span>
                </div>

                {isImporting && (
                    <div className="absolute bottom-0 left-0 h-1 bg-primary/20 w-full">
                        <div className="h-full bg-primary animate-progress"></div>
                    </div>
                )}
            </button>

            {!isImporting && (
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 to-secondary/5
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"/>
            )}
        </div>
    );
};

export default ImportButton;