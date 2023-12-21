/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthProvider } from "../../context/AuthContext";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaFacebook, FaGoogle, FaHome } from "react-icons/fa";

const Login = () => {
    const { login, googleAuth, facebookAuth } = useContext(AuthProvider);
  const { register, handleSubmit } = useForm();
  const [ error, setError ] = useState(null)
  const navigate = useNavigate();
  const location = useLocation();

  const handleForm = (d) => {

    login(d.email, d.password)
      .then((res) => {
        console.log(res);
        navigate(location?.state ? location?.state : "/")
      })
      .catch((err) => {console.log(err);
    setError("Incorrect email or password.")});
  };

  const HandleGoogleAuth = () => {
    googleAuth()
      .then((data) => {
        console.log(data);
          toast("Log in successful");
        setError(null);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
        // setError(err.message);
      });
  };

  const HandleFacebookAuth = () => {
    facebookAuth()
      .then((data) => {
        console.log(data);
          toast("Log in successful");
        setError(null);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
        // setError(err.message);
      });
  };

  return (
    <div className="bg-blue-50/50 py-12">
    <div className="w-3/4 lg:w-1/3 mx-auto pt-6">
        <NavLink to={`/`}>
            <span>
            <FaHome className="text-2xl"></FaHome>
            </span>
        </NavLink>
    </div>
    <div
      className=" min-h-screen flex flex-col justify-center items-center">
        <div className="text-center mb-4">
            <h2 className="text-3xl font-semibold">Login</h2>
        </div>


        <p className="w-3/4 lg:w-1/3 mx-auto justify-center flex flex-col items-center">
                  <button
                    className="text-sm flex border-[1.5px] items-center justify-center gap-2 border-blue-500/30
                    rounded-sm
              w-full
              py-2"
                    onClick={HandleGoogleAuth}
                  >
                    <FaGoogle></FaGoogle> Login with Google
                  </button>

                  <button
                    className="text-sm flex my-3 border-[1.5px] items-center justify-center gap-2 border-blue-500/30
                    rounded-sm
              w-full
              py-2"
                    onClick={HandleFacebookAuth}
                  >
                    <FaFacebook></FaFacebook> Login with Facebook
                  </button>
                </p>
                <span className="my-5"> Or</span>


      <form className="w-3/4 lg:w-1/3 mx-auto"
            onSubmit={handleSubmit(handleForm)}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            {...register("email")}
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b border-[#607244] appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#607244] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            {...register("password")}
            type="password"
            name="password"
            id="password"
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b border-[#607244] appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#607244] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <button
          type="submit"
          className="btn1"
        >
          Submit
        </button>
        <p className="mt-4 text-sm text-red-400">
            {error}
        </p>
      </form>
      <div className="w-3/4 lg:w-1/3 mx-auto mt-6 text-sm text-center">
            Don't have an account? <span className="underline"> <NavLink to={`/signup`}>Sign up</NavLink></span> for free now!
      </div>
      <Toaster></Toaster>
    </div>
    </div>
  );
};

export default Login;
