import { ReactNode, useMemo, useState } from "react";
import { HttpContext } from "../contexts/HttpContext";
import { HttpState } from "../types/model/HttpState.ts";
import { HttpActions } from "../types/model/HttpActions.ts";
import {HttpResponseDTO} from "../types/model/HttpResponseDTO.tsx";

export const HttpProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState<HttpState>({
        request: {
            method: 'GET',
            uri: '',
            headers: [],
            body: ''
        },
        loading: false,
        error: undefined,
        response: undefined
    });

    const actions: HttpActions = useMemo(() => ({
        setMethod: (method: string) => setState(prev => ({
            ...prev,
            request: { ...prev.request, method }
        })),

        setUri: (uri: string) => setState(prev => ({
            ...prev,
            request: { ...prev.request, uri }
        })),

        addHeader: () => setState(prev => ({
            ...prev,
            request: {
                ...prev.request,
                headers: [...prev.request.headers, { key: '', value: '' }]
            }
        })),

        updateHeader: (index: number, field: 'key' | 'value', value: string) => {
            setState(prev => {
                const newHeaders = [...prev.request.headers];
                newHeaders[index] = { ...newHeaders[index], [field]: value };
                return {
                    ...prev,
                    request: {
                        ...prev.request,
                        headers: newHeaders
                    }
                };
            });
        },

        removeHeader: (index: number) => setState(prev => ({
            ...prev,
            request: {
                ...prev.request,
                headers: prev.request.headers.filter((_, i: number) => i !== index)
            }
        })),

        setBody: (body: string) => setState(prev => ({
            ...prev,
            request: { ...prev.request, body }
        })),

        sendRequest: async () => {
            try {
                setState(prev => ({ ...prev, loading: true, error: undefined }));

                const headers = new Headers();
                state.request.headers.forEach(({ key, value }) => {
                    if (key.trim() && value.trim()) headers.append(key, value);
                });

                const startTime = performance.now();
                const response = await fetch(state.request.uri, {
                    method: state.request.method,
                    headers,
                    body: ['GET', 'HEAD'].includes(state.request.method) ? undefined : state.request.body
                });

                let data = await response.text();
                try {
                    data = JSON.stringify(JSON.parse(data), null, 2);
                } catch {}

                const responseData: HttpResponseDTO = {
                    status: `${response.status} ${response.statusText}`,
                    data,
                    headers: Object.fromEntries(response.headers.entries()),
                    time: performance.now() - startTime,
                    size: new TextEncoder().encode(data).length
                };

                setState(prev => ({
                    ...prev,
                    response: responseData,
                    loading: false
                }));

            } catch (err) {
                const error = err instanceof Error ? err.message : 'Unknown error';
                setState(prev => ({
                    ...prev,
                    error,
                    loading: false
                }));
            }
        }
    }), [state.request.method, state.request.uri, state.request.headers, state.request.body]);

    const value = useMemo(() => ({ state, actions }), [state, actions]);

    return <HttpContext.Provider value={value}>{children}</HttpContext.Provider>;
};