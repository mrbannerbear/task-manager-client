import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainELement = () => {
  return (
    <div>
      <div
        className="absolute w-full h-max bg-center bg-cover bg-fixed"
        style={{
          backgroundImage: "url(/pngegg.png)",
        }}
      >
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainELement;
