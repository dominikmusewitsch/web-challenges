import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;

  // const foundCountry = countries.find((country) =>
  //   country.name.toLowerCase().startsWith(searchString.toLowerCase())
  // );

  // if (foundCountry) {
  //   const countryElement = Country(foundCountry);
  //   container.append(countryElement);
  // }
  const foundCountries = countries.filter((country) =>
    country.name.toLowerCase().startsWith(searchString.toLowerCase())
  );

  foundCountries.forEach((country) => {
    const countryElement = Country(country);
    container.append(countryElement);
  });

  // if (foundCountries) {
  //   const countryElement = Country(foundCountry);
  //   container.append(countryElement);
  // }
});

// 2. Find All Matching Countries
// Change the method from find to filter,
// to filter the countries to those which name
// starts with the search string. Remember to change
// the variable name from foundCountry to foundCountries
// to reflect that it now is an array.

// Adapt the rendering of the found countries.
// You'll need to loop over the array of foundCountries.
// Which array method can you use for that?
