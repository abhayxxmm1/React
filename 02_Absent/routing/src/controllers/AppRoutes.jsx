import { createBrowserRouter } from "react-router-dom";

import LoginPage from "../components/LoginPage";
import Home from "../components/Home";
import About from "../components/About";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
