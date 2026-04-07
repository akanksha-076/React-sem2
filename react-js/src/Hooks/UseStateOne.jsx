import React from 'react'
import {useState} from 'react'

export const UseStateOne = () => {
    const [count,setCount]=useState(0)
    const [countt,setCountt]=useState(10)
    console.log("count",count) //0
    
  return (
    <>
        <div>UseStateOne</div>
        <h1>count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Click to increas</button>
        <h1>count:{countt}</h1>
        <button onClick={()=>setCountt(countt-1)}>Click to decrease</button>
        <h1>Click to reset buttons</h1>
        <button onClick={()=>{setCountt(10);setCount(0)}}>reset</button>
    </>
    
  )
}
