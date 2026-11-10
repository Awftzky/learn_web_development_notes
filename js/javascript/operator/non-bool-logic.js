// OPERATOR OR (||)

let name = {
  firtname: "Jeki",
  lastname: "Alfi",
};

const person = person.firstName || person.lastName;
console.log(person); // Output: "John"

const person2 = {
  firstName: "",
  lastName: "Doe",
};

const person3 = person2.firstName || person2.lastName;
console.log(person3); // Output: "Doe"

// OPERATOR AND (&&)
const person4 = {
  firstName: "John",
  lastName: "Doe",
};

const person5 = person4.firstName && person4.lastName;
console.log(person5); // Output: "Doe"

const person6 = {
  firstName: "",
  lastName: "Doe",
};

const person7 = person6.firstName && person6.lastName;
console.log(person7); // Output: ""
