console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

switch (receivedPassword) {
  case SUPER_SECRET_PASSWORD:
    console.log("Welcome! You are logged in as Brunhilde1984.");
    break;
  default:
    console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// Part 3: Hotdogs
const numberOfHotdogs = 24;

if (numberOfHotdogs < 5) {
  console.log("2€ per hotdog");
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log("1.50€ per hotdog");
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log("1€ per hotdog");
} else {
  console.log("0.10€ per hotdog");
}

// Part 4: Daytime
const currentHour = 12;

const statement = "";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);
