import React from 'react'
import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import {CgProfile} from 'react-icons/cg';

const Navbar = () => {
  return (  
    <div className="shadow-sm border-b bg-white sticky top-0 z-50 w-full">
      <div className="flex justify-between max-w-6xl mx-5  lg:mx-auto">
        {/* LEFT*/}
        <div className="relative hidden lg:inline-grid w-20">
          {/* <img
            src="https://play-lh.googleusercontent.com/9ASiwrVdio0I2i2Sd1UzRczyL81piJoKfKKBoC8PUm2q6565NMQwUJCuNGwH-enhm00"
            layout="fill"
            objectFit="contain"
          /> */}
          <div className="flex justify-center items-center flex-shrink-0">
            <h1 className="font-bold text-xl cursor-pointer">
               Construct<span className="text-blue-500">W</span>
            </h1>
          </div>
        </div>
        <div className="relative w-10 lg:hidden flex-shrink-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* MIDDLE*/}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              placeholdertype="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* RIGHT*/}
        <div className="flex items-center justify-end space-x-4">
          {/* <HomeIcon className="navBtn" /> */}
          <button><CgProfile className='w-8 h-8'/></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;