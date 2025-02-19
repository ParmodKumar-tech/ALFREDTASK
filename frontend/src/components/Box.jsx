import React  from 'react';

import { Card,
    CardHeader,
    CardTitle,
    CardContent, } from './ui/card';

    
export default function Box(props){

    return(
        
            <Card>
            <CardHeader>
            <CardTitle>Box {props.boxNumber} ({props.value.length} card)</CardTitle>
          </CardHeader>
          <CardContent>
           <ul>
            {props.value?.map((q,idx)=>(
            <li key={idx}>{q.question}</li>
            ))}
          </ul>
          </CardContent>
        </Card>
        
    )
}
