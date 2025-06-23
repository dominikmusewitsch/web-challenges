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

    image.addEventListener("click", () => {
      renderStars(star);
    });

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

// Part 3: Implement User Input
// Currently, the number of filled stars is set by the argument in renderStars.
// However, we want the user to decide how many stars should be filled.
// Let’s add user interactivity by setting up a click event on each star.

// Before appending each star to the starContainer, add a click event listener to it.
// Inside the event listener, call renderStars with the correct number to display the updated star count.
// 💡 The loop’s counter variable may help determine the correct number of filled stars.
// All done! 🎉 Five stars to you! ⭐️⭐️⭐️⭐️⭐️
