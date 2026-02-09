import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./controllers/AppRoutes";

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
