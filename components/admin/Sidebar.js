import React from "react";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsNewspaper } from "react-icons/bs";
import { VscFileSubmodule, VscSearch } from "react-icons/vsc";
import { BsChatSquareDots } from "react-icons/bs";

export default function Sidebar() {
  return (
    <div className="text-m min-h-screen border-r border-gray-900 bg-black p-5 text-gray-500">
      <div className="space-y-7 text-2xl">
        <button className="flex items-center space-x-2 hover:text-white">
          <p>Log out</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <CgProfile className="h-5 w-5" />
          <Link href="/profile">
            <p>Profile</p>
          </Link>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <AiOutlineHome className="h-5 w-5" />
          <Link href="/homePage">
            <p>Home</p>
          </Link>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <VscFileSubmodule className="h-5 w-5" />
          <Link href="/addProject">
            <p> Post Projects</p>
          </Link>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <VscSearch className="h-5 w-5" />
          <Link href="/exploreProject">
            <p>Explore Projects</p>
          </Link>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <BsNewspaper className="h-5 w-5" />
          <Link href="/newsPage">
            <p>News</p>
          </Link>
        </button>

        <hr className="border-t-[0.1px] border-gray-900" />
      </div>
    </div>
  );
}
