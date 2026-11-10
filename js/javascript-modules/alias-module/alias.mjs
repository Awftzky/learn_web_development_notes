const appName = "Belajar JavaScript Module";

class User {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    return `Halo, nama saya ${this.name}.`;
  }
}

// Kemungkinan 1: alias ditentukan saat export.
export { appName as applicationName, User };
