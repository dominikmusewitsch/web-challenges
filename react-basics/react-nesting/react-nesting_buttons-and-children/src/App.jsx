import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>
        <h1>hallo</h1>
        <p>tschüss</p>
      </Button>
      <Button>Button2</Button>
      <Button>Button3</Button>
      <Button>Button4</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}

{
  /* // Task
// Switch to the ./src/App.jsx file and

// in the Button component, receive the children prop as parameter; make sure to destructure it.
// replace the "Click me!" text with the children prop (don't forget the curly braces {}).
// in the App component, change the Button elements from being self-closing to have an opening and closing tag.
// add text of your choice between the opening and closing tags of the Button elements (use different texts to see any difference in the browser!)
// 🎉 Congratulations, you can now use the children prop to create really flexible components! */
}
