import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthProvider);

  const navItems = [
    {
      id: 1,
      name: "Tasks",
      path: "/tasks",
    },
    {
      id: 2,
      name: "Partners",
      path: "/partners",
    },
    user
      ? {
          id: 3,
          element: (
            <button className="lg:py-2 lg:px-3 rounded-sm hover:bg-blue-200"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          ),
        }
      : {
          id: 4,
          element: <button className="btn1">Sign Up for Free</button>,
          path: "/signup",
        },
  ];

  return (
    <div className="navbar bg-transparent px-3 md:px-6 lg:px-12 sticky top-0 z-[1]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems.map((each) => (
              <NavLink key={each.id} to={each.path}>
                <button
                  className="px-3 py-2 transition-all 
                                rounded-sm active:scale-95"
                >
                  {each.element ? each.element : each.name}
                </button>
              </NavLink>
            ))}
          </ul>
        </div>
        <NavLink to={`/`}>
        <span className="text-2xl text-blue-400 font-semibold hover:cursor-pointer">
          Project
          <span className="text-blue-600 text-poppins text-2xl">Pilot</span>
        </span>
        </NavLink>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5">
          {navItems.map((each) => (
            <NavLink key={each.id} to={each.path}>
              {each.element ? (
                each.element
              ) : (
                <button
                  className="px-3 py-2 transition-all 
                     rounded-sm active:scale-95 hover:bg-blue-200"
                >
                  {each.name}
                </button>
              )}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
