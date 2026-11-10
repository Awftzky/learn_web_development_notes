const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};

const result = "firstName" in person;
console.log(result); // Output: true

const person2 = null;

const result2 = "firstName" in person2;
console.log(result2); // Output: false
