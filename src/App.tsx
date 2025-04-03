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
            {/*
            <hr/>
            <HttpClient
                url="https://supsi-ticket.cloudns.org/supsi-http-client"
                search={false}
                collections={true}
                onResponseMessageClick={(response) => alert(response.status)}
            />
            <hr/>
            <HttpClient
                url="https://supsi-ticket.cloudns.org/supsi-http-client"
                search={true}
                collections={false}
                onResponseMessageClick={(response) => alert(response.status)}
            />
            <hr/>
            <HttpClient
                url="https://supsi-ticket.cloudns.org/supsi-http-client"
                search={false}
                collections={false}
                onResponseMessageClick={(response) => alert(response.status)}
            />
            */}
        </QueryClientProvider>
    );
}

export default App;
