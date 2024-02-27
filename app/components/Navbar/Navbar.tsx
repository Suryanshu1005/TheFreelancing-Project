"use client";

import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {loginWithGoogle} from "@/https/auth";
import {getUser} from "@/https/get";
import {supabaseComponent} from "@/supabase/supabase";
import {User} from "@supabase/supabase-js";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React, {FC, useEffect, useState} from "react";

interface Navbar {
  user: string | null | undefined;
  profile_url: string | undefined;
  full_name: string | undefined;
  email: string | undefined;
}

const Navbar: FC<Navbar> = ({user, profile_url, full_name, email}) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsNavbarOpen(false);
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    setIsDropdownOpen(false);
  };
  const handleWithGoolge = async () => {
    await loginWithGoogle();
  };

  const handleLogout = async () => {
    await supabaseComponent.auth.signOut();
    router.push("/");
    router.refresh();
    setIsDropdownOpen(false);
  };
  return (
    <>
      <nav>
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
          <span className="font-extrabold font-roboto text-lg">
            <Link href="/">TheFreeLancer</Link>
          </span>
          {/* Main navigation links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <ul className="flex font-semibold space-x-8">
              <li>Find Freelancers</li>
              <li>Find Job</li>
            </ul>
          </div>
          <div>
            <Input
              className="w-[10rem] hidden md:block md:w-[16rem] lg:w-[30rem]"
              placeholder="Search"
            />
          </div>
          {/* Avatar */}
          <div className="md:relative flex gap-5">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
            >
              <span className="sr-only">Open user menu</span>
              {/* Render user avatar or login button */}
              {user ? (
                <Avatar onClick={toggleDropdown}>
                  <AvatarImage src={profile_url} />
                </Avatar>
              ) : (
                <Button onClick={handleWithGoolge}>Login</Button>
              )}
            </button>
            {/* Dropdown menu for user */}
            <div
              className={`absolute right-0 z-50 ${
                isDropdownOpen ? "block" : "hidden"
              } mt-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  {full_name}
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  {email}
                </span>
              </div>
              <ul
                className="py-2 flex flex-col p-4 gap-2"
                aria-labelledby="user-menu-button"
              >
                <Button variant="default">Profile</Button>
                <Button variant="destructive" onClick={handleLogout}>
                  Logout
                </Button>
              </ul>
            </div>

            {/* Toggle button for small screens */}
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-label="Open main menu"
              onClick={toggleNavbar}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          {/* Main navigation links for small screens */}
          <div
            className={` absolute md:absolute lg:hidden md:hidden top-full right-2 rounded-md p-5 bg-white w-[50%] md:w-auto md:items-center md:space-x-8 ${
              isNavbarOpen ? "block" : "hidden"
            }`}
          >
            <Input className="w-full" placeholder="Search" />
            <ul className="flex flex-col md:flex-row font-medium space-y-4 md:space-y-0 md:space-x-8">
              <li>Find Freelancers</li>
              <li>Find Job</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
