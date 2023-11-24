import {createBrowserRouter} from "react-router-dom";
import Layout from "./components/layout";
import Main from "./pages/main";
import CoinView from "./pages/coinView";

const router = createBrowserRouter([
    {
    path: "/",
    element: <Main/>
    },
    {
        path:"/coin-view/:id",
        element: <CoinView/>
    }
])

export default router;