import {ReactNode, useState} from "react";
import {HttpContext} from "../contexts/HttpContext";
import {HttpState} from "../types/model/HttpState.ts";
import {HttpResponseDTO} from "../types/model/HttpResponseDTO.tsx";

export const HttpProvider = ({children, initialUrl}: { children: ReactNode; initialUrl?: string }) => {
    const [state, setState] = useState<HttpState>({
        request: {
            method: 'GET',
            uri: initialUrl || '',
            headers: {},
            body: ''
        },
        loading: false
    });

    const actions = {
        setMethod: (method: string) => setState(prev => ({
            ...prev,
            request: {...prev.request, method}
        })),

        setUri: (uri: string) => setState(prev => ({
            ...prev,
            request: {...prev.request, uri}
        })),

        setHeader: (key: string, value: string) => setState(prev => ({
            ...prev,
            request: {
                ...prev.request,
                headers: {...prev.request.headers, [key]: value}
            }
        })),

        removeHeader: (key: string) => setState(prev => {
            const headers = {...prev.request.headers};
            delete headers[key];
            return {...prev, request: {...prev.request, headers}};
        }),

        setBody: (body: string) => setState(prev => ({
            ...prev,
            request: {...prev.request, body}
        })),

        sendRequest: async () => {
            try {
                setState(prev => ({...prev, loading: true, error: undefined}));

                const startTime = performance.now();
                const response = await fetch(state.request.uri, {
                    method: state.request.method,
                    headers: new Headers(state.request.headers),
                    body: state.request.body
                });

                const responseData: HttpResponseDTO = {
                    status: `${response.status} ${response.statusText}`,
                    data: await response.text(),
                    headers: Object.fromEntries(response.headers.entries()),
                    time: performance.now() - startTime,
                    size: +response.headers.get('Content-Length')! || 0
                };

                setState(prev => ({
                    ...prev,
                    response: responseData,
                    loading: false
                }));
            } catch (err) {
                setState(prev => ({
                    ...prev,
                    error: err instanceof Error ? err.message : 'Unknown error',
                    loading: false
                }));
            }
        }
    };

    return (
        <HttpContext.Provider value={{state, actions}}>
            {children}
        </HttpContext.Provider>
    );
};