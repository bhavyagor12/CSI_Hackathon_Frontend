import React, { useEffect,useState } from 'react';
import { collection, doc, getCollection } from "firebase/firestore";
import 'firebase/firestore';
import firebase from "../../firebase/initFirebase";
import { getFirestore } from "firebase/firestore";





const ProjectTable = () => {

    const [info , setInfo] = useState([]);
    window.addEventListener('load', () => {
        Fetchdata();
      });

    const Fetchdata = ()=>{
    db.collection("Projects").get().then((querySnapshot) => {
             
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr , data]);
                  
            });
        })
    }


    const db = getFirestore(firebase);
    const projectRef = collection(db, "Projects");
    const snapshot = getCollection(projectRef)
    console.log(snapshot);
    
    
    return (
        <div>
            <div className="container mx-auto px-4 sm:px-8">
                <h1>haaa</h1>
            </div>
            {
            info.map((data) => (
            <Frame course={data.ProjectName} 
                   ProjectName={data.ProjectName} 
                   ClientName={data.ClientName}
                   
                   />
            ))
        }
        </div>
    )
}
const Frame = ({ ProjectName , ClientName}) => {
    console.log(+ ProjectName + " " + ClientName);
    return (
        <center>
            <div className="div">
                  
<p>Project Name : {ProjectName}</p>
   
                  
<p>Client Name : {ClientName}</p>
  
   
            </div>
        </center>
    );
}

export default ProjectTable