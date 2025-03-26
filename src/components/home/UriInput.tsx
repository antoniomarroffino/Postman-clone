import {useHttp} from "../../hooks/useHttp";
import {useEffect} from "react";

interface UriInputProps {
    url: string;
}

const UriInput: React.FC<UriInputProps> = ({url}) => {
    const {state, actions} = useHttp();

    useEffect(() => {
        if (state.request.uri.length === 0)
            actions.setUri(url);
    }, [state.request.uri]);

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