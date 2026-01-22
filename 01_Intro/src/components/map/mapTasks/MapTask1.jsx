import React from "react";

const MapTask1 = () => {
  let name = ["onk", "chi", "ami", "abh", "abh", "sai"];
  console.log(name.toString);
  
  return (
    <div>
      <h1>-------------MapTask1-----------------</h1>
      <div>
        {name.map((name) => {
          console.log(name);
          //!------------
          return  <li style={{fontSize: '40px', display:'flex', justifyContent:'center',alignItems:'center', backgroundColor:'crimson'}}>{name}</li>;
        })}
      </div>
        {/* <ol>{name.map((name,id)=> <p key={ind}>{name}</p>)}</ol>
         */}
    </div>
  );
};

export default MapTask1;
