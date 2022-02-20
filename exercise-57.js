const persons = [
    {
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
  
  function fetchPersonById(param) {
    return new Promise((resolve, reject) =>{ setTimeout(() =>
      resolve(persons.find(person => person.id === param), 1000))}
    )
  }
  
  fetchPersonById(1)
  .then((primo) => console.log(primo))
  .then(setTimeout(() => fetchPersonById(2), 1000))
  .then(setTimeout (() =>fetchPersonById(3), 2000))