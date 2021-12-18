const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  job: 'Web Developer',
  fullName() {
    let fullName = `${this.firstName} ${this.lastName}`;
    return fullName;
  },
  info() {
    let info = `${this.fullName()}, ${this.age} - ${this.job}`;
    return info;
  }
}

console.log(person.fullName()); // John Doe
console.log(person.info()); // John Doe, 25 - Web Developer