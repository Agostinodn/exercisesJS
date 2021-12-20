function Person(firstName, lastName) {
  this._firstName = firstName;
  this._lastName = lastName;
  this.fullName = () => `${this._firstName} ${this._lastName}`;
}

const john = new Person('John', 'Doe');
const simon = new Person('Simon', 'Collins');

console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins