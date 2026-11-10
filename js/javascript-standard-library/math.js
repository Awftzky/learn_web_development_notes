// MATH CONSTANT

console.info(Math.PI); // 3.141592653589793

// PEMBULATAN ANGKA

const decimalNumber = 4.7;

console.info(Math.round(decimalNumber)); // 5 (terdekat)
console.info(Math.floor(decimalNumber)); // 4 (ke bawah)
console.info(Math.ceil(decimalNumber)); // 5 (ke atas)
console.info(Math.trunc(decimalNumber)); // 4 (hapus desimal)

// NILAI ABSOLUT

console.info(Math.abs(-10)); // 10

// PANGKAT DAN AKAR

console.info(Math.pow(2, 3)); // 8
console.info(Math.sqrt(16)); // 4

// NILAI TERKECIL DAN TERBESAR

console.info(Math.min(10, 5, 20)); // 5
console.info(Math.max(10, 5, 20)); // 20

// ANGKA ACAK DARI 1 SAMPAI 10

const randomNumber = Math.floor(Math.random() * 10) + 1;
console.info(randomNumber);
