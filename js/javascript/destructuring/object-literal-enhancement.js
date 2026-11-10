const namaGunung = "Semeru";
const ketinggian = 3676;

const cetakInfo = function () {
  return `Gunung ${namaGunung} memiliki ketinggian ${ketinggian} meter`;
};

const infoGunung = { namaGunung, ketinggian, cetakInfo };

console.log(infoGunung.cetakInfo()); // Output: Gunung Semeru memiliki ketinggian 3676 meter
