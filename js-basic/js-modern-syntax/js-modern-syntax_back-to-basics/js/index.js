/*
Now that you've practiced destructuring, default parameters, and the spread operator,
try reversing the challenge by rewriting this code without using these modern features.
*/

// export const getNameAndCountry = ({ name, country }) => [name, country];

// export const getRelocatedCity = (
//   city1,
//   city2 = { name: "Berlin", country: "Germany" }
// ) => {
//   const [, country] = getNameAndCountry(city2);
//   return {
//     ...city1,
//     country,
//   };
// };

// ------------------------- ab hier destructuring rückgängig achen ----------------------

export const getNameAndCountry = (object) => {
  const name = object.name;
  const country = object.country;
  return [name, country];
};

// const object = {
//   name: "hans wurst",
//   country: "lululand",
// };

// console.log(getNameAndCountry(object));

export const getRelocatedCity = (
  city1,
  city2 = { name: "Berlin", country: "Germany" }
) => {
  const nameAndCountryArray = getNameAndCountry(city2);
  const country = nameAndCountryArray[1];

  return {
    name: city1.name,
    country: country,
  };
};

console.log(getRelocatedCity({ name: "" }));
