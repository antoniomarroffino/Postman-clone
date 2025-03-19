import {HttpResponseDTO} from "./HttpResponseDTO";

export interface HttpState {
    request: {
        method: string;
        uri: string;
        headers: Array<{ key: string; value: string }>;
        body: string;
    };
    response?: HttpResponseDTO;
    loading: boolean;
    error?: string;
}