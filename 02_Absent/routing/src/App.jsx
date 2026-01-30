import React from "react";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import { routes } from "./controllers/AppRoutes";

const App = () => {
  // let routes = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <LoginPage />,
  //   },
  //   {
  //     path: "/home",
  //     element: <Home />,
  //   },
  //   {
  //     path : "/about",
  //     element : <About />
  //   },
  // ]);




  
  return (
    <RouterProvider router={routes}>
    </RouterProvider>
  );
};

export default App;
