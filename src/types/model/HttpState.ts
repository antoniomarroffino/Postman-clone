import {HttpRequestDTO} from "./HttpRequestDTO.ts";
import {HttpResponseDTO} from "./HttpResponseDTO.tsx";

export interface HttpState {
    request: HttpRequestDTO;
    response?: HttpResponseDTO;
    loading: boolean;
    error?: string;
}