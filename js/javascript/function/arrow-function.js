// ARROW WITH BLOCK
const sayHello = () => {
  return "Hello, World!";
};

// ARROW WITHOUT BLOCK
const sayHelloShort = (name) => console.log(`Hello, ${name}!`);

// ARROW FUNCTION IN OBJECT METHOD
const person = {
  name: "John",
  greet: () => {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

person.greet(); // Output: Hello, my name is undefined.
