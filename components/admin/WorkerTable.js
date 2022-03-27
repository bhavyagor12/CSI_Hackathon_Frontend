import React,{useState,useEffect} from "react";
import Link from "next/link";
import {addDoc, collection, query, getDocs } from "firebase/firestore";
import firebase from "../../firebase/initFirebase";
import { getFirestore } from "firebase/firestore";
import { CSVLink, CSVDownload } from "react-csv";
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
        const q = query(collection(db, "Workers"));
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
        <div>
            <table className='w-max' id="workertable">
            <tbody>
                <tr>
                    <th>Age</th>
                    <th>Description</th>
                    <th>Insurance</th>
                    <th>Location</th>
                    <th>Name</th>
                    <th>Salary</th>
                </tr>
                { 
                Arr.map((retard) => {
                    return(
                        <tr key={retard.ClientName}>   
                            <td>{retard.Age}</td>
                            <td>{retard.Description}</td>
                            <td>{retard.Insurance}</td>
                            <td>{retard.Loc}</td>
                            <td>{retard.Name}</td>
                            <td>{retard.Salary}</td>
                        </tr>
                    )    
                    })
                }
            </tbody>
            </table>
            <button onClick={(e)=>download(e)}>ijl;</button>

        </div>
    )
}
