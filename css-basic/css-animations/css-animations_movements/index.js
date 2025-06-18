/*  -----------------------------------------------------------
            Challenge 1: Card Background Fade
---------------------------------------------------------------- */

const changeColorButton = document.querySelector("[data-js=changeColorButton]");
const colorChangeCard = document.querySelector("[data-js=colorChangeCard]");
const colors = ["#e0f7fa", "#ffe0b2", "#c8e6c9", "#ffccbc", "#d1c4e9"]; // Light pastel colors
let currentColorIndex = 0;

changeColorButton.addEventListener("click", () => {
  // Add your solution below
  colorChangeCard.style.backgroundColor = colors[currentColorIndex];

  if (currentColorIndex === 4) {
    currentColorIndex = 0;
  } else {
    currentColorIndex++;
  }
});

/*  -----------------------------------------------------------
            Challenge 2: Button Hover Size Change
---------------------------------------------------------------- */

// No JavaScript needed as CSS :hover pseudo-class handles the animation.
// We included a basic click active state for completeness.

/*  -----------------------------------------------------------
            Challenge 3: Loading Spinner Toggle
---------------------------------------------------------------- */
const toggleLoaderButton = document.querySelector(
  "[data-js=toggleLoaderButton]"
);
const loaderContainer = document.querySelector("[data-js=loaderContainer]");
let loaderActive = false;

toggleLoaderButton.addEventListener("click", () => {
  // Add your solution below
  loaderContainer.classList.toggle("active");
});

// In JavaScript, select the button and the loader container.
// Use an event listener on the button to toggle a CSS class (e.g., active) on the loader container.
// Use CSS opacity and visibility properties with a transition on the loader container to control its fade-in/fade-out appearance.

/*  -----------------------------------------------------------
            Challenge 4: Slide-in Div
---------------------------------------------------------------- */
const slideInButton = document.querySelector("[data-js=slideInButton]");
const slideInBox = document.querySelector("[data-js=slideInBox]");

slideInButton.addEventListener("click", () => {
  // Add your solution below
  slideInBox.classList.toggle("active");
});

// In JavaScript, use an event listener on the button to toggle a
// CSS class (e.g., active) on the sliding div.

//  When the active class is present, change its transform to
// bring it into view.
