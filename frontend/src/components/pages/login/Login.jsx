import Form from '@/components/Form';
import React from 'react';


export default function Login(){
    return(
        <div className='w-full h-screen flex flex-col justify-start p-5'>
        <h1 className='text-2xl my-3 flex'>Login | Leitner System Flashcards!</h1>
        <Form/>
        </div>
    )
}