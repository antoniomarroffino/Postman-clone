import { FC } from "react";
import { useHttp } from "../../hooks/useHttp";
import { METHODS_REQUIRING_BODY } from "../../config/config.ts";
import {HttpResponseDTO} from "../../types/model/HttpResponseDTO.ts";

interface SendButtonProps {
    onResponseMessageClick: (response: HttpResponseDTO) => void;
}

const SendButton: FC<SendButtonProps> = ({onResponseMessageClick}) => {
    const { state, actions } = useHttp();

    const isValidRequest = () => {
        const hasValidUri = state.request.uri.startsWith('http://') ||
            state.request.uri.startsWith('https://');

        const hasRequiredBody = METHODS_REQUIRING_BODY.includes(state.request.method)
            ? state.request.body.trim().length > 0
            : true;

        return hasValidUri && hasRequiredBody;
    };

    const isDisabled = state.loading || !isValidRequest();

    return (
        <button
            className={`btn btn-primary 
                text-black font-bold
                transition-all duration-200
                hover:brightness-110
                active:scale-95
                disabled:opacity-50
                disabled:text-base-content/50
                disabled:cursor-not-allowed
                ${state.loading ? 'loading' : ''}`}
            onClick={() => actions.sendRequest(onResponseMessageClick)}
            disabled={isDisabled}
            aria-disabled={isDisabled}
        >
            {state.loading ? (
                <span className="text-black">Sending...</span>
            ) : (
                'Send'
            )}
        </button>
    );
};

export default SendButton;