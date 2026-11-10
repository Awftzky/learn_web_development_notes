// PROXY ->
// KITA BISA MENAMBAHKAN SEBUAH FUNGSIONALITAS ATAU APAPUN
// SEBELUM SEBUAH PROPERTY MASUK KE DALAM VALUENYA

const target = {};

const handler = {
  get: function (target, prop, receiver) {
    return target[prop] || `Property ${prop} does not exist.`;
  },

  set: function (target, prop, value) {
    if (typeof value === "string") {
      target[prop] = value;
      return true;
    } else {
      console.log(`Property ${prop} must be a string.`);
      return false;
    }
  },
};

const proxy = new Proxy(target, handler);

proxy.firstName = "Aufa";
proxy.lastName = "Azzaky";

console.log(proxy.firstName); // Output: Aufa
console.log(proxy.lastName); // Output: Azzaky
