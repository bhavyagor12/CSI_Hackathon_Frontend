import React, { useEffect,useState } from 'react';
import { collection, doc, getCollection, getDocs, query } from "firebase/firestore";
import 'firebase/firestore';
import firebase from "../../firebase/initFirebase";
import { getFirestore } from "firebase/firestore";
import { async, deepCopy } from '@firebase/util';
import { data } from 'autoprefixer';






const ProjectTable = () => {
    const[Arr,SetArr]=useState([]);

    
    useEffect(() => {
        Fetchdata()
    }, [])
    const Fetchdata = async()=>{
        const db = getFirestore(firebase);
        const q = query(collection(db, "Projects"));
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
                    <th>Client Name</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Project Name</th>
                    <th>Start Date</th>
                    <th>Total Workers</th>
                </tr>
                { 
                Arr.map((retard) => {
                    return(
                        <tr key={retard.ClientName}>   
                            <td>{retard.ClientName}</td>
                            <td>{retard.Description}</td>
                            <td>{retard.Duration}</td>
                            <td>{retard.ProjectName}</td>
                            <td>{retard.Startdate}</td>
                            <td>{retard.TotalWorkers}</td>
                        </tr>
                    )    
                    }
                )}
            </tbody>
            </table>
        </div>
    )
}


export default ProjectTable