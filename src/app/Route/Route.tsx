import { createBrowserRouter, Navigate, useNavigate } from "react-router-dom";
//pages
import Home from "../../features/Home/Page/Home";
import Play from "../../features/Play/Page/Play";
import Page404 from "../../features/404/page/404";

export const router = createBrowserRouter([
    
    {
        element: <Navigate to="/home" replace/>,
        path: '/'
    },
    {
        element: <Navigate to="/404" replace />,
        path: "*"
    },
    {
        element: <Page404 />,
        path: '/404'
    },
    {
        element: <Home />,
        path: '/home'
    },
    {
        element: <Play />,
        path: '/play'
    }
])