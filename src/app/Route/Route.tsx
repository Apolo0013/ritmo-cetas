import { createBrowserRouter } from "react-router-dom";
//pages
import Home from "../../features/Home/Page/Home";

export const router = createBrowserRouter([
    {
        element: <Home />,
        path: '/'
    }
])