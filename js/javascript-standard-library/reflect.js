// Sebuah property yang memungkinkan kita untuk mengakses dan memanipulasi
// properti dari sebuah objek. Reflect adalah built-in object di JavaScript
// yang menyediakan metode untuk melakukan operasi pada objek, seperti mendapatkan,
//  menetapkan, atau menghapus properti.

const obj = {};

Reflect.set(obj, "name", "aufa azzaky arief");
reflect.set(obj, "age", 20);

console.info(Reflect.get(obj, "name")); // Output: aufa azzaky arief

console.info(Reflect.has(obj, "age")); // Output: True

