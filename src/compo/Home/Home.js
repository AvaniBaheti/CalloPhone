import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const Home = () => {
    const [value,seVal]=useState();
    console.log("value",value)
    const navigaye=useNavigate();
    const handleClick=()=>{
        navigaye(`room/${value}`)
    }
  return (
    <div>
        <input type='text' placeholder='Room Ids' name="" onChange={(e)=>seVal(e.target.value)} id="" />
        <button onClick={handleClick}>   Join </button>
    </div>
  )
}

export default Home