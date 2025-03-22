export interface HttpRequestDTO {
    method: string;
    uri: string;
    headers: Record<string, string[]>;
    body: string;
}