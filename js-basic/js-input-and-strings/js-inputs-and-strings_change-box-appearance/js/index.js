console.clear();

const box = document.querySelector('[data-js="box"]');

const inputColor = document.querySelector('[data-js="input-color"]');
const inputRadius = document.querySelector('[data-js="input-radius"]');
const inputRotation = document.querySelector('[data-js="input-rotation"]');

// zum prüfen ob bishier alles korrekt angezeigt wird in der console:
// console.log({
//   box,
//   inputColor,
//   inputRadius,
//   inputRotation,
// });

inputColor.addEventListener("input", () => {
  const color = inputColor.value;
  box.style.background = `hsl(${color}, 70%, 60%)`;
});

inputRadius.addEventListener("input", () => {
  const radius = inputRadius.value;
  box.style.borderRadius = `${radius}%`;
});

inputRotation.addEventListener("input", () => {
  const rotation = inputRotation.value;
  box.style.transform = `rotate(${rotation}deg)`;
});

// Change the appearance of the box according to the slider values (color, border radius, and rotation).

// [x] Add an event listener for each input element.
// [ ] When the slider control of inputColor is moved, change the background color of the box. Hint: Use the hsl() function to set the color dynamically.
// [ ] When the slider control of inputRadius is moved, change the border radius of the box. If the slider is at its maximum, make the box circular.
// [ ] When the slider control of inputRotation is moved, rotate the box. Hint: Use the transform CSS property with a rotate value in deg.
// Hint: You can modify styles directly by accessing the style property of the box, similar to how you work with classList.
