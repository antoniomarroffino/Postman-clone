export default interface RequestCreationDTO {
    name: string;
    uri: string;
    method: string;
    headers: {
        [key: string]: string[];
    }
    body: string;
    collectionId: number;
}