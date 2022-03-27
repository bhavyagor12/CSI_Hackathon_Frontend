import React from "react";
import Navbar1 from "../workers/Navbar1";
const Profile = ({ name, username, image, email, address }) => {
  return (
    <div className="flex-grow bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen">
      <Navbar1 />
      <div className="mt-5 flex justify-center font-sans text-4xl font-bold ">
        <span className="mr-2 text-black ">Here's Your Profile!!</span>
      </div>
      <div className="max-w-screen flex max-h-screen items-center justify-center overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 py-20  ">
        <div className="xl:w-2/7 easy-in-out container transform bg-white    shadow-lg  duration-200    sm:w-full   md:w-2/3 lg:w-2/6">
          <div className=" h-32 overflow-hidden">
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt=""
            />
          </div>
          <div className="-mt-12 flex justify-center  px-5">
            <img
              className="h-32 w-32 rounded-full bg-white p-2   "
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt=""
            />
          </div>
          <div className=" ">
            <div className="px-14 text-center">
              <h2 className="text-3xl font-bold text-gray-800">Mohit Dhiman</h2>
              <p className="mt-2 text-gray-400">@immohitdhiman</p>
              <p className="mt-2 text-gray-600">
                Address :Saraswat Colony, Mahim West, Mahim, Mumbai, Maharashtra
              </p>
            </div>
            <hr className="mt-6" />
            <div className="flex  bg-gray-50 ">
              <div className="w-1/2 cursor-pointer p-4 text-center hover:bg-gray-100">
                <p>
                  <span className="font-semibold">9382345453</span>
                </p>
              </div>
              <div className="border"></div>
              <div className="w-1/2 cursor-pointer p-4 text-center hover:bg-gray-100">
                <p>
                  {" "}
                  <span className="font-semibold">
                    MohitDhiman@gmail.com
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
