function welcoming() {
  console.log("Welcome to the function");
}

welcoming();

function greeting(firstName, lastName) {
  console.log(`Hello, ${firstName} ${lastName}`);
}

greeting("Aufa", "Azzaky");

// FUNCTION RETURN VALUE

function sum(a, b) {
  return a + b;
}

const result = sum(5, 10);
console.log(result); // Output: 15

// MULTIPLE RETURN VALUE

function checkGrade(score) {
  if (score >= 80) {
    return "A";
  } else if (score >= 70) {
    return "B";
  } else if (score >= 60) {
    return "C";
  } else {
    return "D";
  }
}

// FUNCTION RETURN STOP

function contains(array, value) {
  for (const element of array) {
    if (element === value) {
      return true; // Stop the function and return true if value is found
    }
  }
  return false; // Return false if value is not found
}

const numbers = [1, 2, 3, 4, 5];
console.log(contains(numbers, 3)); // Output: true
console.log(contains(numbers, 6)); // Output: false

// OPTIONAL PARAMETER & DEFAULT PARAMETER
function greeqtingWithOptional(name, greeting = "Hello") {
  console.log(`${greeting}, ${name}`);
}

greeqtingWithOptional("Aufa"); // Output: Hello, Aufa
greeqtingWithOptional("Azzaky", "Hi"); // Output: Hi, Azzaky
