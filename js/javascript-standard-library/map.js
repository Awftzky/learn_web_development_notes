const movie = new Map();
movie.set("Elm Klimov", "Come And See");

console.info(movie.get("Elm Klimov"));

for (const element in movie) {
    console.info(`${element[0]}`);
}
