import React from "react";
// RAFCE short key for genrating this code
  // const MyComponent = (obj)=> {
  //   return (
      //     <div>MyComponent {obj.name}, {obj.age}, {obj.gender}</div>
      //   )
// }


/* curly braces are used for de-structuring */
const MyComponent = ({ name, age, gender }) => {
  const [state/* variable */, setState/* funC */] = React.useState(0)/* defining the state */
  
  return (
    <div>
      MyComponent {name}, {age}, {gender}
    </div>
  );
};

export default MyComponent;
