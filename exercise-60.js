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
  
  const jobs = [
    {
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
  
function fetchPerdsonByID(id1){0
    return new Promise ((resolve, reject) => { 
        setTimeout(() => {
    const idpersona = persons.find( person => person.id == id1 );
    if (idpersona){
    resolve (idpersona.firstName)}
    else {
        reject("not found")
    }
}, 1000);
    
    });
}

function fetchJobById(id1){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const lavoro = jobs.find( job => job.id == id1);
            if(lavoro){
            resolve (lavoro.jobTitle);}
            else {
                reject("not found")
            }
        }, 2000
        );
    })
}

// const nome = fetchPerdsonByID(1).then(name => console.log(name));
// const lavoro = fetchJobById(1).then(name => console.log(name));

Promise.all([fetchPerdsonByID(1), fetchJobById(1)])
.then((name) => console.log(name))