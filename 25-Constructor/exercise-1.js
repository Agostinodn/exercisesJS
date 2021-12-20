const person = {
  set firstName(value) {
    this._firstName = value;
  },
  get firstName() {
    return this._firstName;
  },
  set lastName(value) {
    this._lastName = value;
  },
  get lastName() {
    return this._lastName;
  },
  fullName() {
    let fullName = `${this.firstName} ${this.lastName}`;
    return fullName;
  }
}

const john = Object.create(person);
const simon = Object.create(person);

john.firstName = 'Jhon';
john.lastName = 'Doe';
simon.firstName = 'Simon';
simon.lastName = 'Collins';






console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins