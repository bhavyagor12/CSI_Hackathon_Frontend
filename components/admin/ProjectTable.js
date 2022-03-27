import React, { useEffect, useState } from "react";
import {
  collection,
  doc,
  getCollection,
  getDocs,
  query,
} from "firebase/firestore";
import "firebase/firestore";
import firebase from "../../firebase/initFirebase";
import { getFirestore } from "firebase/firestore";
import { async, deepCopy } from "@firebase/util";
import { data } from "autoprefixer";

const ProjectTable = () => {
  const [Arr, SetArr] = useState([]);

  useEffect(() => {
    Fetchdata();
  }, []);
  const Fetchdata = async () => {
    const db = getFirestore(firebase);
    const q = query(collection(db, "Projects"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      SetArr((Arr = [...Arr, doc.data()]));
    });
  };

  return (
    <div class="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-900 py-10">
      <h1 class="text-lg text-gray-400 font-medium">Projects Table</h1>
      <table className=" text-sm text-gray-400">
        <tbody className="bg-gray-800">
          <tr className="bg-black bg-opacity-20">
            <th className="px-6 py-4 whitespace-nowrap hover:bg-[#FFCA02] hover:text-[#024CA1] ">Client Name</th>
            <th className="px-6 py-4 whitespace-nowrap hover:bg-[#FFCA02]">Description</th>
            <th className="px-6 py-4 whitespace-nowrap hover:bg-[#FFCA02]">Duration</th>
            <th className="px-6 py-4 whitespace-nowrap hover:bg-[#FFCA02]">Project Name</th>
            <th className="px-6 py-4 whitespace-nowrap hover:bg-[#FFCA02]">Start Date</th>
            <th className="px-6 py-4 whitespace-nowrap hover:bg-[#FFCA02]">Total Workers</th>
          </tr>
          {Arr.map((retard) => {
            return (
              <tr key={retard.ClientName}>
                <td>{retard.ClientName}</td>
                <td>{retard.Description}</td>
                <td>{retard.Duration}</td>
                <td>{retard.ProjectName}</td>
                <td>{retard.Startdate}</td>
                <td>{retard.TotalWorkers}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
