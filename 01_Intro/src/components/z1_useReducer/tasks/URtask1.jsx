import React, { useReducer, useState } from 'react'

const URtask1 = () => {

    let[color, setColor] = useState("red")

    // ! 1
    // let[setState, state] = useReducer(0, ()=>{

    // })

    // ! 2
    // let customUseReducer = (intial, func)=>{
    //     return [func, intial]
    // }

    // ! 3
    const handler = (state, action) => {
        console.log(state, action);
        
        switch (action) {
            case "inc":
                return state + 1;
    
            case "red":
                return state - 1;
    
            case "reset":
                return 0;
    
            default:
                return state;
        }
    };
    
        const [state, dispatch] = useReducer(handler, 0);
    
        return (
            <div>
                <h2>URtask1</h2>
    
                <p onClick={() => dispatch("inc")}> State : {state}</p>
                <p onClick={() => dispatch("red")}> State : {state}</p>
                <p onClick={() => dispatch("reset")}> State : {state}</p>
            </div>
  )
}

export default URtask1