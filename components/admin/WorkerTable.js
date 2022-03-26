import React,{useState,useEffect} from "react";
import Link from "next/link";
import {addDoc, collection, query, getDocs } from "firebase/firestore";
import firebase from "../../firebase/initFirebase";
import { getFirestore } from "firebase/firestore";


export default function WorkerTable() {
    const[Arr,SetArr]=useState([]);

    
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
    }

    return (
        <div>
            <table className='w-max'>
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
                    }
                )}
            </tbody>
            </table>
        </div>
    )
}
