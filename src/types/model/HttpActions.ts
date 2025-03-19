export interface HttpActions {
    setMethod: (method: string) => void;
    setUri: (uri: string) => void;
    addHeader: () => void;
    updateHeader: (index: number, field: 'key' | 'value', value: string) => void;
    removeHeader: (index: number) => void;
    setBody: (body: string) => void;
    sendRequest: () => Promise<void>;
}