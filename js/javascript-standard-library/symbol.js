const firstName = Symbol("firstname");
const lastName = Symbol("lastname");

console.info(firstName == lastName);

const person = {};

person[firstName] = "Aufa";
person[lastName] = "Arief";

console.info(person);

// FOR

const movie = {};

movie[Symbol.for("Interstellar")] = "Christopher Nolan";
movie[Symbol.for("Project Hail Mary")] = "Andy Weir";

console.info(movie);
