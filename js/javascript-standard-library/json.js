// STRINGIFY MENGUBAH OBJEK MENJADI STRING JSON

const dataCinephile = {
  name: "Aufa Azzaky",
  age: 20,
  isCinephile: true,
  address: {
    street: "GG Pasalipan, Kost Ibu Tri",
    city: "Bandung",
    country: "Indonesia",
  },
  movies: [
    "Come And See",
    "The Good, The Bad and The Ugly",
    "The Empire Strikes Back",
    "Paris, Texas",
  ],
};

const jsonString = JSON.stringify(dataCinephile);
// console.info(jsonString);

// PARSE MENGUBAH STRING JSON MENJADI OBJEK

const jsonStringParse =
  '{"name":"Aufa Azzaky","age":20,"isCinephile":true,"address":{"street":"GG Pasalipan, Kost Ibu Tri","city":"Bandung","country":"Indonesia"},"movies":["Come And See","The Good, The Bad and The Ugly","The Empire Strikes Back","Paris, Texas"]}';
const parsedData = JSON.parse(jsonStringParse);
console.log(parsedData);
