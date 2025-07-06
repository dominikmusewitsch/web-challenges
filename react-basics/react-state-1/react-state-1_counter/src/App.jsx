import "./styles.css";
import { useState } from "react";

export default function App() {
  // let count = 0;
  let [count, setCount] = useState(0);

  function addition() {
    setCount(count + 1);
  }

  function subtraction() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          // onClick={() => {
          //   console.log("🤔");
          // }}
          onClick={subtraction}
        >
          -
        </button>
        <button
          type="button"
          // onClick={() => {
          //   console.log("🤔");
          // }}
          onClick={addition}
        >
          +
        </button>
      </div>
    </div>
  );
}

// ## Tasks

// Refactor the code to use React state and ensure that the buttons update the state variable correctly.
// Declare a state variable, and connect the buttons so they adjust this state variable.

// You can follow these hints as a guideline:

// - Using `let` doesn't seem to be the right approach for declaring a variable in this scenario.
// - Is there a built-in React function you can use instead?
//   - Make sure to import this function.
// - Currently, the `<button>`s' event handlers log an emoji to the console.
//   - The event handlers should instead handle a different type of functionality.
