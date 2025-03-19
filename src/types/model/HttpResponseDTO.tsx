export interface HttpResponseDTO {
    status: string;
    data: string;
    headers: Record<string, string>;
    time: number;
    size: number;
}