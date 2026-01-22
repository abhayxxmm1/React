import BootIntroo from "./components/bootStrap/BootIntroo";
import EventIntro from "./components/events/EventIntro";
import Intro from "./components/intro/Intro";
import JsxIntroo from "./components/jsx/JsxIntroo";
import MapIntro from "./components/map/MapIntro";
import PropsInto from "./components/props/PropsInto";
import StateIntro from "./components/state/StateIntro";
import TailWIntro from "./components/tailwindCss/TailWIntro";

let App = ()=>{
  return(
    <div>
      <h1>App</h1>
    {/* <Intro/> */}
    {/* <StateIntro/> */}
    {/* <PropsInto/> */} {/* need to clear  */}
    {/* <JsxIntroo/> */}
    {/* <MapIntro/> */}
    {/* <BootIntroo/> */}
    <TailWIntro/>
    <EventIntro/>
   

    </div>
  )
}

export default App; 