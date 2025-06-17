console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--

  // schritt 1: formularelemente holen:
  const formElements = event.target.elements;
  // schritt 2: auf formElements.numberA.value zugreifen:
  const numberA = Number(formElements.numberA.value);
  const numberB = Number(formElements.numberB.value);
  const operator = formElements.operator.value;

  // schritt 3: eine if/else oder switch abfrage:
  if (operator === "addition") {
    result = add(numberA, numberB);
  } else if (operator === "subtraction") {
    result = subtract(numberA, numberB);
  } else if (operator === "multiplication") {
    result = multiply(numberA, numberB);
  } else if (operator === "division") {
    result = divide(numberA, numberB);
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});

// Build a calculator that can add, subtract, multiply and divide two numbers.

// Add the following functionality to the submit event handler:

// Use the values of the numberA and numberB inputs to perform the operation selected by the operator input on them. You can use the provided helper functions add(), subtract(), multiply() and divide().
// Assign the result to the result variable.
// 💡 Make sure to thoroughly test the addition operation, as it can have unexpected results.

// 💡 You only have to touch the js/index.js file.
