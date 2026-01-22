import React from 'react'
import PropsTask1childkaChild from './PropsTask1childkaChild';
//! destruvturing the obj her-self 👎
const PropsTask1child = (/* {num1, num2=0} */ props) => {
    
    // console.log(num1+num2);


    // console.log(num2);
    // console.log(props.num1);
    // console.log(props.num2);
    // console.log(props.num3);
    // let{num1, num2, num3}=props

    return (
    <div>PropsTask1child
        <PropsTask1childkaChild props={props}/>
    </div>
  )
}

export default PropsTask1child