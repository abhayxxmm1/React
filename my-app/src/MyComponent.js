import React from "react";
// RAFCE short key for genrating this code
// const MyComponent = (obj)=> {
//   return (
//     <div>MyComponent {obj.name}, {obj.age}, {obj.gender}</div>
//   )
// }
const MyComponent = ({ name, age, gender }) => {
  /* curly braces are used for de-structuring */
  return (
    <div>
      MyComponent {name}, {age}, {gender}
    </div>
  );
};

export default MyComponent;
