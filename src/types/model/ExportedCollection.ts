import RequestDTO from "./RequestDTO.ts";
import RequestCollection from "./RequestCollection.ts";

export default interface ExportedCollection {
    collection: RequestCollection;
    requests: RequestDTO[];
}