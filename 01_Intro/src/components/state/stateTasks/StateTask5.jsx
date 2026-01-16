// hideUnHide task
// rafce
// rafc
import React, { useState } from 'react'

const StateTask5 = () => {

    let [show,setShow] = useState(true);
  return (
    <div>StateTask5

        {/* we can use for dark mode */}
        <button onClick={()=>{setShow(!show)}}> Togglee {show ?'HIDE' : 'SHOW'}</button>
        <p style={{display: `${show? "block" : none}`}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium saepe suscipit voluptates perspiciatis numquam necessitatibus eaque eveniet at omnis ipsum? Provident id autem officiis odit nulla nesciunt accusantium incidunt mollitia.</p>
    </div>
  )
}

export default StateTask5