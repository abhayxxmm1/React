import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppContext from "./context/AppContext.jsx";


createRoot(document.getElementById("root")).render(
      <AppContext>
        <App />
      </AppContext>
    
    // <App/>
    
    // <provider store={store}>
    //         <App />
    //     </provider>
); 


// let counter = createSlice({
//   //todo 1.name 2.itial_state 3.reducers are mandatory
//   name: "counterSlice",
//   initialState: 0,
//   reducers: {
//     //! replacement for switch case
//     add: (state, action) => {},
//     sub: (state, action) => {},
//     reset: (state, action) => {
//       return 0;
//     },
//   },
// });
// //* export const { actions } = counter;
// export const { add, sub, reset } = counter.actions;
// console.log(counter);

// let store = configureStore({
//   reducer: counter.reducer,
// });

