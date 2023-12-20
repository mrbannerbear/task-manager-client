import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navItems = [
        {
            id: 1,
            name: "Projects",
            path: "/projects"
        }
    ]

    return (
        <div className="navbar bg-base-100 px-3 md:px-6 lg:px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {
                    navItems.map(
                        each => (
                            <NavLink key={each.id}>
                                <button className="hover:text-blue-600">
                                    {each.name}
                                </button>
                            </NavLink>
                        )
                    )
                }
            </ul>
          </div>
          <a className="text-2xl text-blue-400 font-semibold">Project<span className="text-blue-600 text-poppins">Pilot</span></a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {
                    navItems.map(
                        each => (
                            <NavLink key={each.id}>
                                <button className="hover:text-blue-600 hover:bg-blue-200 px-3 py-2 transition-all 
                                rounded-sm active:scale-95">
                                    {each.name}
                                </button>
                            </NavLink>
                        )
                    )
                }
          </ul>
        </div>
      </div>
    );
};

export default Navbar;