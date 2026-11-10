const person = {
  _name: "",

  set name(value) {
    this._name = value.trim();
  },
};

// Assignment ini otomatis menjalankan setter name.
person.name = "  Aufa Azzaky  ";

console.log(person._name); // Aufa Azzaky
