let makananBandung = ["batagor", "siomay", "mie kocok", "nasi timbel"];

// const [makananFavorit] = makananBandung;

const [makananKecintaan, ...makananLainnya] = makananBandung;

// console.log(makananFavorit); // Output: batagor

console.log(makananKecintaan); // Output: batagor
console.log(makananLainnya); // Output: ["siomay", "mie kocok", "nasi timbel"]


function displayMakanan([makananPertama, makananKedua]) {
  console.log(`Makanan Pertama: ${makananPertama}`);
  console.log(`Makanan Kedua: ${makananKedua}`);
}

displayMakanan(makananBandung);

// DEFAULT VALUE 
function displayMakananDefault([makananPertama = "batagor", makananKedua = "siomay"]) {
  console.log(`Makanan Pertama: ${makananPertama}`);
  console.log(`Makanan Kedua: ${makananKedua}`);
}

displayMakananDefault(makananBandung);