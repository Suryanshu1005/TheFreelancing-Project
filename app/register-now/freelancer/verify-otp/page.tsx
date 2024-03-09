"use client";

import Carousal from "@/components/Carousal";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import Google from "@/components/Google";
import Github from "@/components/Github";
import {Label} from "@/components/ui/label";
import {error} from "console";

type Inputs = {
  otp: string;
};

const formSchema = z.object({
  //   otp: z.string().min(6, {
  //     message: "OTP must be at least 6 characters.",
  //   }),
});

const VerifyOTP = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const handleAboutMePage = () => {
    router.push("/register-now/freelancer/about-me");
  };

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
      <div className="rounded-md bg-green-200 from-green-400 to-yellow-800 text-center w-full">
        {/* <div className="rounded-md  m-auto mt-20 bg-green-200 from-green-400 to-yellow-800 text-center w-full"> */}
        <div className="flex justify-center items-center">
          <div className="w-[50%] hidden md:block">
            <Carousal />
          </div>
          <div className="w-[100%] h-[100vh] md:w-[50%] grid">
            <div className="w-[50%] m-auto">
              <div className="flex justify-center items-center mb-[50px] gap-5">
                <div className="w-[60px] rounded-xl h-[10px] bg-blue-400" />
                <div className="w-[60px] rounded-xl h-[10px] bg-blue-400" />
                <div className="w-[60px] rounded-xl h-[10px] bg-white" />
              </div>
              <Label className="font-bold text-md mb-4">
                Please enter your OTP
              </Label>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                <Input
                  className="outline-none focus:outline-none"
                  placeholder="OTP"
                  {...register("otp")}
                />
                <div className="flex justify-center space-y-3">
                  {/* {errors.otp && (
                  <span className="text-red-600 text-[14px]">
                    {errors.otp.message}
                  </span>
                )} */}
                  <Button
                    onClick={handleAboutMePage}
                    className=" flex justify-center max-w-[200px] w-full"
                    type="submit"
                  >
                    Next
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyOTP;
