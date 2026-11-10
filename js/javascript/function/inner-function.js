function outerFunction() {

  function innerFunction() {
    console.log("Inner function");
  }
  innerFunction();
}

outerFunction(); // Output: Inner function