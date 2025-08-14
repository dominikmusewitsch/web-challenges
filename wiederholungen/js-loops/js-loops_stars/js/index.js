console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--

  for (let counter = 1; counter <= 5; counter++) {
    const star = document.createElement("img");

    if (counter <= filledStars) {
      star.setAttribute("src", "assets/star-filled.svg");
    } else {
      star.setAttribute("src", "assets/star-empty.svg");
    }
    star.addEventListener("click", () => {
      renderStars(counter);
    });

    starContainer.append(star);
  }

  // --^-- write or modify code above this line --^--
}

renderStars();
