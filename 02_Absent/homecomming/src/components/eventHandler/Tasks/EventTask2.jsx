import React, { useState } from 'react'

const EventTask2 = () => {
  let [text, setText] = useState();
  return (
    <div>
      <input onChange={(e) => (setText(e.target.value))} className='bg-amber-100 px-2 border-2 rounded-2xl' type="text" />
      <p className='text-3xl'>{text}</p>
    </div>
  )
}

export default EventTask2