const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys

for (let x of Object.keys(person)) {
  console.log(`${x} : ${person[x]}`);
};