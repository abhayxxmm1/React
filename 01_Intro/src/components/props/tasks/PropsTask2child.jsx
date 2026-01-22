import React from "react";



//! previous jsx prior to jsx we used to use this 

const PropsTask2child = () => {
  return (
    <div>
      {
        (React.createElement("main"),
        { id: "mainTag" },
        React.createElement("h1", { id: "mainTag" }),
        `Hello ${name} !`)
      }
    </div>
  );
};

export default PropsTask2child;
