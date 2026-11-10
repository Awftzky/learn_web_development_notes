export class Movie {
  constructor(title, year) {
    this.title = title;
    this.year = year;
  }

  getInfo() {
    return `${this.title} dirilis pada tahun ${this.year}.`;
  }
}
