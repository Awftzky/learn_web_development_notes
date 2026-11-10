const nama = "Aufa";
const umur = 20;

// Template literal menggunakan backtick (`), bukan tanda petik biasa.
const perkenalan = `Halo, nama saya ${nama} dan umur saya ${umur} tahun.`;
console.log(perkenalan);

// ${...} juga dapat berisi ekspresi.
const harga = 10000;
const jumlah = 3;
console.log(`Total harga: Rp${harga * jumlah}`);

// Backtick dapat membuat string dalam beberapa baris.
const alamat = `Jakarta
Indonesia`;
console.log(alamat);

// Gunakan \` untuk menampilkan karakter backtick di dalam template literal.
console.log(`Ini adalah tanda \`backtick\`.`);
