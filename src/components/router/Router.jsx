import { createBrowserRouter } from "react-router-dom";
import MainELement from "../main/MainELement";
import Home from "../home/Home";
import Signup from "../auth/Signup";
import Login from "../auth/Login";
import Tasks from "../tasks/Tasks";
import YourTasks from "../tasks/taskComps/yourTasks/YourTasks";
import Partners from "../partners/Partners";

const router = new createBrowserRouter([
  {
    path: "/",
    element: <MainELement></MainELement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/partners",
        element: <Partners></Partners>
      },
      {
        path: "/tasks",
        element: <Tasks></Tasks>,
        children: [
            {
                path: "/tasks",
                element: <YourTasks></YourTasks>
            }
        ]
      }
    ],
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
