function calculateTotal(price, quantity) {
  debugger; // Eksekusi berhenti di sini saat DevTools terbuka.

  const total = price * quantity;
  return total;
}

const result = calculateTotal(10000, 3);
console.log(result); // 30000
