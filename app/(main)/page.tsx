// "use client";

import {loginWithGoogle} from "@/https/auth";
import {isAuth} from "@/https/get";
import Image from "next/image";
import {redirect} from "next/navigation";
import heroImage from "../assets/homepage/hero_image.jpg";
import CTAButton from "../components/CTAButton";
import WhatWeOffer from "../components/WhatWeOffer";

const Main = () => {
  const googlelogin = async () => {
    await loginWithGoogle();
    // redirect("/home");
  };
  return (
    <>
      <div className="mt-[50px] md:flex lg:flex lg:justify-between">
        <div className="w-full md:w-[50%] text-4xl text-center flex items-center font-bold lg:text-7xl font-roboto">
          Looking for job or a freelancer? <br />
          Don&apos;t worry, we have got you covered.
        </div>
        <div className=" flex items-center justify-center mt-6">
          <Image
            className="rounded-lg w-[300px] md:w-[375px] lg:w-[500px]"
            src={heroImage}
            alt="hero_image"
          />
        </div>
      </div>
      <div className="gap-5 flex flex-col justify-center items-center mt-5 lg:flex lg:justify-start lg:items-start lg:flex-row">
        <CTAButton
          variant="outline"
          className="font-bold text-xl p-6"
          title="Find you first job"
        />
        <CTAButton
          variant="default"
          className="font-bold text-xl p-6"
          title="Find Freelancer"
        />
      </div>
      <WhatWeOffer />
    </>
  );
};

export default Main;
