import { NavLink } from "react-router-dom";

const TaskNav = () => {
  const sideComps = [
    {
      id: 1,
      name: "Your Tasks",
      path: "/tasks",
    },
    {
      id: 2,
      name: "Add Task",
      path: "/add-task",
    },
  ];

  return (
    <div className="navbar bg-base-100 lg:hidden rounded-sm mb-5">
      <div className="flex justify-center w-full">
        <ul className="menu menu-horizontal px-1 gap-5">
          {sideComps.map((each) => (
            <NavLink key={each.id} to={each?.path}>
              <li> {each.name} </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskNav;
