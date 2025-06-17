console.clear();

const textInput = document.querySelector('[data-js="first-input"]');
const buttonUppercase = document.querySelector('[data-js="button-uppercase"]');

buttonUppercase.addEventListener("click", () => {
  const oldValue = textInput.value;
  //   speichert den eingegeben text als string
  const newValue = oldValue.toUpperCase();
  textInput.value = newValue;
});

// Convert the text in the input field to uppercase when the button is clicked.

// [ ] Assign the input element to a variable.
// [ ] Assign the button element to a variable.
// [ ] Add an event listener to the button that converts the input value to uppercase when the button is clicked.
// Hint: Access the input value by using .value on the input element.
