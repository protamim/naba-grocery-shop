import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import ScaledButton from "./ScaledButton";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

const Login = ({handleToggle}) => {
  return (
    <>
      <div className="mb-8 p-5">
        {/* Title */}
        <h4 className="text-center text-2xl font-medium mb-10">
          Please Sign In to continue
        </h4>
        {/* Login field */}
        <form className="space-y-5">
          {/* Email */}
          <div className="text-center relative">
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              className="w-full h-11 border border-stone-200 rounded-md pl-10 text-sm outline-none focus:outline-none transition-all duration-300 ease-linear focus:border-green-600 group"
            />
            <span className="absolute top-1/2 left-2 -translate-y-1/2 text-green-800 text-xl">
              <MdOutlineEmail />
            </span>
          </div>

          {/* Password */}
          <div className="text-center relative">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="w-full h-11 border border-stone-200 rounded-md pl-10 text-sm outline-none focus:outline-none transition-all duration-300 ease-linear focus:border-green-600 group"
            />
            <span className="absolute top-1/2 left-2 -translate-y-1/2 text-green-800 text-xl">
              <RiLockPasswordLine />
            </span>
          </div>

          {/* Forgot Password */}
          <div>
            <ScaledButton href="#" parentClass="!text-black !max-w-max">
              Forgot Password?
            </ScaledButton>
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="bg-orange-500 text-center mx-auto block w-full py-2 rounded-3xl text-white transition-all duration-300 ease-in-out hover:bg-orange-600"
          >
            Sign In
          </button>
        </form>
      </div>
      
      {/* Login Bottom */}
      <div className="bg-slate-100 rounded-b-md rounded-t-2xl pt-5 pb-3">
        {/* Title */}
        <h4 className="text-base text-center">Or Sign In with</h4>

        {/* Login Options */}
        <div className="text-center flex gap-x-4 items-center justify-center px-5 mt-5 mb-8">
          {/* Google */}
          <div className="relative z-10 flex items-center justify-center gap-x-2 bg-white basis-1/2 py-2 rounded-3xl cursor-pointer before:transition-all before:duration-300 before:ease before:bg-gray-200 before:w-full before:h-full before:top-0 before:left-0 before:absolute before:rounded-3xl before:z-[-1] before:scale-0 hover:before:scale-100">
            <span>
              <FcGoogle />{" "}
            </span>
            <p>Google</p>
          </div>

          {/* Facebook */}
          <div className="relative z-10 flex items-center justify-center gap-x-2 bg-white basis-1/2 py-2 rounded-3xl cursor-pointer before:transition-all before:duration-300 before:ease before:bg-gray-200 before:w-full before:h-full before:top-0 before:left-0 before:absolute before:rounded-3xl before:z-[-1] before:scale-0 hover:before:scale-100">
            <span>
              <FaFacebook />{" "}
            </span>
            <p>Facebook</p>
          </div>
        </div>

        {/* Sign Up Option */}
        <div className="flex justify-center items-center gap-x-2">
          <p>Looking for a new account? </p>
          <Link
            href="#"
            onClick={handleToggle}
            className="text-orange-600 font-semibold transition-all duration-300 ease-in-out hover:opacity-70 hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
