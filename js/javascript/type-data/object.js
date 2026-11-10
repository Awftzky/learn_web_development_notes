// JSON Object

let objectTesting = {};

const orang = {
  name: "Aufa",
  age: 20,
  hobby: ["Coding", "Football", "Reading"],
  religion: "Islam",
};

objectTesting["name"] = "Aufa";
objectTesting["age"] = 20;

delete objectTesting.age;

// console.log(objectTesting);
// console.table(objectTesting);
// console.log(orang);
// console.table(orang);

// FOR IN LOOP
for (let key in orang) {
  console.log(`${key}: ${orang[key]}`);
}

// FOR OF LOOP
for (let value of orang.hobby) {
  console.log(value);
}