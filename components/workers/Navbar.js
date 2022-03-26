import React from "react";

import Link from "next/link";

import { CgProfile } from "react-icons/cg";
function Navbar() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50 w">
      <div className="flex justify-between max-w-6xl mx-5  lg:mx-auto py-2">
        {/* LEFT*/}
        <div className="relative hidden lg:inline-grid w-24">
          {/* <img
            src="https://play-lh.googleusercontent.com/9ASiwrVdio0I2i2Sd1UzRczyL81piJoKfKKBoC8PUm2q6565NMQwUJCuNGwH-enhm00"
            layout="fill"
            objectFit="contain"
          /> */}
          <div
            className="flex justify-center items-center flex-shrink-0"
            content-end
          >
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

        {/* RIGHT*/}
        <div className="grid grid-cols-4 gap-1">
          <div className="flex flex-end items-end justify-end">
            <div
              className="flex  justify-center items-center flex-shrink-0"
              content-end
            >
              
              <h1 className="font-bold text-xl cursor-pointer ml-14">
              <Link href="/workers/addform">
                Ad<span className="text-blue-500">d</span>
                </Link>
              </h1>{/*    <Link href="/workers/addform"> */}
              
              {/* </Link> */}
            </div>
            {/* <button className="flex items-center space-x-2 hover:text-white">
          <BsList className="h-5 w-5" />
          <Link href="/newsPage">
            <p>Worker Details</p>
          </Link>
        </button> */}
          </div>
          <div className="flex flex-end items-end justify-end">
            <div
              className="flex justify-center items-center flex-shrink-0"
              content-end
            >
              <h1 className="font-bold text-xl cursor-pointer ml-14">
                Edi<span className="text-blue-500">t</span>
              </h1>
            </div>
          </div>
          <div className="flex flex-end items-end justify-end">
            <div
              className="flex justify-center items-center flex-shrink-0"
              content-end
            >
              <h1 className="font-bold text-xl cursor-pointer ml-14">
                Project<span className="text-blue-500">s</span>
              </h1>
            </div>
          </div>
          <div className="flex flex-end items-end justify-end">
            <div
              className="flex justify-center items-center flex-shrink-0"
              content-end
            >
              <h1 className="font-bold text-xl cursor-pointer ml-14">
                <CgProfile />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
