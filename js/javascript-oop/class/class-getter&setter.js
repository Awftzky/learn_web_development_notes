class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get details() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }

    set details(newDetails) {
        const [name, age] = newDetails.split(", ");
        this.name = name.split(": ")[1];
        this.age = parseInt(age.split(": ")[1]);
    }
}
