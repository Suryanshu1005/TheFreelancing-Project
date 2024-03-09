"use client";

import Carousal from "@/components/Carousal";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <>
      {/* <div className="space-y-5">
        <h1 className="text-center mt-10 font-bold text-xl md:text-2xl lg:text-4xl font-mono">
          Welcome to THE FREELANCING PROJECT.
        </h1>
        <h2 className="text-center font-medium text-lg">
          Login to begin your journey to the vast world filled with enthusiatic
          freelancers like yourselves
        </h2>
      </div> */}
      <div className="rounded-md  m-auto bg-green-200 from-green-400 to-yellow-800 text-center w-full">
        <div className="flex justify-center items-center">
          <div className="w-[50%] hidden md:block">
            <Carousal />
          </div>
          <div className="w-[100%] md:w-[50%] pr-10 pl-10">
            <h1>Would you like to register as a</h1>
            <div className="w-full flex justify-center gap-5 mt-5">
              <Link href="/register-now/freelancer">
                <Button>I am a freelancers</Button>
              </Link>
              <Button>I am a Project Owner</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
