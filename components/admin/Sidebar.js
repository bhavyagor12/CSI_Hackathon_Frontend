import React from "react";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BsNewspaper } from "react-icons/bs";
import { VscFileSubmodule, VscSearch } from "react-icons/vsc";
import { BsChatSquareDots } from "react-icons/bs";
import { MdOutlineAreaChart } from "react-icons/md";
import { BsList } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

export default function Sidebar() {
  return (
    <div className="text-m min-h-screen border-r border-gray-900 bg-[#FFCA02] p-5 text-gray-500 ">
      <div className="space-y-7 text-m">
        {/* <button className="flex items-center space-x-2 hover:text-white">
          <p>Log out</p>
        </button> */}
        <button className="flex items-center space-x-2 hover:text-white">
          <CgProfile className="h-5 w-5" />
        </button>
        <div>Name</div>
        <button className="flex items-center space-x-2 hover:text-white">
          <VscFileSubmodule className="h-5 w-5" />
          <Link href="/admin/projects">
            <p>Projects</p>
          </Link>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <MdOutlineAreaChart className="h-5 w-5" />
          <Link href="/admin/projectedit">
            <p>Add Projects</p>
          </Link>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <BsList className="h-5 w-5" />
          <Link href="/admin/addWorker">
            <p>Add Workers</p>
          </Link>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <BsNewspaper className="h-5 w-5" />
          <Link href="/newsPage">
            <p>Fetch Workers</p>
          </Link>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <BiLogOut className="h-5 w-5" />
          <Link href="/admin/attendance">
            <p>Attendance</p>
          </Link>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <BiLogOut className="h-5 w-5" />
          <Link href="/admin/safetyReport">
            <p>Safety report</p>
          </Link>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <BiLogOut className="h-5 w-5" />
          <Link href="/login">
            <p>Logout</p>
          </Link>
        </button>

        <hr className="border-t-[0.1px] border-gray-900" />
      </div>
    </div>
  );
}
