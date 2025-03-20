import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import "./App.css";
import HttpClient from "./components/HttpClient";
import {CollectionsProvider} from "./provider/CollectionProvider";
import {FileProvider} from "./provider/FileProvider.tsx";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <CollectionsProvider>
                <FileProvider>
                    <HttpClient url="" search={true} collections={true}/>
                </FileProvider>
            </CollectionsProvider>
        </QueryClientProvider>
    );
}

export default App;
