const globalName = "Aufa"; // Global scope

function showScope() {
  const localMessage = "Saya hanya ada di dalam fungsi"; // Function scope

  console.log(globalName); // Bisa mengakses global scope
  console.log(localMessage);

  if (true) {
    const blockMessage = "Saya hanya ada di dalam blok if"; // Block scope
    console.log(blockMessage);
  }

  // console.log(blockMessage); // Error: berada di luar block scope
}

showScope();
console.log(globalName);

// console.log(localMessage); // Error: berada di luar function scope
