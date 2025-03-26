import { useHttp } from "../../hooks/useHttp";

interface UriInputProps {
    url: string;
}

const UriInput: React.FC<UriInputProps> = ({url}) => {
    const { state, actions } = useHttp();

    return (
        <input
            type="text"
            placeholder="Enter URL"
            className="input input-bordered flex-1"
            value={state.request.uri.length === 0 ? url : state.request.uri}
            onChange={(e) => actions.setUri(e.target.value)}
        />
    );
};

export default UriInput;