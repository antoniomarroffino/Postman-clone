import {useHttp} from "../../hooks/useHttp";
import React from "react";

const RequestBody: React.FC = () => {
    const {state, actions} = useHttp();

    return (
        <div className="flex-1 flex flex-col max-h-64 overflow-auto">
            <h3 className="font-bold text-lg mb-2">Request Body</h3>
            <textarea
                className="textarea flex-1 bg-base-200 w-full overflow-y-auto resize-none"
                placeholder="Raw content"
                value={state.request.body}
                onChange={(e) => actions.setBody(e.target.value)}
            />
        </div>
    );
};

export default RequestBody;
