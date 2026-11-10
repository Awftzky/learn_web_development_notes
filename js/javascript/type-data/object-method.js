const person = {
  name: "John",
  greet: function () {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

person.greet(); // Output: Hello, my name is John.

const anotherPerson = {
  name: "Jane",
};

// greetDaPerson.sayHello = {
//     console.log(`Hello, my name is ${this.name}.`)
// };
