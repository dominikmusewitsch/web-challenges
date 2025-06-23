console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--

  for (let star = 1; star <= 5; star++) {
    console.log(star);
    const image = document.createElement("img");
    image.setAttribute("src", "assets/star-empty.svg");
    starContainer.append(image);

    // aufgabe 2:
    if (star <= filledStars) {
      image.setAttribute("src", "assets/star-filled.svg");
    } else {
      image.setAttribute("src", "assets/star-empty.svg");
    }
  }

  // --^-- write or modify code above this line --^--
}

renderStars();

// Part 2: Change the Number of Filled Stars
// Now let's display a specific number of filled stars, depending on the argument given to the function:

// Add a parameter filledStars to the renderStars function, expecting it to be a number.
// Inside the loop, use the value of filledStars to decide if each star should be filled or empty. 💡 Use the loop's counter variable to check which star is currently being created (first, second, third, etc.).
// Set the src attribute of each img element to the appropiate image path, either filled or empty.
// Update the code that calls renderStars to pass a number between 0 and 5 as an argument to check if it displays correctly.
