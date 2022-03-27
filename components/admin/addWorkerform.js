import React, { useState } from "react";
import Link from "next/link";
import { addDoc, collection } from "firebase/firestore";
import WebcamCapture from "../../pages/WebcamCapture";
import Aadhar from "../workers/aadhar";
import firebase from "../../firebase/initFirebase";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import Papa from "papaparse";
import Webcam from "react-webcam";






function addformm() {
  const storage = getStorage();
  const db = getFirestore(firebase);
  const [ImageSrc,setSrc]=useState("");
  const [PDF,setPDF]=useState("");
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Description, setDescription] = useState("");
  const [Salary, setSalary] = useState("");
  const [Loc, setLocation] = useState("");
  const [Insurance, setInsurance] = useState("");
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };




  const addWorker = (e) => {
    e.preventDefault();
    
    
    try {
      const WorkerRef = addDoc(collection(db, "Workers2"), {
        Name:  Name ,
        Age:  Age ,
        Description:  Description ,
        Salary:  Salary ,
        Loc:  Loc ,
        Insurance:  Insurance ,
        Profile: ImageSrc,
        
      });
      console.log("Document written with ID: ", WorkerRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="min-h-screen flex-grow bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex items-center justify-center text-2xl text-white">
        <div className="mt-5 font-sans text-xl font-bold ">
          <span className="mr-2 text-black ">WORKERS</span>
        </div>
      </div>
      <div className="my-10 flex justify-center">
        <form className="w-full max-w-lg">
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              >
                Name
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded border border-red-500 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                id="grid-first-name"
                type="text"
                placeholder=""
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
              <p className="text-xs italic text-red-500">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full px-3 md:w-1/2">
              <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                AGE
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-last-name"
                // type="date"
                type="number"
                min="18"
                placeholder=""
                value={Age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="w-full px-3">
              <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                Description
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-password"
                type="text"
                placeholder=""
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <p className="text-xs italic text-gray-600">
                PLS GIVE A DETAILED DESCRIPTION ABOUT YOUR JOB
              </p>
            </div>
          </div>
          <div className="-mx-3 mb-2 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                Salary
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-city"
                type="number"
                placeholder=""
                value={Salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                Employee Location
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-zip"
                type="test"
                placeholder=""
                value={Loc}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                Insurance
              </label>
              <input
                className="mb-10 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-zip"
                type="text"
                placeholder=""
                value={Insurance}
                onChange={(e) => setInsurance(e.target.value)}
              />
            </div>
            <div className="mb-6 w-full px-3 ">
              <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                UPLOAD AADHAR CARD AS PDF ONLY ****
              </label>

              <div className="items-center justify-center">
                <input type="file" name="upload" accept="application/pdf,application/vnd.ms-excel"  onChange={(e)=> {setPDF(e.target.files[0]);console.log(e.target.files[0])}} />
              </div>
            </div>
            {/* <div className=" text-center font-semibold mb-10 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none">
            <WebcamCapture  />
            </div> */}
            <div></div>
            <div className="m-6 mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <div className="my-10">
                <div className="flex justify-between">
                  <button
                    className="ml-32 mr-5 inline-block rounded-full border-2 border-white px-12 py-2 font-semibold hover:bg-white hover:text-[#0082EF]"
                    onClick={(e) => addWorker(e)}
                  >
                    <Link href="/admin/continue_page">CONTINUE</Link>
                  </button>
                  {/* <button className="inline-block rounded-full border-2 border-white px-12 py-2 font-semibold hover:bg-white hover:text-[#0082EF]">
                    UPDATE
                  </button> */}
                  {/* <button className="ml-5 inline-block rounded-full border-2 border-white px-12 py-2 font-semibold hover:bg-white hover:text-[#0082EF]">
                    DELETE
                  </button> */}
                </div>
              </div>
              
            </div>
          </div>
          <label>Enter Data in CSV:
          <input
          type="file"
          accept=".csv"
          onChange={(e) => {
            const files = e.target.files;
            console.log(files);
            if (files) {
              console.log(files[0]);
              Papa.parse(files[0], {
                complete: function(results) {
                  console.log("Finished:", results.data.count);
                }}
              )
            }
          }}
          />
          </label>
          <div className="text-center ml-10 mr-5 bg-blue-600 rounded-lg border-2 border-blue-600 font-semibold hover:blue-600 mb-7">
          <Webcam
            audio={false}
            height={500}
            screenshotFormat="image/jpeg"
            width={500}
            videoConstraints={videoConstraints}
          >
            {({ getScreenshot }) => (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setSrc(getScreenshot());
                  
                }}
              >
                CAPTURE PICTURE
              </button>
            )}
          </Webcam>
          </div>
          <button className="ml-48 inline-block rounded-full bg-blue-600 border-2 border-white px-12 py-2 font-semibold hover:bg-white hover:text-[#0082EF]">
          <Link href="/workers/dashboardWorkers">SUBMIT</Link>
        </button>
        
        </form>

        
      
    </div>
        
      </div>
    
  );
}

export default addformm;
