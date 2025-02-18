import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React, { useEffect} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';


export function UpdateFlashcard(){
    const {flashcardId}=useParams();
    const nagivate=useNavigate();
    const {
        register,handleSubmit,
        formState:{errors,isSubmitting},
        setValue
        }=useForm();

    
    useEffect(()=>{
        getFlashcardInfo();
    },[flashcardId])


    async function getFlashcardInfo(){
        await axios.get(`http://localhost:8000/flashcard/update/${flashcardId}`)
        .then((res)=>{
           
            if(res.data.success){
                setValue("question",res.data.data.question);
                setValue("answer",res.data.data.answer);
            }
        })
        .catch((error)=>{
            toast.error(error.message);
        })
     
    }

    async function onSubmit(data){
        await axios.post(`http://localhost:8000/flashcard/update/${flashcardId}`,data)
        .then((res)=>{
            if(res.data.success){
                toast.success(res.data.message);
                nagivate('/all');
            }
        })
        .catch((error)=>{
            toast.error(error.message);
        })

    }

    return(
        <div className='m-7'>
        <h1 className='text-3xl flex my-3'>Update Flashcard!</h1>
        <form  onSubmit={handleSubmit(onSubmit)}>
                 
                    <div className='flex my-1'>

                    <label className='mr-1'>
                    question
                    </label>
                    <span className='text-red-500'>
                    {errors.question && 
                    errors.question.message}
                    </span>
                    </div>
        
                    <Input 
                    {...register("question")} 
                    placeholder="question"
                    />

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
                    {...register("answer")}
                    placeholder="Type your answer here..." />
                    
                    <Button className='mt-3' disabled={isSubmitting}>{isSubmitting?"Loading...":"Submit"}</Button>
                </form>
        </div>
    )
}