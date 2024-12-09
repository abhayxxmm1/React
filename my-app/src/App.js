import "./App.css";

import MyComponent from "./MyComponent";

function App() {
  // component is a funciont that returns u a HTML like syntax called JSX ( javascript xml language ) ( HTML like syntax )
  // Use-case one i create the logic then i'm calling the component again & again
  return (
    <>
      {MyComponent({ name: "React", age: "20", gender: "male" })}
      {/* [Traditonal way] when-evre u pass a arggument are called props(properties) and props are passed im form of object */}
      <MyComponent name="HTML" age="21" gender="Female" />
      How r u?
    </>
  );
}

/* 
function secondFunction() {
  // component is a funciont that returns u a HTML like syntax called JSX ( javascript xml language ) ( HTML like syntax )

  return (
    <div className="SecondFunction">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function thirdFunction() {
  // component is a funciont that returns u a HTML like syntax called JSX ( javascript xml language ) ( HTML like syntax )

  return (
    <div className="SecondFunction">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// export default secondFunction; // cannot have more than one default export
export { secondFunction, thirdFunction} // this is valid

export default App; // exporting this app component from here and we can use it any where else
 */
export default App;
