import { useState } from "react";
import "./StatusCheck.css";

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

export default function StatusCheck() {
  // const statusIcon = "⁉️";
  const [icon, setIcon] = useState("⁉️");

  // const [icon, setIcon] = useState("⁉️")
  // Something needs to change here…
  // ↙️
  async function handleCheckApiStatus() {
    /**
     * Hint 1:
     * Use the `fetch()` function to send a request to `apiStatusUrl`.
     *
     * Hint 2:
     * The `fetch()` function returns a promise that resolves to a Response
     * object.
     *
     * Hint 3:
     * The Response object has a `ok` property which is true if the response
     * is okay and false if it is not.
     **/
    // --v-- write your code here --v--

    const response = await fetch(apiStatusUrl);
    const result = await response.json();
    console.log(result);

    if (result.status === "Ok") {
      setIcon("✅");
    } else {
      setIcon("❌");
    }
    // --^-- write your code here --^--
  }

  return (
    <article className="status-check">
      <div className="status-check__wrapper">
        <h2 className="status-check__heading">Status:</h2>
        <span className="status-check__icon">{icon}</span>
      </div>
      <button
        type="button"
        className="status-check__button"
        onClick={handleCheckApiStatus}
      >
        Check API Status
      </button>
    </article>
  );
}

// ☑️ Open the `./src/components/StatusCheck/index.jsx` file.

// ☑️ Inside this file, there is a function named `handleCheckApiStatus` that is called when you click the button.

// ☑️ Within this function, use `fetch()` to load status information from the API URL provided in the variable `apiStatusUrl`.
// The API returns a different random result each time you call it.

// Your task is to write the logic for `handleCheckApiStatus` so that depending on `response.ok`, the icon displays either ✅ or ❌.

// You can use the following hints as guidelines:

// - `fetch()` returns a promise, so make sure to wait for the result.
// - Check whether `response.ok` is truthy:
//   - If it is, the icon should display ✅.
//   - If it isn't, the icon should display ❌.

// > _Hint:_ Since the side effect using `fetch()` is triggered by user interaction and not by rendering the component,
// you don't need `useEffect` to solve this challenge.
