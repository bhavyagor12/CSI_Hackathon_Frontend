import React from "react";
import WebcamCapture from "../WebcamCapture";
import Link from "next/link";
import Navbar from "../../components/workers/Navbar";

const continue_page = () => {
  return (
    <div>
      <Navbar />

      <div className="grid mt-7 place-items-center   ">
        <div className="max-w-sm rounded overflow-hidden shadow-lg mb-7">
          <div className="px-6 py-2">
            <div className="font-bold text-xl">IMPORTANT POINTS TO FOLLOW </div>
            <div className="font-bold text-xl text-center mb-2">
              WHILE CLICKING SELFIE
            </div>
            <ul className="list-disc">
              <li>Wear your helmet without fail</li>
            </ul>

            <ol className="list-disc">
              <li>Take off your face shield only for the photo</li>
            </ol>

            <ul className="list-disc">
              <li>Stand in a place where your face is properly visible</li>
            </ul>
            <ul className="list-disc">
              <li>Stand in a place where your face is properly visible</li>
            </ul>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              WORKERS NOT CAPTURING THEIR PHOTO WILL NOT BE PREMITTED INTO THE
              SITE
            </span>
            {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
          </div>
        </div>
        <div className=" text-center ml-10 mr-5 bg-blue-600 rounded-lg border-2 border-blue-600 font-semibold hover:blue-600 mb-7">
          <WebcamCapture />
        </div>
        <button className="inline-block rounded-full bg-blue-600 border-2 border-white px-12 py-2 font-semibold hover:bg-white hover:text-[#0082EF]">
          <Link href="/workers/dashboardWorkers">SUBMIT</Link>
        </button>
      </div>
    </div>
  );
};

export default continue_page;
