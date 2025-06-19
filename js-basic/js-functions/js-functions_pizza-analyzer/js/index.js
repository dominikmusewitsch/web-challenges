console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // Write your code here
  const pizzaSize1 = Number(pizzaInput1.value);
  const pizzaSize2 = Number(pizzaInput2.value);

  if (pizzaSize1 > 0 && pizzaSize2 > 0) {
    calculatePizzaGain(pizzaSize1, pizzaSize2);
  }

  updatePizzaDisplay(pizza1, pizzaSize1);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  // Write your code here
  const pizzaSize1 = Number(pizzaInput1.value);
  const pizzaSize2 = Number(pizzaInput2.value);

  if (pizzaSize1 > 0 && pizzaSize2 > 0) {
    calculatePizzaGain(pizzaSize1, pizzaSize2);
  }

  updatePizzaDisplay(pizza1, pizzaSize1);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1: Define the function `calculatePizzaGain` here

function calculatePizzaGain(diameter1, diameter2) {
  const radius1 = diameter1 / 2;
  const radius2 = diameter2 / 2;

  const area1 = Math.PI * radius1 ** 2;
  const area2 = Math.PI * radius2 ** 2;

  const gain = ((area1 - area2) / area1) * 100;

  output.textContent = Math.round(gain);
}

// Task 2: Define the function `updatePizzaDisplay` here

function updatePizzaDisplay(pizzaElement, newSize) {
  const newDisplaySize = (newSize / 24) * 100;

  pizzaElement.style.width = newDisplaySize + "px";
}

// Task 3: Define the function `updateOutputColor` here

function updateOutputColor(size1, size2) {
  if (size1 > size2) {
    outputSection.style.background = "var(--green)";
  } else if (size1 < size2) {
    outputSection.style.background = "var(--red)";
  } else {
    outputSection.style.background = "";
  }
}

// Bonus: Change the Output Background
// Let's update the background of the output display to indicate whether we gain or loose pizza by choosing pizza 2.

// Write a function updateOutputColor with two parameters: size1 and size2.
// Set the background color of the outputSection:
// Use "var(--red)" if we loose pizza.
// Use "var(--green)" if we gain pizza.
// Call this function in both event listeners with the correct sizes as arguments.
// 💡 var(--<variable-name>) allows you to use predefined CSS variables. In this case,
// the color codes are stored in the --red and --green variables in the :root element of the HTML document. Check the CSS file for details.
