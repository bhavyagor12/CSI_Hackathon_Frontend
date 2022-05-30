import React,{useState,useEffect} from "react";
import firebase from "../../firebase/initFirebase";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  doc,
  getCollection,
  getDocs,
  query,
} from "firebase/firestore";

const SafetyTable = () => {
  const [Arr,SetArr]=useState([]);
  useEffect(() => {
    Fetchdata();
  }, []);
  const Fetchdata = async () => {
    const db = getFirestore(firebase);
    const q = query(collection(db, "Safety2"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      SetArr((Arr = [...Arr, doc.data()]));
    });
  };


  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-900 py-10">
      <h1 className="text-lg text-gray-400 font-medium">
        Total Violations Record
      </h1>
      <div className="flex flex-col mt-6">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden sm:rounded-lg">
              <table className="table-fixed px-10 border-zinc-100">
                <thead className="bg-gray-800 text-xs uppercase font-medium text-zinc-200">
                  <tr className="p-2 text-lg text-center">
                    <th scope="col" className="px-6 py-3 tracking-wider">
                      Worker name
                    </th>
                    <th scope="col" className="px-6 py-3 tracking-wider">
                     Total Violations
                    </th>
                    <th scope="col" className="px-6 py-3 tracking-wider">
                      Day 1
                    </th>
                    <th scope="col" className="px-6 py-3 tracking-wider">
                      Day 2
                    </th>
                    <th scope="col" className="px-6 py-3 tracking-wider">
                      Day 3
                    </th><th scope="col" className="px-6 py-3 tracking-wider">
                      Day 4
                    </th><th scope="col" className="px-6 py-3 tracking-wider">
                      Day 5
                    </th><th scope="col" className="px-6 py-3 tracking-wider">
                      Day 6
                    </th><th scope="col" className="px-6 py-3 tracking-wider">
                      Day 7
                   </th>
                    
                  </tr>
                </thead>
                <tbody className="bg-gray-800 text-zinc-400 text-center"> 
                  {Arr.map((item)=>(
                    <tr className="ml-2  "> 
                      <td className="grid place-items-center">{item.Name}</td>
                      <td>{item.TotalViolations}</td>
                      <td>{item.Day1}</td>
                      <td>{item.Day2}</td>
                      <td>{item.Day3}</td>
                      <td>{item.Day4}</td>
                      <td>{item.Day5}</td>
                      <td>{item.Day6}</td>
                      <td>{item.Day7}</td>
                      
                    </tr>
                  ))}
                </tbody>
                </table>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SafetyTable;

