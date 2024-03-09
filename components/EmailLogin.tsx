import React from "react";
import {Input} from "./ui/input";
import Link from "next/link";
import {Button} from "./ui/button";

const EmailLogin = () => {
  return (
    <>
      <div>
        <div className="space-y-5">
          <Input
            type="email"
            placeholder="Email"
            className="font-medium text-md "
          />
          <Input
            type="password"
            placeholder="Password"
            className="font-medium text-md "
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-2">
            <Input type="checkbox" aria-label="remember-me" className="w-4" />
            <label className="text-sm font-semibold">Remember me</label>
          </div>
          <div className="flex gap-2">
            <label className="text-[14px] font-semibold">
              Forgot your password?
            </label>
            <Link
              className="text-[14px] font-semibold text-blue-500"
              href="/reset-password"
            >
              Reset now
            </Link>
          </div>
        </div>
        <div className="w-full mt-5">
          <Button className="w-[200px] text-md bg-blue-700/60">Login</Button>
        </div>
        <div className="flex justify-center gap-2 mt-5">
          <label className="text-[14px] font-semibold">
            Starting your fresh journey?
          </label>
          <Link
            className="text-[14px] font-semibold text-blue-500"
            href="/register-now"
          >
            Register now
          </Link>
        </div>
      </div>
    </>
  );
};

export default EmailLogin;
