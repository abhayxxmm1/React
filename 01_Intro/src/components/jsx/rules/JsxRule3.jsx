// import { Fragment } from "react"
import React,  { Fragment } from  'react'
// let {Fragment}  = React;

//! we use React.Fragments to avoid extra node in dom
//todo we use fragment with map - usecase

const JsxRule3 = () => {
  return (
    // <>
    //     <React.Fragment>
    //         <Fragment>
    //         </Fragment>
    //     </React.Fragment>
    // </>
    <>
      <h1>-------------JaxRule3-----------------</h1>

    
                <h1>Heading</h1>
                <h1>Heading</h1>
                <h1>Heading</h1>
                <h1>Heading</h1>
                <h1>Heading</h1>
    </>
  )
}

export default JsxRule3