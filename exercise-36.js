class Person {
    
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    static fromObject(){
    return new Person(obj.firstName , obj.lastName);
    }
}
  
  const obj = {
    firstName: 'Mario',
    lastName: 'Rossi'
  };
  
  const person = Person.fromObject();
  console.log(`${person.firstName} ${person.lastName}`);