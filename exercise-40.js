class Person {
    constructor(firstName,lastName,age){
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }
   
    set firstName(name){
    this._firstName = name;
    }
    get firstName(){
        return this._firstName;
    }
    set lastName(surname){
        this._lastName = surname;
            }
    get lastName(){
         return this._lastName;
      }
    set age(eta){
        this._age = eta;
               }
    get age(){
           return this._age;
                    }
  
get fullName(){
    return `${this._firstName} ${this._lastName}`
}
  }
  
  const person = new Person('Mario', 'Rossi', 25);
  console.log(person.fullName);
  
  person.firstName = 'Maria';
  person.lastName = 'Verdi';
  console.log(person.fullName);