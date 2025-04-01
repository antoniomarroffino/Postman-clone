import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import "./App.css";
import HttpClient from "./components/HttpClient";

const queryClient = new QueryClient();


function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <HttpClient
                url="https://supsi-ticket.cloudns.org/supsi-http-client"
                search={true}
                collections={true}
                onResponseMessageClick={(response) => alert(response.status)}
            />
            <HttpClient
                url=""
                search={true}
                collections={false}
                onResponseMessageClick={(response) => alert(response.status)}
            />
        </QueryClientProvider>
    );
}

export default App;
