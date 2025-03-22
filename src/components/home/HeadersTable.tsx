import { FC } from "react";
import { useHttp } from "../../hooks/useHttp";
import HeaderRow from "./HeaderRow";
import TableHeaderRow from "./TableHeaderRow";

const HeadersTable: FC = () => {
  const { state, actions } = useHttp();

  return (
    <div className="w-1/2 flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-lg">Headers</h3>
        <button
          className="btn btn-circle btn-sm btn-ghost"
          onClick={actions.addHeader}
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

        <div className="overflow-y-auto flex-1 max-h-64 relative">
          <table className="table w-full">
            <tbody>
              {state.request.headers.map((header, index) => (
                <HeaderRow
                  key={index}
                  index={index}
                  header={header}
                  onHeaderChange={actions.updateHeader}
                  onRemoveHeader={() => actions.removeHeader(index)}
                  defaultHeader={header.key === "Accept"}
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
