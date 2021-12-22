const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

for (let [x, y] of Object.entries(person)) {
  console.log(`${x}: ${y}`);
}