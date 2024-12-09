import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // this app is known as component

const root = ReactDOM.createRoot(document.getElementById("root"));

/* 
const rootFromHtml = document.createElementById("root");
const root = ReactDOM.render(rootFromHtml); // Document object model // DOM is sth that creats elements on my browser
 */

root.render(
  <>
    <App />
    {/* this is the way to call a component // the first letter of the
    component name should be capital letter */}
    
    {/*{App("HI")}   evrything that function does the component can do // coz this is
    javascript we need to rap it up with curly brackets */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
