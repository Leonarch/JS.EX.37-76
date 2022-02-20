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
console.log(persons[1].id);

  function fetchPersonById(num) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const persona = persons.find(person => person.id == num);
      if(persona){
        resolve(persona);
      }
      else{
          
          reject("errore antipatico")
      }
    }, 1000);
  });
}
  
  
  fetchPersonById(1).then((person) => console.log(person));