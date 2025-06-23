console.clear();

let number = 0.2;
let count = 0;

// --v-- write or modify code below this line --v--

while (number <= 0.9) {
  console.log(number);
  count++;
  number = Math.random();
}

// --^-- write or modify code above this line --^--

console.log(
  `The number that ended the loop was ${number} and it took ${count} rounds to do this!`
);

// In ./index.js, there are two variables:

// number: a random number, updated in each iteration of the while loop
// count: keeps track of the number of iterations, incremented by 1 every
// time the while loop runs
// Create a while loop that:

// runs while number is less than or equal to 0.9,
// increments count by 1 in each iteration,
// logs number to the console,
// sets number to a new random number (using Math.random()).
// Once complete, test your loop by refreshing the browser a
// few times and checking the console output!

// Switch to ./index.js to get started!
