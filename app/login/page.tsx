"use client";

import {loginWithGoogle} from "@/https/auth";

const LoginWithGoogle = () => {
  const googlelogin = async () => {
    await loginWithGoogle();
  };
  return (
    <>
      <div className="flex flex-col justify-center bg-green-200 from-green-400 to-yellow-800 text-center w-full">
        <aside className="hidden sm:flex">hello</aside>
        <div>
          <span className="text-[20px] font-bold ">
            Welcome to new world of FreeLancing.
          </span>
        </div>
      </div>
    </>
  );
};

export default LoginWithGoogle;
