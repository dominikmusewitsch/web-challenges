import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);

  function peopleIncrement() {
    setPeople(people + 1);
  }

  function peopleDecreament() {
    setPeople(people - 1);
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onIncrement={peopleIncrement} onDecrement={peopleDecreament} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
