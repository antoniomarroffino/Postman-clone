import UnknownCollection from "./UnknownCollection.ts";
import UnknownRequestDTO from "./UnknownRequestDTO.ts";

export default interface UnknownExportedData {
    collection?: UnknownCollection;
    requests?: UnknownRequestDTO[];
}