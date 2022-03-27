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
      <table className="min-w-full text-sm text-gray-400">
        <tbody className="bg-gray-800">
          <tr className="bg-black bg-opacity-20">
            <th className="px-6 py-4 whitespace-nowrap">Client Name</th>
            <th className="px-6 py-4 whitespace-nowrap">Description</th>
            <th className="px-6 py-4 whitespace-nowrap">Duration</th>
            <th className="px-6 py-4 whitespace-nowrap">Project Name</th>
            <th className="px-6 py-4 whitespace-nowrap">Start Date</th>
            <th className="px-6 py-4 whitespace-nowrap">Total Workers</th>
          </tr>
          {Arr.map((retard) => {
            return (
              <tr key={retard.ClientName}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {retard.ClientName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {retard.Description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {retard.Duration}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {retard.ProjectName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {retard.Startdate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {retard.TotalWorkers}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
