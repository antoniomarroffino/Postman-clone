export default interface Request {
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