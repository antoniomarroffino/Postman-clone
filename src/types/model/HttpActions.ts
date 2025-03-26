export interface HttpActions {
    setMethod: (method: string) => void;
    setUri: (uri: string) => void;
    addHeader: (key: string, value: string) => void;
    updateHeader: (oldKey: string, newKey: string, newValue: string) => void;
    removeHeader: (key: string) => void;
    setBody: (body: string) => void;
    sendRequest: () => Promise<void>;
}