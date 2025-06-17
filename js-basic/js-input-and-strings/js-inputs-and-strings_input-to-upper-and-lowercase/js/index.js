console.clear();

const input = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');

uppercaseButton.addEventListener("click", () => {
  input.value = input.value.toUpperCase();
});

lowercaseButton.addEventListener("click", () => {
  input.value = input.value.toLowerCase();
});

// Convert the input value to lowercase when a second button is clicked.

// [ ] Add a second button to the index.html. It should have a down arrow (↓) as text content.
// [ ] Assign the second button to a variable.
// [ ] Add an event listener to the second button that converts the input value to lowercase when clicked.
// Hint: Access the input value by using .value on the input element.
