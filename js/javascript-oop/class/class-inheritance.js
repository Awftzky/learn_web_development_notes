
class elitist {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  watchingMovies(movie) {
    console.log(`${this.name} is watching ${movie}`);
  }

    recommendMovie(movie) {
    console.log(`${this.name} recommends watching ${movie}`);
  }
}

class cinephile extends elitist {
  constructor(name, age, favoriteMovie) {
    super(name, age);
    this.favoriteMovie = favoriteMovie;
  }
    
    recommendMovie(movie) {
        super.recommendMovie(movie);
    console.log(`${this.name} recommends watching ${movie} and their favorite movie is ${this.favoriteMovie}`);
  }

  watchingMovies(movie) {
    console.log(`${this.name} is watching ${movie} and their favorite movie is ${this.favoriteMovie}`);
  }
    

}

const jeki = new cinephile("Jeki", 25 ,"The Good, the Bad and the Ugly");
const aufa = new elitist("Aufa", 20);

console.log(aufa.name); // Output: Aufa
console.log(aufa.age); // Output: 20

aufa.watchingMovies("Come And See 1985"); // Output: Aufa is watching The Matrix
