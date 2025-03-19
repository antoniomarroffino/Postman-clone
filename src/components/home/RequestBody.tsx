import { FC } from "react";
import { useHttp } from "../../hooks/useHttp";

const RequestBody: FC = () => {
    const { state, actions } = useHttp();

    return (
        <div className="flex-1 flex flex-col">
            <h3 className="font-bold text-lg mb-2">Request Body</h3>
            <textarea
                className="textarea h-full bg-base-200 w-full overflow-x-hidden"
                placeholder="Raw content"
                value={state.request.body}
                onChange={(e) => actions.setBody(e.target.value)}
            />
        </div>
    );
};

export default RequestBody;