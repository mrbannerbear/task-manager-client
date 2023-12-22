import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthProvider } from "../../../context/AuthContext";

const Sidebar = () => {

    const {user} = useContext(AuthProvider)

    const sideComps = [
        {
            id: 1,
            name: "Your Tasks",
            path: "/tasks"
        },
        {
            id: 2,
            name: "Add Task",
            path: "/add-task"
        }
    ]

    return (
        <div className="drawer hidden lg:block lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side rounded-sm px-3 max-w-sm">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-6 min-h-full bg-base-100 text-base-content max-w-sm rounded-sm text-center">
            {/* Sidebar content here */}
            <img src={user?.photoURL} alt="" className="w-20 rounded-full mx-auto mb-4"/>
            {
                sideComps.map(
                    each => (

                        <NavLink key={each.id} to={each?.path} className="border my-2 rounded-sm border-blue-300">
                    
                   <li> {each.name} </li></NavLink>

                    )
                )
            }
          </ul>
        
        </div>
      </div>
    );
};

export default Sidebar;