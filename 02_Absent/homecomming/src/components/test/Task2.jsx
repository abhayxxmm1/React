import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Task2 = () => {

  let [api, setApi] = useState([]);



  useEffect(() => {
    axios.get("http://localhost:3000/quotes").then((res) => {
      setApi(res.data)
      

    })

  }, [])

  return (
    <div>
      <h1> Fetch Data form API</h1>
      {
        api.map((obj) => {
          return (
            <div key={obj.id}>
              <h5>{obj.id}.</h5>
              <h2>{obj.quote}</h2>
              <h4>{obj.author}</h4>
            </div>
          )
        })
      }

    </div>
  )
}

export default Task2