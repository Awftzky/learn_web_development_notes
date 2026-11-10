// KEMAMPUAN FUNCTION RECURSIVE UNTUK MEMANGGIL DIRI SENDIRI

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Basis kasus: faktorial dari 0 atau 1 adalah 1
  } else {
    return n * factorial(n - 1); // Pemanggilan rekursif
  }
}

factorial(1); // Output: 1  
