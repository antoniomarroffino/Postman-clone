import {FC, useEffect, useState} from "react";

interface HeaderRowProps {
    headerKey: string;
    value: string;
    onHeaderChange: (field: "key" | "value", newValue: string) => void;
    onRemoveHeader: () => void;
}

const HeaderRow: FC<HeaderRowProps> = ({
                                           headerKey,
                                           value,
                                           onHeaderChange,
                                           onRemoveHeader,
                                       }) => {
    // Stato locale per gestire i valori digitati
    const [localKey, setLocalKey] = useState(headerKey);
    const [localValue, setLocalValue] = useState(value);

    // Aggiorna lo stato locale se le props cambiano
    useEffect(() => {
        setLocalKey(headerKey);
    }, [headerKey]);

    useEffect(() => {
        setLocalValue(value);
    }, [value]);

    const keyEmpty = !localKey && !!localValue;
    const valueEmpty = !!localKey && !localValue;

    return (
        <tr className="hover:bg-base-300 transition-colors group relative">
            {/* Colonna Key */}
            <td className="p-1 border-r border-base-content/10">
                <div className="relative">
                    <input
                        type="text"
                        className={`input input-sm input-ghost w-full focus:bg-base-100 rounded-none pr-8 ${
                            keyEmpty ? "input-error" : ""
                        }`}
                        placeholder="Header"
                        value={localKey}
                        onChange={(e) => setLocalKey(e.target.value)}
                        onBlur={() => onHeaderChange("key", localKey)}
                    />
                    {keyEmpty && (
                        <div className="absolute right-2 top-1/2 -translate-y-1/2">
                            <div
                                className="tooltip tooltip-left"
                                data-tip="Completa entrambi i campi"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-error"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                </svg>
                            </div>
                        </div>
                    )}
                </div>
            </td>

            {/* Colonna Value */}
            <td className="p-1">
                <div className="flex items-center gap-1">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            className={`input input-sm input-ghost w-full focus:bg-base-100 rounded-none pr-8 ${
                                valueEmpty ? "input-error" : ""
                            }`}
                            placeholder="Value"
                            value={localValue}
                            onChange={(e) => setLocalValue(e.target.value)}
                            onBlur={() => onHeaderChange("value", localValue)}
                        />
                        {valueEmpty && (
                            <div className="absolute right-2 top-1/2 -translate-y-1/2">
                                <div
                                    className="tooltip tooltip-left"
                                    data-tip="Completa entrambi i campi"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-error"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Pulsante di rimozione (se non è header di default) */}
                    <button
                        className="btn btn-circle btn-xs opacity-0 group-hover:opacity-100 transition-opacity hover:btn-error"
                        onClick={onRemoveHeader}
                    >
                        ×
                    </button>

                </div>
            </td>
        </tr>
    );
};

export default HeaderRow;
