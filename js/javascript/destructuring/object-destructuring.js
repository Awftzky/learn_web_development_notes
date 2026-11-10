const makananMakassar = {
  makananFavorit: "sate",
  makananWajib: "coto makassar",
  makananKhas: "kapurung",
  makananBerkelas: "pallubasa",
  makananLain: "konro",
};

const { makananBerkelas } = makananMakassar;

console.log(makananBerkelas); // Output: pallubasa

const makananUnderrated = "ikan bolu";

const makananMakassar2 = { ...makananMakassar, makananUnderrated };

console.log(makananMakassar2.makananUnderrated); // Output: ikan bolu

function displayMakanan({ makananFavorit, makananWajib }) {
  console.log(`Makanan Favorit: ${makananFavorit}`);
  console.log(`Makanan Wajib: ${makananWajib}`);
}

displayMakanan(makananMakassar);

// DEFAULT VALUE
function displayMakananDefault({
  makananFavorit = "sate",
  makananWajib = "coto makassar",
}) {
  console.log(`Makanan Favorit: ${makananFavorit}`);
  console.log(`Makanan Wajib: ${makananWajib}`);
}
