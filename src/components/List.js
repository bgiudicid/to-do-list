import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"
import trash from '../assets/images/trash.svg';
import pen from '../assets/images/pen.svg';
import '../styles/List.css';

function List() {
    const [tasks,setTasks] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3006/tasks')
        .then(res => {
            console.log(res)
            setTasks(res.data)
        })
        .catch(err=> {
            console.log(err)
        })
    }, [])
  return (
    
        <>
             <ul>
            {
             tasks.map((tasks,index) =>
            
                 <li key={index}>{tasks.task}
                 <img src= {trash} id='trash-icon' alt='trash icon'/>
                 <img src= {pen} id='pen-icon' alt='pen icon'/>
                 </li>
            
             )
            }
             </ul>
        </>
    
  )
}

export default List