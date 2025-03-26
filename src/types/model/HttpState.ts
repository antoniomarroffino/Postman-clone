import {HttpResponseDTO} from "./HttpResponseDTO.ts";
import RequestDTO from "./RequestDTO.ts";

export interface HttpState {
    request: RequestDTO;
    response?: HttpResponseDTO;
    loading: boolean;
    error?: string;
}