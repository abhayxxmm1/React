import React, { useCallback, useState } from "react";
import Child from "./child/Child";

const Parent = () => {
  let [state, setState] = useState(0);
  console.log("parent");

  // ! 👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿Memoization👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿 syntax same as useEffect, useMemo <------ check 
  // * useCallback returns memonized function
  // ? useMemo returns memonized value
  let func= useCallback(()=>{
    console.log(" cart amount updated ");
    
  }, [state])

  console.log();
  
  return (
    <div>
      
      <p onClick={()=>{setState(state+1)}}>Parent {state}</p>
      <div>========================</div>
      <Child props={func} nam   e={20}/>
    </div>
  );
};  

export default Parent;
