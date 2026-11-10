// NOT AN ARRAY

function* functionGenerator() {
  yield "Aufa Azzaky";
  yield "The Programmaer";
}

for (const value of functionGenerator()) {
  console.log(value);
}

// COMPLEX FUNCTION GENERATOR
function* complexFunctionGenerator(value) {
  for (let i = 0; i < value; i++) {
    if (i % 2 === 1) {
      yield i; // Yield even numbers
    }
  }
}

const generator = complexFunctionGenerator(10);
for (const value of generator) {
  console.log(value); // Output: 1, 3, 5, 7, 9
}

// LAZY EVALUATION
const lazyGenerator = functionGenerator(100);
console.log(lazyGenerator.next().value); // Output: { value: "Aufa Azzaky", done: false }
