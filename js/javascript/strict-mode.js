// Strict Mode

function strictModeExample() {
  "use strict"; // Enable strict mode

  undeclaredVariable = 10;
  function duplicateParams(a, a) {
    return a + a;
  }

  function showThis() {
    console.log(this);
  }

  showThis();
}

strictModeExample();
