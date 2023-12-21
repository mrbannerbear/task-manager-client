import { NavLink } from "react-router-dom";
import Banner from "./homeComps/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mt-6 min-h-screen p-3 lg:px-12">

        
      <div className="hero bg-base-100 rounded-sm py-12 px-3">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img className="w-1/2" src="/pngwing.com.png" />
    <div>
      <h1 className="text-5xl font-bold">Loved by ALL!</h1>
      <p className="py-6">
        Students, businessmen, developers...even astronauts, ProjectPilot is used by millions of users!
      </p>
      <NavLink to={`/partners`}>
      <button className="btn1">See Our Partners</button>
      </NavLink>
    </div>
  </div>
</div>

    <div className="py-12 px-3 lg:px-12 text-center">
        <p className="text-3xl">Trusted By:</p>

        <div className="flex justify-center items-center flex-wrap gap-3 lg:gap-5 my-4">
            <img className="w-20" src="/public/google-logo.png" alt="" />
            <img className="w-20" src="/public/lakers-logo.png" alt="" />
            <img className="w-20" src="/public/microsoft-logo.png" alt="" />
            <img className="w-24" src="/public/aston-martin-logo.png" alt="" />
            <img className="w-16" src="/public/al-jazeera-logo.png" alt="" />
        </div>
        <p>...and more!</p>
    </div>

      </div>
    </div>
  );
};

export default Home;
