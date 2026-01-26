import React, { useState } from 'react'

const EvenTask3 = () => {
  return (
    <>
      {(() => {
        let [state, setState] = React.useState({
          username: "",
          passWord: ""
        });

        let [list, setList] = useState([]);
        console.log(state);
        let handleSumit = (e) => {
            e.preventDefault()  // to prevent page refresh
            setList([...list, state])
        }
        console.log(list);
        

        return (
          <div>
            <form action="">
                <br />
                <input onChange={(e) => {setState({...state, username : e.target.value}) }} className='bg-amber-100 px-2 border-2' type="" name="" id="" /> <br /> <br />
                <input onChange={(e) => {setState({...state, passWord : e.target.value}) }} className='bg-amber-100 px-2 border-2' type="" name="" id="" /> <br /> <br />
                <button onClick={handleSumit} className='bg-amber-900'>Submit</button>
            </form>


            <p className='text-3xl'>username : {...state.username }</p>
        <p className='text-3xl'>password : {...state.passWord }</p>
          </div>
        );
      })()}
    </>
  )
}

export default EvenTask3