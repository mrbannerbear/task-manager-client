import { NavLink } from "react-router-dom";

const Sidebar = () => {

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
          <ul className="menu p-4 min-h-full bg-base-100 text-base-content max-w-sm rounded-sm">
            {/* Sidebar content here */}
            {
                sideComps.map(
                    each => (

                        <NavLink key={each.id} to={each?.path}>
                    
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