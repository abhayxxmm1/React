import React, { useState } from 'react'

const EventTask1 = () => {
    let [count, setCount] = useState(0);
    return (
        <div>
            <h1>EventTask1</h1>
            <h2>Count : {count}</h2>
            <button onClick={() => { setCount }} className=' bg-gray-400 text-white '> Increment</button>
        </div>
    )
}

export default EventTask1