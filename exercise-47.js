const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  };


  for ([key, value] of Object.entries(person)){
    console.log(`${key}: ${value}`);
  }
  