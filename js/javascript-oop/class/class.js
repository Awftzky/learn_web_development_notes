class cinephile {}

const jeki = new cinephile();
console.log(jeki); // Output: true

// CONSTRUCTOR

class elitist {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  watchingMovies(movie) {
    console.log(`${this.name} is watching ${movie}`);
  }
}

const aufa = new elitist("Aufa", 20);

console.log(aufa.name); // Output: Aufa
console.log(aufa.age); // Output: 20

aufa.watchingMovies("Come And See 1985"); // Output: Aufa is watching The Matrix
