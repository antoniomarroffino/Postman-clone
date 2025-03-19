import { FC } from "react";

interface Header {
    key: string;
    value: string;
}

interface HeadersTableProps {
    headers: Header[];
    onAddHeader: () => void;
    onHeaderChange: (index: number, field: 'key' | 'value', value: string) => void;
}

const HeadersTable: FC<HeadersTableProps> = ({ headers, onAddHeader, onHeaderChange }) => {
    return (
        <div className="w-1/2 flex flex-col">
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold">Headers</h3>
                <button className="btn btn-circle btn-xs" onClick={onAddHeader}>
                    +
                </button>
            </div>

            <div className="overflow-x-auto bg-base-200 rounded-lg flex-1">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    {headers.map((header, index) => (
                        <tr key={index}>
                            <td>
                                <input
                                    type="text"
                                    className="input input-ghost input-xs w-full"
                                    placeholder="Header"
                                    value={header.key}
                                    onChange={(e) => onHeaderChange(index, 'key', e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="input input-ghost input-xs w-full"
                                    placeholder="Value"
                                    value={header.value}
                                    onChange={(e) => onHeaderChange(index, 'value', e.target.value)}
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HeadersTable;