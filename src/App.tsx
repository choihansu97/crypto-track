import GlobalStyles from "./theme/globalStyles";
import React from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {RouterProvider} from "react-router-dom";
import router from "./routes";
import {ThemeProvider} from "./context/themeContext";

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <GlobalStyles/>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default App
