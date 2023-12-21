import { createBrowserRouter } from "react-router-dom";
import MainELement from "../main/MainELement";
import Home from "../home/Home";
import Signup from "../auth/Signup";
import Login from "../auth/Login";

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
    },
    {
        path: "/signup",
        element: <Signup></Signup>
    },
    {
        path: "/login",
        element: <Login></Login>
    }
])

export default router