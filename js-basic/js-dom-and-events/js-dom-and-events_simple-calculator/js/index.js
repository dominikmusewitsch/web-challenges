console.clear();

const operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--

const add = document.querySelector(`[data-js="add"]`);
const subtract = document.querySelector(`[data-js="subtract"]`);
const multiply = document.querySelector(`[data-js="multiply"]`);
const divide = document.querySelector(`[data-js="divide"]`);
const exponent = document.querySelector(`[data-js="exponent"]`);
const modulo = document.querySelector(`[data-js="modulo"]`);

// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--

add.addEventListener("click", () => {
  const resultAdd = operand1 + operand2;
  console.log(resultAdd);
});

substract.addEventListener("click", () => {
  const resultSubtract = operand1 - operand2;
  console.log(resultSubtract);
});

multiply.addEventListener("click", () => {
  const resultMultiply = operand1 * operand2;
  console.log(resultMultiply);
});

divide.addEventListener("click", () => {
  const resultDivide = operand1 / operand2;
  console.log(resultDivide);
});

exponent.addEventListener("click", () => {
  const resultExponent = operand1 ** operand2;
  console.log(resultExponent);
});

modulo.addEventListener("click", () => {
  const resultModulo = operand1 % operand2;
  console.log(resultModulo);
});

// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--

const increaseByOne = document.querySelector(`[data-js="increase-by-one"]`);

increaseByOne.addEventListener("click", () => {
  const resultIncreaseByOne = operand1 + 1;
  console.log(resultIncreaseByOne);
});

const increaseByFive = document.querySelector(`[data-js="increase-by-five"]`);

increaseByFive.addEventListener("click", () => {
  const resultIncreaseByFive = operand1 + 5;
  console.log(resultIncreaseByFive);
});

const decreaseByOne = document.querySelector(`[data-js="decrease-by-one"]`);

decreaseByOne.addEventListener("click", () => {
  const resultDecreaseByOne = operand1 - 1;
  console.log(resultDecreaseByOne);
});

const decreaseByFive = document.querySelector(`[data-js="decrease-by-five"]`);

decreaseByFive.addEventListener("click", () => {
  const resultDecreaseByFive = operand1 - 5;
  console.log(resultDecreaseByFive);
});

// --^-- write your code here --^--
