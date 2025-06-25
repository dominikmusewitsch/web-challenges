console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  try {
    const operation = event.target.operation.value;
    output.innerText = operations[operation](firstNumber, secondNumber);
  } catch (error) {
    output.textContent = "Cannot be divided by 0";
  }
});

// This is a nice little calculator, but has a little problem -
// it doesn't handle the division by zero properly!

// Handle the case with try...catch and display an appropriate message
// in the .error element in case.
