import React from "react";
import {Button} from "./ui/button";
import Google from "./Google";
import Github from "./Github";
import EmailLogin from "./EmailLogin";
import {loginWithGoogle} from "@/https/auth";

const ProvideLogin = () => {
  const handleGoogleLogin = () => {
    loginWithGoogle();
  };
  return (
    <div className="w-[100%] md:w-[50%] pr-10 pl-10">
      <Button
        onClick={handleGoogleLogin}
        className="text-[16px] font-bold text-white bg-[#000000] w-full gap-2 rounded-xl"
      >
        <Google /> <span>Login with google</span>
      </Button>
      <Button className="text-[16px] font-bold text-white bg-[#090a0a] gap-3 w-full rounded-xl">
        <Github />
        Login with github
      </Button>
      <div className="mb-6 font-bold">Or login with</div>
      <EmailLogin />
    </div>
  );
};

export default ProvideLogin;
