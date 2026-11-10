// INHERIRANCE

function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
  this.getSalary = function () {
    console.log(`Salary of ${this.name} is ${this.salary}`);
  };
}

function Manager(name, salary, department) {
  Employee.call(this, name, salary);
  this.department = department;
}

const jeki = new Manager("Jeki", 5000, "IT");

console.log(jeki.getSalary()); // Output: Salary of Jeki is 5000
