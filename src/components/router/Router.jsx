import { createBrowserRouter } from "react-router-dom";
import MainELement from "../main/MainELement";
import Home from "../home/Home";
import Signup from "../auth/Signup";
import Login from "../auth/Login";
import Tasks from "../tasks/Tasks";
import YourTasks from "../tasks/taskComps/yourTasks/YourTasks";
import Partners from "../partners/Partners";
import PrivateRoutes from "./PrivateRoute";
import AddTasks from "../tasks/taskComps/addTasks/AddTasks";
import EditTasks from "../tasks/taskComps/editTasks/EditTasks";

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
        element: <Partners></Partners>,
      },
      {
        element: (
          <PrivateRoutes>
            <Tasks></Tasks>
          </PrivateRoutes>
        ),
        children: [
          {
            path: "/tasks",
            element: <YourTasks></YourTasks>,
          },
          {
            path: "/add-task",
            element: <AddTasks></AddTasks>,
          },
          {
            path: "/edit-task/:id",
            element: <EditTasks></EditTasks>,
          },
        ],
      },
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
