import React from 'react';
import { Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter
   } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';



export default function Flashcard(props){
  
   async function handleDelete (){
    
    await axios.get(`http://localhost:8000/flashcard/delete/${props.value._id}`)
    .then((res)=>{
        if(res.data.success){
            toast.success(res.data.message);
            props.onDelete(props.value._id);
        }
    })
    .catch((error)=>{
        toast.error(error.message)
    })

   }

  
    return(
      <Card className="my-4">
    <CardHeader>
    <CardTitle>{props.value?.question}</CardTitle>
  </CardHeader>
  {props.showAnswer && <CardContent>
      <p>{props.value?.answer}</p>
  </CardContent>}
     
  {!props.home &&<CardFooter>
              <Button>
                  <Link to={`/update/${props.value._id}`}>Update</Link>
              </Button>
              <Button onClick={handleDelete}>
                  Delete
              </Button>
          </CardFooter>}
  
  </Card>
    )
}