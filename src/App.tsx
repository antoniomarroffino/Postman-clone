import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import "./App.css";
import HttpClient from "./components/HttpClient";
import {CollectionsProvider} from "./provider/CollectionProvider";
import {FileProvider} from "./provider/FileProvider.tsx";
import {PreviewProvider} from "./provider/PreviewProvider.tsx";
import {usePreview} from "./hooks/usePreview.ts";
import {useEffect} from "react";
import {ImagePreviewStrategy} from "./components/home/previewStrategy/strategy/ImagePreviewStrategy.tsx";
import {HtmlPreviewStrategy} from "./components/home/previewStrategy/strategy/HtmlPreviewStrategy.tsx";
import {HttpProvider} from "./provider/HttpProvider.tsx";
import {RequestCRUDProvider} from "./provider/request/RequestCRUDProvider.tsx";
import {SelectedRequestProvider} from "./provider/request/SelectedRequestProvider.tsx";

const queryClient = new QueryClient();

const PreviewRegistrar: React.FC = () => {
    const {registerStrategy} = usePreview();
    useEffect(() => {
        registerStrategy(new ImagePreviewStrategy());
        registerStrategy(new HtmlPreviewStrategy());
    }, [registerStrategy]);

    return null;
};

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <CollectionsProvider>
                <SelectedRequestProvider>
                    <RequestCRUDProvider>
                        <FileProvider>
                            <HttpProvider>
                                <PreviewProvider>
                                    <PreviewRegistrar/>
                                    <HttpClient
                                        url=""
                                        search={true}
                                        collections={true}
                                        onResponseMessageClick={(response) => alert(response.status)}
                                    />
                                </PreviewProvider>
                            </HttpProvider>
                        </FileProvider>
                    </RequestCRUDProvider>
                </SelectedRequestProvider>
            </CollectionsProvider>
        </QueryClientProvider>
    );
}

export default App;
