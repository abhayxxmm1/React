import React from 'react'

const Child = ({props, name}) => {

    console.log("child", props ,name);
    
  return (
    <div>
        Child
        <h1>//! memo is the higher Order component</h1>
    </div>
  )
}

//! memo is the higher Order component
//! use to help to avoid re-render
// ! 👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿👇🏿
export default React.memo(Child);
// 
// 
//? need to do useMemo bcoz was absent