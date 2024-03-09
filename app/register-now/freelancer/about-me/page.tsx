"use client";

import Carousal from "@/components/Carousal";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {X} from "lucide-react";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {Label} from "@/components/ui/label";
import {error} from "console";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {useEffect, forwardRef, useState} from "react";
import {Badge} from "@/components/ui/badge";
import {cn} from "@/lib/utils";
import {MultiSelect} from "primereact/multiselect";
import {Textarea} from "@/components/ui/textarea";

type Inputs = {
  skills: string;
  bio: string;
};

const formSchema = z.object({
  //   skills: z.string().min(6, {
  //     message: "OTP must be at least 6 characters.",
  //   }),
  //   bio: z.string().min(6, {
  //     message: "OTP must be at least 6 characters.",
  //   }),
});

const AboutMe = () => {
  const [skills, setSkills] = useState(null);
  const OPTIONS: any = [
    {code: "nextjs", name: "Nextjs"},
    {code: "React", name: "react"},
    {code: "Remix", name: "remix"},
    {code: "Vite", name: "vite"},
    {code: "Nuxt", name: "nuxt"},
    {code: "Vue", name: "vue"},
    {code: "Svelte", name: "svelte"},
    {code: "Angular", name: "angular"},
    {code: "Ember", name: "ember", disable: true},
    {code: "Gatsby", name: "gatsby", disable: true},
    {code: "Astro", name: "astro"},
  ];
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skills: "",
      bio: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const handleAboutMePage = () => {
    router.push("/");
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
                <div className="w-[60px] rounded-xl h-[10px] bg-blue-400" />
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                <div className="flex justify-center items-center space-y-4">
                  <div>
                    <Label className="flex font-bold text-[14px] mb-5">
                      Please tell use something about your self.
                    </Label>
                    <Textarea
                      placeholder="Bio"
                      className="p-3 flex font-semibold w-[700px] h-[200px]"
                    />
                  </div>
                </div>

                {/* <Label className="font-bold text-14px mb-4 flex ">
                  My skills are
                </Label>
                <MultiSelect
                  value={skills}
                  onChange={(e) => setSkills(e.value)}
                  options={OPTIONS}
                  optionLabel="name"
                  display="chip"
                  placeholder="Select your skills"
                  maxSelectedLabels={5}
                  filter
                  className="bg-white text-10px h-10 flex justify-start items-center rounded-lg w-full p-multiselect-label-container"
                /> */}
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

export default AboutMe;
