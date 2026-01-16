import React from 'react'

const StateTask6 = () => {
    let [text,setText]=React.useState("Kya re ");
  return (
    <div>
        <h1>----StateTask6</h1>
        <br />
        <input type="text" onChange={(e)=>{setText(e.target.value)}} style={{display:`show ? 'black' : none`, backgroundColor: 'lightgreen', marginLeft: '20px', width: '100px'} }/>
        <h1>{text}</h1>
        
    </div>
  )
}

export default StateTask6