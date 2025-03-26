import { useHttp } from "../../hooks/useHttp";
import {useEffect} from "react";

interface UriInputProps {
    initialUri: string;
}

const UriInput: React.FC<UriInputProps> = ({initialUri}) => {
    const { state, actions } = useHttp();

    useEffect(() => {
        actions.setUri(initialUri);
    }, [initialUri, actions]);

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