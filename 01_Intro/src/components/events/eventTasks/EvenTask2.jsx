import React from 'react'

const EvenTask2 = () => {
    let[username, setUsername]=React.useState("")
    let[password, setPassword]=React.useState("")
  return (
    <div>
        {/* e ika synthetic based event  */}
        <br />
        <input onChange={(e)=>{setUsername(e.target.value);}} className='bg-amber-100 px-2 border-2' type="" name="" id="" /> <br /> <br />
        <input onChange={(e)=>{setPassword(e.target.value);}} className='bg-amber-100 px-2 border-2' type="" name="" id="" />
        <p className='text-3xl'>username : {username}</p>
        <p className='text-3xl'>password : {password}</p>
    </div>
  )
}

export default EvenTask2