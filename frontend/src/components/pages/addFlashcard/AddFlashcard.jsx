
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';


export function AddFlashcard(){
    const nagivate=useNavigate();
    const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm();

    const userId=localStorage.getItem("userId");


    async function onSubmit(data){


        await axios.post(`https://backend-alfredtask.vercel.app/flashcard/add/${userId}`,data)
        .then((res)=>{
            if(res.data.success){
                toast.success(res.data.message);
                nagivate("/home");
            }
        })
        .catch((error)=>{
            toast.error(error.message);
        })
     
    }

    return(
        <div className='m-7'>
        <h1 className='text-3xl flex my-3'>Add New Flashcard!</h1>
        <form  onSubmit={handleSubmit(onSubmit)}>
                 
                    <div className='flex my-1'>
                    <label className='mr-1'>
                    Question
                    </label>
                    <span className='text-red-500'>
                    {errors.question && 
                    errors.question.message}
                    </span>
                    </div>
        
                    <Input 
                    {...register("question", 
                    {required:"*Required"})} 
                    placeholder="question" />
                
                    <div className='flex my-1'>
                    <label className='mr-2'>
                    Answer
                    </label>
                    <span className='text-red-500'>
                    {errors.answer && 
                    errors.answer.message}
                    </span>
                    </div>
        
                    <Textarea 
                    {...register("answer",
                    {required:"*Required"})}   
                    placeholder="Type your answer here..."/>
                    
                    <Button className='mt-3' disabled={isSubmitting}>{isSubmitting?"Loading...":"Create"}</Button>
                </form>
        </div>
    )
}
