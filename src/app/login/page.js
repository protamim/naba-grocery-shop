"use client";
import Login from "@/components/ui/Login";
import SignUp from "@/components/ui/SignUp";
import { useState } from "react";

const LoginPage = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(toggle ? false : true);
  };

  return (
    <>
      <section className="bg-slate-200 min-h-[80vh] py-5 flex flex-col justify-center items-center">
        <div className="bg-white rounded-md w-5/6 lg:w-[calc(100%/2)]">
          {toggle ? (
            <>
              <SignUp handleToggle={handleToggle} />
            </>
          ) : (
            <>
              <Login handleToggle={handleToggle} />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default LoginPage;
