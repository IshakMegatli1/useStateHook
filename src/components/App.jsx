import React, { useState } from "react";

function App() {
  //const [state, setState] = useState(initialState)
  const [count, setCount] = useState(0); // const state = useState(123);
  console.log(count); //gets hold of the first value

  const [red, green, blue] = [9, 132, 227]; //destructuring in ES6 instead of const rgb = [1]

  function increase() {
    //setState(newState);
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  //<h1>{state[0]}</h1>

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
