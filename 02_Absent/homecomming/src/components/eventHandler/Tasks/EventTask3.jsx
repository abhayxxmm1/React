import React, { useState } from 'react'

const EventTask3 = () => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    return (
        <div>
            <input onChange={(e) => (setUsername(e.target.value))} className='bg-blue-500 border-2 rounded-2xl' type="text" />
            <br />
            <br />
            <input onChange={(e) => (setPassword(e.target.value))} className='bg-blue-500 border-2 rounded-2xl' type="text" />
            <br />
            <br />
            <p className='text-3xl'>Username : {username}</p>
            <p className='text-3xl'>Password : {password}</p>
        </div>
    )
}

export default EventTask3