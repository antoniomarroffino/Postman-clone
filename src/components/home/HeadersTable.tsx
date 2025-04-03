import {useHttp} from "../../hooks/useHttp";
import HeaderRow from "./HeaderRow";
import TableHeaderRow from "./TableHeaderRow";
import React from "react";

const HeadersTable: React.FC = () => {
    const { state, actions } = useHttp();

    const headersEntries = Object.entries(state.request.headers);

    return (
        <div className="w-full md:w-1/2 flex flex-col max-h-64 overflow-auto">
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">Headers</h3>
                <button
                    className="btn btn-circle btn-sm btn-ghost"
                    onClick={() => actions.addHeader("", "")}
                >
                    +
                </button>
            </div>

            <div className="bg-base-200 rounded-lg flex-1 overflow-hidden flex flex-col">
                <table className="table w-full border-b border-base-content/10">
                    <thead>
                    <TableHeaderRow />
                    </thead>
                </table>

                <div className="overflow-y-auto flex-1">
                    <table className="table w-full">
                        <tbody>
                        {headersEntries.map(([headerKey, values]) => (
                            <HeaderRow
                                key={headerKey}
                                headerKey={headerKey}
                                value={values[0] || ""}
                                onHeaderChange={(field, newValue) => {
                                    if (field === "key") {
                                        actions.updateHeader(headerKey, newValue, state.request.headers[headerKey][0] || "");
                                    } else {
                                        actions.updateHeader(headerKey, headerKey, newValue);
                                    }
                                }}
                                onRemoveHeader={() => actions.removeHeader(headerKey)}
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
