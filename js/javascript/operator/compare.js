// Operator perbandingan selalu menghasilkan nilai boolean: true atau false.

const nilaiPertama = 10;
const nilaiKedua = 5;

document.writeln("10 > 5 = " + (nilaiPertama > nilaiKedua) + "<br>");
document.writeln("10 < 5 = " + (nilaiPertama < nilaiKedua) + "<br>");
document.writeln("10 >= 10 = " + (nilaiPertama >= 10) + "<br>");
document.writeln("5 <= 10 = " + (nilaiKedua <= nilaiPertama) + "<br>");

// == membandingkan nilai setelah JavaScript menyesuaikan tipe datanya.
document.writeln('10 == "10" = ' + (10 == "10") + "<br>");

// === membandingkan nilai sekaligus tipe datanya.
document.writeln('10 === "10" = ' + (10 === "10") + "<br>");
document.writeln("10 === 10 = " + (10 === 10) + "<br>");

// != dan !== adalah kebalikan dari == dan ===.
document.writeln('10 != "10" = ' + (10 != "10") + "<br>");
document.writeln('10 !== "10" = ' + (10 !== "10") + "<br>");
