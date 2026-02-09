// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import LoginPage from "./components/routingPages/LoginPage";
// import PageNotFound from "./components/routingPages/PageNotFound";

// // parent layout
// import Home from "./components/routingPages/Home";

// // nested pages
// import Welcome from "./components/routingPages/homeNestedPages/Welcome";
// import About from "./components/routingPages/homeNestedPages/About";
// import Contact from "./components/routingPages/homeNestedPages/Contact";
// import ContactForm from "./components/routingPages/homeNestedPages/ContactForm";
// import Parent from "./components/zuseCallBack/Parent";
// import UserReducerIntro from "./components/z1_useReducer/UserReducerIntro";

// let App = () => {
//     return(
//       <div>
//         <h1>App</h1>
//       {/* <Intro/> */}
//       {/* <StateIntro/> */}
//       {/* <PropsInto/> */}
//       {/* <JsxIntroo/> */}  {/* check */}
//       {/* <MapIntro/> */}
//       {/* <BootIntroo/> */}
//       {/* <TailWIntro/> */}
//       {/* <EventIntro/> */}
//       {/* <Parent/> */}
//       <UserReducerIntro/>

//       </div>
//     )
//   };

// export default App;

//! routes

//   const routes = createBrowserRouter([
//     {
//       path: "/",
//       element: <LoginPage />,
//     },
//     {
//       path: "/home",
//       element: <Home />,
//       children: [
//         {
//           index: true,
//           element: <Welcome />,
//         },
//         {
//           path: "about",
//           element: <About />,
//         },
//         {
//           path: "contact",
//           element: <Contact />,
//           children: [
//             {
//               path: "contactform",
//               element: <ContactForm />,
//             },
//           ],
//         },
//       ],
//     },
//     {
//       path: "*",
//       element: <PageNotFound />,
//     },
//   ]);

//   return <RouterProvider router={routes} />;
// };

// export default App;




// !AppContext Understanding
import React, { useContext, useState } from "react";
import { store } from "./context/AppContext";

const App = () => {
  let {cart, setCart} = useContext(store);
  let [item, setItem] = useState("");
  // console.log(data);
  // data.data.setInfo("Rahul Kumar");
  return (
    <div>
      App
      <br />
      <br />
      <input value={item} onChange={(e)=>{setItem(e.target.value)}} style={{border: '2px', color: 'white', backgroundColor: 'black'}}></input>
      <br />
      <button onClick={()=>{setCart([...cart, item])
        setItem("")
      }}>Add</button>
      
    </div>
  );
};

export default App;
