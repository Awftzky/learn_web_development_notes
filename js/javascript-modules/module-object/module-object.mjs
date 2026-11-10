export const firstName = "Aufa Azzaky";
export const lastName = "Azzaky";
export const age = 20;

export function getFullName() {
  return `${firstName} ${lastName}`;
}

export class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
