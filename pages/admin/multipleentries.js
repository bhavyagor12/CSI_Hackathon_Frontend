import React,{useState} from 'react';
import Papa from "papaparse";
import firebase from "../../firebase/initFirebase";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";
import Particles from '../../components/Particles'


export default function MultipleEntries() {
    let [dataset,setdataset]=useState([]);
    const db = getFirestore(firebase);

    const MultipleEntryProject=(e)=>
    {
        const db = getFirestore(firebase);
        console.log(dataset[0][0]);
        
        for (var i = 0; i < 5; i++){
        const docRef = addDoc(collection(db, "Projects2"), {
            ProjectName: dataset[0][i][0],
            ClientName: dataset[0][i][1],
            Description: dataset[0][i][2],
            TotalWorkers: dataset[0][i][3],
            Startdate: dataset[0][i][4],
            Duration: dataset[0][i][5]
        });
        console.log("Document written with ID: ", docRef.id);
        }
    }

    const MultipleEntryWorkers=(e)=>
    {
        const db = getFirestore(firebase);
        console.log(dataset);
        
        for (var i = 0; i < 6; i++){
        const docRef = addDoc(collection(db, "Workers2"), {
            Name: dataset[0][i][0],
            Age: dataset[0][i][1],
            Description: dataset[0][i][2],
            Salary: dataset[0][i][3],
            Loc: dataset[0][i][4],
            Insurance: dataset[0][i][5],
            Profile: dataset[0][i][6],
        });
        console.log("Document written with ID: ", docRef.id);
        }
    }

    const MultipleEntryAttendance=(e)=>
    {
        const db = getFirestore(firebase);
        console.log(dataset);
        
        for (var i = 0; i < 5; i++){
        const docRef = addDoc(collection(db, "Attendance2"), {
            Name: dataset[0][i][0],
            Day1: dataset[0][i][1],
            Day2: dataset[0][i][2],
            Day3: dataset[0][i][3],
            Day4: dataset[0][i][4],
            Day5: dataset[0][i][5],
            Day6: dataset[0][i][6],
            Day7: dataset[0][i][7],
            Day8: dataset[0][i][8],
            Day9: dataset[0][i][9],
            Day10: dataset[0][i][10],
        });
        console.log("Document written with ID: ", docRef.id);
        }
    }

    const MultipleEntrySafety=(e)=>
    {
        const db = getFirestore(firebase);
        console.log(dataset[0][0][0]);
        for (var i = 0; i < 5; i++){
        const docRef = addDoc(collection(db, "Safety2"), {
            Name: dataset[0][i][0],
            Day1: dataset[0][i][1],
            Day2: dataset[0][i][2],
            Day3: dataset[0][i][3],
            Day4: dataset[0][i][4],
            Day5: dataset[0][i][5],
            Day6: dataset[0][i][6],
            Day7: dataset[0][i][7],
            Day8: dataset[0][i][8],
            Day9: dataset[0][i][9],
            Day10: dataset[0][i][10],
            TotalViolations: dataset[0][i][11],
        });
        console.log("Document written with ID: ", docRef.id);
        }
    }

  
    return (
    <div className='flex flex-col min-h-screen bg-[#024ca1]'>
        <Particles />
        <div className='grid place-content-center ml-10'>
        <label className="font-bold">Enter Data in CSV:
        <input 
        type="file"
        accept=".csv"
        className='m-5'
        onChange={(e) => {
            setdataset("")
        const files = e.target.files;
        console.log(files);
        if (files) {
            console.log(files[0]);
            Papa.parse(files[0], {
            complete: function(results) {
                console.log("Finished:", results.data);
                setdataset(dataset=[...dataset, results.data]);
            }}
            )
        }
        }}
        />
        </label>
         
        
        <div className='grid place-items-center'>
            <button className=' bg-blue-200 border-2 border-gray-200 rounded-full hover:bg-[#ffca02] p-3 mx-1 font-bold
             ' onClick={(e)=>MultipleEntryProject(e)}> Click to multiple entry into Projects</button>
            <br></br>
            <button className='border-2 border-gray-200 rounded-full bg-blue-200 hover:bg-[#ffca02] p-3 mx-1 font-bold ' onClick={(e)=>MultipleEntryWorkers(e)}> Click to multiple entry into Workers</button> 
            <br></br>
            <button className='border-2 border-gray-200 rounded-full bg-blue-200  hover:bg-[#ffca02] p-3 mx-1 font-bold' onClick={(e)=>MultipleEntryAttendance(e)}> Click to multiple entry into Attendance</button> 
            <br></br>
            <button className='border-2 border-gray-200 rounded-full bg-blue-200 p-3 hover:bg-[#ffca02] mx-1 font-bold' onClick={(e)=>MultipleEntrySafety(e)}> Click to multiple entry into Safety</button> 
             
        </div>
    
    </div>
    </div>
  )
}
