import React, { useState } from 'react'

const EvenTask4 = () => {
    let[state, setState] = useState({})
    let [list, setList] = useState([])  
    let handleSubmit = (e) => {
        e.preventDefault()
        setList([...list, state])
        setState({
            username : "",
            password : ""
        })
    }
    let handleChange = (e) => {
        setState({...state, [e.target.name] : e.target.value})
        
    }
    console.log(list);
    
  return (
    <div>

        <h1>-------------EvenTask4------------------</h1>
        <form action="" onSubmit={handleSubmit}>

        <input onChange={(e) => {handleChange}} className='bg-amber-100 px-2 border-2' type="" name="username" value={state.username}  id="" /> <br /> <br />
        <input onChange={(e) => {handleChange}} className='bg-amber-100 px-2 border-2' type="" name="password"  value={state.password} id="" /> <br /> <br />
        <button onClick={handleSubmit} className='bg-amber-900'>Submit</button>

        </form>
    </div>
  )
}

export default EvenTask4