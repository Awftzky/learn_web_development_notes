const testing = "3";

const parsingInt = parseInt(testing);
const parsingFloat = parseFloat(testing);
const number = Number(testing);

const testing2 = "3.14";
const parsingInt2 = parseInt(testing2);
const parsingFloat2 = parseFloat(testing2);
const number2 = Number(testing2);

const testing3 = "3.14abc";
const parsingInt3 = parseInt(testing3);
const parsingFloat3 = parseFloat(testing3);
const number3 = Number(testing3);

const testing4 = "abc3.14";
const parsingInt4 = parseInt(testing4);
const parsingFloat4 = parseFloat(testing4);
const number4 = Number(testing4);
const isNaN4 = isNaN(testing4);

console.log(parsingInt, parsingFloat, number);
console.log(parsingInt2, parsingFloat2, number2);
console.log(parsingInt3, parsingFloat3, number3);
