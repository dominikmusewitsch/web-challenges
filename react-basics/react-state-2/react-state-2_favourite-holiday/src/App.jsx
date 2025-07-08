import "./styles.css";
import { useState } from "react";

export default function App() {
  const [holiday, setHoliday] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;

    setHoliday(form.holiday.value);
    setDate(form.date.value);

    form.reset();
    form.holiday.focus();
  }

  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
        />
        <label htmlFor="date">Date: </label>
        <input id="date" type="date" name="date" />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      <p>
        Favourite Holiday: <span className="output">{holiday}</span>
      </p>
      <p>
        Date: <span className="output">{date}</span>
      </p>
    </div>
  );
}

// Switch to the `./src/App.jsx` file and refactor the `handleSubmit` function so that:

// 1. The `App` component has access to the submitted data.
// 2. The submitted data is dynamically rendered in the respective output fields below the form.

// You can follow these hints as a guideline:

// - Create separate states for `holiday` and `date`.
// - Update the `handleSubmit` function to set both state variables with their corresponding values. Do you remember how to access the values of form fields using the event object?
// - Make sure to dynamically render the state variables in the output area.
