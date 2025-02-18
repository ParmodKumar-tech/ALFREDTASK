import { Button } from '@/components/ui/button';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero(){
    
    const username=localStorage.getItem("userName") || "Not login";

    function Logout(){
        localStorage.removeItem("userId");
        localStorage.removeItem("userName");
    }

    return(
        <>
      <div className='flex flex-wrap items-center justify-between m-2'>
        <h1 className="text-3xl text-center font-bold my-5">📚 Leitner System Flashcards</h1>
        <Button>
            
            <Link to="/add">Add</Link>
            
            </Button>

            <Button>
            
            <Link to="/all">All flashcard</Link>
            
            </Button>
        <Button onClick={Logout}>
        <Link to="/">Logout</Link>
        </Button>
      </div>
        <p className='my-2 text-1xl'>Hi. {username}</p>
      </>
    )
}
