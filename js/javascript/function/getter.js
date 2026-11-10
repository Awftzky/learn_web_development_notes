const person = {
    name: "John",
    get name() {
        return this._name;
    },
    set name(value) {
        this._name = value;
    }
};

person.name = "John Doe";
console.log(person.name); // Output: John Doe