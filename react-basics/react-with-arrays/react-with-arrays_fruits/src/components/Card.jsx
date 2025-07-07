import "./Card.css";

export default function Card({ color, children }) {
  return (
    <p className="card" style={{ backgroundColor: color }}>
      {children}
    </p>
  );
}

// ## Bonus

// Change the `Card` component so that it receives a `color` prop and set the background-color of the Card to this value. Use the color property of each fruit object for this prop.

// - Hint: check the `./src/components/Card.css` file for some cues as to how to handle having the colors change automatically
