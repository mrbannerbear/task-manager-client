import { Outlet } from "react-router-dom";
import Sidebar from "./taskComps/Sidebar";
import TaskNav from "./taskComps/TaskNav";


const Tasks = () => {
    return (
        <div className="p-3 lg:p-6 min-h-screen">
            <TaskNav></TaskNav>
            <div className="lg:grid grid-cols-4">
                <Sidebar></Sidebar>
                <div className="col-span-3">
                    <Outlet></Outlet>
                </div>
            </div>
            
        </div>
    );
};

export default Tasks;