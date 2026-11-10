const input = "12345";
const number = Number(input);
console.log(number);

// NaN
const errorNumber = Number("abc");

console.info(Number.MIN_VALUE);
console.info(Number.MAX_VALUE);
console.info(Number.MIN_SAFE_INTEGER);
console.info(Number.MAX_SAFE_INTEGER);
console.info(Number.isNaN(NaN));

// NUMBER STATIC METHOD

const data = Number("   123   ");
console.info(Number.isInteger(data)); // 123
console.info(Number.isNaN(data)); // false

// NUMBER INSTANCE METHOD

const numberInstance = 123.456;
console.info(numberInstance.toString()); // "123.456"
console.info(numberInstance.toLocaleString("id-ID")); // "123.456"
console.info(numberInstance.toLocaleString("en-US")); // "123,456"
