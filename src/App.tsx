import GlobalStyles from "./theme/globalStyles";
import React from "react";
import {RouterProvider} from "react-router-dom";
import router from "./routes";
import {ThemeProvider} from "./context/themeContext";

function App() {
    return (
        <ThemeProvider>
            <GlobalStyles/>
            <RouterProvider router={router}/>
        </ThemeProvider>
    )
}

export default App
