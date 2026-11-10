console.log("Pesan biasa");
console.debug("Pesan debug");
console.info("Pesan informasi");
console.warn("Pesan peringatan");
console.error("Pesan error");

console.table([
  { nama: "Andi", umur: 20 },
  { nama: "Budi", umur: 22 },
]);

console.group("Data pengguna");
console.log("Nama: Andi");
console.log("Umur: 20");
console.groupEnd();

console.count("Klik");
console.count("Klik");
console.countReset("Klik");

console.time("Proses");
for (let i = 0; i < 1000; i++) {
  Math.sqrt(i);
}
console.timeEnd("Proses");

console.assert(2 + 2 === 5, "Hasil perhitungan salah");
console.dir(document.body);

// console.clear(); // Membersihkan semua pesan di console.