import { FC } from "react";
import HeaderRow from "./HeaderRow";
import TableHeaderRow from "./TableHeaderRow.tsx";

interface Header {
    key: string;
    value: string;
}

interface HeadersTableProps {
    headers: Header[];
    onAddHeader: () => void;
    onHeaderChange: (index: number, field: 'key' | 'value', value: string) => void;
    onRemoveHeader: (index: number) => void;
}

const HeadersTable: FC<HeadersTableProps> = ({ headers, onAddHeader, onHeaderChange, onRemoveHeader }) => {
    return (
        <div className="w-1/2 flex flex-col">
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">Headers</h3>
                <button
                    className="btn btn-circle btn-sm btn-ghost"
                    onClick={onAddHeader}
                    disabled={headers.length >= 10}
                >
                    +
                </button>
            </div>

            <div className="bg-base-200 rounded-lg flex-1 overflow-hidden flex flex-col">
                {/* Header fisso fuori dall'area scrollabile */}
                <table className="table w-full border-b border-base-content/10">
                    <thead>
                    <TableHeaderRow />
                    </thead>
                </table>

                {/* Container scrollabile solo per il body */}
                <div className="overflow-y-auto flex-1 max-h-64 relative">
                    <table className="table w-full">
                        <tbody>
                        {headers.map((header, index) => (
                            <HeaderRow
                                key={index}
                                index={index}
                                header={header}
                                onHeaderChange={onHeaderChange}
                                onRemoveHeader={onRemoveHeader}
                            />
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default HeadersTable;