console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const pageHeight = document.body.clientHeight;

  const scrollableHeight = pageHeight - windowHeight;
  const scrollPercent = (scrollTop / scrollableHeight) * 100;

  return Math.min(scrollPercent, 100);
}

document.addEventListener("scroll", () => {
  const scrollPercent = calculateScrollPercentage();
  progressBar.style.width = scrollPercent + "%";
});

// Write the calculateScrollPercentage function
// This function should calculate and return the percentage of the page that the user has scrolled.
// Use the following properties:
// window.scrollY: The Y position of the window on the total webpage.
// window.innerHeight: The height of the visible part of the window.
// document.body.clientHeight: The total height of the webpage.
// Update the Progress Bar
// Add an event listener for the "scroll" event on the document.
// Inside the event listener, call the calculateScrollPercentage function to calculate the current scroll percentage.
// Update the width of the progress bar using the calculated percentage.
// 💡 You can change the width of an element like this: element.style.width = '50%'.
