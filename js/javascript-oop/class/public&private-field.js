class person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get details() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

class elitist extends person {
  #favoriteMovie;

  constructor(name, age, favoriteMovie) {
    super(name, age);
    this.#favoriteMovie = favoriteMovie;
  }

  movieChooser() {
    console.log(`${this.name} is watching ${this.#favoriteMovie}`);
  }

  // PRIVATE METHOD
  #recommendMovie(movie) {
    console.log(`${this.name} recommends watching ${movie}`);
  }
}

const jeki = new elitist("Jeki", 25, "The Good, the Bad and the Ugly");
console.log(jeki.details); // Output: Name: Jeki, Age: 25
console.log(jeki.#favoriteMovie); // Output: SyntaxError: Private field '#favoriteMovie' must be declared in an enclosing class

// INSTANCEOF & TYPEOF ELITIST CLASS
console.log(typeof jeki); // Output: true
console.log(jeki instanceof elitist); // Output: true
