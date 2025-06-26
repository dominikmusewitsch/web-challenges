import { setColorToGuess, getRandomHexCode } from "./utils.js";

export async function fetchNewColor() {
  const hexCode = getRandomHexCode();
  const colorApiUrl = `https://www.thecolorapi.com/id?hex=${hexCode}`;
  /**
   * Hint 1:
   * Use the fetch API to get the hex value and the name of the closest
   * named color to the randomly generated `hexCode` from the color API.
   * These values can be found in `.name.closest_named_hex` and
   * `.name.value` properties of the response data respectively.
   *
   * Hint 2:
   * Call the `setColorToGuess` function to set the color to guess.
   * The function takes two arguments:
   *  - the hex code of the closest named color
   *  - and the name of the random color
   */

  // --v-- your code here --v--

  const response = await fetch(colorApiUrl);
  console.log(response);
  const data = await response.json();
  console.log(data);
  console.log(data.name.closest_named_hex);
  console.log(data.name.value);

  setColorToGuess(data.name.closest_named_hex, data.name.value);

  // --^-- your code here --^--
}

// Check out the js/fetch.js file: There is a fetchNewColor() function which creates a
// random hex code and creates the correct url to fetch data from the Color API.

// Your task is to implement the fetch functionality:

// Use the fetch() function to get data from the Color API.
// Use the .json() method to parse the body of the response and convert it into an object.
// Inspect the parsed object (e.g. by logging it to the console) and find the hex value and name of the closest named color.
// Call the setColorToGuess() function with the hex value and name of the closest named color.
// Guess colors! 🎉
// Switch to the js/fetch.js file and start coding!
