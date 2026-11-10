function person(name, age) {
  this.name = name;
  this.age = age;
  this.getDetails = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  };
}

person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
}

const jeki = new person("Jeki", 20);
jeki.greet(); // Output: Hello, my name is Jeki
