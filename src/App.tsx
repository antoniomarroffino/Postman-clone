import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import HttpClient from "./components/HttpClient";
import { CollectionsProvider } from "./provider/CollectionProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CollectionsProvider>
        <HttpClient url="" search={true} collections={true} />
      </CollectionsProvider>
    </QueryClientProvider>
  );
}

export default App;
