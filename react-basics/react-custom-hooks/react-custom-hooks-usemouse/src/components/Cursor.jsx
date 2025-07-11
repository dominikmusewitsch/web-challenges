import useMouse from "../hooks/useMouse";
import "./Cursor.css";

export default function Cursor() {
  // const [x, y] = [200, 100];
  const [x, y] = useMouse();
  return (
    <div className="cursor">
      <div className="cursor__horizontal" style={{ top: `${y}px` }}></div>
      <div className="cursor__vertical" style={{ left: `${x}px` }}></div>
    </div>
  );
}

// Take a look into the project and open the `Cursor` component. This special cursor replaces the default page cursor but it needs to be synced with the actual mouse position.

// - Open the `useMouse.js` file.
// - This function should return the current position of the cursor as an array of two numbers `[x,y]`.
// - Whenever the cursor moves, the value needs to be updated.
// - Use the new custom hook in the Cursor component and replace the dummy position with the hook call `useMouse()`.

// Hints:

// - Write the following logic only inside the useMouse hook!
// - You need a state for the cursor position, since the value needs to change.
// - Within a useEffect, you can add an event listener to the body of the page with `document.body.addEventListener`.
// - We want to listen to the `mousemove` event.
// - Whenever the cursor position changes, the new position needs to be set as new state value.
// - You can read the cursor position via the `mousemove` event object: `event.clientX`, `event.clientY`.

// Good Luck!
