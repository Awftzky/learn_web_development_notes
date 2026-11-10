// CHECKING TYPE DATA

let data;

data = "Aufa";

if (typeof data === "undefined") {
  console.log("Data is undefined");
} else if (typeof data === "object") {
  console.log("Data is object");
} else if (typeof data === "string") {
  console.log("Data is string");
} else if (typeof data === "number") {
  console.log("Data is number");
} else if (typeof data === "boolean") {
  console.log("Data is boolean");
} else if (typeof data === "function") {
  console.log("Data is function");
} else {
  console.log("Data is unknown type");
}
