// MENGGUNAKAN .getTime()
const date1 = new Date();
console.info(date1);

const date2 = new Date(2020, 10, 10);
console.info(date2);

const date3 = new Date(2020, 10, 10, 16, 15, 9, 123);
console.info(date3);

const date4 = new Date(1791017076093);
console.info(date4);

// UNIX TIMESTAMP
const timestamp = Date.now();
console.info(timestamp);

const dateUnix = new Date(timestamp);
console.info(dateUnix);
console.info(dateUnix.getTime());

// PARSING DATE

const time = Date.parse("2026-10-03T15:53:45");
console.info(time);

// DATE GETER & SETTER

const date = new Date();
date.setFullYear(2026);

console.info(date.getFullYear());
