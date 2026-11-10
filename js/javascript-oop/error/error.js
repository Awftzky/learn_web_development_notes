class validationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}

function cekUmur(umur) {
  if (umur < 18) {
    throw new validationError("Umur harus minimal 18 tahun.", "umur");
  }

  return "Akses diberikan.";
}

try {
  console.log(cekUmur(15));
} catch (error) {
    if (error instanceof validationError) {
        console.error(`Terjadi error pada field ${error.field}: ${error.message}`);
    } else {
        console.error("Terjadi error:", error.message);
  }
}
