function sayHello(name) {
  return `Hello, ${name}!`;
}

const greetingMessage = sayHello("Aufa");
console.log(greetingMessage); // Output: Hello, Aufa!

const anotherGreeting = sayHello;
console.log(anotherGreeting("Azzaky")); // Output: Hello, Azzaky!

// FUNCTION IN PARAMETER
function processData(callback) {
  callback("Data processed successfully!");
}

processData(greetingMessage);




