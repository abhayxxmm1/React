import React from 'react'
//! the attribute names with more than 1 name should follow camel casing
//! attributes names replacements like
//* for avoiding amibigivity
//? class => className
//? for => htmlFor

const JsxRule2 = () => {
  return (
    <div>
      <h1>-------------JaxRule2-----------------</h1>
      
      <br />
        <p className='myPara' >Hello</p>
        <label htmlFor="">JsxRule2</label>

      <h3>

         the attribute names with more than 1 name should follow camel casing <br />
         attributes names replacements like<br />
         for avoiding amibigivity<br /><br />
          class =- className<br />
         for =- htmlFor
</h3>
    </div>
  )
}

export default JsxRule2