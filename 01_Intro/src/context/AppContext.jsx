import React, { createContext, useState } from 'react'

//! 1 create a store
export let store = createContext();
const AppContext = ({children}) => {
    
    // console.log(props);
    

    //! 2 define data
    let intro ={
        name: "John Doe",
        add: "123 Main St",
        buying: [{},{},{}],
        payments: [{},{}]
    }
    let [info, setInfo]  = useState({name: "Rahul"})
    let [cart, setCart] = useState([]);

    console.log(cart);
    
  return (
    //! 3 provide the data to the children
    <store.Provider value={{info , setInfo, intro, cart, setCart}}>
        {children}
    </store.Provider>
);

}

export default AppContext



// {employees.map(emp => (
//     <div key={emp.id}>
//       <p>ID: {emp.id}</p>
//       <p>Name: {emp.name}</p>
//       <p>Salary: {emp.salary}</p>
//       <hr />
//     </div>