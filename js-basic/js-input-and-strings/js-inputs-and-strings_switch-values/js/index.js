console.clear();

const firstInput = document.querySelector('[data-js="first-input"]');
// second input element:
const secondInput = document.querySelector('[data-js="second-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');

uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
});

lowercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toLowerCase();
});

// Switch the values of two input fields when clicking the switch button.

// [ ] Add a second input element to index.html.
// [ ] Assign the second input element to a variable.
// [ ] Add a third button (a switch button) to the index.html.
// [ ] Assign the switch button to a variable.
// [ ] Ensure that when the switch button is clicked, the values of the two input fields are swapped.
// [ ] Verify that all three buttons work correctly for both input fields.
// Hint: Use the HTML entity ↕ for the switch button symbol.
