import React, { useState } from 'react'

const EventTask4 = () => {
    let [state, setState] = useState({
        uername: "",
        password: ""
    })

    let [list, setList] = useState([]);
    let click = () => {
        setList([...list, state]);
    }

    return (
        <div>
            <input onChange={(e) => { setState({ ...state, username: e.target.value }) }} name='username' value={state.uername} className='bg-gray-500 border-2 rounded-2xl' type="text" />
            <br />
            <br />
            <input onChange={(e) => { setState({ ...state, password: e.target.value }) }} name='password' value={state.password} className='bg-gray-500 border-2 rounded-2xl' type="text" />
            <br />
            <button onClick={click} className='bg-amber-400 border-2 rounded-2xl'> Submit</button>
            <p className='text-3xl text-amber-950'>{state.uername}</p>
            <p className='text-3xl'>{state.password}</p>
        </div>
    )
}

export default EventTask4