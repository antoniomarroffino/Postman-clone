export default interface RequestDTO {
    id: string;
    name: string;
    uri: string;
    method: string;
    headers: {
        properties: string[];
    }
    body: string;
    collectionId: number;
}