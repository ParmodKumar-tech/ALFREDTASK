import Flashcard from '@/components/Flashcard';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';



export default function AllFlashcard(){
  
  
    const [data,setData]=useState([]);
    const userId=localStorage.getItem("userId");

    useEffect(()=>{
        flashcards();
    },[])
   
    async function flashcards(){
        await axios.get(`http://localhost:8000/flashcard/${userId}`)
        .then((res)=>{
            if(res.data.success){
                setData(res.data.data)
            }
        })
        .catch((error)=>{
            toast.error(error.message);
        })
    }







    return(

        <div className='m-5'>
        <h1>All FlashCards</h1>
        {data?.map((flashcard, idx) => (
            <Flashcard key={idx} value={flashcard} onDelete={(deletedId)=>{
                setData((prevData) => prevData.filter(f => f._id !== deletedId));

            }}  />         
        ))}

    </div>
    )
}