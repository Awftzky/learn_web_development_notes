function showVarProblem() {
  var color = "Biru";

  if (true) {
    var color = "Merah";
    var message = "Dibuat di dalam blok if";
  }

  // var tidak memiliki block scope, jadi nilainya tertimpa.
  console.log(color); // Merah, bukan Biru

  // message tetap dapat diakses meskipun blok if sudah selesai.
  console.log(message); // Dibuat di dalam blok if
}

showVarProblem();
