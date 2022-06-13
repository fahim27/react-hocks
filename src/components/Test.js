import React from "react";
import { useState,useEffect } from "react";
const Test=()=>{

    const [myName,setMyName]=useState('')
    const [myInfo,setMyInfo]=useState({
        age:23,
        address:"Dhaka"
    })

     const changeSate=()=>{
        setMyName("Fahim Muntasir");
        setMyInfo({
            ...myInfo,
            address:"sylhet"

        });
    } 

    useEffect(()=>{
        console.log('My infor',myInfo);
    },[myInfo])


    
    return(
        <div>
            <button onClick={changeSate}> Change </button>
            <h4>{myName}</h4>
            <h4>Age:{myInfo.age}</h4>
            <h4>adress: {myInfo.address}</h4>
           
        </div>
    )
}

export default Test;