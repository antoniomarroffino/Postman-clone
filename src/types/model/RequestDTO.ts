export default interface RequestDTO {
    id: string;
    name: string;
    uri: string;
    method: string;
    headers: {
        [key: string]: string[];
    };
    body: string;
    collectionId: number;
}