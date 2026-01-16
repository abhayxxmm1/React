import { useState } from "react";

// CounterApp
let StateTask4 = () => {

    let[count,y] = useState(10);
    return (<div>


        <h1>Count : {count}</h1>
        <button onClick={()=>{y(count+1)}}>Inc</button>
        <button onClick={()=>{y(count-1)}}>dec</button>
        <button onClick={()=>{y(0)}}>reset</button>


    </div>)
    
}
export default StateTask4;

