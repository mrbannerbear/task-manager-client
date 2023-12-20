import { createBrowserRouter } from "react-router-dom";
import MainELement from "../main/MainELement";
import Home from "../home/Home";

const router = new createBrowserRouter([
    {
        path: "/",
        element: <MainELement></MainELement>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])

export default router