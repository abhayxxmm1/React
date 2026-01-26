import React from 'react'

const EvenTask1 = () => {
  let [count, setCount] = React.useState(0)
  return (
    <div>
      <h1 className='text-5xl'>COUNT : {count}</h1>
      <button onClick={()=>{setCount(count+1)}} className='border-2 bg-gray-400'>INC</button>
    </div>
  )
}

export default EvenTask1