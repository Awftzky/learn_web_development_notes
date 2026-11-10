// OBJECT FREEZE

const movie = {
  title: "Come And See",
  director: "Elem Klimov",
};

Object.freeze(movie);

movie.title = "Come And See 2"; // Tidak akan mengubah properti title
console.info(movie.title); // Output: "Come And See"

// OBJECT SEAL

const book = {
  title: "The Pragmatic Programmer",
  writer: "Andrew Hunt",
};

Object.seal(book);

book.title = "The Pragmatic Programmer 2"; // Mengubah properti title
console.info(book.title); // Output: "The Pragmatic Programmer 2"


// OBJECT ASSIGN

const target = {"firstName": "Aufa"};
const source = { "lastName": "Azzaky" };

Object.assign(target, source); // TARGET KE SOURCE
console.info(target); // Output: { firstName: 'Aufa', lastName: 'Azzaky' }

// OBJECT PROPERTY NAMES & VALUES

const person = {
  name: "Aufa",
  age: 25,
};

const propertyNames = Object.getOwnPropertyNames(person);
console.info(propertyNames); // Output: [ 'name', 'age' ]

const propertyValues = Object.values(person);
console.info(propertyValues); // Output: [ 'Aufa', 25 ]