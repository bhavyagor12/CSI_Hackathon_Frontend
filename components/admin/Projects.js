import React,{useState} from "react";
import Link from "next/link";
import {addDoc, collection } from "firebase/firestore";
import firebase from "../../firebase/initFirebase";
import { getFirestore } from "firebase/firestore";

function Projects() {
  const [ProjectName,setProjectName]=useState("");
  const [ClientName,setClientName]=useState("");
  const [Description,setDescription]=useState("");
  const [TotalWorkers,setTotalWorkers]=useState("");
  const [Startdate,setStartdate]=useState("");
  const [Duration,setDuration]=useState("");
  const db = getFirestore(firebase);


  const addProject=(e)=>{
    e.preventDefault();
    console.log(ProjectName)
    try{
    const docRef = addDoc(collection(db, "Projects2"), {
      ProjectName: ProjectName,
      ClientName: ClientName,
      Description: Description,
      TotalWorkers: TotalWorkers,
      Startdate: Startdate,
      Duration: Duration,
    });
    console.log("Document written with ID: ", docRef.id);
    }
    catch{
      console.error("Error adding document: ", e);
    }
  }

  

  
  return (
    <div className="min-h-screen flex-grow bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex items-center justify-center text-2xl text-white">
        <div className="mt-5 font-sans text-xl font-bold ">
          <span className="mr-2 text-black ">PROJECTS</span>
        </div>
      </div>
      <div className="my-10 flex justify-center">
        <form className="w-full max-w-lg">
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              >
                Project Name
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded border border-red-500 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                id="grid-first-name"
                type="text"
                placeholder=""
                value={ProjectName}
                onChange={(e)=>setProjectName(e.target.value)}
              />
              <p className="text-xs italic text-red-500">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full px-3 md:w-1/2">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                
              >
                Client Name
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-last-name"
                type="text"
                placeholder=""
                value={ClientName}
                onChange={(e)=>setClientName(e.target.value)}
              />
            </div>
          </div>
          <div className="-mx-3 mb-6 flex flex-wrap">
            <div className="w-full px-3">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                
              >
                Description
              </label>
              <input
                className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-password"
                type="text"
                placeholder=""
                value={Description}
                onChange={(e)=>setDescription(e.target.value)}
              />
              <p className="text-xs italic text-gray-600">
                A DETAILED DESC IS HELPFUL
              </p>
            </div>
          </div>
          <div className="-mx-3 mb-2 flex flex-wrap">
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              >
                Total Workers
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-city"
                type="numbers"
                placeholder=""
                value={TotalWorkers}
                onChange={(e)=>setTotalWorkers(e.target.value)}
              />
            </div>
            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              >
                Start date
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-zip"
                type="date"
                placeholder=""
                value={Startdate}
                onChange={(e)=>setStartdate(e.target.value)}
              />
            </div>

            <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <label
                className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
              >
                Duration of contract
              </label>
              <input
                className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                id="grid-zip"
                type="text"
                placeholder=""
                value={Duration}
                onChange={(e)=>setDuration(e.target.value)}
              />
            </div>
            <div className="m-6 mb-6 w-full px-3 md:mb-0 md:w-1/3">
              <div className="flex items-center justify-center">
                <button className="mr-5 inline-block rounded-full border-2 border-white px-12 py-2 font-semibold hover:bg-white hover:text-[#0082EF]" onClick={(e)=>addProject(e)}>
                  ADD
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Projects;
