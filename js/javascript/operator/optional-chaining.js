const person = {};

const country = person?.address?.country;
console.log(country); // Output: undefined

const person2 = {
  address: {
    country: "USA",
  },
};

const country2 = person2?.address?.country;
console.log(country2); // Output: USA