// import BootIntroo from "./components/bootStrap/BootIntroo";
// import EventIntro from "./components/events/EventIntro";
// import Intro from "./components/intro/Intro";
// import JsxIntroo from "./components/jsx/JsxIntroo";
// import MapIntro from "./components/map/MapIntro";
// import PropsInto from "./components/props/PropsInto";
// import PageNotFound from "./components/routingPages/PageNotFound";
// import StateIntro from "./components/state/StateIntro";
// import TailWIntro from "./components/tailwindCss/TailWIntro";

// let App = ()=>{
//   return(
//     <div>
//       <h1>App</h1>
//     {/* <Intro/> */}
//     {/* <StateIntro/> */}
//     {/* <PropsInto/> */}
//     <JsxIntroo/>
//     {/* <MapIntro/> */}
//     {/* <BootIntroo/> */}
//     {/* <TailWIntro/> */}
//     {/* <EventIntro/> */}
   

//     </div>
//   )
  
// }

// export default App; 





import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./components/routingPages/LoginPage";
import PageNotFound from "./components/routingPages/PageNotFound";

// parent layout
import Home from "./components/routingPages/Home";

// nested pages
import Welcome from "./components/routingPages/homeNestedPages/Welcome";
import About from "./components/routingPages/homeNestedPages/About";
import Contact from "./components/routingPages/homeNestedPages/Contact";
import ContactForm from "./components/routingPages/homeNestedPages/ContactForm";

let App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/home",
      element: <Home />,
      children: [
        {
          index: true,
          element: <Welcome />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
          children: [
            {
              path: "contactform",
              element: <ContactForm />,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
