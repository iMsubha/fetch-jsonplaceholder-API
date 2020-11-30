import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import './Details.css'
export default function Details({name,username,email,phone,company,website}) {
    const {id} = useParams()
    const [user, setUser]= useState({})
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then( res=> {setUser(res.data)})
       } , [id]
      )
    return (
    
    <div className="details">
    
        <ul>
        -name : {user.name}
        <br/>
        -username : {user.username}
        <br/>
        -email : {user.email}
        <br/>
        -phone : {user.phone}
        <br/>
        -company : {user.company ? user.company.name: "" }
        <br/>
        -website : {user.website}
        <br/> 
        
        -address :
        <br/>
        <li className="address">street :{user.address ? user.address.street: "" }</li>
        <li className="address">suite :{user.address ? user.address.suite: "" }</li>
        <li className="address">city :{user.address ? user.address.city: "" }</li>
        <li className="address">Zipcode :{user.address ? user.address.zipcode: "" }</li>
        </ul>

    </div>
    )
}
