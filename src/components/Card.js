import React from 'react'
import { useEffect, useState } from "react"
import './Card.css'
import axios from 'axios'
import DetailsButton from './DetailsButton'

export default function Card({name}) {
  const [users, setUsers]= useState([])
  useEffect(() => {
    axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
             setUsers(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
}, [])
return (
  <div className="card">
  {
      users.map( user =>(
      <div  key={user.id}className="card__display">
        <div className="card__circle">
            <h1>{user.name[0]}</h1>
        </div>
        <div className="card__name">
          <h1>{user.name}</h1>
        </div>
        <div className="card__usename">
          <h3>@{user.username}</h3>
        </div>
        <div className="card__website"> 
          <h3>{user.website}</h3>
        </div>
        <div className="card__button">
           <DetailsButton id={user.id} name={user.name}/>
        </div>
      </div>
      ))}
    </div>
  )
}
