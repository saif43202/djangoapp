import React from 'react';
import {useState} from 'react';
import New from './New';


function Pro(props) {
  const [data,setData]=useState("null")
  function updateData()
  {
    setData("tech")
  }
    return (
      <div>
        <h1>{props.dataone}</h1>
        <h1>{data}</h1>
        <button onClick={updateData}>update State</button>
        <New try='old thing'/>
      </div>
    );
  }

 export default Pro;