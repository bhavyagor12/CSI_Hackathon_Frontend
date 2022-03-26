import React, { useEffect,useState } from 'react';
import { collection, doc, getCollection, getDocs, query } from "firebase/firestore";
import 'firebase/firestore';
import firebase from "../../firebase/initFirebase";
import { getFirestore } from "firebase/firestore";
import { async } from '@firebase/util';





const ProjectTable = () => {
    useEffect(() => {
        Fetchdata()
    }, [])
    const Fetchdata = async()=>{
        const db = getFirestore(firebase);
        const q = query(collection(db, "Projects"));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
});
    }

    return (
        <div>
            
        </div>
    )
}


export default ProjectTable