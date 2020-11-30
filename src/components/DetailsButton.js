import React from 'react'
import { useHistory } from 'react-router-dom'
export default function DetailsButton({id}) {
    const history = useHistory()
    const onclickHandle=()=>{
       history.push('/details/'+ id ) 
    }
    
    return (
        <div>
             <button onClick={onclickHandle}>MORE DETAILS</button>
        </div>
    )
}
