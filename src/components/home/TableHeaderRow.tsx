import { FC } from "react";

const TableHeaderRow: FC = () => {
    return (
        <tr className="bg-base-300">
            <th className="w-1/2 font-bold p-2 text-left">Header</th>
            <th className="w-1/2 font-bold p-2 text-left">Value</th>
        </tr>
    );
};

export default TableHeaderRow;