import React from 'react';
import {useState} from 'react'

export const ShowHide = () => {
    const [pass,setPass]=useState(false);

  return (
    <div>
        <input type={pass ? "text" : "password"} />
        <button onClick={()=>setPass(!pass)}>
            {pass ? "Hide" : "Show"}
        </button>
    </div>
  );
}
export default ShowHide;
