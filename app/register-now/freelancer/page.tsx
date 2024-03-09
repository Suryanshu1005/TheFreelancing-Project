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

const formSchema = z.object({
  full_name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  cnf_password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const Freelancer = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      password: "",
      cnf_password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const handleAboutMePage = () => {
    router.push("/register-now/freelancer/verify-otp");
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
      <div className="rounded-md  m-auto  bg-green-200 from-green-400 to-yellow-800 text-center w-full">
        <div className="flex justify-center items-center">
          <div className="w-[50%] hidden md:block">
            <Carousal />
          </div>
          <div className="w-[100%] h-[100vh] md:w-[50%] grid">
            <div className="w-[50%] m-auto">
              <div className="flex justify-center items-center mb-[50px] gap-5">
                <div className="w-[60px] rounded-xl h-[10px] bg-blue-400" />
                <div className="w-[60px] rounded-xl h-[10px] bg-white" />
                <div className="w-[60px] rounded-xl h-[10px] bg-white" />
              </div>
              <div className="space-y-4 mb-4">
                <div className="flex items-center justify-center w-full gap-2 bg-black h-10 rounded-2xl">
                  <Google />
                  <Label className="text-white font-medium">
                    Sign Up with Google
                  </Label>
                </div>
                <div className="flex items-center justify-center w-full gap-2 bg-black h-10 rounded-2xl">
                  <Github />
                  <Label className="text-white font-medium">
                    Sign Up with Github
                  </Label>
                </div>
              </div>
              <Label className="font-bold text-md mb-4">Or login With</Label>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-3"
                >
                  <FormField
                    control={form.control}
                    name="full_name"
                    render={({field}) => (
                      <FormItem>
                        <FormLabel className="flex justify-start">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="outline-none focus:outline-none"
                            placeholder="Email"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-center items-center w-full h-10 mt-[-12px] bg-[#6aff79] rounded-md">
                    <span className="opacity-70 text-[25px]">🤘</span>
                    <Label className="text-[14px] font-bold p-[0px]">
                      We will send you a magic link to continue the regitration
                      process
                    </Label>
                  </div>
                  <Button onClick={handleAboutMePage} type="submit">
                    Next
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Freelancer;
