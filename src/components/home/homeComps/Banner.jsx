import { NavLink } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
  return (
    <div className="hero min-h-screen bg-transparent bg-cover relative ">
  
      <div className="hero-content text-center ">
        <div className="max-w-md lg:max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold text-poppins">
            Organize Your Chaos into Awesomeness!
          </h1>
          <p className="py-6">
            Elevate Your Productivity and Serenity with ProjectPilot - Your
            Essential Task Manager and To-Do List Companion.
          </p>
          <NavLink to={`/tasks`}>
            <button className="px-3 py-2 bg-blue-200 rounded-sm border border-blue-200">
                Let's Explore
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
