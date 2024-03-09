"use client";

import {loginWithGoogle} from "@/https/auth";
import Image from "next/image";
import image1 from "../assets/register/image1.jpg";
import {Button} from "@/components/ui/button";
import ProvideLogin from "@/components/ProvideLogin";
import EmailLogin from "@/components/EmailLogin";
import Carousal from "@/components/Carousal";

const LoginPage = () => {
  const googlelogin = async () => {
    await loginWithGoogle();
  };
  return (
    <>
      <title>Login</title>
      {/* <div className="space-y-5">
        <h1 className="text-center mt-10 font-bold text-xl md:text-2xl lg:text-4xl font-mono">
          Welcome to THE FREELANCING PROJECT.
        </h1>
        <h2 className="text-center font-medium text-lg">
          Login to begin your journey to the vast world filled with enthusiatic
          freelancers like yourselves
        </h2>
      </div> */}
      {/* <div className="rounded-md  m-auto mt-20 bg-green-200 from-green-400 to-yellow-800 text-center w-full"> */}
      <div className="rounded-md  m-auto bg-green-200 from-green-400 to-yellow-800 text-center w-full">
        <div className="flex justify-center items-center">
          <div className="w-[50%] hidden md:block">
            <Carousal />
          </div>
          <ProvideLogin />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
