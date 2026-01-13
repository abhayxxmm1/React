import IntroTask2 from "./introTasks/IntroTasks2";
import IntroTask1 from "./introTasks/IntroTasks1";
import IntroTask3 from "./introTasks/IntroTasks3";
import StateTask2 from "../state/stateTasks/StateTask2";

let Intro = ()=>{
    return(
      <div>
        <h1>Intro</h1>

        <ol>
            <li>1 <IntroTask1/></li>
            <li>2 <IntroTask2/></li>
            <li>3 <IntroTask3/></li>
        </ol> 
        
      </div>
    )
  }
  
  export default Intro; 