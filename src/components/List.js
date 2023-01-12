import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"

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
    <div>
        <>
        <ul className="list">
            {
             tasks.map((tasks,index) =>
             <>
                 <li key={index}>{tasks.task}
                 </li>
             </>
             )
            }
        </ul>
        </>
    </div>
  )
}

export default List