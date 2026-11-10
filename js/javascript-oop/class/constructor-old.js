function person() {
  this.name = "";
  this.sayHello = function () {
    console.log(`Hello, my name is ${this.name}.`);
  };
}

const jeki = new person();
jeki.name = "Jeki";
jeki.sayHello(); // Output: Hello, my name is Jeki.

console.log(jeki.name); // Output: Jeki

function actor(name, film) {
  this.name = name;
  this.film = film;
  this.sayHello = function () {
    console.log(`Hello, my name is ${this.name} and I am in the film ${this.film}.`);
  };
}

const jekiActor = new actor("Jeki Actor", "Come And See 1985");
jekiActor.sayHello(); // Output: Hello, my name is Jeki Actor.
