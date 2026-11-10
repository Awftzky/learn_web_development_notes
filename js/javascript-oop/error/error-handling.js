function cekUmur(umur) {
  if (umur < 18) {
    throw new Error("Umur harus minimal 18 tahun");
  }

  return "Akses diberikan";
}

try {
    //   console.log(cekUmur(19));
    console.log(cekUmur(15));
} catch (error) {
    console.error("Terjadi error:", error.message);
} finally { 
    console.log("Proses pengecekan umur selesai.");
}
