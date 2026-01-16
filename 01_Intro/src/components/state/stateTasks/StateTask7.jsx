import React from 'react'
// Change bg color

const StateTask7 = () => {

    let [bgColor, setBgColor] = React.useState("white");
    let [textColor, setTextBgColor] = React.useState("black");

    let bgs = [
        "#FFCDD2", // Red
        "#F8BBD0", // Pink
        "#E1BEE7", // Purple
        "#D1C4E9", // Deep Purple
        "#C5CAE9", // Indigo
        "#BBDEFB", // Blue
        "#B3E5FC", // Light Blue
        "#B2EBF2", // Cyan
        "#B2DFDB", // Teal
        "#C8E6C9", // Green
        "#DCEDC8", // Light Green
        "#F0F4C3", // Lime
        "#FFF9C4", // Yellow
        "#FFECB3", // Amber
        "#FFE0B2", // Orange
        "#FFCCBC"  // Deep Orange
      ];
      
      let txts = [
        "#C62828", // Red (saturated)
        "#AD1457", // Pink
        "#6A1B9A", // Purple
        "#4527A0", // Deep Purple
        "#283593", // Indigo
        "#1565C0", // Blue
        "#0277BD", // Light Blue
        "#00838F", // Cyan
        "#00695C", // Teal
        "#2E7D32", // Green
        "#558B2F", // Light Green
        "#9E9D24", // Lime
        "#F9A825", // Yellow
        "#FF8F00", // Amber
        "#EF6C00", // Orange
        "#D84315"  // Deep Orange
      ];
    let handleClick=(exomorphism)=>{

        console.log(exomorphism.target.value);
        // setBgColor(bgColor==="white" ? "black" : "white");
        // setTextBgColor(textColor==="black" ? "white" : "black");
        setBgColor(bgs[Math.floor(Math.random()* bgs.length)]);
        setTextBgColor(txts[Math.floor(Math.random()*txts.length)]);    
    };
      

  return (
    <div>
        <h1>---StateTask7</h1>
        <nav style={{display:'flex', justifyContent:    'Center', gap:'10px', marginBottom:'20px'}}>
            <button style={{fontSize:`50px`, borderRadius:'50%', cursor:'pointer'}} 
                onClick={handleClick}
            >😝</button>
        </nav>
        <p style={{width:'80%', margin:'auto', backgroundColor:bgColor, color:textColor}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, praesentium!</p>
    </div>
  )
}

export default StateTask7