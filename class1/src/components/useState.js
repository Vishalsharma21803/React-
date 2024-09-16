import React from "react";
import { useState } from "react";
const Car=({name,color,defaultName})=>{
    const [carName,setCarName]=useState(defaultName || '');
    // const [carColor,setCarColor]=useState(color);
    return(
        <div>
            <h1>Car Details</h1>
            <p>Car name (from props): {name}</p>
            <p>Car color: {color}</p>
<input type="text"
placeholder="Enter car name"
onChange={(e)=>setCarName(e.target.value)}/>

            <p>Entered car name: {carName}</p>
        </div>
    )
}
export default Car;