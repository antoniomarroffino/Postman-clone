import { useHttp } from "../../hooks/useHttp";

const UriInput: React.FC = () => {
    const { state, actions } = useHttp();

    return (
        <input
            type="text"
            placeholder="Enter URL"
            className="input input-bordered flex-1"
            value={state.request.uri}
            onChange={(e) => actions.setUri(e.target.value)}
        />
    );
};

export default UriInput;