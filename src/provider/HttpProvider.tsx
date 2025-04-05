import {ReactNode, useEffect, useMemo, useState} from "react";
import {HttpContext} from "../contexts/HttpContext";
import {HttpState} from "../types/model/HttpState.ts";
import {HttpActions} from "../types/model/HttpActions.ts";
import {HttpResponseDTO} from "../types/model/HttpResponseDTO.ts";
import RequestDTO from "../types/model/RequestDTO.ts";
import {useSelectedRequest} from "../hooks/request/useSelectedRequest.ts";
import {useUrl} from "../hooks/useUrl.ts";

export const HttpProvider = ({children}: { children: ReactNode }) => {
    const {selectedRequest} = useSelectedRequest();
    const [state, setState] = useState<HttpState>({
        request: {
            id: crypto.randomUUID(),
            name: "",
            uri: "",
            method: "GET",
            headers: {},
            body: "",
            collectionId: 0,
        } as RequestDTO,
        loading: false,
        error: undefined,
        response: undefined,
    });

    const {url} = useUrl();

    useEffect(() => {
        if (selectedRequest) {
            setState((prev) => ({
                ...prev,
                request: selectedRequest,
                response: undefined,
                error: undefined,
                loading: false,
            }));
        }
    }, [selectedRequest?.id]);

    const actions: HttpActions = useMemo(
        () => ({
            setMethod: (method: string) =>
                setState((prev) => ({
                    ...prev,
                    request: {...prev.request, method},
                })),

            setUri: (uri: string) =>
                setState((prev) => ({
                    ...prev,
                    request: {...prev.request, uri},
                })),

            addHeader: (key: string = "", value: string = "") =>
                setState((prev) => ({
                    ...prev,
                    request: {
                        ...prev.request,
                        headers: {
                            ...prev.request.headers,
                            [key]: value ? [value] : [],
                        },
                    },
                })),

            updateHeader: (oldKey: string, newKey: string, newValue: string) =>
                setState((prev) => {
                    const newHeaders = {...prev.request.headers};
                    if (oldKey !== newKey) {
                        delete newHeaders[oldKey];
                    }
                    newHeaders[newKey] = newValue ? [newValue] : [];
                    return {
                        ...prev,
                        request: {
                            ...prev.request,
                            headers: newHeaders,
                        },
                    };
                }),

            removeHeader: (key: string) =>
                setState((prev) => {
                    const newHeaders = {...prev.request.headers};
                    delete newHeaders[key];
                    return {
                        ...prev,
                        request: {
                            ...prev.request,
                            headers: newHeaders,
                        },
                    };
                }),

            setBody: (body: string) =>
                setState((prev) => ({
                    ...prev,
                    request: {...prev.request, body},
                })),

            sendRequest: async () => {
                try {
                    setState((prev) => ({...prev, loading: true, error: undefined}));

                    const httpRequestDTO = {
                        method: state.request.method,
                        uri: state.request.uri,
                        headers: state.request.headers,
                        body: state.request.method === "GET" ? "" : state.request.body,
                    };

                    console.log(httpRequestDTO);
                    const startTime = performance.now();
                    const response = await fetch(`${url}/proxy/execute`, {
                        method: "POST",
                        headers: {
                            Accept: "*/*",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(httpRequestDTO),
                    });

                    let data = await response.text();
                    try {
                        data = JSON.stringify(JSON.parse(data), null, 2);
                    } catch { /* empty */ }

                    const responseData: HttpResponseDTO = {
                        status: `${response.status} ${response.statusText}`,
                        data,
                        headers: Object.fromEntries(response.headers.entries()),
                        time: performance.now() - startTime,
                        size: new TextEncoder().encode(data).length,
                    };

                    console.log(responseData);

                    setState((prev) => ({
                        ...prev,
                        response: responseData,
                        loading: false,
                    }));
                } catch (err) {
                    const error = err instanceof Error ? err.message : "Unknown error";
                    setState((prev) => ({
                        ...prev,
                        error,
                        loading: false,
                    }));
                }
            },
        }),
        [state.request]
    );

    const value = useMemo(() => ({state, actions}), [state, actions]);

    return (
        <HttpContext.Provider value={value}>
            {children}
        </HttpContext.Provider>
    );
};
