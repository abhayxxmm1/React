import { use, useState } from "react";

let StateTask2 = () => {
    let [num, setNum] = useState(10);
    let incNum = () => {setNum(num + 1)};
    let decNum = () => {setNum(num - 1)};
    let resetNum = () => {setNum(0)};
    return (<div>
        <h1>State Task 2</h1>
        <h1>num: {num}</h1> {/* jsx Expression */}
        <button onClick={incNum} style={{display:`show ? 'black' : none`, backgroundColor: 'lightgreen', marginLeft: '20px', width: '50px'} }>I N C</button>
        <button onClick={decNum} style={{backgroundColor: 'red', width: '50px', margin: '10px'}}>D E C</button>
        <button onClick={resetNum} style={{backgroundColor: 'black', width: '70px', color:'white'}}>R E S E T</button>
    </div>)
}
export default StateTask2;