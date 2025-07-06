import "./styles.css";
import { useState } from "react";

export default function App() {
  // let code = "?";
  const [code, setCode] = useState("");

  const validCode = "🐡🐠🐋";

  function handleClick(emoji) {
    setCode(`${code}${emoji}`);
    // setCode(emoji);
    console.log(emoji);
    console.log(code, emoji);
  }

  function resettingCode() {
    setCode("");
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
      </div>

      <button type="button" onClick={resettingCode}>
        Reset
      </button>

      {code === validCode && <p>Valid code! 🎉</p>}
    </div>
  );
}

// ☑️ Import a built-in React function (react hook) that you will need for this challenge.
// ☑️ Declare a state variable to store and keep track the current input code
// - Implement the `handleClick` function to update the state variable based on the clicked emoji button..
//   - Hint: Use string concatenation to append emojis to the end of the input code.
// - Implement the reset button functionality to clear the input code and allow the user to start over.
