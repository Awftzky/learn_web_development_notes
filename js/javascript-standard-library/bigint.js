// BIG INT

const theBiggestInt = BigInt(Number.MAX_SAFE_INTEGER);
const theSecondBiggestInt = BigInt(Number.MAX_SAFE_INTEGER);

const result = theBiggestInt + theSecondBiggestInt;
console.info(result); // 180143985094819
console.info(typeof result); // bigint
