import {FC} from "react";
import {useHttp} from "../../hooks/useHttp";
import {FaSave} from "react-icons/fa";
import {useRequestCRUD} from "../../hooks/request/useRequestCRUD.ts";

const SaveButton: FC = () => {
    const {state} = useHttp();

    const {updateRequest, isUpdatingRequest, errorUpdateRequest} = useRequestCRUD();

    const handleSave = async () => {
        const response = await updateRequest(state.request.collectionId, state.request.id, state.request);
        console.log(response);
    }

    return (
        <button
            className={`btn btn-success
                text-black font-bold
                transition-all duration-200
                hover:brightness-110
                active:scale-95
                disabled:opacity-50
                disabled:text-base-content/50
                disabled:cursor-not-allowed
                gap-2
                ${isUpdatingRequest ? 'loading' : ''}`}
            onClick={handleSave}
        >
            {isUpdatingRequest ? (
                <span className="text-black">Saving...</span>
            ) : (
                <>
                    <FaSave className="w-4 h-4"/>
                    Save
                    {errorUpdateRequest && (
                        <span className="text-xs text-error">
                            ({errorUpdateRequest.message})
                        </span>
                    )}
                </>
            )}
        </button>
    );

};

export default SaveButton;