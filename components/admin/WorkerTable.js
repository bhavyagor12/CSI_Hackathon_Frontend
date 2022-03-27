import React,{useState,useEffect} from "react";
import Link from "next/link";
import {addDoc, collection, query, getDocs } from "firebase/firestore";
import firebase from "../../firebase/initFirebase";
import { getFirestore } from "firebase/firestore";

import htmlToReact, { Parser } from "html-to-react";



export default function WorkerTable() {
    const[Arr,SetArr]=useState([]);

    const download=(e)=>{
        e.preventDefault();
        let csv = [];
        let tr = document.querySelectorAll("tr");
        for (let i = 0; i < tr.length; i++) {
            // console.log(tr[i]);
            let cols = tr[i].querySelectorAll("th,td");
            let csvRow = [];
            for (j = 0; j < cols.length; j++) {
                csvRow.push(cols[j].innerHTML)
            }
            csv.push(csvRow.join(","))
            // console.log(csvRow.join(","));
        }
        console.log(csv.join("\n"));
        let blob = new Blob([csv.join("\n")], { type: "text/csv" });
        const href = URL.createObjectURL(blob);
    }

    
    useEffect(() => {
        Fetchdata()
    }, [])
    const Fetchdata = async()=>{
        const db = getFirestore(firebase);
        const q = query(collection(db, "Workers2"));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                SetArr(Arr = [ ...Arr, doc.data()]);
                
            });
            try {
                const parser = new Parser(opts);
                const csv = parser.parse(myData);
                console.log(csv);
              } catch (err) {
                console.error(err);
              };
    }

    return (
        <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-900 py-10">
      <h1 className="text-lg text-gray-400 font-medium">
        Workers Record
      </h1>
      <div className="flex flex-col mt-6">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden sm:rounded-lg">
              <table className="w-full text-sm text-gray-400">
                <thead className="bg-gray-800 text-xs uppercase font-medium">
                  <tr className="p-5">
                    <th className="p-2">Profile Pic</th>
                    <th className="p-2">Name</th>
                    <th className="p-2">Age</th>
                    <th className="p-2">Description</th>
                    <th className="p-2">Insurance</th>
                    <th className="p-2">Location</th>
                    
                    
                    
                </tr>
                </thead>
                <tbody>
                { 
                Arr.map((retard) => {
                    return(
                        <tr key={retard.ClientName} className="p-5"> 
                            <td><img  className= "object-contain mb-2 mr-5" src={retard.Profile}  width={150} height={150}/></td>
                            <td>{retard.Name}</td>  
                            <td>{retard.Age}</td>
                            <td>{retard.Description}</td>
                            <td>{retard.Insurance}</td>
                            <td>{retard.Loc}</td>
                            
                        </tr>
                    )    
                    })
                }
            </tbody>
            </table>
            </div>
            </div></div>
            

        </div></div>
    )
}
