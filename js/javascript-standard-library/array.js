// ARRAY LOOP

const testArray = ["Aufa", "Azzaky", "Arief"];

testArray.forEach((item, index) => {
  console.info(`Index ke-${index}: ${item}`);
});

testArray.forEach(function (item, index) {
  console.info(`Index ke-${index}: ${item}`);
});

testArray.forEach((item, index) => console.info(`Index ke-${index}: ${item}`));

// ARRAY QUEUE [FIFO]
const queue = [];
queue.push("Aufa");
queue.push("Azzaky");
queue.push("Arief");

console.info(queue.shift());

// ARRAY STACK [LIFO]
const stack = [];
stack.push("Aufa");
stack.push("Azzaky");
stack.push("Arief");

console.info(stack.pop());

// ARRAY SEARCH
const searchArray = [1, 2, 3, 4, 5];

console.info(searchArray.find((value) => value > 3));
console.info(searchArray.findIndex((value) => value > 3));
console.info(searchArray.includes(3));
console.info(searchArray.indexOf(3));
console.info(searchArray.lastIndexOf(3));

// ARRAY FILTER

const numberArray = [1, 2, 3, 4, 5];
const filteredArray = numberArray.filter((value) => value > 3);
console.info(filteredArray);

// ARRAY TRANSFORM

const transformedArray = numberArray.map((value) => value * 2);
console.info(transformedArray);

// ARRAY REDUCE

const sum = numberArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.info(sum);

