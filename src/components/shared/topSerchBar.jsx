"use client";
import Link from "next/link";
import React from "react";
import SearchBar from "./searchBar";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const TopSerchBar = () => {
  const pathname = usePathname();
  console.log("pathname", pathname);
  const navItemList = [
    {
      url: "/newlatest",
      title: "New & Trending",
    },
    {
      url: "/player",
      title: "Player",
    },
    {
      url: "/fan",
      title: "Fan",
    },
    {
      url: "/retro",
      title: "Retro",
    },
  ];
  return (
    <div className="navbar bg-[#F5FBFF] my-0 pt-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoMenu className="text-3xl"></IoMenu>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItemList.map((item, index) => {
            return (
              <li
                key={index}
                className={`text-gray-500 hover:text-black font-bold pb-3 ${
                  pathname === "/"
                    ? "hover:border-b-2 hover:border-b-black"
                    : ""
                } ${
                  pathname === item.url
                    ? "text-black border-b-2 border-b-black"
                    : ""
                }`}
              >
                <Link href={item.url} className="hover:bg-transparent">
                  {item.title}
                </Link>
              </li>
            );
          })}
          </ul>
        </div>
        <button>
          <img
            src="image/logo.png"
            alt="Vastora sports"
            className="w-[70px] h-[60px] lg:flex hidden"
          />
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 h-full">
          {navItemList.map((item, index) => {
            return (
              <li
                key={index}
                className={`text-gray-500 hover:text-black font-bold pb-3 ${
                  pathname === "/"
                    ? "hover:border-b-2 hover:border-b-black"
                    : ""
                } ${
                  pathname === item.url
                    ? "text-black border-b-2 border-b-black"
                    : ""
                }`}
              >
                <Link href={item.url} className="hover:bg-transparent">
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <SearchBar></SearchBar>
        <button>
          <CgProfile className="h-[30px] w-[30px]"></CgProfile>
        </button>
        <button className="hover:cursor-pointer">
       <img src="icons/animetCart.gif" alt="cart icon" className="h-[50px] w-[50px]" />
        </button>
      </div>
    </div>
  );
};

export default TopSerchBar;
