const persons = [{
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [{
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

//collection da rivedere

function fetchById(collection, id, reject, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const item = collection.find(item => item.id === id);

      if (item) {
        return resolve(JSON.stringify(item));
      }

      return reject();
    }, time);
  });
}

function fetchPersonById(id) {
  const reject = () => Promise.reject(`id: ${id} non esiste`);
  return fetchById(persons, id, reject, 1000);
}

function fetchJobById(id) {
  const reject = () => Promise.reject(`id: ${id} non esiste`);
  return fetchById(jobs, id, reject, 500);
}

Promise.race([fetchPersonById(2), fetchJobById(2)])
  .then((result) => JSON.parse(result))
  .then((result) => console.log(result))
  .catch((e) => console.log(e));