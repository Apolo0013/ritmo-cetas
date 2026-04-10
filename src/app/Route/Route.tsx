import { createBrowserRouter } from "react-router-dom";
//pages
import Home from "../../features/Home/Page/Home";
import Play from "../../features/Play/Page/Play";

export const router = createBrowserRouter([
    {
        element: <Home />,
        path: '/home'
    },
    {
        element: <Play />,
        path: '/play'
    }
])